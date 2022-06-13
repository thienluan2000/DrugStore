import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { ProductService } from 'src/services/product.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public maskId: string = 'MA';
  isMenuSmall: boolean = true;
  sideBarOpen: boolean = false;
  constructor(private el: ElementRef, private productService: ProductService, private router: Router) { }


  // Your initial click listener on the host element
  @HostListener('click', ['$event']) onClick(event: any) {
    //  event.stopPropagation();
    if (event.target.id == "collapseBtn") {
      document.getElementsByClassName('sidebar')[0].classList.add('showsidebar');
      document.body.classList.add('push');
      this.sideBarOpen = true;
    }
    //  else {
    // if (this.sideBarOpen) {
    //    document.getElementsByClassName('sidebar')[0].classList.remove('showsidebar');
    //    document.body.classList.remove('push');
    //    this.sideBarOpen = false;
    // }
    // }
  }

  // Click listener on the window object to handle clicks anywhere on 
  // the screen.
  @HostListener('window:click', ['$event']) onOutsideClick(event: any) {
    if (this.sideBarOpen && !this.el.nativeElement.contains(event.target)) {
      document.getElementsByClassName('sidebar')[0].classList.remove('showsidebar');
      document.body.classList.remove('push');
      this.sideBarOpen = true;
    }
  }

  ngOnInit() {
  }

  //   toggleSideBar() {
  //     document.getElementsByClassName('sidebar')[0].classList.add('showsidebar');
  //     this.sideBarOpen = true;
  //  }

  public maskList() {
    const canReload = (window.location.pathname === '/');
    this.router.navigate(['/'], { queryParams: (this.maskId ? { key: this.maskId } : undefined) }).then(() => {
      this.maskId = '';
      if (canReload) {
        window.location.reload();
      }
    });
  }



}
