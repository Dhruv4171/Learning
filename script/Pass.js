export class Pass{
    constructor(vehicle,expiry,price){
        this.id="Pass:" + (new Date()).getTime()
        this.vehicle=vehicle
        this.expiry=expiry
        this.price=price
    }
    print=()=>{
        let passToBePrint=
        `<div id="pass">
        <h1>Pass</h1>
        <div>
            <label>PassID:</label>
            <label>${this.id}</label>
            </div>
        <div>
            <label>VehicleID:</label>
            <label>${this.vehicle.registrationNumber}</label>
        </div>
        <div> 
            <label>Owner Name:</label>
            <label>${this.vehicle.user}</label>
        </div>
        <div> 
            <label>Expiry:</label>
            <label>${this.expiry}</label>
        </div>
        </div>`
        let pass=document.getElementById("ticket")
        pass.innerHTML=passToBePrint
    }
}