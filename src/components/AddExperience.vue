<template>
    <input type="checkbox" id="nav-toggle">
   <SideBar></SideBar>
    <div class="main-content">
        <Header>
        </Header>
        <div style="display: flex; flex-direction: column; justify-content: center; margin-top: 100px;" >
            <form class="form" @submit.prevent="addExperience()" v-if="user">
                            <TheLoader v-show="loading" />
                                  <div :class="{ invisible: !error }" class="err-message">
                                    <p style="color:red;"><span>Error:</span>{{ this.errorMsg }}</p>
                                  </div>
                                    <div class="row">
                                        <div class="col" >
                                            <input type="hidden" name="_token" > 
                                                                
                                            <fieldset class="form-group position-relative has-icon-left">
                                                <input type="text"
                                                    class="form-control form-control-lg input-lg "
                                                    placeholder="Duration" required v-model="duration">
                                                <div class="form-control-position">
                                                    <i class="ft-user"></i>
                                                </div>
                                            </fieldset>
                                        </div>
                                        <div class="col">
                                            <div class="pd-right">
                                                <div class="form-group">
                                                
                                                    <fieldset class="form-group position-relative has-icon-left">
                                                        <input type="text"
                                                            class="form-control form-control-lg input-lg "
                                                            placeholder="Company" required v-model="company">
                                                        <div class="form-control-position">
                                                            <i class="ft-user"></i>
                                                        </div>
                                                    </fieldset>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col" >
                                            <input type="hidden" name="_token" > 
                                                                   
                                            <fieldset class="form-group position-relative has-icon-left">
                                                <input type="text"
                                                    class="form-control form-control-lg input-lg "
                                                    placeholder="Role" required v-model="role">
                                                <div class="form-control-position">
                                                    <i class="ft-user"></i>
                                                </div>
                                            </fieldset>
                                        </div>
                                        <div class="col">
                                            <div class="pd-right">
                                                <div class="form-group">
                                                  
                                                    <fieldset class="form-group position-relative has-icon-left">
                                                        <input type="text"
                                                            class="form-control form-control-lg input-lg "
                                                            placeholder="Responsibility" required v-model="responsibility">
                                                        <div class="form-control-position">
                                                            <i class="ft-user"></i>
                                                        </div>
                                                    </fieldset>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                               
                                <button type="submit"  class="btn blue-bg btn-lg btn-block" id="send-btn"  style=" background-color:#79aae6; margin-top: 20px; margin-bottom: 30px;">
                                    Post
                                </button>
                            
            </form>
            <div class="hfeed site" id="page">
            <div id="content" class="site-content">
                <div class="ast-container">
                <div id="primary" class="content-area primary">
                <main id="main" class="site-main">
                <article class="post-6 page type-page status-publish ast-article-single" id="post-6"  itemscope="itemscope">
                
            <div class="entry-content clear" itemprop="text">
            <div data-elementor-type="wp-page" data-elementor-id="6" class="elementor elementor-6">
            <section class="elementor-section elementor-top-section elementor-element elementor-element-b621b63 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="b621b63" data-element_type="section">
                <div class="elementor-container elementor-column-gap-no">
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
            </div>
            </div>
            </article>
            </main>
            </div>
            </div>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
import SideBar from "@/components/core/SideBar.vue";
import Header from "@/components/core/Header.vue";
import TheLoader from "@/components/TheLoader";
import {db}  from "@/firebase";
import { mapState, mapActions } from 'vuex';


import { addDoc, doc, collection} from "firebase/firestore"; 

export default {
    components: {
        SideBar, 
        Header,   
        TheLoader
      },
    data () {
        return {
       
          error: null,
          errorMsg: null,
          loading: null,
            available: null,
            profileMenu: null,
            

        }
    },
    methods: {
        toggleAvailable(){
            this.available= !this.available
        },
        toggleProfileMenu(){
            this.profileMenu= !this.profileMenu
        },
        async addExperience() {
            if (this.duration.length !== 0 && this.company.length !== 0) {
                this.loading = true;
                await addDoc( collection(db, "experience"),{
                duration: this.duration,
                company: this.company,
                role: this.role,
                responsibility: this.responsibility,
                });
                await this.$store.dispatch("getExperience");
                this.loading = false;
                alert("experience added successfully ...");
                return;
            }
            this.error = true;
            this.errorMsg = "Please ensure all fields necessary have been filled!";
            setTimeout(() => {
                this.error = false;
            }, 5000);
            return;
        },
        ...mapActions(['getExperience'])
      },
 
    computed: {
    ...mapState(['experience']),
    user() {
          return this.$store.state.user.loggedIn;
     },
  },
  created() {
    this.getExperience();
  }


}
</script>


<style scoped>

.form{
   width:80%;
   align-content: center;
}
p{
    color:#1c68c4;
}
.row{
    align-items: center;
    display: flex;
    flex-direction: row;
}
.col{
    width:38%;
    margin: 10px;
}
h5{
    margin-bottom: 20px;
}
.form-check-label{
    margin-left:20px;
    margin-bottom:20px;
}
.form-check{
    margin-left:20px;
}
.editor {
    height:60vh;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    width:100%;
  }
  .quillWrapper {
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
  }
.profile-menu {
    position: absolute;
    border-radius: 10px;
    top: 60px;
    right: 0; 
    width: 270px;
    background-color: #fff;
    box-shadow: 0 4px 0px -1px #79aae6;
  }
  .info {
    display: flex;
    align-items: center;
    padding: 15px;
    border-bottom: 1px solid #fff;
  }
  .right {
    flex: 1;
    margin-left: 24;
  }
