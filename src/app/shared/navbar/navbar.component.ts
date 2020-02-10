import { Component, OnInit, ElementRef } from '@angular/core';
import { HostListener } from '@angular/core';
@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {


    constructor( private element : ElementRef) {

    }

    ngOnInit() {
    }
    @HostListener('window:scroll', ['$event'])
    onWindowScroll(e) {
        let element = document.querySelector('#tittleTop');
        let element2 = document.querySelector('.navbar');
        if (window.pageYOffset > element.clientHeight) {
          element.classList.remove('invisible');
        } else {
          element.classList.add('invisible');
        }
       
      }
}
