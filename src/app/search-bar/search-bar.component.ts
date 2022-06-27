import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  public searchKeywords: string | null = null;
  public type: string | null = null;
  constructor(
    private router: Router) {
  }
  ngOnInit(): void {
  }

  public doSearch() {
    const canReload = (window.location.pathname === '/');
    this.router.navigate(['/'], { queryParams: (this.searchKeywords ? { key: this.searchKeywords, keyId: this.type } : undefined) }).then(() => {
      this.searchKeywords = '';
      if (canReload) {
        window.location.reload();
      }
    });
  }

  public typeList(Category: string) {
    this.type = Category;
    this.searchKeywords = "a";
    this.doSearch();
  }

}
