import { Injectable } from '@angular/core';  // Import the 'Injectable' decorator from Angular's core.
import { HttpClient } from '@angular/common/http';  // Import the 'HttpClient' for making HTTP requests.
import { SignUp } from '../data-type';

@Injectable({
  providedIn: 'root'  // Decorate the service with 'providedIn' to make it available at the root level.
})
export class SellerService {  // Define the 'SellerService' class as an Angular service.

  constructor(private http: HttpClient) { }  // Create the service's constructor and inject 'HttpClient'.

  // Define a method named 'userSignUp' that accepts an 'data' of type 'any'.
  userSignUp(data: SignUp) {
    // Send an HTTP POST request to the specified URL 'http://localhost:3000/seller' with the provided 'data'.
    let result = this.http.post('http://localhost:3000/seller',
      data,
      { observe: 'response' }
    ).subscribe((result) => {
      console.log("Result", result)
    })
    return false;
  }
}
