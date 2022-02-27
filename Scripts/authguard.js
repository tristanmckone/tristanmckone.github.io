"user strict";
(function()
{
    // if the user does not exist in session storage
    if(!sessionStorage.getItem("user") && location.href.indexOf("contact-list.html") > -1)
    {
        // redirect to login page
        location.href = "login.html";
    }
})();