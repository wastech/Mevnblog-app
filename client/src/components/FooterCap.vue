<template>
<div class="container">
    <div class="row">
        <div class="col-sm">
            <h1>Ready To Take a Drive</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus</p>
        </div>
        <div class="col-sm">
            <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" placeholder="enter you email...." aria-label="Search">
                <button class="button">subscribe</button>
            </form>
        </div>

    </div>
</div>
</template>

<style scoped>
.container {
    background-color: blue;
    height: 80%;
    padding: 2em;
    margin-top: 3rem;
    margin-bottom: 1rem;
}

h1 {
    font-size: 2rem;
    color: white;
    padding: 0.3rem;

}

input {

    padding: 2rem;
    border-top-right-radius: 1rem;
    border-bottom-right-radius: 1rem;
    margin-top: 2rem;

}

.button {
  display: inline-block;
  padding: 15px 25px;
  font-size: 24px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  outline: none;
  color: #fff;
  background-color: #4CAF50;
  border: none;
  border-radius: 15px;
  box-shadow: 0 9px #999;
  margin-top: 1rem;
}

.button:hover {background-color: #3e8e41}

.button:active {
  background-color: #3e8e41;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}

p {
    color: white;
}
@media screen and (max-width: 750px) {
 .container {
    background-color: blue;
    height: 35%;
    padding: 1em;
    margin-top: 2rem;
    
}
input {

    padding: 1rem;
    border-top-right-radius: 1rem;
    border-bottom-right-radius: 1rem;
    margin-top: 1rem;

}

button {
   

    margin-top: 2rem;
    border-top-left-radius: 1rem;
    border-bottom-left-radius: 1rem;
}

}
</style>
