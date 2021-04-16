function validation()
{
    var user =document.getElementById('user').value;
    if('user' == ""){
        document.getElementById('username').innerHTML = " ** Please fill the user name field";
        return false;
    }
}