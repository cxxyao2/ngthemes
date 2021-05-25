import { Component, OnInit } from '@angular/core';

// TODO  需要判断是否要把materials的color.font专用scss文件放在style中
@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss'],
})
export class TileComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
