function generatePassword() 
{
    var length = document.getElementById("pass").value;
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) 
    {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    document.getElementById("test").innerHTML = retVal;
}