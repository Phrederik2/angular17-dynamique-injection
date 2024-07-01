import {Component, QueryList, Type, ViewChildren} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {FirstComponent} from "./components/first/first.component";
import {PaneComponent} from "./components/pane/pane.component";
import {SecondComponent} from "./components/second/second.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PaneComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  protected readonly FirstComponent = FirstComponent;
  protected readonly SecondComponent = SecondComponent;
  // @ts-ignore
  @ViewChildren(PaneComponent) panes: QueryList<PaneComponent> = [];

  listComponent = [FirstComponent, SecondComponent];

  load(component: Type<any>) {
    const container = this.panes.find((el) => component.name.includes(el.id()));

    if (container && !container.firstInit) {
      console.log(component.name, 'INIT');
      container.ref.clear();
      container.ref.createComponent(component);
      container.firstInit = true;
      return;
    }
    console.log(component.name, 'Already init, nothing!');

  }

}
