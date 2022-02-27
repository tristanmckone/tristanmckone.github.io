

/* Authors:        
                   Tristan McKone 100817374
                   Tuba Sheikh 100813394
   Date Completed: Feb 26, 2022


*/

// User Class
class User 
    {
        // constructor 
        constructor(firstName = "", lastName = "", emailAddress="", password = "")
        {
            this.FirstName = firstName;
            this.LastName = lastName;
            this.Username = firstName+lastName;
            this.EmailAddress = emailAddress;
            this.Password = password;
        }


        // overriden functions
        toString()
        {
            return `First Name : ${this.FirstName}\nLast Name: ${this.LastName}\nUserName : ${this.Username}\nEmail Address : ${this.EmailAddress}\n`;
        }

        //utility functions 
        toJSON()
        {
            return {
                "FirstName": this.FirstName,
                "LastName": this.LastName,
                "Username" : this.Username,
                "EmailAddress": this.EmailAddress
            }
        }

        fromJSON(data)
        {
            this.FirstName = data.FirstName;
            this.LastName = data.Last;
            this.Username = data.Username;
            this.EmailAddress = data.EmailAddress;
            this.Password = data.Password;
        }

        serialize()
        {
            if(this.FirstName !== "" && this.LastName !== "" && this.EmailAddress !== "" && this.Username !== "")
            {
                return `${this.FirstName},${this.LastName},${this.Username},${this.EmailAddress}`;
            }
            console.error("One or more properties of the User Object are missing or invalid");
            return null;
        }
    
        // assume that data is in a comma-separated format (string array of properties)
        deserialize(data) 
        {
            let propertyArray = data.split(",");
            this.FirstName = propertyArray[0];
            this.LastName = propertyArray[1];
            this.Username = propertyArray[2];
            this.EmailAddress = propertyArray[3];
            
        }

        // never serialize or deserialize passwords :)

    }


