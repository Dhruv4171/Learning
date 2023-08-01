import { Cycle } from "./Cycle.js";
import { Car } from "./Car.js"
import { Motorcycle } from "./Motorcycle.js"
import { Faculty } from "./Faculty.js";
import { Student } from "./Student.js";
import { DailyPass } from "./DailyPass.js";
import { MonthlyPass } from "./MonthlyPass.js"
import { YearlyPass } from "./YearlyPass.js";


const users=[]
const vehicles=[]
const passes=[]
document.addEventListener("DOMContentLoaded",()=>{
    let userSubmitButton=document.getElementById("userSubmitButton");
    userSubmitButton.addEventListener("click",userRegistration)
    vehicleSubmitButton.addEventListener("click",vehicleRegistration)
})
const showPassChoice=(vehicle)=>{
    let dailyPass = new DailyPass(vehicle)
    let monthlyPass = new MonthlyPass(vehicle)
    let yearlyPass = new YearlyPass(vehicle) 
    
    let passChoice=document.getElementById("passChoice")
    let button=document.createElement("INPUT")
    button.setAttribute('type',"button")
    button.value="Daily: "+ dailyPass.price
    button.addEventListener("click",()=>{
        passes.push(dailyPass)
        dailyPass.print()
    })
    passChoice.appendChild(button)

    button=document.createElement("INPUT")
    button.setAttribute('type',"button")
    button.value="Monthly: "+monthlyPass.price
    button.addEventListener("click",()=>{
        passes.push(monthlyPass)
        monthlyPass.print()
    })
    passChoice.appendChild(button)

    button=document.createElement("INPUT")
    button.setAttribute('type',"button")
    button.value="Yearly: "+yearlyPass.price
    button.addEventListener("click",()=>{
        passes.push(yearlyPass)
        yearlyPass.print()
    })
    passChoice.appendChild(button)
    console.log(passes)
}
const vehicleRegistration =(e)=>{
    e.preventDefault()
    let vehicleName=document.getElementById("vehicleName").value
    let vehicleType=document.getElementById("vehicleType").value
    let userName=users[users.length-1].name
    let vehicle=null
    switch(vehicleType.toLowerCase()){
        case "cycle":
            vehicle=new Cycle(vehicleName,userName)
            vehicles.push(vehicle)
            showPassChoice(vehicle)
            break;
        case "car":
            vehicle = new Car(vehicleName,userName)
            vehicles.push(vehicle)
            showPassChoice(vehicle)
            break;
        case "motor cycle":
            vehicle=new Motorcycle(vehicleName,userName)
            vehicles.push(vehicle)
            showPassChoice(vehicle)
            break;
    }
    console.log(vehicles)
}
const userRegistration = (e)=>{
    e.preventDefault()  
    let userName=document.getElementById("ownerName").value
    let userContact=document.getElementById("ownerContact").value
    let userRole=document.getElementById("ownerRole").value
    let user=null
    switch(userRole.toLowerCase()){
        case "student":
            user=new Student(userName,userContact)
            users.push(user)
            break;
        case "faculty":
            user=new Faculty(userName,userContact)
            users.push(user)
            break;
    }
    console.log(users)
}
