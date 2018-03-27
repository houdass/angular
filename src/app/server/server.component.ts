import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})
export class ServerComponent {
  isDisabled = true;
  message = 'init';
  tab = ['a', 'b', 'c']

  clickme(event: any) {
    this.message = event.target.value;
  }
}
