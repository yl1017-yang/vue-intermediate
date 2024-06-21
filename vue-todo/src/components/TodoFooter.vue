<template>
  <div class="clearAllContainer">
    <span class="clearAllBtn shadow" v-on:click="clearTodo">전체 삭제</span>
  </div>
</template>

<script>
export default {
  name: 'TodoFooter',

  data() {
    return {
      
    };
  },

  mounted() {
    
  },

  methods: {
    clearTodo: function() {
      localStorage.clear();
    }
  },
};
</script>

<style scoped>
.clearAllContainer {
  width: 10rem;
  height: 50px;
  line-height: 50px;
  background: #fff;
  border-radius: 5px;
  margin:40px auto;
}
.clearAllBtn {
  color: orangered;
  display: block;
  font-weight: 600;
  cursor: pointer;
}
</style>