// IIFE -- Immediately Invoked Function Expression
// AKA Anonymous Self-Executing Function
(function()
{

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

        // let AboutUsButton = document.getElementById("AboutUsButton");
        // AboutUsButton.addEventListener("click", function()
        // {
        //     // redirect to about page
        //     location.href = "about.html";
        // });


        //jquery way - returns all elements that contain id of aboutusbutton - attached click event to each of them
          $("#AboutUsButton").on("click", function()
         {
                location.href = "about.html";
         });

         // JavaScript way - returns all elements with id of aboutusbutton loops through all elements
        //  document.querySelectorAll("#AboutUsButton").forEach(function(element) 
        //  {
        //         //attach click event to each each element in the collection
        //     element.addEventListener("click", function()
        //     {
                
        //         location.href = "about.html";
        //     })
        //  }
        //  );

        // pretty lean
        // document.querySelector(#AboutUsButton).addEventListener("click", function()
        // {
        //     location.href = "about.html";
        // });

        //old way 4? leanest
        // document.getElementById("AboutUsButton").addEventListener("click", function()
        // {
        //     location.href = "about.html";
        // })
        
       

        // Step 1 get a reference to an entry point(s) (insertion point / deletion point)
        //let MainContent = document.getElementsByTagName("main")[0];
        //let DocumentBody = document.body;
        
        // Step 2 create an element(s) to insert
        //let MainParagraph = document.createElement("p");
        //let Article = document.createElement("article");
        //let ArticleParagraph = `<p id="ArticleParagraph" class="mt-3">This is the Article Paragraph</p>`;

        // Step 3 configure new element
        //MainParagraph.setAttribute("id", "MainParagraph");
       // MainParagraph.setAttribute("class", "mt-3");

        //let FirstParagraphString = "This is";
        // example of Template String
        //let SecondParagraphString = `${FirstParagraphString} the Main Paragraph`;

        //MainParagraph.textContent = SecondParagraphString;
        //Article.setAttribute("class", "container");

        // Step 4 add / insert new element
        //MainContent.appendChild(MainParagraph);
        $("main").append(`<p id="MainParagraph" class="mt-3"> This is the main Paragraph </p>`);
        //Article.innerHTML = ArticleParagraph;
        //DocumentBody.appendChild(Article);
        $("body").append(`<article class="container">
        <p id="ArticleParagraph" class="mt-3">This is the Article Paragraph</p> </article>` );


        // Deletion example
        //document.getElementById("ArticleParagraph").remove();

        // Insert Before example
        // let NewH1 = document.createElement("h1");
        // NewH1.setAttribute("class", "display-1");
        // NewH1.textContent = "Hello, World!";
        // MainContent.before(NewH1);
    }

    /**
     * Adds a Contact Object to local storage
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
    function TestFullName()
    {
        let messageArea = $("#messageArea").hide();
        
        let fullNamePattern = /([A-Z][a-z]{1,25})+(\s|,|-)([A-Z][a-z]{1,25})+(\s|,|-)*/;

        $("#fullName").on("blur", function()
        {
            let textContectOfFullName = $(this).val(); // text inside the fullName text box

            if(!fullNamePattern.test(textContectOfFullName)) // if it fails
            {
                $(this).trigger("focus"); // go back to fullName text box
                $(this).trigger("select") // select everything in the fullName text box
                messageArea.addClass("alert alert-danger");
                messageArea.text("Please enter a valid Full Name. This must include capitalize fullname, then capitalized lastname")
                messageArea.show();
            }
            else // if it passes
            {
                messageArea.removeAttr("class");
                messageArea.hide();
            }
        });
    }

        function TestContactNumber()
    {
        let messageArea = $("#messageArea").hide();
        let contactNumberPattern = /^(\+\d{1,3}[\s-.])?\(?\d{3}\)?[\s-.]?\d{3}[\s-.]?\d{4}$/;

        $("#contactNumber").on("blur", function()
        {
            let textContentOfContactNumber = $(this).val(); // text inside the fullName text box
            if(!contactNumberPattern.test(textContentOfContactNumber)) // RegExp failed to validate
            {
                $(this).trigger("focus"); // go back to the fullName text box
                $(this).trigger("select"); // select everything in the fullName text box
                messageArea.addClass("alert alert-danger"); // adds an alert class to the div tag
                messageArea.text("Please enter a valid Contact Number. Example: (905) 555-5555");
                messageArea.show();
            }
            else // everything is ok
            {
                messageArea.removeAttr("class"); // removes the attribute named
                messageArea.hide();
            }
            
        });
    }

        function TestEmailAddress()
        {
            let messageArea = $("#messageArea").hide();
        
        let emailAddressPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,10}$/;

        $("#emailAddress").on("blur", function()
        {
            let textContentOfEmailAddress = $(this).val(); // text inside the fullName text box

            if(!emailAddressPattern.test(textContentOfEmailAddress)) // if it fails
            {
                $(this).trigger("focus"); // go back to fullName text box
                $(this).trigger("select") // select everything in the fullName text box
                messageArea.addClass("alert alert-danger");
                messageArea.text("Please enter a valid Email Address.")
                messageArea.show();
            }
            else // if it passes
            {
                messageArea.removeAttr("class");
                messageArea.hide();
            }
        });
        }

        function ContactFormValidation()
        {
            ValidateField("fullName", /^([A-Z][a-z]{1,3}.?\s)?([A-Z][a-z]{1,25})+(\s|,|-)([A-Z][a-z]{1,25})+(\s|,|-)*$/, "Please enter a valid Full Name. This must include capitalize fullname, then capitalized lastname");
            ValidateField("contactNumber", /^(\+\d{1,3}[\s-.])?\(?\d{3}\)?[\s-.]?\d{3}[\s-.]?\d{4}$/, "Please enter a valid Contact Number. Example: (905) 555-5555");
            ValidateField("emailAddress", /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,10}$/,"Please enter a valid Email Address.");

        }
    
    function DisplayContactPage()
    {
        console.log("Contact Us Page");

        //ValidateField("fullName", /([A-Z][a-z]{1,25})+(\s|,|-)([A-Z][a-z]{1,25})+(\s|,|-)*/, "Please enter a valid Full Name. This must include capitalize fullname, then capitalized lastname");
        //ValidateField("contactNumber", /^(\+\d{1,3}[\s-.])?\(?\d{3}\)?[\s-.]?\d{3}[\s-.]?\d{4}$/, "Please enter a valid Contact Number. Example: (905) 555-5555");
        //ValidateField("emailAddress", /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,10}$/,"Please enter a valid Email Address.");

       // TestFullName();

       // TestContactNumber();

       // TestEmailAddress();

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
                <td class="text-center"><button value="${key}" class="btn btn-primary btn-sm edit"><i class="fas fa-edit fa-sm"></i>Edit</button></td>
                <td class="text-center"><button value="${key}" class="btn btn-danger btn-sm delete"><i class="fas fa-trash-alt fa-sm"></i>Delete</button></td>
                </tr>
                `;

                
                
                index++;
            }

            contactList.innerHTML = data;

            $("#addButton").on("click", () =>
            {
                location.href = "edit.html#add";
            });

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
    }

    function DisplayEditPage()
    {
        ContactFormValidation();
        console.log("Edit Page");
        

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
                        // Add Contact
                        AddContact(fullName.value, contactNumber.value, emailAddress.value);
                        // Refresh contact list-page
                        location.href = "contact-list.html";
                    });

                    $("#cancelButton").on("click", () =>
                    {
                        location.href = "contact-list.html";
                    })
                    
                }
                break;
            default:
                {
                    // get the contact info from local storage
                    let contact = new core.Contact();
                    contact.deserialize(localStorage.getItem(page));

                    // display contact info, in edit form
                    $("#fullName").val(contact.FullName);
                    $("#contactNumber").val(contact.ContactNumber);
                    $("#emailAddress").val(contact.EmailAddress);

                    // when Edit is pressed - update the contact
                    $("#editButton").on("click", (event) =>
                    {
                        event.preventDefault();


                        // get any changes from the form
                    contact.FullName =  $("#fullName").val();
                    contact.ContactNumber = $("#contactNumber").val();
                    contact.EmailAddress = $("#emailAddress").val();


                    // replace the item in local storage
                    localStorage.setItem(page, contact.serialize());

                    // return to the contact list
                    location.href = "contact-list.html";

                    });

                    $("#cancelButton").on("click", () =>
                    {
                        location.href = "contact-list.html";
                    })

                    
                }
                break;
        }

    }

    function DisplayLoginPage()
    {
        console.log("Login Page");
    }

    function DisplayRegisterPage()
    {
        console.log("Register Page");
    }

    // named function
    function Start()
    {
        console.log("App Started!!");

        switch (document.title) 
        {
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