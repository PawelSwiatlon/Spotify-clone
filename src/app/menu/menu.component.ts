import { Component, OnInit } from '@angular/core';
import { faHome, faSearch, faList } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  ShowLinks = false;
  faHome = faHome;
  faSearch = faSearch;
  faList = faList;
  constructor() { }

  ngOnInit(): void {
  }
  showLinks () {
    this.ShowLinks = !this.ShowLinks;
  }

}
