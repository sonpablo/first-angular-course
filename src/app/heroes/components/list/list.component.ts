import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  title = 'List of Heroes!';

  public deletedHero: string | undefined;
  public heroNames: string[] = ['espiderman', 'aironman', 'lobezno', 'ciclope'];

  removeLastHero(): void {
    this.deletedHero = this.heroNames.pop();
  }
}
