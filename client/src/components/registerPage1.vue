<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 mt-5 mx-auto">
          <form v-on:submit.prevent="register">
              <h1 class="h3 mb-3 font-weight-normal">Register</h1>
              <div class="form-group">
                  <label for="first_name">first name</label>
                  <input type="text" class="form-control" v-model="first_name" name="first_name" placeholder="First Name">
              </div>
              <div class="form-group">
                  <label for="last_name">last name</label>
                  <input type="text" class="form-control" v-model="last_name" name="last_name" placeholder="Last Name">
              </div>
              <div class="form-group">
                  <label for="email">Email Address</label>
                  <input type="email" class="form-control" v-model="email" name="email" placeholder="email">
              </div>
              <div class="form-group">
                  <label for="password">password</label>
                  <input type="text" class="form-control" v-model="password" name="password" placeholder="password">
              </div>
              <button class="btn btn-lg btn-primary btn-block" type="submit">submit</button>
          </form>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import router from '../router'
export default {
  data() {
    return {
      first_name: '',
      last_name: '',
      email: '',
      password: '',

    }
  },
  methods: {
    register() {
      axios.post('http://localhost:5000/users/register', {
        first_name: this.first_name,
        last_name: this.last_name,
        email: this.email,
        password: this.password
      }).then(res => {
        router.push({name: 'login'})
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>