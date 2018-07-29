pragma solidity ^0.4.18;

contract SimpleStorage {
  uint storedData;

  struct PushData{
    bytes32 name;
    bytes32 flight;
    bytes32 from;
    bytes32 to;
  }
  mapping(bytes32 => PushData) public pushDatas;

  function StoreData(bytes32 key,bytes32 name, bytes32 flight, bytes32 from, bytes32 to) public returns (bool s){
    pushDatas[key].name = name;
    pushDatas[key].flight = flight;
    pushDatas[key].from = from;
    pushDatas[key].to = to;
    return true;
  }

  function set(uint x) public {
    storedData = x;
  }

  function get() public view returns (uint) {
    return storedData;
  }

  function RetrieveData(bytes32 key)
    public
    constant
    returns(bytes32, bytes32,bytes32,bytes32)
  {

    PushData memory doc;

    (doc.name, doc.flight,doc.from,doc.to) = this.pushDatas(key);

    return(doc.name, doc.flight,doc.from,doc.to);
  }
}
