// ///////////////////QUESTION 1/////////////

// var itemsArray = [
//     {
//         name:"juice",
//         price:50, 
//         quantity:3},
//         {
//             name:"cookie",
//             price:30, 
//             quantity:9},
//             {
                
//                     name:"shirt",
//                     price:880, 
//                     quantity:1},

//                 {name:"pen",
//                 price:100, 
//                 quantity:2},
// ];

// //////TOTAL PRICE OF EACH ITEM///////
// console.log(itemsArray[0].price*3)
// console.log(itemsArray[1].price*9)
// console.log(itemsArray[2].price*1)
// console.log(itemsArray[3].price*2)

//////TOTAL PRICE OF ALL ITEM///////





    // Calculate total price of each item and all items;
    


    /////////////////QUESTION 2/////////////

// var obj={
//     name: "Esha Naz",
//     email: "eshanaz76@gmail.com",
//     age: 19,
//     password: 123456,
//     gender:"Female",
//     city:"Karachi",
//     country: "Pakistan"
// }
// var check  = "age" in obj
// console.log(check);
// var check  = "country" in obj
// console.log(check);
// var check  = "firstName" in obj
// console.log(check);
// var check  = "lastName" in obj
// console.log(check);

    /////////////////QUESTION 3/////////////


    // function Patients(patName,age, coronaResult){
    //      this.patName=patName
    //      this.age=age
    //      this.coronaResult=coronaResult
    // }

    // var pat1 = new Patients("Tooba" , 20 , false)
    // var pat2 = new Patients("Naz" , 19 , true)
    // var pat3 = new Patients("Honey" , 16 , false)

    // console.log(pat1);
    // console.log(pat2);
    // console.log(pat3);


        /////////////////QUESTION 4/////////////


function Pop(Name, gender, address, education, profession){
     this.Name=Name;
     this.gender=gender;
     this.address=address;
     this. education= education;
     this.profession=profession;

}    

    var person1 = new Pop("Sam" , "male" , "Islamabad", "Graduation", "PhysiacianAssistant");
    var person2 = new Pop("Esha" , "female" ," Karachi", "UnderGraduate", "Physiologist");
    var person3 = new Pop("Nimra" , "female" , "Karachi", "Intermediate", "Student");


console.log(person1);
document.getElementById("slectBox");

Select="<select>"+
"<option>" + "Profession " + "</option>"+
"<option>" + "PhysiacianAssistant"+ "</option>"+
"<option>" + "Physiologist"+ "</option>"+
"<option>" + "Student"+ "</option>"

selectBox.innerHTML=Select


document.getElementById("slectBox2");

Select="<select>"+
"<option>" + "Education " + "</option>"+
"<option>" + "Intermediate"+ "</option>"+
"<option>" + "Graduation"+ "</option>"+
"<option>" +"UnderGraduate" + "</option>"

selectBox2.innerHTML=Select








///////////RADIO BTN
