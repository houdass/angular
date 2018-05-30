import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DataStorageService } from '../../shared/data-storage.service';
import { AuthService } from '../../auth/auth.service';
import { HttpEvent } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  // @Output() featureSelected = new EventEmitter<string>();

  constructor(private dataStorageService: DataStorageService, public authService: AuthService) {}

  ngOnInit() {}

  /* onSelect(feature) {
    this.featureSelected.emit(feature);
  } */

  onSaveData() {
    /* this.dataStorageService.storeRecipes()
      .subscribe((response: HttpEvent<Object>) => console.log(response)); */
    this.dataStorageService.storeRecipes()
      .subscribe((response) => console.log(response));
  }

  onFetchData() {
    this.dataStorageService.getRecipes();
  }

  onLogout() {
    this.authService.logout();
  }
}
