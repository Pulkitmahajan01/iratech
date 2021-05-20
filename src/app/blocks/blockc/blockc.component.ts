import { Component, OnInit } from '@angular/core';
import { BlockService } from '../block.service';

@Component({
  selector: 'app-blockc',
  templateUrl: './blockc.component.html',
  styleUrls: ['./blockc.component.css']
})
export class BlockcComponent implements OnInit {

  public text = "";
  constructor(private blockServcice: BlockService) { }

  ngOnInit(): void {
    this.blockServcice.display.subscribe((s) => {
      this.text = s;
    })
  }

}
