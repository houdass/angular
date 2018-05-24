import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';
  isHidden = false;
  value = 1;
  text = 'lorem lorem lorem lorem';

  ngOnInit() {
    const config = {
      apiKey: 'AIzaSyAtib5uOZjwgeWRfof9n01_mykDZGB6kUY',
      authDomain: 'ng-maximilian-udemy-app.firebaseapp.com'
    };
    firebase.initializeApp(config);
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