.sidebar {
    width: 200px;
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    background-color: #fff;
    z-index: 100;
    transition: margin-left 300ms;
}
.sidebar-brand{
    height: 90px;
    padding:1rem 0rem 1rem 2rem; 
}
.sidebar-brand span {
    display: inline-block;
    padding-right: 1rem;
}
.sidebar-menu {
    margin-top: 1rem;
}
.sidebar-menu li {
    width: 100%;
    margin-bottom: 1.3rem;
    padding-left: 2rem;
    font-size: 20px;
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
#nav-toggle:checked + .sidebar {
    width: 70px;
}
#nav-toggle:checked + .sidebar .sidebar-brand,
#nav-toggle:checked + .sidebar li {
   padding-left: 1rem;
   text-align: center;
}
#nav-toggle:checked + .sidebar li a{
    padding-left: 0rem;
 }
 #nav-toggle:checked + .sidebar li a span{
    padding-right: 1rem;
 }
#nav-toggle:checked + .sidebar .sidebar-brand h3 span:last-child,
#nav-toggle:checked + .sidebar li a span:last-child {
   display: none;
}
#nav-toggle:checked ~ .main-content{
    margin-left: 70px;
 }
#nav-toggle:checked ~ .main-content header{
   width: calc(100% -70px);
   left: 70px;
 }
.main-content {
    transition: margin-left 300ms;
    margin-left: 200px;
}

.main-content header{
    background: #fff;
    display: flex;
    justify-content: space-between;
    padding: 1rem 1.5rem;
    box-shadow: 2px 2px 5px rgba(0,0,0, 0.2);
    position: fixed;
    left: 200px;
    right: 0;
    /* width: calc(100% -200px); */
    top: 0;
    z-index: 100;
    transition: left 300ms;

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
.search-wrapper {
    border:1px solid #ccc;
    border-radius: 30px;
    height: 50px;
    display: flex;
    align-items: center;
    overflow: none;
    width: 300px;
    margin-right: 50px;
}
.search-wrapper  span{
    display: inline-block;
    padding: 0rem 1rem;
    font-size:1.5 rem;
}
.search-wrapper input{
    height: 100%;
    padding: .5rem;
    border: none;
    outline: none;
}
.user-wrapper{
    display: flex;
    align-items: center;
    float: right;
     
}
.user-wrapper span{
    font-size: 25px;
    margin-right: 30px;
     
}
.user-wrapper img{
    border-radius: 50%;
    margin-right: 1rem;
}
.user-wrapper small {
    display: inline-block;
    color:var(--text-grey) ;
    margin-top: -10px !important;
}




@media only screen and (max-width:1200px){
   .sidebar {
        width: 70px;
    }
    .sidebar .sidebar-brand,
     .sidebar li {
       padding-left: 1rem;
       text-align: center;
    }
 .sidebar li a{
        padding-left: 0rem;
     }
   .sidebar li a span{
        padding-right: 1rem;
     }
 .sidebar .sidebar-brand h3 span:last-child,
  .sidebar li a span:last-child {
       display: none;
    }
     .main-content{
        margin-left: 70px;
     }
   .main-content header{
       width: calc(100% -70px);
       left: 70px;
     }
     .sidebar:hover {
        width: 200px;
        z-index: 200;
    }
    .sidebar:hover .sidebar-brand,
     .sidebar:hover li {
       padding-left: 2rem;
       text-align: left;
    }
 .sidebar:hover li a{
        padding-left: 1rem;
     }
   .sidebar:hover li a span{
        padding-right: 1rem;
     }
 .sidebar:hover .sidebar-brand h3 span:last-child,
  .sidebar:hover li a span:last-child {
       display: inline;
    }
}
 @media only screen and (max-width: 960px) {
    .row{
        display: flex;
        flex-direction: column;
        width: 100%;
        margin:0px;
    }
    .col{
        width:100%;
        margin:0px;
    }
    .form{
        width:100%;
        margin:0px;
    }
    .editor{
        width:100%;
    }
    .cards  {
        grid-template-columns:repeat(3, 1fr);
    }
    .recent-grid {
        grid-template-columns: 60% 40%;
    }
 }
 @media only screen and (max-width: 768px) {
    .cards  {
        grid-template-columns:repeat(2, 1fr);
    }
    .recent-grid {
        grid-template-columns: 100%;
    }
    .search-wrapper{
        display: none;
    }
    .sidebar{
        left: -100% !important;
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
    .main-content {
        width: 100%;
        margin-left: 0rem;
    }
    header {
        width: 100% !important;
        left: 0 !important;
        
    }
    #nav-toggle:checked + .sidebar {
        left: 0 !important;
        z-index: 100;
        width: 200px;
    }
    #nav-toggle:checked + .sidebar {
        width: 200px;
        z-index: 200;
    }
    #nav-toggle:checked + .sidebar .sidebar-brand,
    #nav-toggle:checked + .sidebar li {
       padding-left: 2rem;
       text-align: left;
    }
    #nav-toggle:checked + .sidebar li a{
        padding-left: 1rem;
     }
     #nav-toggle:checked + .sidebar li a span{
        padding-right: 1rem;
     }
     #nav-toggle:checked + .sidebar.sidebar-brand h3 span:last-child,
     #nav-toggle:checked + .sidebar li a span:last-child {
       display: inline;
    }
    #nav-toggle:checked ~ .main-content {
        margin-left: 0rem !important;
    }
 }
 @media only screen and (max-width: 560px) {
    .cards {
        grid-template-columns: 100%;
    }
 }
</style>