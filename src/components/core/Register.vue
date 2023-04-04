<template>
    <div class="app-content content">
        <div class="content-wrapper">
            <div class="content-body">
                
              
                <section class="flexbox-container table-responsive py-5">
    <div class="col-12 d-flex align-items-center justify-content-center">
        <div class="col-md-5 box-shadow-2 p-0 plain-container">
            <div class="card border-grey border-lighten-3 m-0">
                <div class="card-header border-0">
              
                    <h6 class="card-subtitle line-on-side text-muted text-center font-small-3 pt-2">
                        <span>Sign Up</span>
                    </h6>
                </div>
                <div class="card-content">
                    <div class="card-body">
                        <div class="alert alert-danger" v-if="error">
                            {{ this.errorMsg }}
                          </div>
                        <form class="form-horizontal form-simple">
                            <TheLoader v-if="loading"/>
                            <input type="hidden" name="_token">                     
                                   <div class="row">
                                <div class="col-sm-6 pd-right">
                                    <div class="form-group">
                                        <input type="text" name="first_name" class="form-control"
                                            placeholder="First name" required="" v-model="firstName">
                                    </div>
                                </div>
                                <div class="col-sm-6 pd-left">
                                    <div class="form-group">
                                        <input type="text"  class="form-control" placeholder="Last name"
                                            required="" v-model="lastName">
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-6 pd-right">
                                    <div class="form-group">
                                        <input type="email"  class="form-control"
                                            placeholder="Email" required="" v-model="email">
                                    </div>
                                </div>
                                <div class="col-sm-6 pd-left">
                                    <div class="form-group">
                                        <input type="text" class="form-control" placeholder="Initials"
                                            required="" v-model="initials">
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-6 pd-right">
                                    <div class="form-group">
                                        <input type="password" class="form-control"
                                            placeholder="Password" required="" v-model="password">
                                    </div>
                                </div>
                                <div class="col-sm-6 pd-left">
                                    <div class="form-group">
                                        <input type="password"  class="form-control"
                                            placeholder="Confirm Password" required="" v-model="confirmPassword">
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-12 pd-left">
                                    <div class="form-group">
                                        <label for="avatar">Profile picture</label>
                                        <input type="file" name="avatar" class="form-control">
                                    </div>
                                </div>
                            </div>

                            <div class="mb-3">
                                <p class="float-sm-right text-center m-0">
                                
                                    <router-link class="blue-text" to="/log-in">
                                        login
                                    </router-link>
                                </p>
                            </div>
                            <button @click.prevent="register()" type="submit" class="btn blue-bg btn-lg btn-block">
                                Sign Up
                            </button>
                        </form>
                        <input type="file" style="display:none;">
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
            </div>
        </div>
    </div>
</template>

<script>
import TheLoader from "@/components/TheLoader";

import {doc, setDoc} from "firebase/firestore"; 
import { auth, db} from '@/firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";


export default {
  name: "Register",
  components: {
    TheLoader
  },
    data() {
        return {
          firstName: "",
          lastName: "",
          email: "",
          initials: "",
          password: "",
          confirmPassword: "",
          errorMsg: "",
          error: null,
          loading: null
        };
    },
    methods: {
      async register(err) {
        this.loading= true;
        if (
          this.email !== ""&&
          this.password !== ""&&
          this.confirmPassword !== ""&&
          this.firstName !== ""&&
          this.lastName !== "" &&
          this.initials !== ""
        ) {
            if (this.password == this.confirmPassword){
        
              
                const createUser = await createUserWithEmailAndPassword(auth, this.email, this.password);
               const result = await createUser;
                const dataBase = doc(db, "users", result.user.uid);
                await setDoc(dataBase, {
                    firstName: this.firstName,
                    lastName: this.lastName,
                    email: this.email,
                    initials: this.initials,
                 });
                 this.$store.state.user.loggedIn = true;
                this.$router.push('/settings');
                this.loading = false;
                return;
         
        }
        this.error = true;
        this.errorMsg = "password doesn't match";
        this.loading = false;
        return;
        }
        this.error =true;
        this.errorMsg = "Please fill out all the fields!";
        this.loading = false;
        return;
      }
    },
};
</script>

<style scoped>
#send-btn{
    background-color:#1c68c4;
}
</style>