import { Component } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.scss',
})
export class AppHome {
  componentDidLoad() {
    let hrefArray;
    try {
      hrefArray = Array.from(document.querySelectorAll('a[href^="#"]'));
      hrefArray.forEach(anchor => {
        anchor.addEventListener('click', function(e) {
          e.preventDefault();
          const element = document.querySelector(this.getAttribute('href'));
          element &&
            element.scrollIntoView({
              block: 'start',
              behavior: 'smooth',
            });
        });
      });
    } catch (e) {
      console.error('caught error componentDidLoad app-home', e);
    }
  }

  render() {
    return (
      <div>
        {/* header - hero */}
        <app-hero-home>
          <span slot="header">We are Thinkers. Makers. Doers.</span>
          <span slot="body">
            Work with our team of highly skilled designers, developers, and
            consultants to develop solutions and processes that fit your
            business requirements.
          </span>
          <span slot="link">Let's Get Started</span>
        </app-hero-home>

        {/* section - services */}
        <section id="services" class="services">
          <div class="">
            <div class="services--header">
              <h2>What do we provide?</h2>
              <p>
                Whether you are a start up, an enterprise, or somewhere in
                between, we will work with you every step of the way. Choose
                your path below to learm more about our custom services.
              </p>
            </div>

            <div class="services--tab-panel">
              <nav class="nav" role="navigation">
                <div class="nav nav-tabs nav-fill" id="nav-tab">
                  <a
                    class="nav-item nav-link active"
                    id="nav-startup-tab"
                    data-toggle="tab"
                    href="#nav-startup"
                    role="tab"
                    aria-controls="nav-startup"
                    aria-selected="true"
                  >
                    <figure>
                      <img
                        class="img-fluid"
                        src="assets/graphic-services-startup.png"
                        alt=""
                      />
                      <figcaption>Start Up</figcaption>
                    </figure>
                  </a>

                  <a
                    class="nav-item nav-link"
                    id="nav-smallteam-tab"
                    data-toggle="tab"
                    href="#nav-smallteam"
                    role="tab"
                    aria-controls="nav-smallteam"
                    aria-selected="false"
                  >
                    <figure>
                      <img
                        class="img-fluid"
                        src="assets/graphic-services-small.png"
                        alt=""
                      />
                      <figcaption>Small Team</figcaption>
                    </figure>
                  </a>
                  <a
                    class="nav-item nav-link"
                    id="nav-midteam-tab"
                    data-toggle="tab"
                    href="#nav-midteam"
                    role="tab"
                    aria-controls="nav-midteam"
                    aria-selected="false"
                  >
                    <figure>
                      <img
                        class="img-fluid"
                        src="assets/graphic-services-midsize.png"
                        alt=""
                      />
                      <figcaption>Mid-Size Team</figcaption>
                    </figure>
                  </a>
                  <a
                    class="nav-item nav-link"
                    id="nav-enterprise-tab"
                    data-toggle="tab"
                    href="#nav-enterprise"
                    role="tab"
                    aria-controls="nav-enterprise"
                    aria-selected="false"
                  >
                    <figure>
                      <img
                        class="img-fluid"
                        src="assets/graphic-services-enterprise.png"
                        alt=""
                      />
                      <figcaption>Enterprise</figcaption>
                    </figure>
                  </a>
                </div>
              </nav>

              <div class="tab-content services--panel" id="nav-tabContent">
                <div
                  class="tab-pane fade show active"
                  id="nav-startup"
                  role="tabpanel"
                  aria-labelledby="nav-startup-tab"
                >
                  <div class="row">
                    <div class="col-sm-12 col-md-6 mb-5 mb-5">
                      <h3> What you need: </h3>
                      Bring your idea to life with our team of experts in
                      Design, UI/UX, Web, and Mobile Application Development. We
                      don't just 'build it', we sit with you to answer the
                      question of how the technology and psychology behind the
                      design will match your business model. Our experience with
                      100+ Startups becomes your experience as we take you
                      through the next level of Startup Consulting.
                    </div>
                    <div class="col-sm-12 offset-md-1 col-md-5">
                      <h3>What we provide:</h3>
                      <ul>
                        <li>Startup Consulting</li>
                        <li>Enhanced Mobile &amp; Web Designs</li>
                        <li>UI/UX Audits &amp; Recommendations </li>
                        <li>Mobile Application Development</li>
                        <li>Web Application Development</li>
                        <li>Customer Engagement Consulting</li>
                        <li>Guerilla Marketing Strategy</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div
                  class="tab-pane fade"
                  id="nav-smallteam"
                  role="tabpanel"
                  aria-labelledby="nav-smallteam-tab"
                >
                  <div class="row">
                    <div class="col-sm-12 col-md-6 mb-5">
                      <h3> What you need: </h3>
                      You have a small team and successful company, you've
                      proven your business model and have enough revenue to
                      sustain; however, you are struggling with accelerating
                      growth and would like to utilize technology to skyrocket
                      your business. You're nervous (and rightly so!), because
                      you've never built a technology product before. Fear not!
                      We are here to help. Let us guide you on ins-and-outs of
                      Product Development and help you determine{' '}
                      <b>HOW and IF</b> you should be building an app.
                      Sometimes, it's much better to use an existing service!
                    </div>
                    <div class="col-sm-12 offset-md-1 col-md-5">
                      <h3>What we provide:</h3>
                      <ul>
                        <li>Business Consulting</li>
                        <li>Technical Consulting</li>
                        <li>Business Elligibility Audit</li>
                        <li>Mobile &amp; Web Designs</li>
                        <li>UI/UX Audits </li>
                        <li>Mobile & Web Application Development</li>
                        <li>Customer Engagement Strategy</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div
                  class="tab-pane fade"
                  id="nav-midteam"
                  role="tabpanel"
                  aria-labelledby="nav-midteam-tab"
                >
                  <div class="services-content">
                    <div class="row">
                      <div class="col-sm-12 col-md-6 mb-5">
                        <h3> What you need: </h3>
                        You have an established business and risks cost money.
                        You're looking for a team you can trust to get the job
                        done right the first time. That's us. We work with your
                        team to evaluate your business goals, develop a plan of
                        attack, and execute in order to deliver your results on
                        budget, but mostly importantly, on time. We can provide
                        support to your existing infrastructure, provide CTO
                        services to guide your existing teams, or build your
                        product start-finish without unneccessary supervision.
                        Whatever you need, we're here.
                      </div>
                      <div class="col-sm-12 offset-md-1 col-md-5">
                        <h3>What we provide:</h3>
                        <ul>
                          <li>Business Strategy &amp; Consulting</li>
                          <li>Professional Mobile &amp; Web Designs</li>
                          <li>UI/UX Audits &amp; Recommendations </li>
                          <li>Mobile Application Development</li>
                          <li>Web Application Development</li>
                          <li>Strategic Customer Engagement Consulting</li>
                          <li>Team Trainings &amp; Workshops</li>
                          <li>Process Improvement Training</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  class="tab-pane fade"
                  id="nav-enterprise"
                  role="tabpanel"
                  aria-labelledby="nav-enterprise-tab"
                >
                  <div class="row">
                    <div class="col-sm-12 col-md-6 mb-5">
                      <h3> What you need: </h3>
                      Our Enterprise clients have world-wide goals; but often
                      need the agility and flexibility of a small team in order
                      to accomplish those goals and bypass the corporate
                      red-tape. For these clients, we offer tailored solutions
                      to fit your needs. If you have an existing team of
                      Designers and Developers, but they have difficulty
                      communicating and often miss deadlines and go over budget;
                      we provide training and workshops to increase
                      cross-disciplinary communication. For products that have
                      spiraled out of control; we come in and fix the physical
                      (design &amp; dev), but also the systematic problems such
                      as team communication and design to development process
                      improvement.
                    </div>
                    <div class="col-sm-12 offset-md-1 col-md-5">
                      <h3>What we provide:</h3>
                      <ul>
                        <li>Enterprise Design Workshops</li>
                        <li>Cross-Disciplinary Team Training</li>
                        <li>External Consulting &amp; Process Improvement</li>
                        <li>User Experience (UI/UX) Audits</li>
                        <li>Web Accessability Audits</li>
                        <li>Mobile &amp; Web Application Services</li>
                        <li>Customer Engagement Strategy</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* aside - cta */}
        <app-cta link-url="/about" id="cta-about">
          <span slot="header">Want to learn more about us?</span>
          <span slot="link">Get to know us</span>
        </app-cta>

        {/* section - process */}
        <section id="process" class="bg-gray">
          <div class="container process">
            <h2>Our Process</h2>

            <content-graphic-lg img-url="assets/graphic-home-discovery.png">
              <h3 slot="header">Discovery</h3>
              <p slot="body">
                We'll help you evaluate your business needs and challenge your
                assumptions before entering into the Design and Development
                processs. Make sure that the technology you're building makes
                sense for your business.
              </p>
            </content-graphic-lg>

            <content-graphic-lg img-url="assets/graphic-home-consulting.png">
              <h3 slot="header">Design &amp; User Experience</h3>
              <p slot="body">
                There is psychology and through behind every effective design.
                Our team of experts sits with you and matches our knowledge of
                Design &amp; User Experience principles with your subject-matter
                knowledge to jointly create the most effective representation of
                your business.
              </p>
            </content-graphic-lg>

            <content-graphic-lg img-url="assets/graphic-home-development.png">
              <h3 slot="header">Development</h3>
              <p slot="body">
                Throw away the development practices of the 1990's and 2000's.
                In order to utilize modern technologies we must use modern
                approaches to software development, including Design &amp; Dev
                integration, Continuous Integration strategies, and
                sophisticated Automated Testing strategies to assure your
                business is always operational.
              </p>
            </content-graphic-lg>

            <content-graphic-lg img-url="assets/graphic-home-deployment.png">
              <h3 slot="header">Deployment</h3>
              <p slot="body">
                Do you have a dashboard to monitor the state of your
                application? Do you have Continuous Integration and Automated
                Testing strategies to decrease your development and QA testing
                costs? Does releasing an update take more than 1 (one) day? If
                so, let us help you improve your deployment strategy so you can
                get to market quicker, on time, and on budget.
              </p>
            </content-graphic-lg>

            <content-graphic-lg img-url="assets/graphic-home-feedback.png">
              <h3 slot="header">User Feedback</h3>
              <p slot="body">
                The biggest mistake businesses make is to launch a product and
                then stop there. That initial data from the first 3 months is
                crucial for engaging your consumer and enhancing your
                experience. Expand your business by capturing this crucial
                moment; we will help you monitor and improve the entire way.
              </p>
            </content-graphic-lg>
          </div>
        </section>

        {/* section - persepectives */}
        <section class="bg-black" id="perspectives">
          <div class="container perspectives">
            <img class="img-fluid" src="assets/graphic-home-icons.png" alt="" />
            <h2>We Are Powered by Multiple Perspectives</h2>
            <p>
              Our individual skills, backgrounds, and life experiences have
              shaped us into the company that we are today. Maintaining a
              diverse team helps us to perform better, attract top talent, and
              make smarter decisions.
            </p>
          </div>
        </section>

        {/* section - partners */}
        <section>
          <div class="container partners">
            <h2>Our Industry Partners</h2>
            <p>
              Here are some of our trusted partners. We frequently work with
              these companies to ensure the highest quality to our products and
              to use the program that best fits your app's needs.
            </p>

            <div class="partners--logos">
              <img
                class="img-fluid"
                src="assets/logo-ionic-black.png"
                alt="Ionic"
              />
              <img
                class="img-fluid"
                src="assets/logo-angular-black.png"
                alt="Angular"
              />
              <img
                class="img-fluid"
                src="assets/logo-capacitor-black.png"
                alt="Capacitor"
              />
              <img
                class="img-fluid"
                src="assets/logo-stencil-black.png"
                alt="Stencil"
              />
              <img
                class="img-fluid"
                src="assets/logo-mysql-black.png"
                alt="Mysql"
              />
              <img
                class="img-fluid"
                src="assets/logo-mongodb-black.png"
                alt="MongoDB"
              />
              <img
                class="img-fluid"
                src="assets/logo-nodejs-black.png"
                alt="Node JS"
              />
              <img
                class="img-fluid"
                src="assets/logo-aws-black.png"
                alt="AWS"
              />
            </div>
          </div>
        </section>

        {/* aside - cta */}
        <app-cta link-url="/contact">
          <span slot="header">Ready to work with us?</span>
          <span slot="link">Get in touch</span>
        </app-cta>
      </div>
    );
  }
}
