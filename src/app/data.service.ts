import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private data : string[] = ['abhishek','tillu','neeraj']

  constructor() { }

  getData(): string[] {
    return this.data
  }
  
}
