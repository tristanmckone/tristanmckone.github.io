// IIFE -- Immediately invoked function expression
// Anonymous Self-Executing Function
(function()
{
    // named function option
    /* function Start()
    {
        console.log("App Started!!");
    } */

    function DisplayHomePage()
    {
        console.log("Home Page")
        let AboutUsButton = document.getElementById("AboutUsButton");
        AboutUsButton.addEventListener("click", function()
        {
            location.href = "about.html";
        }
        );
    }

    function DisplayProductPage()
    {
        console.log("Products Page")
    }

    function DisplayServicesPage()
    {
        console.log("Services Page")
    }

    function DisplayAboutPage()
    {
        console.log("About Page")
    }

    function DisplayContactPage()
    {
        console.log("Contact Page")
    }

    let Start = function()
    {
        console.log("App Started!!");

        switch(document.title)
        {
            case "Home":
            DisplayHomePage();
                break;
            case "Our Products":
            DisplayProductPage();
                break;
            case "Our Services":
            DisplayServicesPage();
                break;
            case "About Us":
            DisplayAboutPage();
                break;
            case "Contact Us":
            DisplayContactPage();
                break;
        }

       
    }
    window.addEventListener("load", Start);
    
})();