// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

/// @title MangueProofImpactLedger
/// @notice Registra, valida e certifica ações de prevenção climática urbana.
contract MangueProofImpactLedger {
    enum Status {
        Submitted,
        Validated,
        Certified,
        Rejected
    }

    struct ActionRecord {
        uint256 id;
        address submitter;
        string territory;
        string actionType;
        string metricUnit;
        uint256 metricValue;
        bytes32 evidenceHash;
        string evidenceURI;
        uint256 createdAt;
        uint256 validationCount;
        Status status;
    }

    struct Certificate {
        uint256 actionId;
        address beneficiary;
        uint256 issuedAt;
        bytes32 certificateHash;
        string certificateURI;
    }

    address public owner;
    uint256 public nextActionId = 1;
    uint256 public nextCertificateId = 1;
    uint256 public minValidationsForCertificate = 2;

    mapping(address => bool) public validators;
    mapping(uint256 => ActionRecord) private actions;
    mapping(uint256 => Certificate) private certificates;
    mapping(uint256 => mapping(address => bool)) public validatedBy;

    event ValidatorChanged(address indexed validator, bool enabled);
    event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);
    event ActionSubmitted(uint256 indexed actionId, address indexed submitter, bytes32 evidenceHash, string territory);
    event ActionValidated(uint256 indexed actionId, address indexed validator, uint256 validationCount);
    event ActionRejected(uint256 indexed actionId, address indexed validator, string reason);
    event CertificateIssued(uint256 indexed certificateId, uint256 indexed actionId, address indexed beneficiary, bytes32 certificateHash);

    modifier onlyOwner() {
        require(msg.sender == owner, "not owner");
        _;
    }

    modifier onlyValidator() {
        require(validators[msg.sender], "not validator");
        _;
    }

    constructor() {
        owner = msg.sender;
        validators[msg.sender] = true;
        emit ValidatorChanged(msg.sender, true);
    }

    function setValidator(address validator, bool enabled) external onlyOwner {
        require(validator != address(0), "zero validator");
        validators[validator] = enabled;
        emit ValidatorChanged(validator, enabled);
    }

    function transferOwnership(address newOwner) external onlyOwner {
        require(newOwner != address(0), "zero owner");
        address previousOwner = owner;
        owner = newOwner;
        validators[newOwner] = true;
        emit OwnershipTransferred(previousOwner, newOwner);
        emit ValidatorChanged(newOwner, true);
    }

    function setMinValidationsForCertificate(uint256 newMinimum) external onlyOwner {
        require(newMinimum > 0, "minimum is zero");
        minValidationsForCertificate = newMinimum;
    }

    function submitAction(
        string calldata territory,
        string calldata actionType,
        string calldata metricUnit,
        uint256 metricValue,
        bytes32 evidenceHash,
        string calldata evidenceURI
    ) external returns (uint256 actionId) {
        require(bytes(territory).length > 0, "territory required");
        require(bytes(actionType).length > 0, "action required");
        require(bytes(metricUnit).length > 0, "metric unit required");
        require(metricValue > 0, "metric value required");
        require(evidenceHash != bytes32(0), "evidence hash required");

        actionId = nextActionId++;
        actions[actionId] = ActionRecord({
            id: actionId,
            submitter: msg.sender,
            territory: territory,
            actionType: actionType,
            metricUnit: metricUnit,
            metricValue: metricValue,
            evidenceHash: evidenceHash,
            evidenceURI: evidenceURI,
            createdAt: block.timestamp,
            validationCount: 0,
            status: Status.Submitted
        });

        emit ActionSubmitted(actionId, msg.sender, evidenceHash, territory);
    }

    function validateAction(uint256 actionId) external onlyValidator {
        ActionRecord storage record = actions[actionId];
        require(record.id != 0, "action not found");
        require(record.status == Status.Submitted || record.status == Status.Validated, "not validatable");
        require(!validatedBy[actionId][msg.sender], "already validated");

        validatedBy[actionId][msg.sender] = true;
        record.validationCount += 1;
        record.status = record.validationCount >= minValidationsForCertificate ? Status.Certified : Status.Validated;

        emit ActionValidated(actionId, msg.sender, record.validationCount);
        if (record.status == Status.Certified) {
            _issueCertificate(actionId, record.submitter, record.evidenceHash, record.evidenceURI);
        }
    }

    function rejectAction(uint256 actionId, string calldata reason) external onlyValidator {
        ActionRecord storage record = actions[actionId];
        require(record.id != 0, "action not found");
        require(record.status == Status.Submitted || record.status == Status.Validated, "not rejectable");
        record.status = Status.Rejected;
        emit ActionRejected(actionId, msg.sender, reason);
    }

    function getAction(uint256 actionId) external view returns (ActionRecord memory) {
        require(actions[actionId].id != 0, "action not found");
        return actions[actionId];
    }

    function getCertificate(uint256 certificateId) external view returns (Certificate memory) {
        require(certificates[certificateId].issuedAt != 0, "certificate not found");
        return certificates[certificateId];
    }

    function _issueCertificate(uint256 actionId, address beneficiary, bytes32 evidenceHash, string memory certificateURI) private {
        uint256 certificateId = nextCertificateId++;
        bytes32 certificateHash = keccak256(abi.encodePacked(actionId, beneficiary, evidenceHash, block.chainid, address(this)));

        certificates[certificateId] = Certificate({
            actionId: actionId,
            beneficiary: beneficiary,
            issuedAt: block.timestamp,
            certificateHash: certificateHash,
            certificateURI: certificateURI
        });

        emit CertificateIssued(certificateId, actionId, beneficiary, certificateHash);
    }
}
