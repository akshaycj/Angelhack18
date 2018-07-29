pragma solidity ^0.4.18;

import "./SimpleStorage.sol" ;

contract Retrieve {

  SimpleStorage public d;

  struct PushData{
    bytes32 name;
    bytes32 flight;
  }

  function Retrieve(address DContractAddress) {
    d = SimpleStorage(DContractAddress);
  }

  function RetrieveData(bytes32 key)
    public
    constant
    returns(bytes32, bytes32)
  {
    // Declare a temporary "doc" to hold a DocumentStruct
    PushData memory doc;
    // Get it from the "public" mapping's free getter.
    (doc.name, doc.flight) = d.pushDatas(key);
    // return values with a fixed sized layout
    return(doc.name, doc.flight);
  }
}
