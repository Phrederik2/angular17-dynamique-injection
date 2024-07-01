import {Component, Input, input, Type, ViewChild, ViewContainerRef} from '@angular/core';

@Component({
  selector: 'pane',
  standalone: true,
  imports: [],
  templateUrl: './pane.component.html',
  styleUrl: './pane.component.css'
})
export class PaneComponent {
  @ViewChild('ref', {read: ViewContainerRef}) ref!: ViewContainerRef;
  id = input('');
  firstInit = false;
/*
  load(component: Type<any>) {
    if (!this.firstInit) {
      console.log(component.name, 'INIT');
      this.ref.clear();
      this.ref.createComponent(component);
      this.firstInit = true;
      return;
    }
    console.log(component.name, 'Also init, nothing!');

  }
 */
}
