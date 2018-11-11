import { Component, ViewEncapsulation } from '@angular/core';
import { DragulaService } from 'ng2-dragula';
import { Subscription } from 'rxjs';

@Component({
  templateUrl: 'draggable-cards.component.html',
  styleUrls: ['../../../../../node_modules/dragula/dist/dragula.min.css'],
  encapsulation: ViewEncapsulation.None
})
export class DraggableCardsComponent {
  constructor(private dragulaService: DragulaService) {
    dragulaService.createGroup('second-bag', {
      moves: function (el, container, handle) {
        return handle.className === 'card-header drag';
      }
    });
    this.subs.add(dragulaService.drag().subscribe(({ el, source }) => {
      this.onDrag(el);
    }));
    this.subs.add(dragulaService.drop().subscribe(({ el, source }) => {
      this.onDrop(el);
    }));
    this.subs.add(dragulaService.over().subscribe(({ el, source }) => {
      this.onOver(el);
    }));
    this.subs.add(dragulaService.out().subscribe(({ el, source }) => {
      this.onOut(el);
    }));
  }

  ngOnDestroy() { this.subs.unsubscribe(); }

  private hasClass(el: any, name: string) {
    return new RegExp('(?:^|\\s+)' + name + '(?:\\s+|$)').test(el.className);
  }

  private addClass(el: any, name: string) {
    if (!this.hasClass(el, name)) {
      el.className = el.className ? [el.className, name].join(' ') : name;
    }
  }

  private removeClass(el: any, name: string) {
    if (this.hasClass(el, name)) {
      el.className = el.className.replace(new RegExp('(?:^|\\s+)' + name + '(?:\\s+|$)', 'g'), ' ');
    }
  }

  private onDrag(el) {
    this.removeClass(el, 'ex-moved');
  }

  private onDrop(el) {
    this.addClass(el, 'ex-moved');
  }

  private onOver(el) {
    this.addClass(el, 'ex-over');
  }

  private onOut(el) {
    this.removeClass(el, 'ex-over');
  }

  private subs = new Subscription();
}
