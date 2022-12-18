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

        <h3 class="project-title">Finance</h3>

        <p class="project-category">react native</p>

      </a>
    </li>

    <li class="project-item  active" data-filter-item data-category="react native">
      <a href="#">

        <figure class="project-img">
          <div class="project-item-icon-box">
            <ion-icon name="eye-outline"></ion-icon>
          </div>

          <img src="./assets/images/project-2.png" alt="orizon" loading="lazy">
        </figure>

        <h3 class="project-title">Orizon</h3>

        <p class="project-category">react native</p>

      </a>
    </li>

    <li class="project-item  active" data-filter-item data-category="reactjs">
      <a href="#">

        <figure class="project-img">
          <div class="project-item-icon-box">
            <ion-icon name="eye-outline"></ion-icon>
          </div>

          <img src="./assets/images/project-3.jpg" alt="fundo" loading="lazy">
        </figure>

        <h3 class="project-title">Fundo</h3>

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

        <h3 class="project-title">Brawlhalla</h3>

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

        <h3 class="project-title">DSM.</h3>

        <p class="project-category">reactjs</p>

      </a>
    </li>

    <li class="project-item  active" data-filter-item data-category="reactjs">
      <a href="#">

        <figure class="project-img">
          <div class="project-item-icon-box">
            <ion-icon name="eye-outline"></ion-icon>
          </div>

          <img src="./assets/images/project-6.png" alt="metaspark" loading="lazy">
        </figure>

        <h3 class="project-title">MetaSpark</h3>

        <p class="project-category">reactjs</p>

      </a>
    </li>

    <li class="project-item  active" data-filter-item data-category="react native">
      <a href="#">

        <figure class="project-img">
          <div class="project-item-icon-box">
            <ion-icon name="eye-outline"></ion-icon>
          </div>

          <img src="./assets/images/project-7.png" alt="summary" loading="lazy">
        </figure>

        <h3 class="project-title">Summary</h3>

        <p class="project-category">react native</p>

      </a>
    </li>

    <li class="project-item  active" data-filter-item data-category="angular">
      <a href="#">

        <figure class="project-img">
          <div class="project-item-icon-box">
            <ion-icon name="eye-outline"></ion-icon>
          </div>

          <img src="./assets/images/project-8.jpg" alt="task manager" loading="lazy">
        </figure>

        <h3 class="project-title">Task Manager</h3>

        <p class="project-category">angular</p>

      </a>
    </li>

    <li class="project-item  active" data-filter-item data-category="react native">
      <a href="#">

        <figure class="project-img">
          <div class="project-item-icon-box">
            <ion-icon name="eye-outline"></ion-icon>
          </div>

          <img src="./assets/images/project-9.png" alt="arrival" loading="lazy">
        </figure>

        <h3 class="project-title">Arrival</h3>

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
