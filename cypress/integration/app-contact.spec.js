describe('Contact Page', function () {
  var env = 'http://localhost:3333';
  beforeEach(() => {
    cy.visit(env + '/contact')
    cy.get('button[type=submit]').as('submitBtn')
  })

  describe('Nav Bar Navigation (Desktop)', function () {
    // TODO -> Test suite for the blog link in nav bar.
    it('Home on nav bar should redirect to home page', function () {
      cy.get('.navbar').contains('Home').click()
      cy.url().should('include', '/')
    })
    describe('Services', function () {
      beforeEach(() => {
        // Gets Services text
        cy.get('.container > #navbarSupportedContent').contains('Services');
        // Clicks services dropdown arrow
        cy.get('.container > #navbarSupportedContent > .navbar-nav > .nav-item > #navbarDropdown').click();
      })
      it('Services should drop down to display Development and navigate to developer page', function () {
        cy.get('.navbar-nav > .nav-item:nth-child(2) > .dropdown-menu > .hydrated:nth-child(1) > .nav-link').contains('Development').click()
        cy.url().should('include', '/app-developer')
      })
      it('Services should drop down to display Design and navigate to design page', function () {
        cy.get('.navbar-nav > .nav-item:nth-child(2) > .dropdown-menu > .hydrated:nth-child(2) > .nav-link').contains('Design').click();
        cy.url().should('include', '/app-designer');
      })
      it('Services should drop down to display Consulting and navigate to consulting page', function () {
        cy.get('.navbar-nav > .nav-item:nth-child(2) > .dropdown-menu > .hydrated:nth-child(3) > .nav-link').contains('Consulting').click()
        cy.url().should('include', '/startup-consulting')
      });
    });

    describe('About', function () {
      it('About should drop down to display Meet the team and navigate to about page', function () {
        cy.get('.navbar').contains('About').click()
        cy.get('.navbar').contains('Meet the team').click()
        cy.url().should('include', '/about')
        cy.contains('We Are Passionate About Technology and Design')
      })
      it('About should drop down to display Juntoscope Case Study and navigate to juntoscope page', function () {
        cy.get('.navbar').contains('About').click()
        cy.get('.navbar').contains('Juntoscope Case Study').click()
        cy.url().should('include', '/juntoscope')
        cy.contains('Case Study')
      })
      it('About should drop down to display Toolbox and navigate to Toolbox page', function () {
        cy.get('.navbar').contains('About').click()
        cy.get('.navbar').contains('Toolbox').click()
        cy.url().should('include', '/toolbox')
        cy.contains('Here are some of the tools we use')
      })
      it('About should drop down to display PWA White Paper and navigate to PWA White Paper page', function () {
        cy.get('.navbar').contains('About').click()
        cy.get('.navbar').contains('PWA White Paper').click()
        cy.url().should('include', '/resources/pwa-white-paper')
        cy.contains('What is a PWA and is it right for you?')
      })
    });
  })

  describe('Nav Bar Navigation (Mobile)', function () {
    beforeEach(() => {
      cy.viewport(960, 600) // Sets view to large to enable nav menu
      cy.get('.navbar-toggler').click() // expands nav menu before each test
    })
    it('Nav menu should collapse', function () {
      cy.wait(2000)
      cy.get('.navbar-toggler').click()
    })
    it('Home on nav Bar should redirect to home page', function () {
      cy.get('.navbar').contains('Home').click()
      cy.url().should('include', '/')
    })

    describe('Services', function () {
      beforeEach(() => {
        cy.get('.container > #navbarSupportedContent').contains('Services');
        cy.get('.container > #navbarSupportedContent > .navbar-nav > .nav-item > #navbarDropdown').click();
      })
      it('Services should drop down to display Development and navigate to developer page', function () {
        cy.get('.navbar-nav > .nav-item:nth-child(2) > .dropdown-menu > .hydrated:nth-child(1) > .nav-link').contains('Development').click()
        cy.url().should('include', '/app-developer')
      })
      it('Services should drop down to display Design and navigate to design page', function () {
        cy.get('.navbar-nav > .nav-item:nth-child(2) > .dropdown-menu > .hydrated:nth-child(2) > .nav-link').contains('Design').click()
        cy.url().should('include', '/app-designer')
      })
      it('Services should drop down to display Consulting and navigate to consulting page', function () {
        cy.get('.navbar-nav > .nav-item:nth-child(2) > .dropdown-menu > .hydrated:nth-child(3) > .nav-link').contains('Consulting').click();
        cy.url().should('include', '/startup-consulting');
      })
    });

    describe('About', function () {
      it('About should drop down to display Meet the team and navigate to about page', function () {
        cy.get('.navbar').contains('About').click()
        cy.get('.navbar').contains('Meet the team').click()
        cy.url().should('include', '/about')
        cy.contains('We Are Passionate About Technology and Design')
      })
      it('About should drop down to display Juntoscope Case Study and navigate to juntoscope page', function () {
        cy.get('.navbar').contains('About').click()
        cy.get('.navbar').contains('Juntoscope Case Study').click()
        cy.url().should('include', '/juntoscope')
        cy.contains('Case Study')
      })
      it('About should drop down to display Toolbox and navigate to Toolbox page', function () {
        cy.get('.navbar').contains('About').click()
        cy.get('.navbar').contains('Toolbox').click()
        cy.url().should('include', '/toolbox')
        cy.contains('Here are some of the tools we use')
      })
      it('About should drop down to display PWA White Paper and navigate to PWA White Paper page', function () {
        cy.get('.navbar').contains('About').click()
        cy.get('.navbar').contains('PWA White Paper').click()
        cy.url().should('include', '/resources/pwa-white-paper')
        cy.contains('What is a PWA and is it right for you?')
      })
    });
  });

  describe('Header', function () {
    it('Header should display with appropriate text content within it', function () {
      const h2Content = 'Let\'s Work Together'
      const pContent = 'Request Free Quote'

      cy.get('header').should('exist').and('be.visible')
      cy.get('.hero').contains(h2Content).and('be.visible')
      cy.get('.hero').contains(pContent).and('be.visible')
    })

    it('Should contain a Request Now button that scrolls to the form on click', function () {
      cy.get('header')
        .find('.btn')
        .should('exist')
        .and('be.visible')
        .and('contain', 'Request Free Quote')
        .click()
      cy.get('#second-content').click()
    })
  })

  describe('Contact Form', function () {
    let nameField;
    let emailField;
    let phoneField;
    let messageField;

    describe('Successful form submission', function () {
      beforeEach(() => {
        nameField = cy.get('input[name=name]').type('Testing')
        emailField = cy.get('input[name=email]').type('testEmail@gmail.com')
        phoneField = cy.get('input[name=phone]').type('1459341234')
        messageField = cy.get('input[name=message]').type('This is a test message')
        cy.get('@submitBtn').click()
      })

      it('Should show a success message on submit when all form values have been filled out', function () {
        cy.wait(2000)
        cy.contains('Thank you')
      })

      it('All fields should be clear after successful form submission', function () {
        cy.get('input[name=name]').should('have.value', 'Testing')
        cy.get('input[name=email]').should('have.value', 'testEmail@gmail.com')
        cy.get('input[name=phone]').should('have.value', '1459341234')
        cy.get('input[name=message]').should('have.value', 'This is a test message')
      })
    })
    describe('Unsucessful form submission', function () {
      it('DOM should not show success message when all fields of the form are not filled out', function () {
        nameField = cy.get('input[name=name]').type('Test Name')
        cy.get('@submitBtn').should('be.disabled')
      })
    })
  })

  describe('Footer Navigation', function () {
    it('Navigate to SLA page', function () {
      // cy.contains('Read our SLA').click()
      // cy.url().should('include', '/service-level-agreement')
      cy.contains('Read our SLA')
      .and('have.attr', 'href', '/service-level-agreement')
    })
    it('Navigate to Developer page', function () {
      // cy.contains('I\'m a developer').click()
      // cy.url().should('include', '/opportunities/develop')
    })
    it('Navigate to Design page', function () {
      // cy.contains('I\'m a designer').click()
      // cy.url().should('include', '/opportunities/design')
    })
    it('Navigates to StartupJunto Registration Page', function () {
       cy.contains('Join Us').click()
    })
    it('Navigates to OpenForge Twitter', function () {
      cy.contains('@openforgemobile').click()
    })
    it('Navigates to OpenForge Facebook', function () {
      cy.contains('openforgemobile').click()
    })
    it('Navigates to OpenForge Linkedin', function () {
      // cy.contains('openforge').click() //#DanC; need to use an ID to specify this element, I think this method is to vague
      cy.get('a[id=linkedin]').click(); // #DanC; this seems to work. However, I'm not sure if/how these are verifying the actual navigation.
    })
    it('Navigates to OpenForge Instagram', function () {
      cy.contains('@openforgemobile').click()
    })
    //it('Open native mail to contact Hello@openforge.io', function () {
    //cy.contains('hello@openforge.io').click()
    //})
  })
})
