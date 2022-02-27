// (function(core)
// {
//     class User 
//     {
//         // constructor 
//         constructor(firstName = "", lastName = "", emailAddress="", password = "")
//         {
//             this.FirstName = firstName;
//             this.LastName = lastName;
//             this.EmailAddress = emailAddress;
//             this.Password = password;
//         }


//         // overriden functions
//         toString()
//         {
//             return `First Name : ${this.FirstName}\nLast Name: ${this.LastName}
//             UserName : ${this.Username}\nEmail Address : ${this.EmailAddress}\n`;
//         }

//         // utility functions 
//         toJSON()
//         {
//             return {
//                 "FirstName": this.FirstName,
//                 "LastName": this.LastName,
//                 "Username" : this.Username,
//                 "EmailAddress": this.EmailAddress
//             }
//         }

//         fromJSON(data)
//         {
//             this.FirstName = data.FirstName;
//             this.LastName = data.Last;
//             this.Username = data.Username;
//             this.EmailAddress = data.EmailAddress;
//             this.Password = data.Password;
//         }

//         serialize()
//         {
//             if(this.FirstName !== "" && this.LastName !== "" && this.EmailAddress !== "" && this.Username !== "")
//             {
//                 return `${this.FirstName},${this.LastName},${this.Username},${this.EmailAddress}`;
//             }
//             console.error("One or more properties of the User Object are missing or invalid");
//             return null;
//         }
    
//         // assume that data is in a comma-separated format (string array of properties)
//         deserialize(data) 
//         {
//             let propertyArray = data.split(",");
//             this.FirstName = propertyArray[0];
//             this.LastName = propertyArray[1];
//             this.Username = propertyArray[2];
//             this.EmailAddress = propertyArray[3];
            
//         }
//         // never serialize or deserialize passwords :)

//     }

//     core.User = User;

// })(core || (core = {}));