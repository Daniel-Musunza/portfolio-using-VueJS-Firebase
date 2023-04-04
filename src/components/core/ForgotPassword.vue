<template>
    <div class="container" style="width:500px;">
        <!-- <img src="client/images/logo.png" alt="QualityA" class="plain-page-logo" width="200px"> -->
        <ModalItem v-if="modalActive" :modalMessage="modalMessage" v-on:close-modal="closeModal"/>
        <TheLoader v-if="loading"/>
      <div class="row">
      
        <div class="col-md-12">
          <div>
            <h2>Back to <span ><router-link to="/signIn">SignIn</router-link></span></h2>
            <div>
              <label>Reset Password</label>
              <h5>Forgot your password? Enter your email to reset it!</h5>
              <hr />
            </div>
            <form @submit.prevent="resetPassword">
              <div class="form-group">
                <label>Email</label>
                <input
                type="email"
                class="form-control"
                v-model="email"
                />
              </div>
              <div class="my-3">
                <button @click.prevent="resetPassword" type="submit" class="btn btn-primary">
                  Reset
                </button>
              </div>
            </form>
          </div>
         </div>
      </div>
    </div>
    </template>

    <script>
        // import ModalItem from "@/components/ModalItem"
        // import TheLoader from "@/components/TheLoader"
        // import {getAuth, sendPasswordResetEmail} from "firebase/auth"
        export default {
            name: "ForgotPassword",
            // data() {
            //     return {
            //     email: "",
            //     modalActive: false,
            //     modalMessage: "",
            //     loading: null
            //     }
            // },
            // components: {
            //     ModalItem,
            //     TheLoader
            // },
            // methods: {
            //   resetPassword() {
            //     this.loading= true;
            //     sendPasswordResetEmail(getAuth(), this.email).then(() => {
            //       this.modalMessage = "If your account exists, you'll receave a email";
            //       this.loading = false;
            //       this.modalActive = true;
            //     }).catch(err => {
            //       this.modalMessage = err.message;
            //       this.loading = false;
            //       this.modalActive = true;
            //     })
            //   },
            //     closeModal() {
            //         this.modalActive = !this.modalActive;
            //         this.email = "";
            //     }
            // }
        }
    </script>
      <style scoped>
 @media (min-width:977px){
    .container {
     
display:flex;
justify-content: center;
width:100%;

    }
  }
      </style>