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
    <li id="menu-item-20" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-20"><a href="../#services" class="menu-link">Services</a></li>
    <li id="menu-item-19" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-19"><a href="../#portfolio" class="menu-link">Portfolio</a></li>
    <li id="menu-item-18" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-18"><a href="../#colophon" class="menu-link">Contact</a></li>
    <li id="menu-item-18" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-18"><router-link  to="/documentations" class="menu-link">Easy Web Development</router-link></li>
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
    <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-20"><a href="../#services" class="menu-link">Services</a></li>
    <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-19"><a href="../#portfolio" class="menu-link">Portfolio</a></li>
    <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-18"><a href="../#colophon" class="menu-link">Contact</a></li>
    <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-18"><router-link  to="/documentations" class="menu-link">Easy Web Development</router-link></li>
    <li v-if="user" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-18"><router-link to="/settings" class="menu-link">Settings</router-link></li>  
  </ul></div></nav></div></div> </div>
    </div>
    </div>
    </header>
 
    <div id="content" class="site-content">
       
    <div class="ast-container">
    <form class="form-horizontal form-simple" action="" style="margin-top:50px;">
        <button  class="btn blue-bg btn-lg btn-block"  @click="toggleEditor()">
            Open Editor
         </button>
      </form>
        <div v-if="editor" class="editor">
         <vue-editor :editorOptions="editorSettings" useCustomImageHandler @image-added="imageHandler" />
        </div>
    </div> 
    </div>
    <footer class="site-footer" id="colophon" itemtype="https://schema.org/WPFooter" itemscope="itemscope" itemid="#colophon">
    <div class="site-primary-footer-wrap ast-builder-grid-row-container site-footer-focus-item ast-builder-grid-row-3-lheavy ast-builder-grid-row-tablet-3-equal ast-builder-grid-row-mobile-full ast-footer-row-inline ast-footer-row-tablet-stack ast-footer-row-mobile-stack" data-section="section-primary-footer-builder">
    <div class="ast-builder-grid-row-container-inner">
    <div class="ast-builder-footer-grid-columns site-primary-footer-inner-wrap ast-builder-grid-row">
    <div class="site-footer-primary-section-1 site-footer-section site-footer-section-1">
    <aside class="footer-widget-area widget-area site-footer-focus-item footer-widget-area-inner" data-section="sidebar-widgets-footer-widget-2" aria-label="Footer Widget 2">
    <section id="custom_html-3" class="widget_text widget widget_custom_html"><h2 class="widget-title">Thanks to the Internet, Proud of working for you remotely .</h2><div class="textwidget custom-html-widget"><h1><a href="https://wa.me/254794711950"><span style="text-decoration: underline">Get in touch</span></a>
    </h1></div></section> </aside>
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


export default {
 data(){
    return{
        editor: null,
        mobileNav: null,
          
    }
 },
 methods: {
    toggleEditor(){
        this.editor = !this.editor;
    },
    toggleMobileNav(){
            this.mobileNav= !this.mobileNav
        },
 }
 
 
}
</script>
<style scoped>
 .editor {
    height:60vh;
    margin-top: 20px;
    display: flex;
    justify-content: center;
    background-color: #fff;
    width:100%;
  }
  .quillWrapper {
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
  }
 
  @media (max-width: 799px) {
}
</style>