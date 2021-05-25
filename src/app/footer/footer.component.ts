import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  @Output() changeTheme: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  toggle() {
    this.changeTheme.emit('');
  }
}
