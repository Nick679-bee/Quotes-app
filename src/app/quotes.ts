export class Quote {
    upvote:number
    downvote: number
    datePosted:Date
    moreDetails: boolean;
  
    constructor(public id:number, public quote:string, public author:string){
        this.moreDetails=false;
        this.upvote = 0
        this.downvote = 0
        this.datePosted = new Date()
    }
  
  }