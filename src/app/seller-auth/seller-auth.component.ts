import { Component } from '@angular/core';  // Import the 'Component' decorator from Angular's core module.
import { SellerService } from '../services/seller.service';  // Import the 'SellerService' from a custom service.
import { Router } from '@angular/router'
import { SignUp } from '../data-type';

@Component({
  selector: 'app-seller-auth',  // Define the component's selector for HTML.
  templateUrl: './seller-auth.component.html',  // Specify the HTML template file for this component.
  styleUrls: ['./seller-auth.component.css']  // Define the component's styles.
})
export class SellerAuthComponent {  // Define the 'SellerAuthComponent' class as an Angular component.

  constructor(private seller: SellerService, private router:Router) {}  // Create the component's constructor and inject the 'SellerService'.
  
  // Jab hum log kuch bhi function se 
  // Return nahi karte hai to hum void use karte hai

  signup(data:SignUp):void { 
    // Define a function named 'signup' that accepts an 'object' called 'data'.
    // Functions that don't return a value typically have a 'void' return type.

    console.log(data);  // Output the 'data' to the console for debugging.

    // Call the 'userSignUp' method from the 'SellerService' by subscribing to its observable.
    this.seller.userSignUp(data)
    
    // this.seller.userSignUp(data).subscribe((result) => {
    //   console.log(result);  // Output the 'result' to the console.
    //   if(result) {
    //     this.router.navigate(['seller-home']);
    //   }
    // });
  }
}
