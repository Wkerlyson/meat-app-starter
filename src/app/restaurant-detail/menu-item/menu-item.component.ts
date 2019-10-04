import { MenuComponent } from './../menu/menu.component';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mt-menu-item',
  templateUrl: './menu-item.component.html',
})
export class MenuItemComponent implements OnInit {
  
  @Input() menuItem: MenuComponent;
  @Output() add = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  emitAddEvent(){
    this.add.emit(this.menuItem);
  }
}
