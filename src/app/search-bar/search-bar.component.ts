import { Component, OnInit } from '@angular/core';
import { Params, Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  public searchKeywords?: string;
  public type?: string;
  constructor(
    private router: Router) {
  }
  ngOnInit(): void {
  }

  public doSearch(category?: string) {
    if (category) {
      this.type = category;
      localStorage.setItem('category', JSON.stringify(this.type));
    }
    const canReload = (window.location.pathname === '/');
    this.router.navigate(['/'], { queryParams: { key: (this.searchKeywords || undefined), keyId: (this.type || JSON.parse(localStorage.getItem('category') || 'null') || undefined) } }).then(() => {
      this.searchKeywords = '';
      if (canReload) {
        window.location.reload();
      }
    });
  }

  public removeCategory(){
    localStorage.removeItem("category");
  }

}
