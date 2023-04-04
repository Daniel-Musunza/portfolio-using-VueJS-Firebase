<template>
    <input type="checkbox" id="nav-toggle">
    <SideBar></SideBar>
    <div class="main-content">
       <Header></Header>
        <main>
            <div class="container">
                <ModalItem v-if="modalActive" :modalMessage="modalMessage" v-on:close-modal="closeModal" />
                  <!-- <img src="../assets/client/images/logo.png" style="height:200px;" class="logo" > -->
                    <div class="row">
                      <div class="col-md-6 offset-md-3">
                      <div class="col-md-12">
                        <div>
                          <div>
                            <h2>Account Settings</h2>
                            <hr />
                          </div>
                          <div class="initials">
                            <div>
                            {{ $store.state.profileInitials }}
                            </div>
                          
                          </div>
                          <span @click="openPreview" :class="{ 'button-inactive': !this.$store.state.profilePhotoFileURL}" style>{{ this.$store.state.profilePhotoName}}</span>
                          <div v-if="admin" class="admin-badge">
                           <span> <i class="fa-solid fa-user"></i> Admin</span>
                          </div>
                          <form>
                            <TheLoader v-if="loading"/>
                            <div class="form-group">
                              <label for="firstName">First Name</label>
                              <input
                              type="text"
                              class="form-control"
                              id="firstName" v-model="firstName"
                              />
                            </div>
                            <div class="form-group">
                              <label for="lastName" >Last Name</label>
                              <input
                              type="text"
                              class="form-control"
                              id="lastName" v-model="lastName"
                             />
                            </div>
                            
                            <div class="form-group">
                              <label for="initials">Initials</label>
                              <input
                              type="text"
                              class="form-control"
                              id="initials" v-model="initials"
                             />
                            </div>
                                <div class="form-group">
                                    <label for="profileImage">Profile Image</label>
                                    <input type="file"  ref="File"  @change="fileChange"  name="avatar" class="form-control">
                                </div>
                            
                            
                            <div class="form-group">
                              <label for="email" >Email</label>
                              <input
                              disabled
                              type="email"
                              class="form-control"
                              id="email" v-model="email"
                              />
                            </div>
                            <div class="my-3">
                              <button @click.prevent="updateProfile">Save Changes</button>
                            </div>
                          </form>
                        </div>
                       </div>
                      </div>
                    </div>
              </div>
        </main>
    </div>
</template>

<script>
import SideBar from "@/components/core/SideBar.vue";
import Header from "@/components/core/Header.vue";
import ModalItem from "@/components/ModalItem"
import TheLoader from "@/components/TheLoader"
import {getAuth} from "firebase/auth";
export default {
    components: {
        SideBar, 
        Header,
        ModalItem,
        TheLoader,
    },
    data () {
        return {
            available: null,
            profileMenu: null,
            modalMessage: "Changes were saved!",
            modalActive: false,
            photoAvailable: null,
            loading: null,
            file: null,

        }
    },
    methods: {
        toggleAvailable(){
            this.available= !this.available
        },
        toggleProfileMenu(){
            this.profileMenu= !this.profileMenu
        },
        closeModal() {
            this.modalActive = !this.modalActive;
          },
        updateProfile(){
          this.loading = true;
          // await this.getCurrentUser() // Call the getCurrentUser action to populate the currentUser state
          this.$store.dispatch("updateUserSettings");// Pass the currentUser data as an argument to updateUserSettings action
          this.modalActive = !this.modalActive;
          return;
      },
    },
    computed: {
    // ...mapState(['currentUser']),
    // user: {
    //   get(){
    //     return this.$store.getters.user;
    //   }
    // },
    firstName: {
        get() {
          return this.$store.state.profileFirstName;
        },
        set(payload){
          this.$store.commit("changeFirstName", payload);
        }
      },
      lastName: {
        get() {
          return this.$store.state.profileLastName;
        },
        set(payload){
          this.$store.commit("changeLastName", payload);
        }
      },
   
      initials: {
        get() {
          return this.$store.state.profileInitials;
        },
        set(payload){
          this.$store.commit("changeInitials", payload);
        }
      },
      email: {
        get() {
          return this.$store.state.profileEmail;
        }
      },
      admin() {
          return this.$store.state.profileAdmin;
      }

 },

async mounted() {
  const auth = getAuth();
   await auth.onAuthStateChanged(user => {
     this.$store.dispatch("getCurrentUser", user);

    });
  
  }
}
</script>


<style scoped>
 
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
    font-family: 'Poppins', sans-serif;
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
main{
    margin-top: 85px;
    padding: 2rem 1.5rem;
    background: #f1f5f9;
    min-height: calc(100vh -90px);

}

.contact span {
    font-size: 1.2rem;
    display: inline-block;
    margin-left: .5rem;
    color: #1c68c4;
}
textarea {
    border-radius: 10px;
    display:auto;
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

 @media only screen and (max-width: 768px) {
    
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

</style>
