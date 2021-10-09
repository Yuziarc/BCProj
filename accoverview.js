const user_email = sessionStorage.getItem("email");
var querryStr = "http://localhost:3000/account/by-email?email=" + user_email;

const temp = document.getElementById("temp");
const balance = document.getElementById("balance");

function fill_fields(e) {
    $.getJSON(querryStr, mydata);
  };
  

function mydata(data) {
    var bal = 0
    data.forEach(function (item) {
        bal += Number(item.balance.slice(1,))
        const eachAcc = document.createElement('li');
        const AccType = item.account_type.toUpperCase()
        let AccAmt = item.balance.slice(1,)
        AccAmt = AccAmt.toLocaleString()
        eachAcc.innerHTML = `
        ${AccType} <span> ${AccAmt}</span> 
        `;
        
        list.appendChild(eachAcc);
    
    sessionStorage.setItem("aid", data[0].account_id)

    balance.innerText = "$" + bal.toLocaleString()
    })
}

fill_fields();