<template>
  
    <header >
        <div v-if="user">
          <h3>
            <label for="nav-toggle">
                <span>N</span>
            </label>
          </h3>
        </div>
     
          <div v-if="user" class="user-wrapper"  @click="toggleProfileMenu">
     
         
            <!-- <img src="images/BuyoneFree_65.jpg" class="img" width="30px" height="30px" alt=""> -->
            <div class="profile">
                <span style="font-size:20px; padding-left: 25px;">{{ this.$store.state.profileInitials}}</span>
            </div>
            <span class="down"></span>
          </div>
          <div v-if="profileMenu " class="profile-menu">
            <div class="info">
              <div class="right">
                <h4>{{this.$store.state.profileFirstName}} {{this.$store.state.profileLastName}} </h4>
                <small>Super admin</small>
                <hr>
                <br>
                <div @click="SignOut()"><i class="fa-solid fa-user-lock"></i>Logout</div>
                <br>
              </div>
            </div>
          </div> 
          <h4 v-if="!user" >
            <li >
                <router-link to="/">
                    
                Home
                </router-link>
            </li>
            </h4>
        </header>
</template>

<script>

import { mapActions } from 'vuex';
export default {
    data () {
        return {
            available: null,
            profileMenu: null,
             currentOrder: null,
             error: null,
        }
    },
    methods: {
        toggleAvailable(){
            this.available= !this.available
        },
        toggleProfileMenu(){
            this.profileMenu= !this.profileMenu
        }, 
        ...mapActions(['signOut']),
    SignOut() {
      this.signOut();
     
     this.$router.replace('/');
      },

    },
    computed: {
    user() {
          return this.$store.state.user.loggedIn;
     },
    // admin() {
    //       return this.$store.state.profileAdmin;
    // },
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
.scrollable-div {
    height: 500px; /* Set the height of the div */
    overflow: auto; /* Make it scrollable */
  }
.order-detail{
    margin:10px;
    border-radius:25%;
    background: #f3efef;
}
.profile {
    position: relative;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: #fff;
    background-color: #303030;
    float: right;
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
  i{
    padding-right:10px;
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
   
     .main-content{
        margin-left: 70px;
     }
   .main-content header{
       width: calc(100% -70px);
       left: 70px;
     }
}

 @media only screen and (max-width: 768px) {
   
 
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
