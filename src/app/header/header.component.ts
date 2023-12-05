import { Component } from '@angular/core';
import {  OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    ngOnInit() {
      document.addEventListener("DOMContentLoaded", function() {
        var header = document.querySelector("Header");
    
     window.addEventListener("scroll", function() {
            if(window.scrollY > 100) {
                header?.classList.add("scrolled");
            } else {
                header?.classList.remove("scrolled");
             }
        });
     });
    }
}


