export class Vehicle{
    constructor(registrationNumber,user){
        this.id="vehicle:" + (new Date()).getTime()
        this.registrationNumber=registrationNumber
        this.user=user
    }
}