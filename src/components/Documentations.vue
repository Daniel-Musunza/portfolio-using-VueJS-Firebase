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
    <!-- <div class="site-branding ast-site-identity" itemtype="https://schema.org/Organization" itemscope="itemscope">
    <h3 class="site-logo-img"><router-link to="/log-in" >/MF Musunza Festus</router-link></h3> </div> -->
    
    </div>
    </div>
    <div class="site-header-primary-section-right site-header-section ast-flex ast-grid-right-section">
    <div class="ast-builder-menu-1 ast-builder-menu ast-flex ast-builder-menu-1-focus-item ast-builder-layout-element site-header-focus-item" data-section="section-hb-menu-1">
    <div class="ast-main-header-bar-alignment"><div class="main-header-bar-navigation"><nav class="site-navigation ast-flex-grow-1 navigation-accessibility site-header-focus-item" id="primary-site-navigation" aria-label="Site Navigation" itemtype="https://schema.org/SiteNavigationElement" itemscope="itemscope"><div class="main-navigation ast-inline-flex"><ul id="ast-hf-menu-1" class="main-header-menu ast-menu-shadow ast-nav-menu ast-flex  submenu-with-border ast-menu-hover-style-overline  stack-on-mobile"><li id="menu-item-22" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-6 current_page_item menu-item-22"><a href="/" aria-current="page" class="menu-link">Home</a></li>
    <li id="menu-item-20" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-20"><a href="../#services" class="menu-link">Services</a></li>
    <li id="menu-item-19" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-19"><a href="../#portfolio" class="menu-link">Portfolio</a></li>
    <li id="menu-item-18" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-18"><a href="../#colophon" class="menu-link">Contact</a></li>
    <li id="menu-item-18" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-18">  <router-link :to="{ name: 'Documentations', params: {id:  this.id}}" class="menu-link">Documentations</router-link></li>
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
 
    </header>
 
    <div id="content" class="site-content">
       
    <div class="ast-container" >
   
      <div class="sidebar" >
        <div class="sidebar-brand">
            <h5 style="font-weight:400px">Full-Stack Web Developer Guide</h5>
            <span  @click="toggleSidebar()" >From Zero to Hero Very Fast  <span v-if="sidebar" style="  background-color:rgb(50, 129, 247); color: #fff; border-radius:5px; padding-left: 13px; text-align: center;">close</span> <span v-if="!sidebar" style="  background-color:rgb(50, 129, 247); color: #fff; border-radius:5px; padding-left: 13px; text-align: center;">List of all topics</span></span>
     
        </div>
        <div class="sidebar-left">
          <button type="button" @click="toggleMobileNav()">
            <i class="fa-solid fa-bars" style="font-size: 30px; color: #fff; padding: 5px; background: rgb(30, 129, 222); "></i>
          </button>
        </div>
        <div class="ast-mobile-header-content content-align-flex-start " v-if="mobileNav">
          <div class="ast-builder-menu-mobile ast-builder-menu ast-builder-menu-mobile-focus-item ast-builder-layout-element site-header-focus-item" data-section="section-header-mobile-menu">
          <div class="ast-main-header-bar-alignment"><div class="main-header-bar-navigation"><nav class="site-navigation ast-flex-grow-1 navigation-accessibility site-header-focus-item" id="ast-mobile-site-navigation" aria-label="Site Navigation" itemtype="https://schema.org/SiteNavigationElement" itemscope="itemscope"><div class="main-navigation"><ul id="ast-hf-mobile-menu" class="main-header-menu ast-nav-menu ast-flex  submenu-with-border astra-menu-animation-fade  stack-on-mobile"><li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-6 current_page_item menu-item-22"><a href="#" aria-current="page" class="menu-link">Home</a></li>
          <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-20"><a href="../#services" class="menu-link">Services</a></li>
          <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-19"><a href="../#portfolio" class="menu-link">Portfolio</a></li>
          <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-18"><a href="../#colophon" class="menu-link">Contact</a></li>
          <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-18">  <router-link :to="{ name: 'Documentations', params: {id:  this.id}}" class="menu-link">Documentations</router-link></li>
          <li v-if="user" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-18"><router-link to="/settings" class="menu-link">Settings</router-link></li>  
        </ul></div></nav></div></div> </div>
        </div>
        <div v-if="sidebar" @click="toggleSidebar()" class="sidebar-menu" >
         
            <ul  >
                <li    v-for="(topic, index) in full_stack_guide"
                :key="index">
             <!-- <router-link :to="{ name: 'Documentations', params: {id:  topic.id}}"> -->
                                              
          {{ topic.title }}
                    <!-- </router-link> -->
                </li>
            </ul>
        </div>
        <div v-if="sidebar" @click="toggleSidebar()" class="sidebar-men" >
         
         <ul  >
             <li    v-for="(topic, index) in full_stack_guide"
             :key="index">
          <!-- <router-link :to="{ name: 'Documentations', params: {id:  topic.id}}"> -->
                                           
       {{ topic.title }}
                 <!-- </router-link> -->
             </li>
         </ul>
        </div>
    </div>
   <div class="form">
    <form  class="form-horizontal form-simple" action="">
        <button class="btn blue-bg btn-lg btn-block"  @click.prevent="toggleEditor()">
          <span v-if="editor"> close </span><span v-if="!editor"> Open </span>Editor
         </button>
         <div v-if="editor" class="editor">
          <TheLoader v-show="loading" />
          <input type="hidden" name="_token" >                          
                              <fieldset class="form-group position-relative has-icon-left">
                                <input type="text"
                                v-model="title"
                                    class="form-control form-control-lg input-lg "
                                    placeholder="Enter Title" required>
                                <button  v-if="editor" @click.prevent="addTopic()" class="btn blue-bg btn-lg btn-block">
                                    Post
                                </button>
                              </fieldset>
         <vue-editor :editorOptions="editorSettings" useCustomImageHandler v-model="content"  @image-added="imageHandler" />
       
        </div>
     
      </form>
    
      <div class="content"  v-for="(topic, index) in full_stack_guide" :key="index">
        <h1>{{topic.title}}</h1>
    <p v-html="topic.content"></p>
   </div>
