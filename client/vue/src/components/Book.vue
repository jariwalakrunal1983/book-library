<template>
  <div class="Book" v-if="filterByValue(book)">
    <div v-if="isEditMode">
      <input 
          type="text" 
          placeholder="Name" 
          v-model="book.name" />
      <textarea 
          type="text" 
          rows="3"
          placeholder="Description"
          v-model="book.description"/>
      <input 
          min="0"
          type="number" 
          placeholder="Count" 
          v-model="book.count"/>
      <input 
          type="text" 
          placeholder="Author" 
          v-model="book.author" />
      <button class="Btn BtnSuccess" @click="toggleEditMode()">Save</button>
    </div>
    <div v-else>
      <h2 class="Title">{{book.name}}</h2>
      <small class="OtherInfo">Author: {{book.author}}, Qty: {{book.count}}</small>
      <p :class="descriptionClass">{{book.description}}</p>
      <button class="Btn BtnDefault" @click="showMoreToggle()">Show Detail</button>
      <button class="Btn BtnInfo" @click="toggleEditMode()">Edit</button>
      <button class="Btn BtnDanger" @click="removeBook(book.id)">Remove</button>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex';
import * as types from '../store/types';

export default {
  name: 'Book',
  props: ['book','searchValue'],
  data(){
    return{
      isEditMode: false,
      showMore: false,
      descriptionClass: 'Description Short'
    }
  },
  methods: {
    ...mapActions({
      removeBook: types.ACTION_REMOVE_BOOK
    }),
    filterByValue: function(obj){
        if (this.searchValue.trim() === '') return true;
        return Object.keys(obj).some(k => obj[k].toString().toLowerCase().includes(this.searchValue.toLowerCase()));
    },
    showMoreToggle: function() {
      if (this.showMore !== true)
          this.descriptionClass = 'Description';
      else
          this.descriptionClass =  'Description Short'
      this.showMore = !this.showMore;
    },
    toggleEditMode: function() {
      this.isEditMode = !this.isEditMode
    }
  }
}
</script>

<style scoped>
</style>