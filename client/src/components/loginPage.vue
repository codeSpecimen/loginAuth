<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 mt-5 mx-auto">
          <form v-on:submit.prevent="login">
              <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
              <div class="form-group">
                  <label for="email">Email Address</label>
                  <input type="email" class="form-control" v-model="email" name="email" placeholder="email">
              </div>
              <div class="form-group">
                  <label for="password">Email Address</label>
                  <input type="text" class="form-control" v-model="password" name="password" placeholder="password">
              </div>
              <button class="btn btn-lg btn-primary btn-block">Sign in</button>
          </form>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import router from '../router'
import Eventbus from './Eventbus'
export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login() {
      axios.post('http://localhost:5000/users/login', {
        email: this.email,
        password: this.password
      }).then(res => {
        localStorage.setItem('usertoken', JSON.stringify(res.data))
        this.email = ''
        this.password =''
        router.push({name: 'profile'})
      }).catch(err => {
        console.log(err)
      })
      this.emitMethod()
    },
    emitMethod() {
      Eventbus.$emit('logged-in', 'loggedin')
    }
  }
}
</script>