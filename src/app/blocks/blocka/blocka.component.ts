import { Component, OnInit } from '@angular/core';
import { BlockService } from '../block.service';

@Component({
  selector: 'app-blocka',
  templateUrl: './blocka.component.html',
  styleUrls: ['./blocka.component.css']
})
export class BlockaComponent implements OnInit {
  public text = "";
  constructor(private blockServcice: BlockService) { }

  ngOnInit(): void {
    this.blockServcice.display.subscribe((s) => {
      this.text = s;
    })
  }

}
