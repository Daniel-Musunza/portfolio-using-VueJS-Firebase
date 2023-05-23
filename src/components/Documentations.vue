<template>
    <div class="container-fluid">
      <header>
     
            <div class="open"  @click="toggleOpenMenu">
              
                <h5 style="font-weight:400px; font-size: 20px;">Topics <i class="fa-solid fa-chevron-down"></i></h5>
              <!-- <span  >From Zero to Hero Very Fast  <span v-if="sidebar" style="  background-color:rgb(50, 129, 247); color: #fff; border-radius:5px; padding-left: 13px; text-align: center;">close</span> <span v-if="!sidebar" style="  background-color:rgb(50, 129, 247); color: #fff; border-radius:5px; padding-left: 13px; text-align: center;">List of all topics</span></span> -->
      
             </div>
            <div v-if="openMenu" @click="toggleOpenMenu" class="open-menu">
               
                <ul  >
                    <li    v-for="(topic, index) in full_stack_guide"
                    :key="index">
                <!-- <router-link :to="{ name: 'Documentations', params: {id:  topic.id}}"> -->
                                                  
              {{ topic.title }}
                        <!-- </router-link> -->
                    </li>
                </ul>
            </div>
            <nav class="site-navigation ast-flex-grow-1 navigation-accessibility site-header-focus-item" id="primary-site-navigation" aria-label="Site Navigation" itemtype="https://schema.org/SiteNavigationElement" itemscope="itemscope"><div class="main-navigation ast-inline-flex"><ul id="ast-hf-menu-1" class="main-header-menu ast-menu-shadow ast-nav-menu ast-flex  submenu-with-border ast-menu-hover-style-overline  stack-on-mobile"><li id="menu-item-22" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-6 current_page_item menu-item-22"><a href="/" aria-current="page" class="menu-link">Home</a></li>
              <li id="menu-item-20" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-20"><a href="#services" class="menu-link">Services</a></li>
              <li id="menu-item-19" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-19"><a href="#portfolio" class="menu-link">Portfolio</a></li>
              <li id="menu-item-18" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-18"><a href="#colophon" class="menu-link">Contact</a></li>
              <li id="menu-item-18" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-18">  <router-link :to="{ name: 'Documentations'}" class="menu-link">Documentations</router-link></li>
              <li v-if="user" id="menu-item-18" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-18"><router-link to="/settings" class="menu-link">Settings</router-link></li>
              
            </ul></div>
            </nav>
           
              <div class="profile"  @click="toggleProfileMenu">
                <h5 style="font-weight:400px; font-size: 30px;"><i class="fa-solid fa-bars"></i></h5>
              </div>
            
             <div v-if="profileMenu " class="profile-menu">
              <div class="info">
                <div class="right">
                  <ul>
                    <li><router-link to="/" aria-current="page" class="menu-link">Home</router-link></li>
                    <br>
                    <li><a href="../#services" class="menu-link">Services</a></li>
                    <br>
                    <li><a href="../#portfolio" class="menu-link">Portfolio</a></li>
                    <br>
                    <li><a href="../#colophon" class="menu-link">Contact</a></li>
                    <br>
                    <li>  <router-link :to="{ name: 'Documentations', params: {id:  this.id}}" class="menu-link">Documentations</router-link></li>
                    <br>
                    <li v-if="user" ><router-link to="/settings" class="menu-link">Settings</router-link></li>  
                    <br>
                  </ul>
                  </div>               
              </div>
              </div>
      </header>
      <div class="row">
        <div class="form">
              <form  class="form-horizontal form-simple" action="">
                  <button v-if="user" class="btn blue-bg btn-lg btn-block"  @click.prevent="toggleEditor()">
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
        profileMenu: null,
        openMenu: null,
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
    toggleProfileMenu(){
      this.profileMenu =!this.profileMenu
    },
    toggleOpenMenu(){
      this.openMenu =!this.openMenu
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
.container-fluid{
  background-color: #fff;
  color: #000;
  height: 100%;
  width: 100%;
  overflow: hidden;
}
.container-fluid header{
  display: flex;
  justify-content: space-between;
  box-shadow: 2px 2px 5px rgba(252, 248, 248, 0.2);
  position: fixed;
  height: fit-content;
  width: 100%;
  z-index: 999;
  transition: left 300ms;
  background-color: #fdfcfc;
  font-size: 20px;
  padding: 15px;

}
.profile-menu {
    position: absolute;
    border-radius: 10px;
    margin-top: 40px ;
   color: #000;
 
    right: 0; 
    width: 200px;
    background-color: #fff;
    box-shadow: 0 4px 0px -1px #9fd3f1;
  }
  li{
    margin: 10px;
  }
  .open{
    background-color: #9fd3f1;
    box-shadow: #79aae6;
    border-radius: 10px;
    padding: 5px;
  }
  .open-menu {
    position: absolute;
    border-radius: 10px;
    color: #000;
    top: 60px;
    left: 0; 
    width: 270px;
    background-color: #fff;
    box-shadow: 0 4px 0px -1px #9fd3f1;
    max-height: max-content;
    overflow-y: scroll;
  }
  .open-menu ul{
    margin-left:10px;
  }
  a{
  text-decoration: none;
  }
  .info {
    display: flex;
    align-items: center;
    padding: 5px;
    border-bottom: 1px solid #787777;
  }
  .right {
    flex: 1;
    margin-left: 24;
  }
  i{
    padding-right:10px;
  }
#nav-toggle:checked ~ .main-content{
    margin-left: 70px;
 }