</div>
    </div> 
    </div>
    <footer class="site-footer" id="colophon" itemtype="https://schema.org/WPFooter" itemscope="itemscope" itemid="#colophon">
    <div class="site-primary-footer-wrap ast-builder-grid-row-container site-footer-focus-item ast-builder-grid-row-3-lheavy ast-builder-grid-row-tablet-3-equal ast-builder-grid-row-mobile-full ast-footer-row-inline ast-footer-row-tablet-stack ast-footer-row-mobile-stack" data-section="section-primary-footer-builder">
    <div class="ast-builder-grid-row-container-inner">
    <div class="ast-builder-footer-grid-columns site-primary-footer-inner-wrap ast-builder-grid-row">
    <div class="site-footer-primary-section-1 site-footer-section site-footer-section-1">
    <aside class="footer-widget-area widget-area site-footer-focus-item footer-widget-area-inner" data-section="sidebar-widgets-footer-widget-2" aria-label="Footer Widget 2">
    <section id="custom_html-3" class="widget_text widget widget_custom_html"><h2 class="widget-title">Thanks to the Internet, Proud of working with you remotely .</h2><div class="textwidget custom-html-widget"><h3><a href="https://wa.me/254794711950"><span style="text-decoration: underline">Whatsapp Me</span></a>
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
import TheLoader from "@/components/TheLoader";
import Quill from "quill";
 window.Quill = Quill;
