<template>
<div class="container">
  <section class="subscribe-area pb-50 pt-70">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <div class=" mb-15">
            <h1>JOIN OUR NEWSLETTER</h1>
            <h2>subscrhjjjjjjjjjjjjjjjibe zzzznewsletter</h2>
            <h2>subscribe newsletter</h2>
            <div class="col-md-8">
              <div class="subscribe-wrapper subscribe2-wrapper mb-15">
                <div class="subscribe-form">
                  <form action="#">
                    <input placeholder="enter your email address" type="email" v-model="email">
                    <button>subscribe <i class="fas fa-long-arrow-alt-right" @click="addpost()"></i></button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      email: '',
    }
  },
  methods: {
     addpost() {
     let url = 'api/Newsroute/mail'
      axios.post(uri, this.email).then((Response)=> {
        console.log(response)
      })
      
    }
  }
}
</script>

<style scoped>
.subscribe-area {
  background-image: linear-gradient(to top, #00c6fb 0%, #005bea 100%);
}

.pb-50 {
  padding-bottom: 50px;
}

.pt-70 {
  padding-top: 70px;
}

.mb-15 {
  margin-bottom: 15px;
}

.subscribe-text span {
  font-size: 12px;
  font-weight: 700;
  color: #fff;
  letter-spacing: 5px;
}

.subscribe-text h2 {
  color: #fff;
  font-size: 36px;
  font-weight: 300;
  margin-bottom: 0;
  margin-top: 6px;
}

.subscribe-wrapper {
  overflow: hidden;
}

.mb-15 {
  margin-bottom: 15px;
}

.subscribe2-wrapper .subscribe-form input {
  background: none;
  border: 1px solid #fff;
  border-radius: 30px;
  color: #fff;
  display: inline-block;
  font-size: 15px;
  font-weight: 300;
  height: 57px;
  margin-right: 17px;
  padding-left: 35px;
  width: 70%;
  cursor: pointer;
}

.subscribe2-wrapper .subscribe-form button {
  background: #ffff;
  border: none;
  border-radius: 30px;
  color: #4b5d73;
  display: inline-block;
  font-size: 18px;
  font-weight: 400;
  line-height: 1;
  padding: 18px 46px;
  transition: all 0.3s ease 0s;
}

.subscribe2-wrapper .subscribe-form button i {
  font-size: 18px;
  padding-left: 5px;
}
</style>