#nav-toggle:checked ~ .main-content header{
   width: calc(100% -70px);
   left: 70px;
 }

#nav-toggle{
    display: none;
}
header h3 {
    color: #222;
    margin-right: 50px;
}
header label span {
    font-size: 1.7rem;
    padding-left: 1rem ;
}
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
 .profile{
  margin-right: 20px;
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
  
 .row .form{
  margin:100px;
  display: flex;
   justify-content: center;
    flex-direction: column;
    width: 80%
 }
 .row .form form{
 
  display: flex;
   align-items: center;
    flex-direction: column;
    width: 100%
 }
.row .form .content{
 
 display: flex;
   flex-direction: column;
   max-width: 500px;
   flex-wrap: wrap;
   justify-content: center;
   margin-left: 250px;
}
p{
  color: #000;
  max-width: 1000px;
}
.main-navigation {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-end;
  right: 0px;
}

 @media (min-width: 799px) {
 .sidebar-men,
   .sidebar-left{
  display: none;
  }
  .profile{
    display: none;
  }
 }
  @media (max-width: 799px) {
    nav{
      display:none;
    }
  header h3 {
      display: flex;
      align-items: center;
  }
  header h3 label {
      display:inline-block;
      background:#1c68c4;
      padding-left: 0rem;
      margin-left: 1rem;
      height: 40px;
      width: 40px;
      border-radius: 50%;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center !important;
  }
  header h3 span {
      text-align: center;
      padding-right: 1rem;
    
  }
  header h3 {
      font-size: 30px;
  }
  .container-fluid {
      width: 100%;
     
      margin: 0;
  }
  header {
      width: 100% !important;
      left: 0 !important;
      
  }
    .row .form {
      margin-left: 20px;
    }
   .row .form .content{
    margin: 4px;
    width:340px;
  }
   .row .form .content{
    margin: 4px;
  }
  .sidebar{
background: #fff;
  }
  .sidebar-brand{
width:330px;
  }
  p{
    margin:0;
   width:100%;
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
    right: 20px;
    top: 0;
    height: fit-content;
    background-color: #fff;
    z-index: 999;
    transition: margin-left 300ms;
    padding:1rem 0rem 1rem 2rem; 
}
  .sidebar-menu{
    display: none;
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

.sidebar-menu li {
    width: 100%;
    margin-bottom: 1.3rem;
    padding-left: 2rem;
   
}
.sidebar-menu li .available{
    margin-left:3rem ;
}
.sidebar-menu li .available a span{
    margin-left: 3.1rem;
    background: #79aae6;
    border-radius: 50%;
    padding-left: .5rem;
    font-size: 1.5rem;
}

.sidebar-menu a {
    display: block;
    color: #02060b;
    padding-bottom: 1rem;
}
.sidebar-menu a.active {
    color: #1c68c4;
    padding-top: 1rem;
    padding-bottom: 1rem;
} 
.sidebar-menu a span:first-child {
    font-size: 1.5rem;
    padding-right: 1rem;
} 
.sidebar-men {
  width: 300px;
    position: fixed;
    left: 0;
    top: 110px;
    background-color: #fff;
    z-index: 999;
    transition: margin-left 300ms;
    margin-top: 0px;
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