// IIFE -- Immediately Invoked Function Expression
// AKA Anonymous Self-Executing Function
(function()
{
    /**
     * This method uses AJAX to open a connection to the url and returns data to the callback function
     *
     * @param {string} method
     * @param {string} url
     * @param {Function} callback
     */
    function AjaxRequest(method, url, callback)
    {
        // step 1 - instantiate an XHR object
        let XHR = new XMLHttpRequest();

        // step 2 - create an event listener / handler for readystatechange event
        XHR.addEventListener("readystatechange", () =>
        {
            if(XHR.readyState === 4 && XHR.status === 200)
            {
               callback(XHR.responseText);
            }
        });

        // step 3 - open a connection to the server
        XHR.open(method, url);

        // step 4 - send the request to the server
        XHR.send();
    }

    /**
     * This function loads the NavBar from the header file and injects it into the page
     *
     * @param {string} data
     */
    function LoadHeader(data)
    {
        $("header").html(data); // data payload
        $(`li>a:contains(${document.title})`).addClass("active"); // add a class of 'active'
        CheckLogin();
        
    }


    function DisplayAboutPage()
    {
        console.log("About Us Page");
    }

    function DisplayProductsPage()
    {
        console.log("Products Page");
    }

    function DisplayServicesPage()
    {
        console.log("Services Page");
    }


    function DisplayHomePage()
    {
        console.log("Home Page");

        $("#AboutUsButton").on("click", function()
        {
            location.href = "about.html";
        });

        $("main").append(`<p id="MainParagraph" class="mt-3">This is the Main Paragraph</p>`);
        //Article.innerHTML = ArticleParagraph;
        $("body").append(`<article class="container">
        <p id="ArticleParagraph" class="mt-3">This is the Article Paragraph</p>
        </article>`);
    }

    /**
     * Adds a Contact Object to localStorage
     *
     * @param {string} fullName
     * @param {string} contactNumber
     * @param {string} emailAddress
     */
    function AddContact(fullName, contactNumber, emailAddress)
    {
        let contact = new core.Contact(fullName, contactNumber, emailAddress);
        if(contact.serialize())
        {
            let key = contact.FullName.substring(0, 1) + Date.now();

            localStorage.setItem(key, contact.serialize());
        }
    }

    /**
     * This method validates an input text field in the form and displays
     * an error in the message area div element
     *
     * @param {string} input_field_ID
     * @param {RegExp} regular_expression
     * @param {string} error_message
     */
    function ValidateField(input_field_ID, regular_expression, error_message)
    {
        let messageArea = $("#messageArea").hide();

        $("#" + input_field_ID).on("blur", function()
        {
            let input_text_field = $(this).val(); 
            if(!regular_expression.test(input_text_field)) 
            {
                $(this).trigger("focus").trigger("select"); 
                messageArea.addClass("alert alert-danger").text(error_message).show();
            }
            else 
            {
                messageArea.removeAttr("class").hide();
            } 
        });
    }

    function ContactFormValidation()
    {
        ValidateField("fullName",/^([A-Z][a-z]{1,3}.?\s)?([A-Z][a-z]{1,25})+(\s|,|-)([A-Z][a-z]{1,25})+(\s|,|-)*$/,"Please enter a valid Full Name. This must include at least a Capitalized first name followed by a Capitalized last Name.");
        ValidateField("contactNumber",/^(\+\d{1,3}[\s-.])?\(?\d{3}\)?[\s-.]?\d{3}[\s-.]?\d{4}$/,"Please enter a valid Contact Number. Example: (905) 555-5555");
        ValidateField("emailAddress",/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,10}$/,"Please enter a valid Email Address.");
    }

    function DisplayContactPage()
    {
        console.log("Contact Us Page");

        ContactFormValidation();
        
        let sendButton = document.getElementById("sendButton");
        let subscribeCheckbox = document.getElementById("subscribeCheckbox");

        sendButton.addEventListener("click", function(event)
        {
            //event.preventDefault();

            if(subscribeCheckbox.checked)
            {
                AddContact(fullName.value, contactNumber.value, emailAddress.value);
            }
        });

        if(sessionStorage.getItem("user"))
        {
            $("form").after(`<div class="col-lg-4 col-md-4">
            <a href="contact-list.html" id ="contactListButton" class="btn btn-primary btn-lg"><i class="fas fa-users fa-lg"></i> Show Contact
              List</a>`);
        }

        
    }

    function DisplayContactListPage()
    {
        console.log("Contact-List Page");
        if(localStorage.length > 0) // check if localStorage has something in it 
        {
            let contactList = document.getElementById("contactList");

            let data = "";

            let keys = Object.keys(localStorage);

            let index = 1;

            //for every key in the keys collection loop
            for(const key of keys)
            {
                let contactData = localStorage.getItem(key); // retrieve contact data from localStorage

                let contact = new core.Contact(); // create an empty Contact Object
                contact.deserialize(contactData);

                data += `<tr>
                <th scope="row" class="text-center">${index}</th>
                <td>${contact.FullName}</td>
                <td>${contact.ContactNumber}</td>
                <td>${contact.EmailAddress}</td>
                <td class="text-center"><button value="${key}" class="btn btn-primary btn-sm edit"><i class="fas fa-edit fa-sm"></i> Edit</button></td>
                <td class="text-center"><button value="${key}" class="btn btn-danger btn-sm delete"><i class="fas fa-trash-alt fa-sm"></i> Delete</button></td>
                </tr>
                `;    
                index++;
            }

            contactList.innerHTML = data;

            

            $("button.delete").on("click", function()
            {
                if(confirm("Are you sure?"))
                {
                    localStorage.removeItem($(this).val());
                }
                
                location.href = "contact-list.html";
            });

            $("button.edit").on("click", function() 
            {
                location.href = "edit.html#" + $(this).val();
            });
        }
        $("#addButton").on("click", () =>
            {
                location.href = "edit.html#add";
            });
    }

    function DisplayEditPage()
    {
        console.log("Edit Page");

        ContactFormValidation();

        let page = location.hash.substring(1);

        switch(page)
        {
            case "add":
                {
                    $("main>h1").text("Add Contact");

                    $("#editButton").html(`<i class="fas fa-plus-circle fa-lg"></i> Add`);

                    $("#editButton").on("click", (event) => 
                    {
                        event.preventDefault();
                        // Add Contactt
                        AddContact(fullName.value, contactNumber.value, emailAddress.value);
                        // Refresh the contact-list page
                        location.href ="contact-list.html";
                    });

                    $("#cancelButton").on("click", () =>
                    {
                        location.href ="contact-list.html";
                    });

                }
                break;
            default:
                {
                    // get the contact info from localStorage
                    let contact = new core.Contact();
                    contact.deserialize(localStorage.getItem(page));

                    // display the contact info in the edit form
                    $("#fullName").val(contact.FullName);
                    $("#contactNumber").val(contact.ContactNumber);
                    $("#emailAddress").val(contact.EmailAddress);

                    // when Edit is pressed - update the contact
                    $("#editButton").on("click", (event)=>
                    {
                        event.preventDefault();

                        // get any changes from the form
                        contact.FullName = $("#fullName").val();
                        contact.ContactNumber = $("#contactNumber").val();
                        contact.EmailAddress = $("#emailAddress").val();

                        // replace the item in localStorage
                        localStorage.setItem(page, contact.serialize());

                        // return to the contact-list
                        location.href ="contact-list.html";
                    });

                    $("#cancelButton").on("click", () =>
                    {
                        location.href ="contact-list.html";
                    });
                    
                }
                break;
        }
    }

    function DisplayLoginPage()
    {
        console.log("Login Page");

        let messageArea = $("#messageArea");
        messageArea.hide();

        $("#loginButton").on("click", function()
        {
            let success = false;

            // create an empty User object
            let newUser = new User();

            
            // use jQuery shortcut to load the users.json file
            	// NOTE: data doesnt represent users, it represents the entire json file
            $.get("./Assets/users.json", function(data)
            { 
                // for everry user in the users.json file, loop
                for (const user of data.users) 
                {
                    // check if the username and password entered match with user
                    if(username.value == user.Username && password.value == user.Password)
                    {
                        // get the user data from the file and assign it to our empty user object
                        newUser.fromJSON(user);
                        success = true;
                        break;
                    }
                }

                 // if username and password matches - success...perform the login sequence
                if(success)
                {
                    // add user to session storage
                    sessionStorage.setItem("user", newUser.serialize());

                    // hide any error messages
                    messageArea.removeAttr("class").hide();

                    // redirect the user to the secure area of our site - contact-list
                    location.href = "contact-list.html";
                }
                else
                {
                    // display an error message
                    $("#username").trigger("focus").trigger("select");
                    messageArea.addClass("alert alert-danger").text("Error: Invalid Login Information.").show();
                }
            });

           

            $("#cancelButtton").on("click", function()
            {
                // clear the login form
                document.forms[0].reset();

                // return to  the home page
                location.href = "index.html";
            });
        });
    }

    
    /**
     * This function makes changes to the header when and if a user logs in 
     *
     */
    function CheckLogin()
    {
        // if user is logged in 
        if(sessionStorage.getItem("user"))
        {
            $("#login").html(
                `<a id ="logout" class="nav-link"  href="#"><i class="fas fa-sign-out-alt"></i> Logout</a>`
            );

            // insert their username between the Contact Us link and the Login/Logout link.
            $("#login").before(
                `<span class="navbar-text">\xa0Hi, ${sessionStorage.getItem("user").split(",")[2]}\xa0</span>`
            );

            $("#logout").on("click", function(){

                //perform logout 
                sessionStorage.clear();

                // redirect to login
                location.href = "login.html";
            });
            
            
        }
    }

/**
 *
 * checks the fields on the register page to ensure they conform to the standards
 * @param {string} input_field_ID
 * @param {string} message
 * @param {RegExp} regular_expression
 */
    function ValidateRegPageField(input_field_ID, message, regular_expression)
    {
        let errorMessage = $("#ErrorMessage").hide();

        $("#" +input_field_ID).on("blur", function()
        {
            let inputText = $(this).val();
            
            if (!regular_expression.test(inputText))
            {
                $(this).trigger("focus").trigger("select"); 
                errorMessage.addClass("alert alert-danger").text(message).show();
            }
            else 
            {
                errorMessage.removeAttr("class").hide();
            } 

        });

    }

    // function ValidatePassword(input_field_ID, message)
    // {
    //     let errorMessage = $("#ErrorMessage").hide();

    //     $("#" +input_field_ID).on("blur", function()
    //     {
    //         regex = /^[\w!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]{6,}$/;
    //         let PasswordText = $(this).val();
    //         if (PasswordText.length < 5)
    //         {
                
    //             errorMessage.addClass("alert alert-danger").text(message).show();
    //         }
    //         else 
    //         {
    //             errorMessage.removeAttr("class").hide();
    //         } 

    //     }); 

    // }

    /**
     *
     * This function confirms if the password and confirm passwrod are the same 
     * and gives an error if they arent 
     * @param {string} passwordId 
     * @param {string} confirmPasswordId
     * @param {string} message
     */
    function ValidateConfirmPassword(passwordId, confirmPasswordId, message)
    {
        let errorMessage = $("#ErrorMessage").hide();

        $("#" +confirmPasswordId).on("blur", function()
        {
            let PasswordText = $("#" + passwordId).val();
            let ConfirmPasswordText = $("#" + confirmPasswordId).val();
            
            if (PasswordText != ConfirmPasswordText)
            {
                errorMessage.addClass("alert alert-danger").text(message).show();
            }
            else 
            {
                errorMessage.removeAttr("class").hide();
            } 

        }); 

    }
    

    function DisplayRegisterPage()
    {
        console.log("Register Page");

        // create a div element with an id of “ErrorMessage”.
        $(".display-4").after(`<div id="ErrorMessage"></div>`);

        // Validate the user input on the register form 
        ValidateRegPageField("FirstName","First name must be valid and have atleast 2 characters", /^[A-Za-z]{2,}$/);
        ValidateRegPageField("LastName","Last name must be valid and have atleast 2 characters", /^[A-Za-z]{2,}$/);

        ValidateRegPageField("emailAddress","Email address must be atleast 8 characters and in correct format", /^[a-zA-Z0-9._-]{2,}@[a-zA-Z0-9.-]{2,}\.[a-zA-Z]{2,10}$/);
        
        ValidateRegPageField("password", "Password should be at least 6 characters", /^[\w!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]{6,}$/);
    
        ValidateConfirmPassword("password", "confirmPassword", "Password and Confirm password need to match")
    


        //Button
        //let sendButton = $("#submitButton");

        //sendButton.addEventListener("click", function(event)
        $("#submitButton").on("click", function(event)
        {    
                // prevent default
                event.preventDefault(); 

                // craete a new user
                let user = new User(FirstName.value, LastName.value, emailAddress.value, password.value);

                console.log(user.toString());


                // Clear the Fields
                $("input[type=text], textarea").val("");
                $("input[type=email], textarea").val("");
                $("input[type=password], textarea").val("");

        });
    

        // let errorMessage = $("#ErrorMessage").hide();

        // $("#emailAddress").on("blur", function()
        // {
        //     let regular_expression = /[\w.-_]{2,}@[\w.]{0,}/g;
        //     let email_text = $(this).val(); 
        //     if(!regular_expression.test(email_text) || email_text.length < 8) 
        //     {
        //         $(this).trigger("focus").trigger("select"); 
        //         errorMessage.addClass("alert alert-danger").text("Email address must be in correct format").show();
        //     }
        //     else 
        //     {
        //         errorMessage.removeAttr("class").hide();
        //     } 
        // });
    }

    // named function
    function Start()
    {      
        console.log("App Started!!")
        AjaxRequest("GET", "header.html", LoadHeader);
        
        switch (document.title) {
          case "Home":
            DisplayHomePage();
            break;
          case "Contact Us":
            
            DisplayContactPage();
            break;
          case "Contact-List":
            DisplayContactListPage();
            break;
          case "About Us":
            DisplayAboutPage();
            break;
          case "Our Products":
            DisplayProductsPage();
            break;
          case "Our Services":
            DisplayServicesPage();
            break;
          case "Edit":
            DisplayEditPage();
            break;
          case "Login":
            DisplayLoginPage();
            break;
          case "Register":
            DisplayRegisterPage();
            break;
        }
        
    }

    window.addEventListener("load", Start);

})();