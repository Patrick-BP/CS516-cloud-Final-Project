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
      <a href="https://github.com/Patrick-BP/myblog/blob/main/How%20to%20deploy%20a%20React%20Application%20on%20AWS%20Amplify.pdf" target="_blank">

        <figure class="blog-banner-box">
          <img src="./assets/images/blog-1.png" alt="Design conferences in 2022" loading="lazy">
        </figure>

        <div class="blog-content">

        

          <h3 class="h3 blog-item-title">How to deploy a React Application on AWS Amplify</h3>

          <p class="blog-text">
          Learn step by step how to create a react app from scratch and push it to Github, then deploy it to AWS Amplify.
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


          <h3 class="h3 blog-item-title">How to deploy a backend Application on AWS Amplify</h3>

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
