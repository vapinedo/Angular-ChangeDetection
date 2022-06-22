import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }
  
  async getAll() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");    
    return await response.json();
  }
}
