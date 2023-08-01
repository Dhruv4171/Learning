import { Pass } from "./Pass.js"
// import { Vehicle } from "./Vehicle"

export class YearlyPass extends Pass {
    constructor(vehicle){
        let currentDateTime=new Date()
        let expiry=new Date()
        expiry.setFullYear(currentDateTime.getFullYear()+1)
        let price=0
        switch((vehicle.type).toLowerCase()){
            case 'cycle':
                price=500
                break;
            case 'motor cycle':
                price=1000
                break;
            case 'car':
                price=5000
                break;
        }
        super(vehicle,expiry,price)
        this.choice="yearly"
    }
}