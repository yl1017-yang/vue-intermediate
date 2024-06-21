<template>
  <div class="inputBox shadow">
    <!-- v-model : input에 있는 텍스트를 동적으로 vue 인스턴스에 맵핑 / 화면에서의 data 동기화 됨 -->
    <!-- 키보드로도 엔터값 칠수 있게 사용 keyup.enter -->
    <input type="text" v-model="newTotoItem" v-on:keyup.enter="addTodo">
    <div class="addContainer" v-on:click="addTodo">
      <!-- {{ newTotoItem }} -->
      <i class="fas fa-plus addBtn"> 입력</i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TodoInput',

  data: function() {
    return {
      newTotoItem : ""
    }
  },

  mounted() {
    
  },

  methods: {
    addTodo: function() {
      if (this.newTotoItem !== '') {  //neTodoItem 값이 무조건 있을때
        var obj = {completed: false, item: this.newTotoItem};
        console.log(this.newTotoItem);
        localStorage.setItem(this.newTotoItem, JSON.stringify(obj));
        // localStorage.setItem(this.newTotoItem, this.newTotoItem);
        //this.newTotoItem = '';
        this.clearInput();  
      }
    
    },
    clearInput: function() {
      this.newTotoItem = '';
    },

    // 로컬 스토리지 setItem() API 공식 가이드 : https://developer.mozilla.org/en-US/docs/Web/API/Storage/setItem
    // https://fontawesome.com/ 
  },
};
</script>


<style scoped>
input:focus {
  outline: none;
}
.inputBox {
  display: flex;  
  width: 80%;
  height: 70px;
  line-height: 70px;
  background: #fff;
  margin: 0 auto 2rem;
}
.inputBox input {
  border-style : none;
  font-size: 1.5rem;
  width: 100%;
  padding: 0 1rem;
}
.addContainer {
  display: block;
  width: 30% !important;
  background: linear-gradient(to right, #6478FB, #8763FB);
  width: 1rem;
  border-radius: 0.1rem;
  color: #fff;
  cursor: pointer;
}
.addBtn {
  color:#fff;
  vertical-align: middle;
}
</style>