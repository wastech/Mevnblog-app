<template>

<div class="container">
    <h4>Add a New Popular Resource</h4>
  <div class="row">
  
 
    <div class="col-sm-12">
  <form>
  <div class="form-group required">
    <label for="" class='control-label'>author</label>
    <input type="text" class="form-control" aria-describedby="textHelp" placeholder="author name">
  </div>
  <div class="form-group required">
    <label for="exampleInputPassword1" class='control-label'>Title</label>
    <input type="text" class="form-control" placeholder="title goes here">
  </div>
    
  <div class="form-group required mt-2">
    <label for="exampleInputPassword1" class='control-label'>category</label>
    <input type="text" class="form-control" placeholder="category of the post">
  </div>

  
  <div class="form-group required">
    <label for="exampleInputPassword1" class='control-label'>Company Name</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Ex:Infosys">
  </div>
  <div class="form-group">
    <label for="exampleInputFile">image</label>
    <input type="file" class="form-control-file" id="exampleInputFile" aria-describedby="fileHelp">
    <!--<small id="fileHelp" class="form-text text-muted">This is some placeholder block-level help text for the above input. It's a bit lighter and easily wraps to a new line.</small>-->
  </div>
    <tinymce id="d1" v-model="data"></tinymce>
    <button type="button" class="btn btn-primary btn-lg btn-block mt-5">submit</button>
</form>
</div>
 
  </div>
  
</div>
</template>

<script>
export default {
    data() {
        return {
            
		 data : ''
        }
    }
    
	
}
</script>

<style scoped>
.form-group.required .control-label:after { 
   content:"*";
   color:red;
}
h4{
    text-align: center;
}

</style>
