const user_email = sessionStorage.getItem("email");
const list = document.getElementById("list");
var querryStr = "http://localhost:3000/account/by-email?email=" + user_email;

function get_details(e) {
    $.getJSON(querryStr, mydata);
  }
  
  function mydata(data) {
    sessionStorage.setItem("aid", data[0].account_id);
    
    ;
}

get_details()

const aid = sessionStorage.getItem("aid");
var querryStr2 = "http://localhost:3000/transaction/by-aid?aid=" + aid;

function fill_fields(e) {
    $.getJSON(querryStr2, filltrans);
    console.log(querryStr2)
  };
  

function filltrans(data) {
    data.forEach(function (item) {
        const eachTrans = document.createElement('li');
        const TransType = item.transaction_type.toUpperCase()
        const TransAmt = item.transaction_amt.toLocaleString();
        eachTrans.innerHTML = `
        <h5>${(TransAmt)}</h5> to Account No. ${item.to_account} 
        <br> <span>${item.transaction_date.slice(0,10)}</span>
        <br> <span>${TransType}</span>
        
        `;
        
        list.appendChild(eachTrans);
    })
}

fill_fields()