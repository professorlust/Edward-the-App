<template>
<div class="wrap">
  <hr class="divider">
  <div class="username">
    <label for="login-username-input">Email address:</label>
    <input tabindex="1" id="login-username-input" class="login-field" type="text" v-model="email">
  </div>
  <div class="password">
    <label for="login-password-input">Password:</label>
    <input tabindex="2" id="login-password-input" class="login-field" type="password" v-model="password">
    <router-link to="/forgot">
      <button tabindex="3" class="button-link forgot-button">Forgot your password?</button>
    </router-link>
  </div>
  <div class="captcha">
    <Captcha :tabindex="4" @change="setCaptchaResponse" @expire="resetCaptchaResponse" ref="captcha"></Captcha>
  </div>
  <div class="messages">
    <p>{{ loginMessage }}</p>
  </div>
  <div class="actions">
    <pulse-loader v-if="loading"></pulse-loader>
    <button tabindex="5" v-if="!loading" class="login-button button-green" :disabled="!canLogin" @click="logIn()">Log In</button>
  </div>
  <hr class="divider">
  <div class="sign-up">
    <div class="sign-up-text">Don't have an account?</div>
    <button tabindex="6" class="sign-up-link button-link" @click="signUp()">Sign up for free.</button>
  </div>
  <hr class="divider">
  <div class="sign-up">
    <div class="sign-up-text">Just want to check it out?</div>
    <button tabindex="7" class="sign-up-link button-link" @click="viewDemo()">Try the demo.</button>
  </div>
</div>
</template>

<script>
import authApi from './authApi'
import Captcha from './captcha.vue'
import { goToApp } from './shared'
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'

export default {
  beforeCreate () {
    authApi.logOut()
  },
  components: {
    Captcha,
    PulseLoader
  },
  computed: {
    canLogin () {
      return (
        !!this.email.trim() &&
        !!this.password.trim()
      )
    },
    isTest () {
      return this.email === 'trash@edwardtheapp.com'
    }
  },
  data () {
    return {
      captchaResponse: '',
      email: '',
      loading: false,
      loginMessage: '',
      password: ''
    }
  },
  methods: {
    logIn () {
      this.loginMessage = ''

      if (!this.captchaResponse && !this.isTest) {
        this.loginMessage = 'Please indicate that you are not a robot.'
        return
      }

      this.loading = true

      authApi.logIn({
        email: this.email,
        password: this.password,
        captchaResponse: this.captchaResponse,
        integration: this.isTest
      }).then(result => {
        this.loading = false

        if (!result.verified) {
          this.$router.push('/verification')
        } else if (!result.isPremium) {
          this.$router.push('/limited')
        } else {
          goToApp()
        }
      }, () => {
        this.loading = false
        this.$refs.captcha.reset()
        this.loginMessage = 'Login failed. Please try again.'
      })
    },
    resetCaptchaResponse () {
      this.captchaResponse = ''
    },
    setCaptchaResponse (response) {
      this.captchaResponse = response
    },
    signUp () {
      this.$router.push('/signup')
    },
    viewDemo () {
      this.loading = true

      authApi.demoLogIn().then(result => {
        this.loading = false
        goToApp()
      }, () => {
        this.loading = false
        this.loginMessage = `The demo account isn't working right now. Please try again later.`
      })
    }
  }
}
</script>

<style scoped>
.wrap {
  align-items: flex-start;
  display: flex;
  flex: 1;
  flex-direction: column;
  font-size: 16px;
  justify-content: center;
  margin-bottom: 20px;
}

.sign-up {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.sign-up-text {
  display: flex;
  justify-content: center;
}

.sign-up-link {
  font-size: 16px;
}

.divider {
  background-color: #CCC;
  height: 1px;
  margin: 20px 0;
  width: 100%;
}

.username, .password {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0;
  margin-bottom: 20px;
  width: 100%;
}

.username label, .password label {
  text-align: center;
  width: 100%;
}

.login-field {
  width: 300px;
}

.captcha {
  display: flex;
  justify-content: center;
  margin-bottom: 12px;
  width: 100%;
}

.messages {
  align-items: center;
  color: red;
  display: flex;
  font-size: 12px;
  height: 20px;
  justify-content: center;
  margin: 0;
  margin-bottom: 6px;
  width: 100%;
}

.actions {
  display: flex;
  justify-content: center;
  width: 100%;
}

.login-button {
  font-size: 16px;
}
</style>
