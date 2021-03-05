class List {
    constructor(firstName, lastName, DoB, departing, arriving, leaveDate, returnDate, bags, meal, extra, id){
        this.firstName = firstName;
        this.lastName = lastName;
        this.DoB = DoB;
        this.departing = departing;
        this.arriving = arriving;
        this.leaveDate = leaveDate;
        this.returnDate = returnDate;
        this.bags = bags;
        this.meal = meal;
        this.extra = extra;
        this.id = id;
    }
}


let passList = [];
let idCount = 1;



// function checked(name){
//     var xtr = document.getElementsByName(name)
//     output = ""
//     for (i = 0; i < xtr.length; i++) {
//         if(xtr[i].checked){
//             output += `${xtr[i].value}`
//         }
//     }
//     return output;
// }


function addToList(){
    let firstName = document.getElementById("firstName").value
    let lastName = document.getElementById("lastName").value
    let DoB = document.getElementById("DoB").value
    let departing = document.getElementById("departing").value
    let arriving = document.getElementById("arriving").value
    let returnDate = document.getElementById("returnDate").value
    let leaveDate = document.getElementById("leaveDate").value
    let bags = document.getElementById("bags").value
    let radio = document.getElementsByName("meal")
    for(i = 0; i < radio.length; i++) {
        if(radio[i].checked){
            var meal = radio[i].value;
            break;
        }
    }
    let checkbox = document.getElementsByName('extra')
    let extra = "";
    for(let j = 0; j < checkbox.length; j++){
            if(checkbox[j].checked){
                extra += `${checkbox[j].value} `
            }
        }


        if (firstName != "" && lastName != "" && DoB != "" && departing != "" && arriving != "" && leaveDate != "" && returnDate != "" ){
        let pass = new List(firstName, lastName, DoB, departing, arriving, leaveDate, returnDate, bags, meal, extra, idCount);
        idCount++;
        passList.push(pass);
        console.log(passList[0])
        firstName = document.getElementById("firstName").value
        lastName = document.getElementById("lastName").value
        DoB = document.getElementById("DoB").value
        departing = document.getElementById("departing").value
        arriving = document.getElementById("arriving").value
        leaveDate = document.getElementById("leaveDate").value
        bags = document.getElementById("bags").value
        }
    }

    



