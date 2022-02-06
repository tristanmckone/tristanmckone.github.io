/**
 * Authors: Tuba Sheikh (100813394) and
 *          Tristan Mckone 100817374
 * Date Completed: 2022-02-02
 * 
 */
(function()
{
   // Excecuted when the user navigates to the Home page
    function DisplayHomePage()
    {  
        document.getElementsByTagName("li")[1].innerHTML = `<a class="nav-link" href="products.html"><i class="fas fa-th"></i> Projects</a>`;

        // Step 1 get a reference to an entry point (insterion/deletion point)
        let MainContent = document.getElementsByTagName("main")[0];
        let DocumentBody = document.body;

        // Step 2 create an element(s) to insert
        let MainParagraph = document.createElement("h1");
        // Welcome message
        
        let WelcomeParagraph = document.getElementById("indexText")
        WelcomeParagraph.setAttribute("id", "WelcomeParagraph");
        WelcomeParagraph.setAttribute("class", "mt-5 text-center text-light");
        WelcomeParagraph.innerHTML = `<h1> Welcome to our Site </h1>
        <br> <h5> This is Tuba's and Tristan's website, you can find links to our projects, services and about us in the navbar! </h5>`;

        // Step 4 add / insert new element
        MainContent.appendChild(MainParagraph);
    
        // Adding link to HR 
        let NavItems = document.getElementsByTagName("li")[3];
        let newItem = document.createElement("li");
        newItem.setAttribute("class", "nav-item");
        newItem.innerHTML = `<a class="nav-link" href="#"><i class="fas fa-user"></i> Human Resources</a>`;
        NavItems.after(newItem);

         
        // Adding a fixed bottom nav bar 
        let footer = document.createElement("footer");
        footer.setAttribute("id", "newFooter");
        
        MainContent.after(footer);

        let Footer = document.getElementById("newFooter");
        let NavBottom = document.createElement("nav");
        NavBottom.setAttribute("class", "navbar fixed-bottom navbar-light bg-light");
        NavBottom.innerHTML = `<div class="container-fluid">
        <a class="navbar-brand" href="#">© <span id="year"> </span></a>
        </div>`;
        Footer.appendChild(NavBottom);
        document.getElementById("year").innerHTML = ` CopyRight `+ new Date().getFullYear();
    }

    // Excecuted when the user navigates to the Products page
    function DisplayProductsPage()
    {
        document.getElementsByTagName("li")[1].innerHTML = `<a class="nav-link active" aria-current="page" href="products.html"><i class="fas fa-th"></i> Projects</a>`;
        
        // Adding link to HR 
        //let NavItems = document.getElementById("aboutus");
        let NavItems = document.getElementsByTagName("li")[3];
        let newItem = document.createElement("li");
        newItem.setAttribute("class", "nav-item");
        newItem.innerHTML = `<a class="nav-link" href="#"><i class="fas fa-user"></i> Human Resources</a>`;
        NavItems.after(newItem);

        // Step 1 get a reference to an entry point (insterion/deletion point)

        let Image1 = document.getElementById("img1");
        // Step 2 create an element(s) to insert
        let Heading = document.createElement("h1");
       
        // Step 3 configure new element
        Heading.setAttribute("id", "MainParagraph")
        Heading.setAttribute("class", "mt-3 text-center text-light");
        Heading.textContent = "Our Projects";
        
        // Step 4 add / insert new element
        Image1.before(Heading);
        

        // Project 1
        let Project1Paragraph = document.createElement("h3")
        Project1Paragraph.setAttribute("id", "Project1Paragraph")
        Project1Paragraph.setAttribute("class", "mt-5 text-start text-light");
        Project1Paragraph.textContent = "Project 1: A daily covid case tracker that calculates and displays the weekly average";
        Image1.before(Project1Paragraph);        

        // Project 2
        let Image2 = document.getElementById("img2");
        let Project2Paragraph = document.createElement("h3")
        Project2Paragraph.setAttribute("id", "Project2Paragraph")
        Project2Paragraph.setAttribute("class", "mt-5 text-light");
        Project2Paragraph.textContent = "Project 2: A book tracker that keeps track of authors, their contact info and the books they've published.";
        Image2.before(Project2Paragraph);

        // Project 3
        let Image3 = document.getElementById("img3");
        let Project3Paragraph = document.createElement("h3")
        Project3Paragraph.setAttribute("id", "Project3Paragraph")
        Project3Paragraph.setAttribute("class", "mt-5 text-light");
        Project3Paragraph.textContent = "Project 3: A text Editor that opens, edits and saves text files. It has cut/copy/paste functionality implemented as well.";
        Image3.before(Project3Paragraph);
        
        // Bottom fixed nav bar 
        let MainContent = document.getElementsByTagName("main")[0];
        let footer = document.createElement("footer");
        footer.setAttribute("id", "newFooter");
        
        MainContent.after(footer);

        let Footer = document.getElementById("newFooter");
        let NavBottom = document.createElement("nav");
        NavBottom.setAttribute("class", "navbar fixed-bottom navbar-light bg-light");
        NavBottom.innerHTML = `<div class="container-fluid">
        <a class="navbar-brand" href="#">©<span id="year"> </span></a>
        </div>`
        Footer.appendChild(NavBottom);
        document.getElementById("year").innerHTML = ` CopyRight `+ new Date().getFullYear();
        
    }

   //Excecuted when the user navigates to the Services page
    function DisplayServicesPage()
    {
        // Changing products to projects 
        document.getElementsByTagName("li")[1].innerHTML = `<a class="nav-link" href="products.html"><i class="fas fa-th"></i> Projects</a>`;

        // Adding link to HR 
        let NavItems = document.getElementsByTagName("li")[3];
        let newItem = document.createElement("li");
        newItem.setAttribute("class", "nav-item");
        newItem.innerHTML = `<a class="nav-link" href="#"><i class="fas fa-user"></i> Human Resources</a>`;
        NavItems.after(newItem);


        // Add the page heading
        let Image1 = document.getElementById("img1");
        // Step 2 create an element(s) to insert
        let Heading = document.createElement("h1");
        // Step 3 configure new element
        Heading.setAttribute("id", "MainParagraph")
        Heading.setAttribute("class", "mt-3 text-center text-light");
        Heading.textContent = "Our Services\n";
        // Step 4 add / insert new element
        Image1.before(Heading);

        // Add webdev info
        let WebDevtext = document.createElement("p");
        WebDevtext.setAttribute("class", "mt-3 text-light")
        WebDevtext.innerHTML = `<h3>Web Development</h3> <br> We are web developers experienced in HTML, CSS, PHP and Currently learning JavaScript.
        <br> We have experience creating business forms and websites. `;
        Image1.appendChild(WebDevtext);

        // Add Custom Prog info 
        let Image2 = document.getElementById("img2");
        let CustProgtext = document.createElement("p");
        CustProgtext.setAttribute("class", "mt-3 text-light")
        CustProgtext.innerHTML = `<h3><br>Custom Programming</h3> <br> From our NETD and OOP courses we have build applications using C++, C#, Java and Python. <br>
        We have experience building different applications such as forms, trackers and are currently building a card game.`;
        Image2.appendChild(CustProgtext);

        // Add Automation testing info 
        let Image3 = document.getElementById("img3");
        let AutoTestingtext = document.createElement("p");
        AutoTestingtext.setAttribute("class", "mt-3 text-light")
        AutoTestingtext.innerHTML = `<h3><br>Automation Testing with Python and Selenium</h3> <br> From our automation testing courses we have experience automating web tests
        <br> and web surfing. Our skills were demonstrated in a project where a website was tested for bugs `;
        Image3.appendChild(AutoTestingtext);

        // Bottom fixed nav bar 
        let MainContent = document.getElementsByTagName("main")[0];
        let footer = document.createElement("footer");
        footer.setAttribute("id", "newFooter");
        
        MainContent.after(footer);

        let Footer = document.getElementById("newFooter");
        let NavBottom = document.createElement("nav");
        NavBottom.setAttribute("class", "navbar fixed-bottom navbar-light bg-light");
        NavBottom.innerHTML = `<div class="container-fluid">
        <a class="navbar-brand" href="#">©<span id="year"> </span></a>
        </div>`
        //MainContent.after(NavBottom);
        Footer.appendChild(NavBottom);
        document.getElementById("year").innerHTML = ` CopyRight `+ new Date().getFullYear();
 
    }

    // Excecuted when the user navigates to the About page
    function DisplayAboutPage()
    {
        document.getElementsByTagName("li")[1].innerHTML = `<a class="nav-link" href="products.html"><i class="fas fa-th"></i> Projects</a>`;

        // Adding link to HR 
        let NavItems = document.getElementsByTagName("li")[3];
        let newItem = document.createElement("li");
        newItem.setAttribute("class", "nav-item");
        newItem.innerHTML = `<a class="nav-link" href="#"><i class="fas fa-user"></i> Human Resources</a>`;
        NavItems.after(newItem);

        
        // Step 1 get a reference to an entry point (insterion/deletion point)
        let MainContent = document.getElementById("heading");
        let DocumentBody = document.body;

        // Step 2 create an element(s) to insert
        let MainParagraph = document.createElement("h1");
        // Step 3 configure new element
        MainParagraph.setAttribute("id", "MainParagraph")
        MainParagraph.setAttribute("class", "mt-3 text-center text-light");
        MainParagraph.textContent = "About us";

        // Step 4 add / insert new element
        MainContent.appendChild(MainParagraph);

        // Tristan about us 
        let Imagetristan = document.getElementById("tristanimg");
        let Tristanparagraph = document.createElement("h3")
        Tristanparagraph.setAttribute("id", "Tristanparagraph")
        Tristanparagraph.setAttribute("class", "mt-5 text-light");
        Tristanparagraph.innerHTML = `Hello, I am Tristan Mckone I am in second year <br> of computer programming at durham college.
        <br> Here's a <a href="https://docs.google.com/document/d/1RvQf40FBAR1GgMjl4cs63e37mPtxDGki/edit?usp=sharing&ouid=101764303682983186589&rtpof=true&sd=true">link<a> to my resume.`;
        Imagetristan.before(Tristanparagraph);

        // Tuba about us 
        let Imagetuba = document.getElementById("tubaimg");
        let Tubaparagraph = document.createElement("h3")
        Tubaparagraph.setAttribute("id", "Tristanparagraph")
        Tubaparagraph.setAttribute("class", "mt-5 text-light");
        Tubaparagraph.innerHTML = `Hello, I am Tuba Sheikh, currently enroled in<br> second year of computer programming at <br>
        durham college. Here's a <a href="https://docs.google.com/document/d/1yOpja37hmJ6DzeHvMvET-CW2LzaQqomh/edit?usp=sharing&ouid=118106771298010786721&rtpof=true&sd=true"> link </a> to my resume` ;
        Imagetuba.before(Tubaparagraph);

        // Bottom fixed nav bar 
        //let MainContent = document.getElementsByTagName("main")[0];
        let footer = document.createElement("footer");
        footer.setAttribute("id", "newFooter");
        
        MainContent.after(footer);

        let Footer = document.getElementById("newFooter");
        let NavBottom = document.createElement("nav");
        NavBottom.setAttribute("class", "navbar fixed-bottom navbar-light bg-light");
        NavBottom.innerHTML = `<div class="container-fluid">
        <a class="navbar-brand" href="#">©<span id="year"> </span></a>
        </div>`
        //MainContent.after(NavBottom);
        Footer.appendChild(NavBottom);
        document.getElementById("year").innerHTML = ` CopyRight `+ new Date().getFullYear();

    }

    // Executed when the user navigates to the contact page
    function DisplayContactPage()
    {
        
        document.getElementsByTagName("li")[1].innerHTML = `<a class="nav-link" href="products.html"><i class="fas fa-th"></i> Projects</a>`;

        // Adding link to HR 
        //let NavItems = document.getElementById("aboutus");
        let NavItems = document.getElementsByTagName("li")[3];
        let newItem = document.createElement("li");
        newItem.setAttribute("class", "nav-item");
        newItem.innerHTML = `<a class="nav-link" href="#"><i class="fas fa-user"></i> Human Resources</a>`;
        NavItems.after(newItem);

        let sendButton = document.getElementById("sendButton");
        console.log("Contact info")

        sendButton.addEventListener("click", function(event)
        {     
            // for debugging 
            event.preventDefault(); 
                let contact = new Contact(fullName.value, contactNumber.value, emailAddress.value);
                console.log(contact.toString());

            // Wait for 3 seconds before redirecting 
            setTimeout(redirect, 3000);
        });

        //Function that redirects to home page 
        function redirect()
        {
            window.location.replace("../index.html");
        }

        // Bottom fixed nav bar 
        let MainContent = document.getElementsByTagName("main")[0];
        let footer = document.createElement("footer");
        footer.setAttribute("id", "newFooter");
        
        MainContent.after(footer);

        let Footer = document.getElementById("newFooter");
        let NavBottom = document.createElement("nav");
        NavBottom.setAttribute("class", "navbar fixed-bottom navbar-light bg-light");
        NavBottom.innerHTML = `<div class="container-fluid">
        <a class="navbar-brand" href="#">©<span id="year"> </span></a>
        </div>`
        //MainContent.after(NavBottom);
        Footer.appendChild(NavBottom);
        document.getElementById("year").innerHTML = ` CopyRight `+ new Date().getFullYear();
    }

    // named function 
    // Executed when the app starts
    function Start()
    {
        console.log("App Started!!");

        switch(document.title)
        {
            case "Home":
                DisplayHomePage();
                break;

            case "Our Products":
                DisplayProductsPage();
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