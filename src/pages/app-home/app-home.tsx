import { Component } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.scss',
})
export class AppHome {
  members = [
    {
      name: 'Jedi Weller',
      image: './../../assets/headshot-jedi.jpg',
      color: '#fa8928',
      title: 'Founder and Head of Technology',
      mail: 'jedi@openforge.io',
      twitter: 'https://twitter.com/jedihacks',
      github: 'https://github.com/jedihacks',
    },
    {
      name: 'Rachel Bennett',
      image: './../../assets/headshot-rachel.jpg',
      color: '#638593',
      title: 'Designer',
      mail: 'rachel@openforge.io',
      twitter: '',
      github: '',
    },
    {
      name: 'Geoffery Melle',
      image: './../../assets/headshot-geoff.jpg',
      color: '#d8aa0c',
      title: 'Account Manager',
      mail: 'geoff@openforge.io',
      twitter: '',
      github: '',
    },
    {
      name: 'Joni Leho',
      image: './../../assets/headshot-joni.jpg',
      color: '#fa8928',
      title: 'Software Engineer',
      mail: 'joni@openforge.io',
      twitter: 'https://twitter.com/lehto_joni',
    },
    {
      name: 'Auvo Severinkangas',
      image: './../../assets/headshot-auvo.jpg',
      color: '#638593',
      title: 'Software Engineer',
      mail: 'auvo@openforge.io',
      twitter: '',
      github: '',
    },
    {
      name: 'Elizabeth Cottrell',
      image: './../../assets/headshot-eliza.jpg',
      color: '#d8aa0c',
      title: 'Front End Developer',
      mail: 'elizabeth@openforge.io',
      twitter: 'https://twitter.com/_elizacottrell',
      github: 'https://github.com/LizCottrell',
    },
    {
      name: 'Paulina Gallo',
      image: './../../assets/headshot-paulina.jpg',
      color: '#fa8928',
      title: 'Software Engineer',
      mail: 'paulina@openforge.io',
      twitter: 'https://twitter.com/paulpaultweets',
      github: 'https://github.com/paulpauldevelops',
    },
    {
      name: 'Mohammad Alfatih',
      image: './../../assets/headshot-mohammad.jpg',
      color: '#638593',
      title: 'Software Engineer',
      mail: 'mo@jawami.com',
      twitter: 'https://twitter.com/webdevffw',
      github: 'https://github.com/Mohammad-alfatih',
    },
    {
      name: 'Meredith Alcorn',
      image: './../../assets/headshot-meredith.jpg',
      color: '#d8aa0c',
      title: 'Software Engineer',
      mail: 'meredith@openforge.io',
      github: 'https://github.com/mmalcorn',
    },
    {
      name: 'Fernando Del Olmo',
      image: './../../assets/headshot-fernando.jpg',
      color: '#fa8928',
      title: 'Software Engineer',
      mail: 'fernando@openforge.io',
      twitter: 'https://twitter.com/fdom92',
      github: 'https://github.com/Fdom92',
    },
    {
      name: 'William Holloran',
      image: './../../assets/headshot-billy.jpg',
      color: '#638593',
      title: 'Project Manager / QA Engineer',
      mail: 'william@openforge.io',
    },
    {
      name: 'Luis Chacon',
      image: './../../assets/headshot-luis.jpg',
      color: '#d8aa0c',
      title: 'Software Engineer',
      mail: 'luis@openforge.io',
      github: 'https://github.com/luiskcs89',
    },
    {
      name: 'Claudio Del Valle',
      image: './../../assets/headshot-claudio.jpg',
      color: '#fa8928',
      title: 'Software Engineer',
      mail: 'claudio@openforge.io',
      github: 'https://github.com/daftclaud',
    },
    {
      name: 'Yanying Zhu',
      image: './../../assets/headshot-yanying.jpg',
      color: '#638593',
      title: 'Designer',
      mail: 'yanying@openforge.io',
      twitter: '',
      github: '',
    },
  ];

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

        {/* aside - cta */}
        <app-cta link-url="#about" id="cta-about">
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

        {/* section - about */}
        <section id="about" class="bg-gray">
          <div class="container about">
            <h2>Meet the Team</h2>
            <p>
              There's no doubt that our team is made up of brilliant and
              talented individuals who are passionate about technology and
              design thinking. Together we design, code, grow, and evolve.
            </p>

            <app-members members={this.members} />
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
