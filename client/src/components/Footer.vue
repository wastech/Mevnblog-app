<template>
<div class="main mt-4">
    <div class="container">
 <footer class="container-fluid bg-white py-5">
<div class="container-fluid">
   <div class="row">
      <div class="col-md-6">
         <div class="row">
            <div class="col-md-6 ">
               <div class="logo-part">
                  <img src="https://i.ibb.co/sHZz13b/logo.png" class="w-50 logo-footer" >
                  <p>7637 Laurel Dr. King Of Prussia, PA 19406</p>
                  <p>Use this tool as test data for an automated system or find your next pen</p>
               </div>
            </div>
            <div class="col-md-6 px-4">
               <h6> About Company</h6>
               <p>But horizontal lines can only be a full pixel high.</p>
               <a href="#" class="btn-footer"> More Info </a><br>
               <a href="#" class="btn-footer"> Contact Us</a>
            </div>
         </div>
      </div>
      <div class="col-md-6">
         <div class="row">
            <div class="col-md-6 px-4">
               <h6> Help us</h6>
               <div class="row ">
                  <div class="col-md-6">
                     <ul>
                        <li> <a href="#"> Home</a> </li>
                        <li> <a href="#"> About</a> </li>
                        <li> <a href="#"> Service</a> </li>
                        <li> <a href="#"> Team</a> </li>
                        <li> <a href="#"> Help</a> </li>
                        <li> <a href="#"> Contact</a> </li>
                     </ul>
                  </div>
                  <div class="col-md-6 px-4">
                     <ul>
                        <li> <a href="#"> Cab Faciliy</a> </li>
                        <li> <a href="#"> Fax</a> </li>
                        <li> <a href="#"> Terms</a> </li>
                        <li> <a href="#"> Policy</a> </li>
                        <li> <a href="#"> Refunds</a> </li>
                        <li> <a href="#"> Paypal</a> </li>
                     </ul>
                  </div>
               </div>
            </div>
            <div class="col-md-6 ">
               <h6> Newsletter</h6>
               <div class="social">
                  <a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                  <a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a>
               </div>
               <form class="form-footer my-3">
                  <input type="text"  placeholder="search here...." name="search">
                  <input type="button" value="Go" >
               </form>
               <p>That's technology limitation of LCD monitors</p>
            </div>
         </div>
      </div>
   </div>
</div>
 </footer>
    </div>
</div>
</template>

<script>
export default {
}
</script>
<style scoped>
.container {
  max-width: 83%;
  padding: 3em;
}
 body {
        font-family: 'Signika', sans-serif;
     }
    
     .logo-footer {
        margin-bottom: 40px;
     }
     footer {
            color:black;
     }
     footer p, a {
    font-size:x-large;
    font-family: 'Roboto', sans-serif;
}
footer h6 {
    font-family: 'Playfair Display', serif;
    margin-bottom: 40px;
    position: relative;
}
footer h6:after {
    position: absolute;
    content: "";
    background: grey;
    width: 12%;
    height: 1px;
    left: 0;
    bottom: -20px;
}
     .btn-footer {
                 color: black;
              
                text-decoration: none;
                border: 1px solid;
                border-radius: 43px;
                font-size: 13px;
                padding: 7px 30px;
                line-height: 47px;
     }
     .btn-footer:hover {
                
                text-decoration: none;
               
     }
    .form-footer input[type="text"] {
        border: none;
    border-radius: 16px 0 0 16px;
    outline: none;
    padding-left: 10px;
    
}
::placeholder {
    font-size: 10px;
    padding-left: 10px;
    font-style: italic;
}
 .form-footer input[type="button"] {
    border: none;
    background:#232323;
        margin-left: -5px;
    color: #fff;
    outline: none;
    border-radius: 0 16px 16px 0;
    padding: 2px 12px;
}
     .social .fa {
    color: black;
    font-size: 22px;
    padding: 10px 15px;
    background: #3c3c3c;
}
     footer ul li {
    list-style: none;
    display: block;
}
  footer ul  {
   padding-left: 0;
}
footer ul  li a{
  text-decoration: none;
  color: black;
  text-decoration:none;
}
a:hover {
    text-decoration: none;
    color: yellow !important;
    
}
.logo-part {
    border-right: 1px solid grey;
    height: 100%;
    }
    
@media screen and (max-width: 750px) {
  .container {
  max-width: 120%;
  padding: 3em;
}
 
  img {
  width: 100%;
   height: 30%;


}
}
</style>
