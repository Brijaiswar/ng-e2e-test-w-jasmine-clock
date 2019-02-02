import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div style="text-align:center">
    <h1>
      Current date is <span class="e2e-curr-date">{{currentDate | date:'yyyy-MM-dd'}}</span>.
    </h1>
  </div>`,
})
export class AppComponent {
  currentDate = new Date();
}