const ImageResize = require("quill-image-resize-module").default;
Quill.register("modules/imageResize", ImageResize);
import {db}  from "@/firebase";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { addDoc, doc, collection} from "firebase/firestore"; 
import { mapState, mapActions } from 'vuex';
export default {
 components: {
  TheLoader,
 },
  data(){
    return{
        editor: null,
        loading: null,
        mobileNav: null,
          sidebar: null,
          editorSettings: {
            modules: {
              imageResize: {},
            },
          },
    }
 },
 methods: {
    toggleEditor(){
        this.editor = !this.editor;
    },
    toggleMobileNav(){
            this.mobileNav= !this.mobileNav
        },
        toggleSidebar(){
            this.sidebar= !this.sidebar
        },
        async addTopic() {
            if (this.title.length !== 0 && this.content.length !== 0) {
                this.loading = true;
                await addDoc( collection(db, "full_stack_guide"),{
                title: this.title,
                content: this.content,
                });
                await this.$store.dispatch("getGuide");
                this.loading = false;
                alert("guide added successfully ...");
                return;
            }
            this.error = true;
            this.errorMsg = "Please ensure all fields necessary have been filled!";
            setTimeout(() => {
                this.error = false;
            }, 5000);
            return;
        },
        ...mapActions(['getGuide']),
        imageHandler(file, Editor, cursorLocation, resetUploader) {
        const storage = getStorage();
        const storageRef = ref(storage, `documents/guideImages/${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
          "state_changed",
          (snapshot) => {
            console.log(snapshot);
          },
          (err) => {
            console.log(err);
          },
          async () => {
            const downloadURL = await getDownloadURL(storageRef);
            Editor.insertEmbed(cursorLocation, "image", downloadURL);
            resetUploader();
          }
        );
      }
 },
 computed: {
  ...mapState(['full_stack_guide']),
  user() {
          return this.$store.state.user.loggedIn;
     },
     topic () {
      const id = this.$route.params.id||"GM1sM0ivOEOTMk2Efg8Q";
      return this.topic = this.full_stack_guide.find(topic => topic.id === id);
    },
  },
 created() {
    this.getGuide();
  }
 
 
}
</script>
<style scoped>

 .editor {
    height:60vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    background-color: #fff;
    width:100%;
    padding: 10px;
  }
  header{
    position:fixed;
    margin-top: 0;
  }
  fieldset{
    width:80%;
    display:flex;
    flex-direction: row;
    margin-left: 160px;
  }
  input{
    text-align:center;
    padding: 10px;
    width:80%;
  }
  fieldset button{
  background-color: rgb(65, 142, 230);
  width: 150px;
  align-self: center;
  border: 10px;
  padding:15px;
  margin-left: 10px;
 }
  button{
  background-color: rgb(65, 142, 230);
  width: 200px;
  align-self: center;
  border: 10px;
 }
  .quillWrapper {
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
    align-content: center;
    width:80%;
    padding: 10px;
    margin-left: 150px;
  }
  .site-content{
    min-height:500px;
  }
  .hfeed{
    background-color: #fff;
  }
  .hfeed .site-content .ast-container .form{
  margin:110px;
  display: flex;
   justify-content: center;
    flex-direction: column;
    width: 80%
 }
 .hfeed .site-content .ast-container .form form{
 
  display: flex;
   align-items: center;
    flex-direction: column;
    width: 100%
 }
 .hfeed .site-content .ast-container .form .content{
 
 display: flex;
   flex-direction: column;
   max-width: 500px;
   flex-wrap: wrap;
   justify-content: center;
   margin-left: 260px;
}
p{
  color: #000;
  max-width: 1000px;
}

 @media (min-width: 799px) {
 .sidebar-men,
   .sidebar-left{
  display: none;
  }
 }
  @media (max-width: 799px) {
    .hfeed .site-content .ast-container .form .content{
    margin: 0;
width:300px;
  }
  .hfeed .site-content .ast-container .form .content{
    margin-left: 4px;
  }
  p{
    margin-left:0;
   width:100%;
  }
    .hfeed .site-content{
  margin-top:40px;
  display: flex;
   align-content: center;
    flex-direction: column;
    width: 100%
 }
 .hfeed header{
  margin-top:0;
 }
 button{
  background-color: rgb(65, 142, 230);
  width: fit-content;
 
 }
 
 input{
  
    margin-left: 0px;
    width:100%;
  }
  .quillWrapper {
  width:100%;
    margin-left: 0px;
  }
  .sidebar-left{
  width: fit-content;
    position: fixed;
    right: 10px;
    top: 0;
    height: fit-content;
    background-color: #fff;
    z-index: 999;
    transition: margin-left 300ms;
    padding:1rem 0rem 1rem 2rem; 
}
  
}

:root {
    --main-color:#fff;
    --color-dark:#02060b;
    --text-grey:#999999;
}
* {
    padding:0;
    margin: 0;
    box-sizing: border-box;
    list-style-type:none;
    text-decoration: none;
    
}
.scrollable-div {
    height: 500px; /* Set the height of the div */
    overflow: auto; /* Make it scrollable */
  }
.sidebar{
  display: flex;
  flex-direction: column;
}
.sidebar-brand{
  width: 300px;
    position: fixed;
    left: 0;
    top: 0;
    height: fit-content;
    background-color: #fff;
    z-index: 999;
    transition: margin-left 300ms;
    padding:1rem 0rem 1rem 2rem; 
}

.sidebar-brand span {
    display: inline-block;
    padding-right: 1rem;
   
}
.sidebar-menu {
  display:none;
}
.sidebar-men {
  width: 300px;
    position: fixed;
    left: 0;
    top: 110px;
    background-color: #fff;
    z-index: 999;
    transition: margin-left 300ms;
    margin-top: 1rem;
    height: fit-content;
}
.sidebar-men li {
    width: 100%;
    margin-bottom: 1.3rem;
    padding-left: 2rem;
   
}
.sidebar-men li .available{
    margin-left:3rem ;
}
.sidebar-men li .available a span{
    margin-left: 3.1rem;
    background: #79aae6;
    border-radius: 50%;
    padding-left: .5rem;
    font-size: 1.5rem;
}
a .li-span{
    margin-left: 0rem;
    background: #79aae6;
    border-radius: 50%;
 
    padding-left:.5rem;
}
.sidebar-men a {
    display: block;
    color: #02060b;
    padding-bottom: 1rem;
}
.sidebar-men a.active {
    color: #1c68c4;
    padding-top: 1rem;
    padding-bottom: 1rem;
} 
.sidebar-men a span:first-child {
    font-size: 1.5rem;
    padding-right: 1rem;
} 
</style>