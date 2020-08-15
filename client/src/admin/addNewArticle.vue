<template>
  <div class="container">
    <h4>Ad a new Article</h4>
    <div class="row">
      <div class="col-sm-12">
        <form>
          <div class="form-group required">
            <label for class="control-label">author</label>
            <input
              type="text"
              class="form-control"
              aria-describedby="textHelp"
              v-model="post.author"
              placeholder="author name"
            />
          </div>
          <div class="form-group required">
            <label for="exampleInputPassword1" class="control-label">Title</label>
            <input
              type="text"
              class="form-control"
              placeholder="title goes here"
              v-model="post.title"
            />
          </div>

          <div class="form-group required mt-2">
            <label for="exampleInputPassword1" class="control-label">category</label>
            <input
              type="text"
              class="form-control"
              placeholder="category of the post"
              v-model="post.category"
            />
          </div>

          <div class="form-group">
            <label for="exampleInputFile">image</label>
            <input
              type="text"
              class="form-control-file"
              id="exampleInputFile"
              aria-describedby="fileHelp"
              v-model="post.image"
            />
            <!--<small id="fileHelp" class="form-text text-muted">This is some placeholder block-level help text for the above input. It's a bit lighter and easily wraps to a new line.</small>-->
          </div>
          <wysiwyg v-model="post.description" />
          <button
            type="button"
            class="btn btn-primary btn-lg btn-block mt-5"
            @click="addPost"
          >submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      post: {},
    };
  },
  methods: {
    addPost() {
      let url = "api/article/save_article";
      axios
        .post(url, this.post)
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>
<style scoped>
.form-group.required .control-label:after {
  content: "*";
  color: red;
}
h4 {
  text-align: center;
}
</style>
