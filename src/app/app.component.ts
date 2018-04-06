import {AfterContentInit, AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  loadedFeature = 'recipe';
  isHidden = false;
  value = 1;

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
