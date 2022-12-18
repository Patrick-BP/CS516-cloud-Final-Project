import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  template: `
    <article class="blog" data-page="blog">

<header>
  <h2 class="h2 article-title">Blog</h2>
</header>

<section class="blog-posts">

  <ul class="blog-posts-list">

    <li class="blog-post-item">
      <a href="#">

        <figure class="blog-banner-box">
          <img src="./assets/images/blog-1.jpg" alt="Design conferences in 2022" loading="lazy">
        </figure>

        <div class="blog-content">

        

          <h3 class="h3 blog-item-title">Design conferences in 2022</h3>

          <p class="blog-text">
            Veritatis et quasi architecto beatae vitae dicta sunt, explicabo.
          </p>

        </div>

      </a>
    </li>

    <li class="blog-post-item">
      <a href="#">

        <figure class="blog-banner-box">
          <img src="./assets/images/blog-2.jpg" alt="Best fonts every designer" loading="lazy">
        </figure>

        <div class="blog-content">


          <h3 class="h3 blog-item-title">Best fonts every designer</h3>

          <p class="blog-text">
            Coming Soon....
          </p>

        </div>

      </a>
    </li>

    <li class="blog-post-item">
      <a href="#">

        <figure class="blog-banner-box">
          <img src="./assets/images/blog-3.jpg" alt="Design digest #80" loading="lazy">
        </figure>

        <div class="blog-content">

          

          <h3 class="h3 blog-item-title">Design digest #80</h3>

          <p class="blog-text">
          Coming Soon....
          </p>

        </div>

      </a>
    </li>

    <li class="blog-post-item">
      <a href="#">

        <figure class="blog-banner-box">
          <img src="./assets/images/blog-4.jpg" alt="UI interactions of the week" loading="lazy">
        </figure>

        <div class="blog-content">

          

          <h3 class="h3 blog-item-title">UI interactions of the week</h3>

          <p class="blog-text">
            Coming Soon....
          </p>

        </div>

      </a>
    </li>


  </ul>

</section>

</article>
  `,
  styles: [
  ]
})
export class BlogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
