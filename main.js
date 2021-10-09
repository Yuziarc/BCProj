const user = sessionStorage.getItem("email");
const welcome = document.getElementById("welcome");

console.log(user)
var querryStr = "http://localhost:3000/user/fn?uid=" + user;
console.log($.getJSON(querryStr))
const firstname = $.getJSON(querryStr, (data) => {
    welcome.innerText = "Welcome " + (data[0].first_name);
  });
;


const ethereumButton = document.querySelector('.enableEthereumButton');
const showAccount = document.querySelector('.showAccount');
const sendEthButton = document.querySelector('.sendEthButton');
const showBalance = document.querySelector('.showBalance');

  
ethereumButton.addEventListener('click', () => {
  getAccount();
});
  
async function getAccount() {
  const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
  const account = accounts[0];
  console.log(accounts)
  showAccount.innerHTML = account;
  const tokenAcc = "0x97cfd011e4f6b7949dd3eccdb993807b2cf38eec"
  const balance = await ethereum
  .request({
      method: 'eth_getBalance',
      params: [account, "latest"],
  });
  const read = parseInt(balance)/ 10**18;
  console.log[read.toFixed(5)];
  showBalance.innerHTML = `<table><tr> <td> ${read.toFixed(5) + "ETH"}</td></tr></table>`;
}
  
const addtoken = document.querySelector('.addtoken');
  
addtoken.addEventListener('click', () => {
    const tokenAddress = '0xea0ab6451a7714dfe1fee00b269eb7de52c75089';
    const tokenSymbol = 'AND';
    const tokenDecimals = 18;
      // const tokenImage = 'http://placekitten.com/200/300';
  
      try {
          // wasAdded is a boolean. Like any RPC method, an error may be thrown.
          const wasAdded = ethereum.request({
              method: 'wallet_watchAsset',
              params: {
                type: 'ERC20', // Initially only supports ERC20, but eventually more!
                options: {
                  address: tokenAddress, // The address that the token is at.
                  symbol: tokenSymbol, // A ticker symbol or shorthand, up to 5 chars.
                  decimals: tokenDecimals, // The number of decimals in the token
                  // image: tokenImage, // A string url of the token logo
                    
                },
              },
            });
            console.log(params)
            if (wasAdded) {
              console.log('Thanks for your interest!');
                // console.log(symbol)
            } else {
              console.log('Your loss!');
            }
          } catch (error) {
            console.log(error);
          }
    }); 