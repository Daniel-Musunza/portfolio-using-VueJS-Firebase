<template>
 
    <div class="hfeed site" id="page">
    <header class="site-header header-main-layout-1 ast-primary-menu-enabled ast-hide-custom-menu-mobile ast-builder-menu-toggle-icon ast-mobile-header-inline" id="masthead" itemtype="https://schema.org/WPHeader" itemscope="itemscope" itemid="#masthead">
    <div id="ast-desktop-header" data-toggle-type="dropdown">
    <div class="ast-main-header-wrap main-header-bar-wrap ">
    <div class="ast-primary-header-bar ast-primary-header main-header-bar site-header-focus-item" data-section="section-primary-header-builder">
    <div class="site-primary-header-wrap ast-builder-grid-row-container site-header-focus-item ast-container" data-section="section-primary-header-builder">
    <div class="ast-builder-grid-row ast-builder-grid-row-has-sides ast-builder-grid-row-no-center">
    <div class="site-header-primary-section-left site-header-section ast-flex site-header-section-left">
    <div class="ast-builder-layout-element ast-flex site-header-focus-item" data-section="title_tagline">
    <div class="site-branding ast-site-identity" itemtype="https://schema.org/Organization" itemscope="itemscope">
    <h3 class="site-logo-img"><router-link to="/log-in" >/MF Musunza Festus</router-link></h3> </div>
    
    </div>
    </div>
    <div class="site-header-primary-section-right site-header-section ast-flex ast-grid-right-section">
    <div class="ast-builder-menu-1 ast-builder-menu ast-flex ast-builder-menu-1-focus-item ast-builder-layout-element site-header-focus-item" data-section="section-hb-menu-1">
    <div class="ast-main-header-bar-alignment"><div class="main-header-bar-navigation"><nav class="site-navigation ast-flex-grow-1 navigation-accessibility site-header-focus-item" id="primary-site-navigation" aria-label="Site Navigation" itemtype="https://schema.org/SiteNavigationElement" itemscope="itemscope"><div class="main-navigation ast-inline-flex"><ul id="ast-hf-menu-1" class="main-header-menu ast-menu-shadow ast-nav-menu ast-flex  submenu-with-border ast-menu-hover-style-overline  stack-on-mobile"><li id="menu-item-22" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-6 current_page_item menu-item-22"><a href="/" aria-current="page" class="menu-link">Home</a></li>
    <li id="menu-item-20" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-20"><a href="#services" class="menu-link">Services</a></li>
    <li id="menu-item-19" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-19"><a href="#portfolio" class="menu-link">Portfolio</a></li>
    <li id="menu-item-18" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-18"><a href="#colophon" class="menu-link">Contact</a></li>
    <li id="menu-item-18" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-18">  <router-link :to="{ name: 'Articles'}" class="menu-link">Articles</router-link></li>
    <li v-if="user" id="menu-item-18" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-18"><router-link to="/settings" class="menu-link">Settings</router-link></li>
    
  </ul></div></nav></div></div> </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    <div class="ast-desktop-header-content content-align-flex-start ">
    </div>
    </div> 
    <div id="ast-mobile-header" class="ast-mobile-header-wrap " data-type="dropdown">
    <div class="ast-main-header-wrap main-header-bar-wrap">
    <div class="ast-primary-header-bar ast-primary-header main-header-bar site-primary-header-wrap site-header-focus-item ast-builder-grid-row-layout-default ast-builder-grid-row-tablet-layout-default ast-builder-grid-row-mobile-layout-default" data-section="section-primary-header-builder">
    <div class="ast-builder-grid-row ast-builder-grid-row-has-sides ast-builder-grid-row-no-center">
    <div class="site-header-primary-section-left site-header-section ast-flex site-header-section-left">
    <div class="ast-builder-layout-element ast-flex site-header-focus-item" data-section="title_tagline">
    <div class="site-branding ast-site-identity" itemtype="https://schema.org/Organization" itemscope="itemscope">
    <h4 class="site-logo-img"><router-link to="/log-in" >/MF Musunza Festus</router-link></h4> </div>
    
    </div>
    </div>
    <div class="site-header-primary-section-right site-header-section ast-flex ast-grid-right-section">
    <div class="ast-builder-layout-element ast-flex site-header-focus-item" data-section="section-header-mobile-trigger">
    <div class="ast-button-wrap">
    <button type="button" @click="toggleMobileNav()" class="menu-toggle main-header-menu-toggle ast-mobile-menu-trigger-minimal" aria-expanded="false">
    <span class="screen-reader-text">Main Menu</span>
    <span class="mobile-menu-toggle-icon">
    <span class="ahfb-svg-iconset ast-inline-flex svg-baseline"><svg class='ast-mobile-svg ast-menu-svg' fill='currentColor' version='1.1' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M3 13h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1zM3 7h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1zM3 19h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1z'></path></svg></span><span class="ahfb-svg-iconset ast-inline-flex svg-baseline"><svg class='ast-mobile-svg ast-close-svg' fill='currentColor' version='1.1' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M5.293 6.707l5.293 5.293-5.293 5.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l5.293-5.293 5.293 5.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-5.293-5.293 5.293-5.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5.293 5.293-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z'></path></svg></span> </span>
    </button>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    <div class="ast-mobile-header-content content-align-flex-start " v-if="mobileNav">
    <div class="ast-builder-menu-mobile ast-builder-menu ast-builder-menu-mobile-focus-item ast-builder-layout-element site-header-focus-item" data-section="section-header-mobile-menu">
    <div class="ast-main-header-bar-alignment"><div class="main-header-bar-navigation"><nav class="site-navigation ast-flex-grow-1 navigation-accessibility site-header-focus-item" id="ast-mobile-site-navigation" aria-label="Site Navigation" itemtype="https://schema.org/SiteNavigationElement" itemscope="itemscope"><div class="main-navigation"><ul id="ast-hf-mobile-menu" class="main-header-menu ast-nav-menu ast-flex  submenu-with-border astra-menu-animation-fade  stack-on-mobile"><li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-6 current_page_item menu-item-22"><a href="#" aria-current="page" class="menu-link">Home</a></li>
    <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-20"><a href="#services" class="menu-link">Services</a></li>
    <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-19"><a href="#portfolio" class="menu-link">Portfolio</a></li>
    <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-18"><a href="#colophon" class="menu-link">Contact</a></li>
    <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-18"><router-link :to="{ name: 'Articles'}" class="menu-link">Articles</router-link></li>
    <li v-if="user" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-18"><router-link to="/settings" class="menu-link">Settings</router-link></li>  
  </ul></div></nav></div></div> </div>
    </div>
    </div>
    </header>
    <div id="content" class="site-content">
    <div class="ast-container">
    <div id="primary" class="content-area primary">
    <main id="main" class="site-main">
    <article class="post-6 page type-page status-publish ast-article-single" id="post-6"  itemscope="itemscope">
    <header class="entry-header ast-no-thumbnail ast-no-title ast-header-without-markup">
    </header> 
    <div class="entry-content clear" itemprop="text">
    <div data-elementor-type="wp-page" data-elementor-id="6" class="elementor elementor-6">
    <section class="elementor-section elementor-top-section elementor-element elementor-element-707d1c7 elementor-section-height-min-height elementor-reverse-mobile elementor-section-boxed elementor-section-height-default elementor-section-items-middle" data-id="707d1c7" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
    <div class="elementor-background-overlay"></div>
    <div class="elementor-container elementor-column-gap-no">
    <div class="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-b9719c7" data-id="b9719c7" data-element_type="column">
    <div class="elementor-widget-wrap elementor-element-populated">
    <div class="elementor-element elementor-element-c0b3cbd elementor-widget elementor-widget-heading" data-id="c0b3cbd" data-element_type="widget" data-widget_type="heading.default">
    <div class="elementor-widget-container">
    <h6 class="elementor-heading-title elementor-size-default">Hello, my name is</h6> </div>
    </div>
    <div class="elementor-element elementor-element-46cf36b elementor-widget-divider--view-line elementor-widget elementor-widget-divider" data-id="46cf36b" data-element_type="widget" data-widget_type="divider.default">
    <div class="elementor-widget-container">
    <div class="elementor-divider">
    <span class="elementor-divider-separator">
    </span>
    </div>
    </div>
    </div>
    <div class="elementor-element elementor-element-3ef9672 elementor-widget elementor-widget-heading" data-id="3ef9672" data-element_type="widget" data-widget_type="heading.default">
    <div class="elementor-widget-container">
    <h1 class="elementor-heading-title elementor-size-default">Musunza Festus</h1> </div>
    </div>
    <div class="elementor-element elementor-element-a3b6933 elementor-widget elementor-widget-heading" data-id="a3b6933" data-element_type="widget" data-widget_type="heading.default">
    <div class="elementor-widget-container">
    <h3 class="elementor-heading-title elementor-size-default">Full-Stack Web Developer</h3> </div>
    </div>
    <div class="elementor-element elementor-element-17bbd1a elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="17bbd1a" data-element_type="widget" data-widget_type="icon-list.default">
    <div class="elementor-widget-container">
    <ul class="elementor-icon-list-items">
    <li class="elementor-icon-list-item">
    <span class="elementor-icon-list-icon">
    <i aria-hidden="true" class="fas fa-envelope-square"></i> </span>
    <span class="elementor-icon-list-text"><a href="mailto:musunzafestus2019@gmail.com">musunzafestus2019@gmail.com</a>
    </span>
    </li>
    <li class="elementor-icon-list-item">
    <span class="elementor-icon-list-icon">
    <i aria-hidden="true" class="fas fa-phone-square-alt"></i> </span>
    <span class="elementor-icon-list-text"><a href="tel:+254794711950" >+254794711950</a></span>
    </li>
    <li class="elementor-icon-list-item">
      <span class="elementor-icon-list-icon">
      <i aria-hidden="true" class="fa-brands fa-github"></i>
      </span>
      
      <span class="elementor-icon-list-text"><a href="https://github.com/Daniel-Musunza">https://github.com/Daniel-Musunza</a></span>
      
      </li>
    </ul>
    </div>
    </div>
    </div>
    </div>
    <div class="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-c26d6a1" data-id="c26d6a1" data-element_type="column">
    <div class="elementor-widget-wrap elementor-element-populated">
    <div class="elementor-element elementor-element-c89ec5c elementor-widget elementor-widget-image" data-id="c89ec5c" data-element_type="widget" data-widget_type="image.default">
    <div class="elementor-widget-container">
    <img decoding="async" width="670" height="670" src="@/assets/profile.jpg" class="attachment-full size-full wp-image-23" alt="" loading="lazy"  /> </div>
    </div>
    </div>
    </div>
    </div>
    </section>
    <section id="services" style="margin-top:5px;" class="elementor-section elementor-top-section elementor-element elementor-element-6b1c0c2 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="6b1c0c2" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
    <div class="elementor-container elementor-column-gap-no">
    <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-972bf78" data-id="972bf78" data-element_type="column">
    <div class="elementor-widget-wrap elementor-element-populated">
    <div class="elementor-element elementor-element-d96ac04 elementor-widget elementor-widget-heading" data-id="d96ac04" data-element_type="widget" data-widget_type="heading.default">
    <div class="elementor-widget-container">
    <h2 class="elementor-heading-title elementor-size-default">What I do</h2> </div>
    </div>
    <div class="elementor-element elementor-element-f75ee9b elementor-widget__width-initial elementor-widget-tablet__width-initial elementor-widget-mobile__width-inherit elementor-widget elementor-widget-text-editor" data-id="f75ee9b" data-element_type="widget" data-widget_type="text-editor.default">
    <div class="elementor-widget-container">
    From understanding your requirements, designing a blueprint and delivering the final product, I do everything that falls in between these lines.
    </div>
    </div>
    <div class="elementor-element elementor-element-c0ad96f elementor-widget__width-auto elementor-view-default elementor-widget elementor-widget-icon" data-id="c0ad96f" data-element_type="widget" data-widget_type="icon.default">
    <div class="elementor-widget-container">
    <div class="elementor-icon-wrapper">
    <a class="elementor-icon elementor-animation-float" href="#">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048"><path d="M6.125 1088h1797.89l-402.976 403 89.994 90L2048 1024l-556.966-557-89.994 90 402.976 403H6.125v128z"></path></svg> </a>
    </div>
    </div>
    </div>
    <section class="elementor-section elementor-inner-section elementor-element elementor-element-1f0145f elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="1f0145f" data-element_type="section">
    <div class="elementor-container elementor-column-gap-no">
      <div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-38531b1" data-id="38531b1" data-element_type="column">
          <div class="elementor-widget-wrap elementor-element-populated">
          <div class="elementor-element elementor-element-c621ccf elementor-position-left elementor-view-default elementor-mobile-position-top elementor-vertical-align-top elementor-widget elementor-widget-icon-box" data-id="c621ccf" data-element_type="widget" data-widget_type="icon-box.default">
          <div class="elementor-widget-container">
          <div class="elementor-icon-box-wrapper">
          <div class="elementor-icon-box-icon">
          <span class="elementor-icon elementor-animation-">
          <i aria-hidden="true" class="fas fa-laptop-code"></i> </span>
          </div>
          <div class="elementor-icon-box-content">
          <h4 class="elementor-icon-box-title">
          <span>
          Web Development </span>
          </h4>
          <p class="elementor-icon-box-description">
          If you are looking for a developer who’ll take over the research and development of your website, I am a well-established professional to help you with this.
          </p>
          </div>
          </div>
          </div>
          </div>
          </div>
      </div>
      <div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-cba12c4" data-id="cba12c4" data-element_type="column">
          <div class="elementor-widget-wrap elementor-element-populated">
          <div class="elementor-element elementor-element-84f0d2b elementor-position-left elementor-view-default elementor-mobile-position-top elementor-vertical-align-top elementor-widget elementor-widget-icon-box" data-id="84f0d2b" data-element_type="widget" data-widget_type="icon-box.default">
          <div class="elementor-widget-container">
          <div class="elementor-icon-box-wrapper">
          <div class="elementor-icon-box-icon">
          <span class="elementor-icon elementor-animation-">
          <i aria-hidden="true" class="fas fa-pencil-ruler"></i> </span>
          </div>
          <div class="elementor-icon-box-content">
          <h4 class="elementor-icon-box-title">
          <span>
          UI/UX Design </span>
          </h4>
          <p class="elementor-icon-box-description">
          An effective UI/UX is what captures attention and spreads a clear message. I make sure the design is innovative and neat with all of this.
          </p>
          </div>
          </div>
          </div>
          </div>
          </div>
     </div>
   
    <div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-67bbcc7" data-id="67bbcc7" data-element_type="column">
    <div class="elementor-widget-wrap elementor-element-populated">
    <div class="elementor-element elementor-element-c248822 elementor-position-left elementor-view-default elementor-mobile-position-top elementor-vertical-align-top elementor-widget elementor-widget-icon-box" data-id="c248822" data-element_type="widget" data-widget_type="icon-box.default">
    <div class="elementor-widget-container">
    <div class="elementor-icon-box-wrapper">
    <div class="elementor-icon-box-icon">
    <span class="elementor-icon elementor-animation-">
      <i class="fa-solid fa-pen"></i></span>
    </div>
    <div class="elementor-icon-box-content">
    <h4 class="elementor-icon-box-title">
    <span>
    Accademic and Technical Writing</span>
    </h4>
    <p class="elementor-icon-box-description">
    If you are looking for a Quality Writer to help you in your Assignment, I can do it for you in due time at an affordable price.
    </p>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </section>
    </div>
    </div>
    </div>
    </section>
    <section class="elementor-section elementor-top-section elementor-element elementor-element-b621b63 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="b621b63" data-element_type="section">
    <div class="elementor-container elementor-column-gap-no">
      <div class="elementor-column elementor-col-50 elementor-top-column elementor-element">
        <div class="elementor-widget-wrap elementor-element-populated">
          <div class="elementor-element elementor-widget elementor-widget-heading">
            <div class="elementor-widget-container">
              <h2 class="elementor-heading-title elementor-size-default">Skills</h2>
            </div>
          </div>
          <div v-for="(skill, index) in skills" :key="index" class="elementor-element elementor-widget elementor-widget-progress">
            <div class="elementor-widget-container">
              <span class="elementor-title">{{ skill.name }}</span>
              <div class="elementor-progress-wrapper" role="progressbar" :aria-valuemin="0" :aria-valuemax="100" :aria-valuenow="skill.percentage" aria-valuetext="">
                <div class="elementor-progress-bar" :data-max="skill.percentage" :style="{width: skill.percentage + '%', backgroundColor: '#31a8ff'}">
                  <span class="elementor-progress-text"></span>
                  <span class="elementor-progress-percentage">{{ skill.percentage }}%</span>
                </div>
              </div>
            </div>
          </div>
      <div class="elementor-button-wrapper">
    <RouterLink to="/skills" class="elementor-button-link elementor-button elementor-size-sm" role="button" >
    
    <span class="elementor-button-text" style="margin-left: 50px;">See More</span>
 
    </RouterLink>
    </div>
      </div>
      </div>
      <div class="elementor-column elementor-col-50 elementor-top-column elementor-element">
      <div class="elementor-widget-wrap elementor-element-populated">
    <div class="elementor-element elementor-element-33b6607 elementor-widget elementor-widget-heading" data-id="33b6607" data-element_type="widget" data-widget_type="heading.default">
  
    <h2 class="elementor-heading-title elementor-size-default">My Experience</h2> </div>
    
    <div  
    v-for="(oneExperience, index) in experience.slice(0,3)"
    :key="index"
    >
      
        <section style="border-radius:5px; margin: 10px; padding: 10px; background-color:white" class="elementor-section elementor-inner-section elementor-element elementor-element-ef5db0a elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="ef5db0a" data-element_type="section">
        <div class="elementor-container elementor-column-gap-no">
        <div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-2493714" data-id="2493714" data-element_type="column">
        <div class="elementor-widget-wrap elementor-element-populated">
        <div class="elementor-element elementor-element-675a195 elementor-widget elementor-widget-heading" data-id="675a195" data-element_type="widget" data-widget_type="heading.default">
        <div class="elementor-widget-container">
        <h6 class="elementor-heading-title elementor-size-default">{{oneExperience.duration}}</h6> </div>
        </div>
        <div class="elementor-element elementor-element-ceecad1 elementor-widget-divider--view-line_icon elementor-widget-divider--element-align-right elementor-view-default elementor-widget elementor-widget-divider" data-id="ceecad1" data-element_type="widget" data-widget_type="divider.default">
        <div class="elementor-widget-container">
        <div class="elementor-divider">
        <span class="elementor-divider-separator">
        <div class="elementor-icon elementor-divider__element">
        <i aria-hidden="true" class="fas fa-chevron-circle-right"></i></div>
        </span>
        </div>
        </div>
        </div>
        <div class="elementor-element elementor-element-8910464 elementor-widget elementor-widget-text-editor" data-id="8910464" data-element_type="widget" data-widget_type="text-editor.default">
        <div class="elementor-widget-container">
        <p>{{oneExperience.company}}</p> </div>
        </div>
        </div>
        </div>
        <div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-8ad9239" data-id="8ad9239" data-element_type="column">
        <div class="elementor-widget-wrap elementor-element-populated">
        <div class="elementor-element elementor-element-6f73cad elementor-position-left elementor-vertical-align-top elementor-widget elementor-widget-image-box" data-id="6f73cad" data-element_type="widget" data-widget_type="image-box.default">
        <div class="elementor-widget-container">
        <div class="elementor-image-box-wrapper"><div class="elementor-image-box-content"><h4 class="elementor-image-box-title">{{oneExperience.role}}</h4><p class="elementor-image-box-description">{{ oneExperience.responsibility }}
        </p></div></div> </div>
        </div>
        </div>
        </div>
        </div>
        </section>
       
    </div>
    <div class="elementor-button-wrapper">
    <RouterLink to="/experience" class="elementor-button-link elementor-button elementor-size-sm" role="button" >
    
    <span class="elementor-button-text" style="margin-left: 50px;">See More</span>
 
    </RouterLink>
    </div>
    </div>
      </div>

    </div>
    </section>
    <section class="elementor-section elementor-top-section elementor-element elementor-element-f2b5de1 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="f2b5de1" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
    <div class="elementor-container elementor-column-gap-no">
    <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-2feb0b9" data-id="2feb0b9" data-element_type="column">
    <div class="elementor-widget-wrap elementor-element-populated">
    <div id="portfolio" class="elementor-element elementor-element-fbf2204 elementor-widget__width-auto elementor-widget elementor-widget-heading" data-id="fbf2204" data-element_type="widget" data-widget_type="heading.default">
    <div class="elementor-widget-container">
    <h2 class="elementor-heading-title elementor-size-default">Portfolio</h2> </div>
    </div>
    <div class="elementor-element elementor-element-32fc134 elementor-widget__width-auto elementor-view-default elementor-widget elementor-widget-icon" data-id="32fc134" data-element_type="widget" data-widget_type="icon.default">
    <div class="elementor-widget-container">
    <div class="elementor-icon-wrapper">
    <a class="elementor-icon elementor-animation-float" href="#">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048"><path d="M6.125 1088h1797.89l-402.976 403 89.994 90L2048 1024l-556.966-557-89.994 90 402.976 403H6.125v128z"></path></svg> </a>
    </div>
    </div>
    </div>
    <div class="elementor-element elementor-element-5ccc42b elementor-widget elementor-widget-image-gallery" data-id="5ccc42b" data-element_type="widget" data-widget_type="image-gallery.default">
    <div class="elementor-widget-container">
      <div style="display: flex; flex-direction: row; flex-wrap: wrap; justify-content: space-between;">
        <h3 style="margin-left: 30px">Live Websites</h3>
        <button ><router-link to="/websites">see more</router-link></button>
        </div>
        <section id="product1">
          <div class="pro-container" style="display:flex">
            <div class='pro'
            v-for="(website, index) in websites.slice(0,3)"
            :key="index"
            :website="website"
           >
           <a :href="website.link">
                
                <img width="370" height="474" :src="website.webCoverPhoto" class="attachment-full size-full" alt="" decoding="async" loading="lazy"  sizes="(max-width: 370px) 100vw, 370px" />
                <p><a :href="website.link">{{website.link}}</a></p>
           </a>
            </div>
         
    
      </div>
      </section>
    <div style="display: flex; flex-direction: row; flex-wrap: wrap; justify-content: space-between;">
    <h3 style="margin-left: 30px">Designs</h3>
    <button ><router-link to="/designs">see more</router-link></button>
    </div>
    <div id="product1">
      <div class="pro-container" style="display:flex">
        <div class='pro'
      v-for="(design, index) in designs.slice(0,4)"
       :key="index" 
      >
     
          <img width="370" height="342" :src="design.designCoverPhoto" class="attachment-full size-full" alt=""  />
      </div>
      </div>
      </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </section>
    </div>
    </div>
    </article>
    </main>
    </div>
    </div> 
    </div>
    <footer class="site-footer" id="colophon" itemtype="https://schema.org/WPFooter" itemscope="itemscope" itemid="#colophon">
    <div class="site-primary-footer-wrap ast-builder-grid-row-container site-footer-focus-item ast-builder-grid-row-3-lheavy ast-builder-grid-row-tablet-3-equal ast-builder-grid-row-mobile-full ast-footer-row-inline ast-footer-row-tablet-stack ast-footer-row-mobile-stack" data-section="section-primary-footer-builder">
    <div class="ast-builder-grid-row-container-inner">
    <div class="ast-builder-footer-grid-columns site-primary-footer-inner-wrap ast-builder-grid-row">
    <div class="site-footer-primary-section-1 site-footer-section site-footer-section-1">
    <aside class="footer-widget-area widget-area site-footer-focus-item footer-widget-area-inner" data-section="sidebar-widgets-footer-widget-2" aria-label="Footer Widget 2">
    <section id="custom_html-3" class="widget_text widget widget_custom_html"><h2 class="widget-title">Thanks to the Internet, Proud of working for you remotely .</h2><div class="textwidget custom-html-widget"><h3><a href="https://wa.me/254794711950"><span style="text-decoration: underline">Whatsapp Me</span></a>
    </h3></div></section> </aside>
    </div>
    <div class="site-footer-primary-section-2 site-footer-section site-footer-section-2">
    </div>
    <div class="site-footer-primary-section-3 site-footer-section site-footer-section-3">
    <aside class="footer-widget-area widget-area site-footer-focus-item footer-widget-area-inner" data-section="sidebar-widgets-footer-widget-3" aria-label="Footer Widget 3">
    <section id="nav_menu-5" class="widget widget_nav_menu"><h2 class="widget-title">Social</h2><nav class="menu-social-container" aria-label="Social"><ul id="menu-social" class="menu"><li id="menu-item-119" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-119"><a href="https://twitter.com/KijanaFesto" class="menu-link"><i class="fa-brands fa-twitter"></i> Twitter</a></li>
    <li id="menu-item-120" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-120"><a href="https://www.facebook.com/profile.php?id=100068127648508" class="menu-link"><i class="fa-brands fa-facebook"></i> facebook</a></li>
    <li id="menu-item-121" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-121"><a href="#" class="menu-link"><i class="fa-brands fa-tiktok"></i> TikTok</a></li>
    <li id="menu-item-122" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-122"><a href="https://www.linkedin.com/in/musunza-festus-467a49254/" class="menu-link"> <i class="fa-brands fa-linkedin-in"></i> LinkedIn</a></li>
    </ul></nav></section> </aside>
    <aside class="footer-widget-area widget-area site-footer-focus-item footer-widget-area-inner" data-section="sidebar-widgets-footer-widget-1" aria-label="Footer Widget 1">
    <section id="nav_menu-3" class="widget widget_nav_menu"><h2 class="widget-title">Services</h2><nav class="menu-services-container" aria-label="Services"><ul id="menu-services" class="menu"><li id="menu-item-124" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-124"><a href="#" class="menu-link">UI/UX Design</a></li>
    <li id="menu-item-125" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-125"><a href="#" class="menu-link">Web Development</a></li>
    <li id="menu-item-126" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-126"><a href="#" class="menu-link">Accademic Writing</a></li>
    </ul></nav></section> </aside>
    </div>
    </div>
    </div>
    </div>
    <div class="site-below-footer-wrap ast-builder-grid-row-container site-footer-focus-item ast-builder-grid-row-full ast-builder-grid-row-tablet-full ast-builder-grid-row-mobile-full ast-footer-row-stack ast-footer-row-tablet-stack ast-footer-row-mobile-stack" data-section="section-below-footer-builder">
    <div class="ast-builder-grid-row-container-inner">
    <div class="ast-builder-footer-grid-columns site-below-footer-inner-wrap ast-builder-grid-row">
    <div class="site-footer-below-section-1 site-footer-section site-footer-section-1">
    <div class="ast-builder-layout-element ast-flex site-footer-focus-item ast-footer-copyright" data-section="section-footer-builder">
    <div class="ast-footer-copyright"><p>Copyright &copy; 2023 Musunza Festus |Full-stack Developer</p>
    </div> </div>
    </div>
    </div>
    </div>
    </div>
    </footer>
    </div>
