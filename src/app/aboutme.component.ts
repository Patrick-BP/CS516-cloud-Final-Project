import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutme',
  template: `
      <article class="about  active" data-page="about">

<header>
  <h2 class="h2 article-title">About me</h2>
</header>

<section class="about-text">
  <p>
    I'm a software developer, working in web development and mobile development.
    I enjoy
    turning complex problems into simple applications using modern technologies.
  </p>

  <p>
    My job is to build your website so that it is functional and user-friendly but at the same time attractive.
    Moreover, I
    add personal touch to your product and make sure that is eye-catching and easy to use. My aim is to bring
    across your
    message and identity in the most creative way. I created web design for many famous brand companies.
  </p>


  
</section>


<!--
  - service
-->

<section class="service">

  <h3 class="h3 service-title">What i'm doing</h3>

  <ul class="service-list">

    <li class="service-item">

      <div class="service-icon-box">
        <img src="./assets/images/icon-design.svg
        " alt="design icon" width="40">
      </div>

      <div class="service-content-box">
        <h4 class="h4 service-item-title">FRONTEND APPS</h4>

        <p class="service-item-text">
          Build client-side applications with modern features like SPA and maintain semantic coding style 
          among other best practices for SEO optimisation. Use modern tech such as React js ,  (Vue.js), TailwindCSS, and GSAP.
        </p>
      </div>

    </li>

    <li class="service-item">

      <div class="service-icon-box">
        <img src="./assets/images/icon-dev.svg" alt="Web development icon" width="40">
      </div>

      <div class="service-content-box">
        <h4 class="h4 service-item-title">BACKEND APPS</h4>

        <p class="service-item-text">
        Build scalable and maintainable server applications using modern technology stacks such as Node.js, Express, and MongoDB
        The most modern and high-quality design made at a professional level.
        </p>
      </div>

    </li>

    <li class="service-item">

      <div class="service-icon-box">
        <img src="./assets/images/icon-app.svg" alt="mobile app icon" width="40">
      </div>

      <div class="service-content-box">
        <h4 class="h4 service-item-title">MOBILE APPS</h4>

        <p class="service-item-text">
          Professional development of applications for iOS and Android.
        </p>
      </div>

    </li>

    <li class="service-item">

      <div class="service-icon-box">
        <img src="./assets/images/cloud.png" alt="camera icon" width="40">
      </div>

      <div class="service-content-box">
        <h4 class="h4 service-item-title">CLOUD COMPUTING</h4>

        <p class="service-item-text">
          Build scalable and maintainable server applications using trending AWS services
        </p>
      </div>

    </li>

  </ul>

</section>




</article>
  `,
  styles: [
  ]
})
export class AboutmeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
