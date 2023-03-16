import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent {

  public p:number = 100000;
  public n:number = 120;
  public r:number = 8.0;
  public emi:number = 0;
  public totalinterest:number=0;
  public totalpayment : number=0;
  public percentage:number=0;
  public intrests:number = 0;
  public payments: any[] = [];
  
  public amountchange(e:any){
   this.p= e.target.value;
  }
  public monthchange(e:any){
    this.n= e.target.value;
  }
  public ratechange(e:any){
    this.r= e.target.value;
  }
  
  
  
  public calculate(){
  
    this.r = this.r / (12 * 100);
  
  
  
    this.emi = this.p*this.r*Math.pow(1 + this.r, this.n) / (Math.pow(1 + this.r, this.n) - 1);
  
    this.totalinterest = this.emi * this.n - this.p;
  
    this.totalpayment = this.emi * this.n;
  
    this.percentage = this.totalinterest*100/this.totalpayment;
  
    this.generatePayments(this.emi, this.r);
    return (this.emi);
  
  
  }
  
  
  generatePayments(emi: number, rate: number): any {
    let balance = this.p;
      this.payments = [];
  
      for (let x = 1; x <= this.n; x++) {
        let interest = (balance * rate);
        let principal = (emi - interest);
        let endingBalance = (balance - principal);
  
  
  
        this.payments.push({
          paymentNo: x,
          beginningBalance: balance,
          emi: emi,
          principal: principal,
          interest: interest,
          endingBalance: endingBalance
        });
  
        balance = endingBalance;
      }
    }  
}

 


//this is extra code for calculator
  
// p:number = 10 ; // P = Principal loan amount
// n:number = 10;  // N = Loan tenure in months
// r:number = 10;// R = Monthly interest rate

// emi:any;
// totalinterest:any;
// payableamount:any;
// Interestpersentage:any;
// payment:any[]=[];

// ngOnInit(){
//   this.result();
// }
// array=[]

// result(){

//  let r = this.r/1200

//   this.emi = (this.p*r*Math.pow(1+r,this.n))/(Math.pow(1+r,this.n)- 1)
//   this.payableamount = this.emi*this.n
//   this.totalinterest = this.emi*this.n- this.p;
//   this.Interestpersentage = this.r;
   
//   this.generatepayment(this.emi,r)
//     return (this.emi)
  

// }

// generatepayment(emi:any,r:any):any{
 
//   let balance = this.p;
//   this.payment = [];

//   for(let i = 1; i <= this.n; i++){
//     let interest = (balance*this.r)
//     let principal = (emi-interest)
//     let endingbalance = (balance-principal)

//     this.payment.push({
//       id:i,
//       beg_balance:balance,
//       emi:emi,
//       principal:principal,
//       interest:interest,
//       endingbalance:endingbalance
//     });
//     balance=endingbalance;
//   }
// }