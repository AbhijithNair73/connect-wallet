console.log("Welcome to wallet");

window.onload = function () {
    console.log("Doc loaded");
    btnElem = document.getElementById("btn");
    
    btnElem.addEventListener("mouseover", () => {
        console.log("mouse moved over the btn");
      });
};



async function connect() {
  if (window.ethereum) {
    console.log("window ethereum is injected");
    await window.ethereum.request({ method: "eth_requestAccounts" });
    window.web3 = new Web3(window.ethereum);
    var accounts = await web3.eth.getAccounts();
    metaAccount = accounts[0];
    console.log("Meta account:", metaAccount);
    let netID = await web3.eth.net.getId();
    console.log("network ID = ", netID);
    let listening = await web3.eth.net.isListening();
    console.log("Listening = ", listening);
    const peerCount = await web3.eth.net.getPeerCount();
    console.log(peerCount, "Peer Counts connected to node", metaAccount);
  }
}
