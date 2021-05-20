import { Component, OnInit } from '@angular/core';
import { BlockService } from './block.service';

@Component({
  selector: 'app-blocks',
  templateUrl: './blocks.component.html',
  styleUrls: ['./blocks.component.css']
})
export class BlocksComponent implements OnInit {
  public t = '';
  constructor(private blockService: BlockService) { }

  ngOnInit(): void {
  }
  
  updateText(e){
    this.t = e.target.value;
    this.blockService.display.next(this.t);
  }
}
