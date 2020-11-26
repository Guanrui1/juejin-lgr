<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">
        juejin-lgr
      </h1>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
      <div>
        <div class="d-flex d-padding-10 d-shadow d-margin-bottom" v-for="(item, index) in list" :key="index">
          <img class="u-img u-left d-margin-left-20" :src="item.avatar_large" alt="图片暂无">
          <div class="c-right d-flex d-flex-direction-column d-space-around d-margin-left-40">
            <div class="d-flex">
              <div class="u-user-name">{{ item.user_name }}</div>
              <div class="u-level">{{ item.level }}</div>
            </div>
            <div class="u-job-title">{{ item.job_title }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  async asyncData() {
    let res = await axios({
      method: 'GET',
      url: 'http://localhost:8088/recommend'
    })
    return {
      list: res.data
    }
  },
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

.d-border {
  border: 1px solid #888;
}

.u-img {
  width: 3.8rem;
  height: 3.8rem;
  border-radius: 3.8rem;
}

.d-flex {
  display: flex;
}

.d-shadow {
  box-shadow: 0 0 2px 2px #ccc;
}

.d-flex-direction-column {
  flex-direction: column;
}

.d-margin-left-20 {
  margin-left: 20px;
}

.d-margin-left-40 {
  margin-left: 40px;
}

.d-margin-bottom {
  margin-bottom: 10px;
}

.d-padding-10 {
  padding: 10px;
}
.d-space-around {
  justify-content: space-around;
}

.u-user-name {

}
.u-level {

}

.u-job-title {}


</style>
