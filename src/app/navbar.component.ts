import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
    <nav class="navbar">

<ul class="navbar-list">

  <li class="navbar-item">
    <button class="navbar-link  active" data-nav-link>About</button>
  </li>

  <li class="navbar-item">
    <button class="navbar-link" data-nav-link>Resume</button>
  </li>

  <li class="navbar-item">
    <button class="navbar-link" data-nav-link>Portfolio</button>
  </li>

  <li class="navbar-item">
    <button class="navbar-link" data-nav-link>Blog</button>
  </li>

  <li class="navbar-item">
    <button class="navbar-link" data-nav-link>Contact</button>
  </li>

</ul>

</nav>
  `,
  styles: [
  ]
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
