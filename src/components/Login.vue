<template>
    <div class="login">
        <!--Login Modal -->
        <div class="modal modal-xl fade" id="loginModal" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
            <div class="modal-header">
                <button class="btn btn-primary form-control mr-1">Login</button>
                <button class="btn text-primary form-control ml-1" data-toggle="modal" data-target="#registerModal" data-dismiss="modal">Signup</button>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body" @keypress.enter="login">
                <h3 class="text-center">Login Please</h3>
                <div class="form-group">
                    <label for="email" class="form-text">Email Address</label>
                    <input type="text" v-model="email" class="form-control" name="email" id="login_email" placeholder="Enter Email" required>
                </div>
                <div class="form-group">
                    <label for="password" class="form-text">Password</label>
                    <input type="password" v-model="password" class="form-control" name="password" id="login_password" placeholder="Password" required>
                </div>
                <div class="form-group">
                    <button type="button" class="btn btn-primary" @click="login">Login</button>
                </div>
            </div>
            </div>
        </div>
        </div>
        <!-- Register Modal -->
        <div class="modal modal-xl fade" id="registerModal" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
            <div class="modal-header">
                <button class="btn text-primary form-control mr-1" data-toggle="modal" data-target="#loginModal" data-dismiss="modal">Login</button>
                <button class="btn btn-primary form-control ml-1">Signup</button>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body" @keypress.enter="signUp">
                <h3 class="text-center">Register Here</h3>
                    <div class="form-group d-flex">
                        <div class="mr-1">
                        <label for="first_name" class="form-text">First Name</label>
                        <input type="text" class="form-control" v-model="firstname" name="first_name" id="first_name" placeholder="First Name">
                        </div>
                        <div class="ml-1">
                        <label for="last_name" class="form-text">Last Name</label>
                        <input type="text" class="form-control" v-model="lastname" name="last_name" id="last_name" placeholder="Last Name">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="email" class="form-text">Email Address</label>
                        <input type="text" class="form-control" v-model="email" name="email" id="email" placeholder="Enter Email" required>
                    </div>
                    <div class="form-group">
                        <label for="password" class="form-text">Password</label>
                        <input type="password" class="form-control" v-model="password" name="password" id="password" placeholder="Password" required>
                    </div>
                    <div class="form-group">
                        <button type="button" class="btn btn-primary" @click="signUp">Register</button>
                    </div>
            </div>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
import {fb} from '../firebase/firebase'
import $ from 'jquery'
export default {
    name: "Login",
    data() {
        return {
            firstname: null,
            lastname: null,
            name: null,
            email: null,
            password: null,
        }
    },
    methods:{
        signUp(){
            if(this.email && this.password){
            fb.auth().createUserWithEmailAndPassword(this.email, this.password)
            .then(()=>{
                this.$router.replace('/admin');
                $('#registerModal').modal('hide');
            }
            ).catch(
                function(err){
                    alert('Oops. ' + err.message)
                }        
            )
            }
        },
        login(){
            if(this.email && this.password){
            fb.auth().signInWithEmailAndPassword(this.email, this.password)
                .then(()=>{
                    this.$router.replace('admin')
                    $('#loginModal').modal('hide');
                })
                .catch(function(error) {
                    // Handle Errors here.
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    if (errorCode === 'auth/wrong-password') {
                        alert('Wrong password.');
                    } else {
                        alert(errorMessage);
                    }
                    console.log(error);
                });
            }
        }
    },
    created(){
        return{

        }
    }
}
</script>