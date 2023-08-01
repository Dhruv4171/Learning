import { Vehicle } from "./Vehicle.js"

export class Car extends Vehicle{
    constructor(registrationNumber,user){
        super(registrationNumber,user)
        this.type="car"
    }
}