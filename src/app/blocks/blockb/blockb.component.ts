import { Component, OnInit } from '@angular/core';
import { BlockService } from '../block.service';

@Component({
  selector: 'app-blockb',
  templateUrl: './blockb.component.html',
  styleUrls: ['./blockb.component.css']
})
export class BlockbComponent implements OnInit {

  public text = "";
  constructor(private blockServcice: BlockService) { }

  ngOnInit(): void {
    this.blockServcice.display.subscribe((s) => {
      this.text = s;
    })
  }

}
