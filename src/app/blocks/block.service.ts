import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlockService {
  public display = new BehaviorSubject<string>('');
  constructor() { 
    
  }
}
