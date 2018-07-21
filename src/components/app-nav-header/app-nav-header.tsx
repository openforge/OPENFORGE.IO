import { Component } from '@stencil/core';
import {
  translate,
  TranslationService,
} from '../../services/translation.service';

@Component({
  tag: 'app-nav-header',
  styleUrl: 'app-nav-header.scss',
})
export class AppNavHeader {
  constructor() {
    const translationService = new TranslationService();
    translationService.init('en');
  }

  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-dark align-items-lg-end fixed-top">
        <div class="container">
          <div class="navbar-brand">
            <h1>
              <app-img
                class="img-fluid"
                src="/assets/logo-openforge.png"
                alt={translate('nav.header.img.alt')}
              />
            </h1>
          </div>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon" />
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-md-auto">
              <li class="nav-item" data-target="#navbarSupportedContent">
                <stencil-route-link
                  url="/"
                  exact={true}
                  anchorClass="nav-link"
                  activeClass="active"
                >
                  {translate('nav.links.home')}
                </stencil-route-link>
              </li>
              <li class="nav-item" data-target="#navbarSupportedContent">
                <stencil-route-link
                  url="/about"
                  anchorClass="nav-link"
                  activeClass="active"
                >
                  {translate('nav.links.about')}
                </stencil-route-link>
              </li>
              {/* <li class="nav-item" data-target="#navbarSupportedContent">
                <stencil-route-link
                  url="/services"
                  anchorClass="nav-link"
                  activeClass="active"
                >
                  Services
                </stencil-route-link>
              </li> */}
              <li class="nav-item" data-target="#navbarSupportedContent">
                <stencil-route-link
                  url="/contact"
                  anchorClass="nav-link"
                  activeClass="active"
                >
                  {translate('nav.links.contact')}
                </stencil-route-link>
              </li>
              <li class="nav-item" data-target="#navbarSupportedContent">
                <stencil-route-link
                  url="/opportunities"
                  anchorClass="nav-link"
                  activeClass="active"
                >
                  {translate('nav.links.opportunities')}
                </stencil-route-link>
              </li>
              <li class="nav-item" data-target="#navbarSupportedContent">
                <a
                  class="nav-link"
                  href="https://github.com/openforge"
                  title={translate('nav.links.github')}
                  target="_blank"
                  rel="noopener"
                >
                  <div class="fab fa-github" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
