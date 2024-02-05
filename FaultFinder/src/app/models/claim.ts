export class Claim {
    title : string = '';
    id : string = '';
    description : string = '';
    dateClaim : Date ;

    constructor() {
        this.dateClaim = new Date(); // Initialize with the current date or another default date if needed
      }
}
