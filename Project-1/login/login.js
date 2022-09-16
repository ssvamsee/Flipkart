function login() {
    event.preventDefault();

    var db_details = {
        email: "siddamvamsee@gmail.com",
        password: "saivamsee",
        mobile: 9866850135
    }
    var email = document.getElementById("emailID").value;
    var password = document.getElementById("password").value;
    (email === db_details.email || email === db_details.mobile) && password === db_details.password ? success() : failure()

}

function success() {
    alert("Successfully Logged In!!");
    window.location.href = "../home/index.html"
}

function failure() {
    alert("Login Failure!!\nPlease retry with Correct Details.");
    document.getElementById(emailID).value = "";
    document.getElementById(password).value = "";
}