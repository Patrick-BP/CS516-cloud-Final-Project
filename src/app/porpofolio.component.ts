import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-porpofolio',
  template: `
    <article class="portfolio" data-page="portfolio">

<header>
  <h2 class="h2 article-title">Portfolio</h2>
</header>

<section class="projects">

  <ul class="filter-list">

    <li class="filter-item">
      <button class="active" data-filter-btn>All</button>
    </li>

    <li class="filter-item">
      <button data-filter-btn>Reactjs</button>
    </li>

    <li class="filter-item">
      <button data-filter-btn>Angular</button>
    </li>

    <li class="filter-item">
      <button data-filter-btn>React native</button>
    </li>

  </ul>

  <div class="filter-select-box">

    <button class="filter-select" data-select>

      <div class="select-value" data-selecct-value>Select category</div>

      <div class="select-icon">
        <ion-icon name="chevron-down"></ion-icon>
      </div>

    </button>

    <ul class="select-list">

      <li class="select-item">
        <button data-select-item>All</button>
      </li>

      <li class="select-item">
        <button data-select-item>Reactjs</button>
      </li>

      <li class="select-item">
        <button data-select-item>Angular</button>
      </li>

      <li class="select-item">
        <button data-select-item>React native</button>
      </li>

    </ul>

  </div>

  <ul class="project-list">

    <li class="project-item  active" data-filter-item data-category="react native">
      <a href="#">

        <figure class="project-img">
          <div class="project-item-icon-box">
            <ion-icon name="eye-outline"></ion-icon>
          </div>

          <img src="./assets/images/project-1.jpg" alt="finance" loading="lazy">
        </figure>

        <h3 class="project-title">Restaurants Management </h3>

        <p class="project-category">react native</p>

      </a>
    </li>



    <li class="project-item  active" data-filter-item data-category="reactjs">
      <a href="#">

        <figure class="project-img">
          <div class="project-item-icon-box">
            <ion-icon name="eye-outline"></ion-icon>
          </div>

          <img src="./assets/images/project-3.png" alt="fundo" loading="lazy">
        </figure>

        <h3 class="project-title">Movie Night</h3>

        <p class="project-category">reactjs</p>

      </a>
    </li>

    <li class="project-item  active" data-filter-item data-category="angular">
      <a href="#">

        <figure class="project-img">
          <div class="project-item-icon-box">
            <ion-icon name="eye-outline"></ion-icon>
          </div>

          <img src="./assets/images/project-4.png" alt="brawlhalla" loading="lazy">
        </figure>

        <h3 class="project-title">Goals Tracker</h3>

        <p class="project-category">angular</p>

      </a>
    </li>

    <li class="project-item  active" data-filter-item data-category="reactjs">
      <a href="#">

        <figure class="project-img">
          <div class="project-item-icon-box">
            <ion-icon name="eye-outline"></ion-icon>
          </div>

          <img src="./assets/images/project-5.png" alt="dsm." loading="lazy">
        </figure>

        <h3 class="project-title">Movie Streaming</h3>

        <p class="project-category">reactjs</p>

      </a>
    </li>

    
    
    <li class="project-item  active" data-filter-item data-category="react native">
      <a href="#">

        <figure class="project-img">
          <div class="project-item-icon-box">
            <ion-icon name="eye-outline"></ion-icon>
          </div>

          <img src="./assets/images/project-8.png" alt="summary" loading="lazy">
        </figure>

        <h3 class="project-title">Course Review</h3>

        <p class="project-category">react native</p>

      </a>
    </li>

   

   
  </ul>

</section>

</article>
  `,
  styles: [
  ]
})
export class PorpofolioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
