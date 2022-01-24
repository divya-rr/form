import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `<section class="hero is-primary">
<div class="hero-body">
  <p class="title">
    Primary hero
  </p>
  <p class="subtitle">
    Primary subtitle
  </p>
</div>
</section>`,

  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
