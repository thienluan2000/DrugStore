import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public navbar!: string;
  constructor(private router: Router) {
  }
  ngOnInit() {
  }

  public typeList(typeId: string | null) {
    const canReload = (window.location.pathname === '/');
    this.router.navigate(['/'], { queryParams: (typeId ? { keyId: typeId } : undefined) }).then(() => {
      typeId = '';
      if (canReload) {
        window.location.reload();
      }
    });
  }

}
