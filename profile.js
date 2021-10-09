const user_id = document.getElementById("user_id")
const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const email = document.getElementById("email");
const mobile = document.getElementById("mobile");
const icnum = document.getElementById("icnum");

const user_email = sessionStorage.getItem("email");

var querryStr = "http://localhost:3000/user/by-email?email=" + user_email;


function fill_fields(e) {
    $.getJSON(querryStr, mydata);
  }
  
  function mydata(data) {
    user_id.innerText = data[0].user_id
    firstname.innerText = data[0].first_name
    lastname.innerText = data[0].last_name
    email.innerText = data[0].email
    mobile.innerText = data[0].mobile
    
    icnum.innerText = "*******"+ data[0].IC_num.slice(6,10)
    ;
}

fill_fields();