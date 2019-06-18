<template>
  <div class="AddBook">
    <div class="BookFrom">
      <h2>Add New Book</h2>
      <input 
          ref="bookname"
          type="text" 
          placeholder="Name" 
          v-model="book.name" />
      <textarea 
          type="text" 
          rows="3"
          placeholder="Description"
          v-model="book.description" />
      <input 
          min="0"
          type="number" 
          placeholder="Count" 
          v-model="book.count" />
      <input 
          type="text" 
          placeholder="Author" 
          v-model="book.author" />
    </div>
    <button class="Btn BtnPrimary" :disabled="isDisable" @click="addBook({...book})">Add Book</button>
    <button @click="saveBooks" class="Btn BtnSuccess">Save Data</button>
    <span v-if="addErrorMessage != ''" class="Error">{{addErrorMessage}}</span>
  </div>
</template>

<script>
import * as types from '../store/types';

export default {
  name: 'AddBook',
  data(){
    return{
      book: {
        name: '',
        description: '',
        count: '',
        author: '',
      },
      addErrorMessage: '',
      isDisable: true,
    }
  },
  methods: {
    saveBooks: function(){
      this.$store.dispatch(types.ACTION_SAVE_BOOKS);
    },
    addBook: function(){
      let data = {...this.book};
      this.$store.dispatch(types.ACTION_ADD_BOOK,data).then(() => {
        this.book.name = '';
        this.book.description = '';
        this.book.count = 0;
        this.book.author = '';
        this.$refs.bookname.focus();
      }, error => {
        this.addErrorMessage = error;
      });
    }
  },
  watch:{
    book:{
      handler: function(newValue) {
        let app = this;
        if (newValue.name.trim() === "" ||
          newValue.description.trim() === "" ||
          newValue.count <= 0 ||
          newValue.author.trim() === "") {
            app.isDisable = true;
        } else {
          app.isDisable = false;
        }
      },
      deep: true
    }
  }
}
</script>

<style scoped>
</style>