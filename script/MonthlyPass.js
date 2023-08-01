import { Pass } from "./Pass.js"
// import { Vehicle } from "./Vehicle.js"

export class MonthlyPass extends Pass {
    constructor(vehicle){
        let currentDateTime=new Date()
        let expiry=new Date()
        expiry.setMonth(currentDateTime.getMonth()+1)
        let price=0
        switch((vehicle.type).toLowerCase()){
            case 'cycle':
                price=50
                break;
            case 'motor cycle':
                price=500
                break;
            case 'car':
                price=1000
                break
        }
        super(vehicle,expiry,price)
        this.choice="monthly"
    }
}