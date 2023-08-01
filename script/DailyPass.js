import { Pass } from "./Pass.js"
// import { Vehicle } from "./Vehicle.js"

export class DailyPass extends Pass{
    constructor(vehicle){
        let currentDateTime=new Date()
        let expiry=new Date()
        expiry.setDate(currentDateTime.getDate()+1)
        let price=0
        switch((vehicle.type).toLowerCase()){
            case 'cycle':
                price=5
                break;
            case 'motor cycle':
                price=10
                break;
            case 'car':
                price=50
                break
        }
        super(vehicle,expiry,price)
        this.choice="daily"
    }
}