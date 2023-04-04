<template>
    <input type="checkbox" id="nav-toggle">
   <SideBar></SideBar>
    <div class="main-content">
        <Header>
        </Header>
        <div class="container" style="margin-top: 80px;">
        <form class="form" action="" style="margin: 10px;" v-if="user">
                            <TheLoader v-show="loading" />
                       
                                <div :class="{ invisible: !error }" class="err-message">
                                    <p><span>Error:</span>{{ this.errorMsg }}</p>
                                </div>
                                    <div class="row">
                                        <div class="col" >
                                            <div class="form-group">
                                                <h5>Design Image</h5>
                                                <input type="file" ref="designPhoto" id="design-photo" @change="fileChange()" accept=".png, .jpg, .jpeg" name="avatar" class="form-control">
                                            </div>
                                        </div>
                                      
                                    </div>
                               
                                <button type="submit" @click.prevent="postDesign()" class="btn blue-bg btn-lg btn-block" id="send-btn"  style=" background-color:#79aae6; margin-top: 20px; margin-bottom: 30px;">
                                    Post
                                </button>
                     
                        </form>
                        <div style="display: flex; flex-direction: row; flex-wrap: wrap; justify-content: space-between;">
                            <h3 style="margin-left: 30px"> All Designs</h3>
                           
                            </div>
                            <div id="product1">
                                <div class="pro-container" style="display:flex">
                                  <div class='pro'
                                    v-for="(design, index) in designs"
                                    :key="index" 
                                    >
                          
                                <img width="370" height="342" :src="design.designCoverPhoto" class="attachment-full size-full" alt="" />
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
import {getFirestore}  from "firebase/firestore";
// import { mapState, mapActions } from 'vuex';
import { getStorage ,ref, getDownloadURL, uploadBytesResumable} from "firebase/storage";
import { addDoc,collection} from "firebase/firestore"; 


export default {
    components: {
        SideBar, 
        Header,   
        TheLoader
      },
    data () {
        return {
         file: null,
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
        fileChange() {
            if (this.$refs.designPhoto && this.$refs.designPhoto.files.length > 0) {
                this.file = this.$refs.designPhoto.files[0];
                const fileName = this.file.name;
                this.$store.commit("fileNameChange", fileName);
                this.$store.commit("createFileURL", URL.createObjectURL(this.file));
            }else {
                console.log("no file");
            }
         },
           
         async postDesign() {
  if (this.file) {
    this.loading = true;
    const storage = getStorage();
    const storageRef = ref(
      storage,
      `documents/designFiles/${this.$store.state.designPhotoName}`
    );
    const uploadTask = uploadBytesResumable(storageRef, this.file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        console.log(snapshot);
      },
      (err) => {
        console.log(err);
        this.loading = false;
      },
      async () => {
        const downloadURL = await getDownloadURL(storageRef);
        const db = getFirestore();
        const timestamp = await Date.now();
        this.loading = true;
        await addDoc(collection(db, "designs"), {
          designCoverPhoto: downloadURL,
          designCoverPhotoName: this.$store.state.designPhotoName,
          date: timestamp,
        });
        await this.$store.dispatch("getDesigns");
        this.loading = false;
        alert("design added successfully ...");
      }
    );
    return;
  }
},
// ...mapActions(['getDesigns'])

 
    },
    computed: {
    
      user() {
          return this.$store.state.user.loggedIn;
      },
    //   ...mapState(['designs']),
    designs() {
       return this.$store.state.designs;
    },
  },
//   created() {
//     this.getDesigns();
//   }
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
main{
    margin-top: 85px;
    padding: 2rem 1.5rem;
    background: #f1f5f9;
    min-height: calc(100vh -90px);
}
.cards {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 2rem;
    margin-top: 1rem;
}
.card-single {
    display: flex;
    justify-content: space-between;
    background-color: #fff;
    padding: 2rem;
    border-radius: 2px;
}
.card-single div:last-child span{
    color: #1c68c4;
    font-size:3.5rem;
}
.card-single div:first-child span{
    color: var(--text-grey);

}
.card-single:last-child{
    background: #1c68c4;
}
.card-single:last-child div:last-child span{
    color: #fff;
}
.card-single:last-child div:first-child span{
   color: #fff;
}
.recent-grid {
    margin-top: 3.5rem;
    /* display: grid;
    grid-template-columns: 70% auto; */
}
.card{
   background: #fff; 
   width: 100%;
}
.card-header,
.card-body {
    padding: 1rem;
    width: 100%;
}
.card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.card-header button {
    background: #1c68c4;
    border-radius: 10px;
    color: #fff;
    font-size: 15px;
    padding: .5rem 1rem;
    border: 1px solid #1c68c4;
}
table {
    border-collapse:collapse;
}
thead tr {
    border: 1px solid #1c68c4;;
}
tbody tr {
    border: 1px solid #1c68c4;;
}
thead td {
    font-weight: 700;
}
td {
    padding: .5rem 1rem;
    font-size: 15px;
    color: #222;
    border: 1px solid #1c68c4;;
   
}
td i {
    color: #1c68c4;
    padding-right: 1rem;
}
.table-responsive {
    width: 100%;
    overflow-x: auto;
}
.customer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .5rem .7rem;
}
.info {
    display: flex;
    align-items: center;
}
.info img {
    border-radius: 50%;
    margin-right: 1rem;
}
.info h4 {
    font-size: .8rem;
    font-weight: 700;
    color: #222;

}
.info small {
    font-weight: 600;
    color: var(--text-grey);
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