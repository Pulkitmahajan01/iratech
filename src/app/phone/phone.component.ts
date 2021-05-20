import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.css'],
})
export class PhoneComponent implements OnInit {
  constructor(private cdRef: ChangeDetectorRef) {}
  public phonenum: any[] = [''];
  public num: number;

  ngOnInit(): void {}


  add() {
    this.phonenum.push('');
  }
  onSubmitButton(){
    let s = '[ \n'
    this.phonenum.forEach((val,i) => {
      s+= `{phoneNumber${i+1} : ${val}} \n`
    });
    s+= ']'
    console.log(s);
  }
  updatePhoneNumber(event,index){
    this.phonenum[index] = event.target.value;
  }
}
