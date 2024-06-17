<template>
  <div>
    <!-- v-model : input에 있는 텍스트를 동적으로 vue 인스턴스에 맵핑 / 화면에서의 data 동기화 됨 -->
    <input type="text" v-model="newTotoItem">
    <button v-on:click="addTodo">추가+</button>
  </div>
</template>

<script>
export default {
  name: 'TodoInput',

  data: function() {
    return {
      newTotoItem : ""
    };
  },

  mounted() {
    
  },

  methods: {
    addTodo: function() {
      console.log(this.newTotoItem);
    }
  },
};
</script>

<style>

</style>