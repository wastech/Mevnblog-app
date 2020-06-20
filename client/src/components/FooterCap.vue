<template>
<div class="container">
  <section class="subscribe pb-50 pt-70">
    <div class="container">
      <div class="row">

        <div class="col-md-6">
          <div class=" mt-15 mb-15">
            <h1>readdy to take a test drive?</h1>
            <p>subscribe subscribe newsletter subscribe newsletter vsubscribe newsletter subscribe newsletter newsletter</p>
          </div>
        </div>
        <div class="col-md-6">
          <div class="subscribe-wrapper subscribe2-wrapper mb-15">
            <div class="subscribe-form">
<form class="form-inline ml-4 mt-3">
       <div class="row">
    <div class="col-8">
    <input class="form-control mr-sm-2" type="search" placeholder="@ enter your email" v-model="aremu" aria-label="@ enter your email">
    </div>
    <div class="col-4 ">
      <button class="btn btn-outline-success " type="submit">try it free</button>
    </div>
    </div>
    </form>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</div>
</template>

<style scoped>
h1{
  max-width: 80%;
  color: #fff;
  font-weight: 900;
  font-size: 3em;
}

p{
  max-width: 80%;
  color: #fff;

}
.container {
  max-width: 79%;
  margin-top:5em;
}
.subscribe {
  background-image: linear-gradient(to top, black 1%, black 100%);
}

.pb-50 {
  padding-bottom: 50px;
}

.pt-70 {
  padding-top: 30px;
}

.mb-15 {
  margin-bottom: 30px;
}
button{
  margin-left: -3rem;
  background-color: blue;
  color:white;
  width: 8em;
   padding: 1.3em;
  border-radius: 0.7rem;
}
input{
  border-radius: 0.7rem;
  padding: 2em;
}
@media screen and (max-width: 750px) {
  .pt-70 {
  padding-top: 15px;
}
  .mb-15 {
  margin-bottom: 10px;
}
 h1{

  color: #fff;
  font-weight: 100%;
  font-size: 2em;
   max-width: 100%;
}
.container {
  max-width: 97%;
  margin-top:2em;
}
p{
   max-width: 100%;
}
 
  img {
  width: 100%;
   height: 30%;


}
}
</style>
