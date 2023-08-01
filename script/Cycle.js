import { Vehicle } from "./Vehicle.js"

export class Cycle extends Vehicle{
    constructor(registrationNumber,user){
        super(registrationNumber,user)
        this.type= "cycle"
    }
}