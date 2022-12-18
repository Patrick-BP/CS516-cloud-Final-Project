import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  template: `
    <article class="resume" data-page="resume">

<header>
  <h2 class="h2 article-title">Resume</h2>
</header>

<section class="timeline">

  <div class="title-wrapper">
    <div class="icon-box">
      <ion-icon name="book-outline"></ion-icon>
    </div>

    <h3 class="h3">Education</h3>
  </div>

  <ol class="timeline-list">

    <li class="timeline-item">

      <h4 class="h4 timeline-item-title">MASTER'S IN SOFTWARE DEVELOPMENT </h4>

      <span>2021 — 2023</span>

      <p class="timeline-text">
      At Maharishi University you gain in-depth hands-on training in the Latest Technologies taught by industry-experienced professors,
      Develop the confidence and competence to work as a professional software developer.
      </p>

    </li>

    <li class="timeline-item">

      <h4 class="h4 timeline-item-title">INFORMATION TECHNOLOGY</h4>

      <span>2006 — 2010</span>

      <p class="timeline-text">
        At University of Rwanda Ratione voluptatem sequi nesciunt, facere quisquams facere menda ossimus, omnis voluptas assumenda est
        omnis..
      </p>

    </li>

  

  </ol>

</section>

<section class="timeline">

  <div class="title-wrapper">
    <div class="icon-box">
      <ion-icon name="book-outline"></ion-icon>
    </div>

    <h3 class="h3">Experience</h3>
  </div>

  <ol class="timeline-list">

    <li class="timeline-item">

      <h4 class="h4 timeline-item-title">software Developper at CuydaLtd</h4>

      <span>2015 — Present</span>

      <p class="timeline-text">
        Nemo enim ipsam voluptatem blanditiis praesentium voluptum delenit atque corrupti, quos dolores et qvuas
        molestias
        exceptur.
      </p>

    </li>

    <li class="timeline-item">

      <h4 class="h4 timeline-item-title">Web designer </h4>

      <span>2013 — 2015</span>

      <p class="timeline-text">
        Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et
        quas molestias
        exceptur.
      </p>

    </li>

    <li class="timeline-item">

      <h4 class="h4 timeline-item-title">System Administrator at University of Rwanda</h4>

      <span>2010 — 2013</span>

      <p class="timeline-text">
        Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et
        quas molestias
        exceptur.
      </p>

    </li>

  </ol>

</section>

<section class="skill">

  <h3 class="h3 skills-title">My skills</h3>

  <ul class="skills-list content-card">

    <li class="skills-item">

      <div class="title-wrapper">
        <h5 class="h5">Web design</h5>
        <data value="80">90%</data>
      </div>

      <div class="skill-progress-bg">
        <div class="skill-progress-fill" style="width: 90%;"></div>
      </div>

    </li>

    <li class="skills-item">

      <div class="title-wrapper">
        <h5 class="h5">ReactJs</h5>
        <data value="70">70%</data>
      </div>

      <div class="skill-progress-bg">
        <div class="skill-progress-fill" style="width: 70%;"></div>
      </div>

    </li>

    <li class="skills-item">

      <div class="title-wrapper">
        <h5 class="h5">AngularJs</h5>
        <data value="90">80%</data>
      </div>

      <div class="skill-progress-bg">
        <div class="skill-progress-fill" style="width: 80%;"></div>
      </div>

    </li>

    <li class="skills-item">

      <div class="title-wrapper">
        <h5 class="h5">React Native</h5>
        <data value="50">75%</data>
      </div>

      <div class="skill-progress-bg">
        <div class="skill-progress-fill" style="width: 75%;"></div>
      </div>

    </li>
    <li class="skills-item">

      <div class="title-wrapper">
        <h5 class="h5">NodeJs</h5>
        <data value="50">90%</data>
      </div>

      <div class="skill-progress-bg">
        <div class="skill-progress-fill" style="width: 90%;"></div>
      </div>

    </li>
    <li class="skills-item">

      <div class="title-wrapper">
        <h5 class="h5">SQL</h5>
        <data value="50">70%</data>
      </div>

      <div class="skill-progress-bg">
        <div class="skill-progress-fill" style="width: 70%;"></div>
      </div>

    </li>
    <li class="skills-item">

      <div class="title-wrapper">
        <h5 class="h5">MongoDB</h5>
        <data value="50">85%</data>
      </div>

      <div class="skill-progress-bg">
        <div class="skill-progress-fill" style="width: 85%;"></div>
      </div>

    </li>

  </ul>

</section>

</article>
  `,
  styles: [
  ]
})
export class ResumeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
