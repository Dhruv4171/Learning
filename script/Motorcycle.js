import { Vehicle } from "./Vehicle.js"

export class Motorcycle extends Vehicle{
    constructor(registrationNumber,user){
        super(registrationNumber,user)
        this.type="motor cycle"
    }
}