import { Component, OnInit } from '@angular/core';
import { BlockService } from '../block.service';

@Component({
  selector: 'app-blockd',
  templateUrl: './blockd.component.html',
  styleUrls: ['./blockd.component.css']
})
export class BlockdComponent implements OnInit {

  public text = "";
  constructor(private blockServcice: BlockService) { }

  ngOnInit(): void {
    this.blockServcice.display.subscribe((s) => {
      this.text = s;
    })
  }

}