</template>

<script>


import { mapState, mapActions } from 'vuex';
export default {
  name: 'HomeView',
  data () {
        return {
            mobileNav: null,
           
        }
    },
  methods: {
    ...mapActions(['getExperience',
                  'getSkills','getWebsites','getDesigns']),
        toggleMobileNav(){
            this.mobileNav= !this.mobileNav
        },
  },
  computed: {
    user() {
          return this.$store.state.user.loggedIn;
     },
     ...mapState(['experience','skills', 'websites','designs']),
id() {
  return this.id;
}
  },
  created() {
    this.getExperience();
    this.getSkills();
    this.getWebsites();
    this.getDesigns();
  }
 
}
</script>
<style scoped>

#product1 .pro-container {
  display:flex;
  justify-content: space-between;
  padding-top: 20px;
  flex-wrap: wrap;
}
#product1 .pro{

  width:23%;
  min-width:250px;
  padding: 10px 12px;
  border: 1px solid #cce7d0;
  border-radius: 25px;
  cursor: pointer;
  box-shadow: 20px 20px 30px rgba(0, 0, 0, 0.02);
  margin: 15px 0;
  transition: 0.2s ease;
  position: relative;
}
#product1 .pro:hover {
  box-shadow: 20px 20px 30px rgba(0, 0, 0, 0.06);
}
#product1 .pro img{
  width:100%;
  height:auto;
  border-radius: 10px;
}
#product1 .pro .des p{
  color: #606063;
  font-size: 12px;
}
@media (max-width: 477px) {
  #product1 .pro {
     width: 100%;

 }
}
</style>