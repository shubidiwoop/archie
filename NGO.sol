pragma solidity >=0.5.1 <0.7.0;
pragma experimental ABIEncoderV2;
import "./ERC20Mintable.sol";

contract Ownable {
    address public owner;

    constructor() public {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner);
        _;
    }
}
contract NGO is Ownable{
    struct UserInformationType {
        bytes32 emailHash;
        UserStates status;
    }
    
    struct NgoInformationType {
        bytes32 emailHash;
        NgoStates status;
    }
    
    enum UserStates {
        notApplied,
        pending,
        verified,
        rejected
    }
    
    enum NgoStates {
        notApplied,
        pending,
        authorised,
        rejected
    }
    
    mapping(address => bool) public userExists;
    mapping(address => bool) public ngoExists;
    
    mapping(address=>UserInformationType) public userInformation;
    mapping(address=>NgoInformationType) public ngoInformation;
    
    event UserStatusUpdated(address ethAddress, UserStates status);
    event NgoStatusUpdated(address ethAddress,NgoStates status);
    
    event TransferSuccess(address from, address to, uint256 amount);
    event TransferFaliure(address from, address to, uint256 amount);
    
    address public assetContract;
    
    constructor(address _assetContract) public {
        require(_assetContract != address(0));
        assetContract = _assetContract;
    }
    
    modifier onlyApprovedUser(address ethAddress){
        if(userExists[ethAddress] == false){
            revert('User does not exist.');
        }
        else if (userExists[ethAddress] && (userInformation[ethAddress].status != UserStates.verified)){
            revert('User exists but not verified');
        }
        _;
    }
    
    modifier onlyApprovedNgo(address ethAddress){
        if(ngoExists[ethAddress] == false){
            revert('NGO does not exist.');
        }
        else if (ngoExists[ethAddress] && (ngoInformation[ethAddress].status != NgoStates.authorised)){
            revert('NGO exists but not authorised');
        }
        _;
    }
    
     modifier onlyNewUser(address ethAddress) {
        if (userExists[ethAddress] || userInformation[ethAddress].status == UserStates.verified)
            revert('User account exists.');
        _;
    }
    modifier onlyNewNgo(address ethAddress) {
        if (ngoExists[ethAddress] || ngoInformation[ethAddress].status == NgoStates.authorised)
            revert('Ngo account exists.');
        _;
    }
    
    function addUserByEmail(address ethAddress, bytes32 emailHash)
    public
    onlyNewUser(ethAddress)
    {
        userExists[ethAddress] = true;
        userInformation[ethAddress] = UserInformationType(emailHash, UserStates.pending);
        emit UserStatusUpdated(ethAddress, UserStates.pending);
    }
    
    function addUserByEmailSelfApprove(address ethAddress, bytes32 emailHash)
    public
    onlyNewUser(ethAddress)
    {
        userExists[ethAddress] = true;
        userInformation[ethAddress] = UserInformationType(emailHash, UserStates.pending);
        emit UserStatusUpdated(ethAddress, UserStates.pending);
        approveUser(ethAddress);
    }
    
    function approveUser(address ethAddress)
    public
    onlyOwner {
        userInformation[ethAddress].status = UserStates.verified;
        emit UserStatusUpdated(ethAddress, UserStates.verified);
    }
    
    function rejectUser(address ethAddress)
    public
    onlyOwner {
        userInformation[ethAddress].status = UserStates.rejected;
        emit UserStatusUpdated(ethAddress, UserStates.rejected);
    }
    
    function revokeUser(address ethAddress)
    public
    onlyApprovedUser(ethAddress)
    {
        userExists[ethAddress] = false;
        userInformation[ethAddress].status = UserStates.notApplied;
        emit UserStatusUpdated(ethAddress, UserStates.notApplied);
    }
    
    function Donate(address from, address to, uint256 amount)
    public onlyApprovedUser(from) returns (bool)
    {
        ERC20Mintable erc_contract = ERC20Mintable(assetContract);
        bool success = erc_contract.transferFromWithoutApproval(from, to, amount);
        if(success){
            return true;
        }
        return false;
    }
    
    
    function addNgoByEmail(address ethAddress, bytes32 emailHash)
    public
    onlyNewNgo(ethAddress)
    {
        ngoExists[ethAddress] = true;
        ngoInformation[ethAddress] = NgoInformationType(emailHash, NgoStates.pending);
        emit NgoStatusUpdated(ethAddress, NgoStates.pending);
    }
    
    function addNgoByEmailSelfApprove(address ethAddress, bytes32 emailHash)
    public
    onlyNewNgo(ethAddress)
    {
        ngoExists[ethAddress] = true;
        ngoInformation[ethAddress] = NgoInformationType(emailHash, NgoStates.pending);
        emit NgoStatusUpdated(ethAddress, NgoStates.pending);
        approveNgo(ethAddress);
    }
    
    function approveNgo(address ethAddress)
    public
    onlyOwner {
        ngoInformation[ethAddress].status = NgoStates.authorised;
        emit NgoStatusUpdated(ethAddress, NgoStates.authorised);
    }
    
    function rejectNgo(address ethAddress)
    public
    onlyOwner {
        ngoInformation[ethAddress].status = NgoStates.rejected;
        emit NgoStatusUpdated(ethAddress, NgoStates.rejected);
    }
    
    function revokeNgo(address ethAddress)
    public
    onlyApprovedNgo(ethAddress)
    {
        ngoExists[ethAddress] = false;
        ngoInformation[ethAddress].status = NgoStates.notApplied;
        emit NgoStatusUpdated(ethAddress, NgoStates.notApplied);
    }
}