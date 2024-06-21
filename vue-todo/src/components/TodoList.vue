<template>
  <div>
    <ul>
      <!-- props 내릴때 todoItems 을 propsdata로 수정 -->
      <li v-for="(todoItem, index) in propsdata" v-bind:key="todoItem.item" class="shadow">
        <i class="fas fa-check checkBtn" v-bind:class="{checkBtnCompleted: todoItem.completed}" v-on:click="toggleComplete(todoItem, index)"></i>

        <span v-bind:class="{textCompleted: todoItem.completed}">{{ todoItem.item }}</span>

        <!-- <button v-on:click="removeTodo">삭제</button> -->
        <!-- index 는 array 0 을 가리킴 -->
        <span class="removeBtn" v-on:click="removeTodo(todoItem, index)">
          <i class="fas fa-trash-alt"> 삭제</i>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TodoList',

  props: ['propsdata'],

  methods: {
    removeTodo(todoItem, index) {
      console.log(todoItem, index);
      localStorage.removeItem(todoItem);
      this.todoItems.splice(index, 1);
      // splice 자바스크립트 배열 - 특정 index에서 1개를 지움
      // slice() 함수는 배열로 부터 특정 범위를 복사한 값들을 담고 있는 새로운 배열을 만드는데 사용
      // slice() 함수의 이름에서 알파벳 p가 하나 더 있는 splice() 함수는 다목적으로 사용할 수 있는 함수/ 이 함수로는 배열로 부터 특정 범위를 삭제하거나 새로운 값을 추가 또는 기존 값을 대체할 수 있습니다.
    },
    toggleComplete : function(todoItem, index) {
      console.log(todoItem, index);
      todoItem.completed = !todoItem.completed;
      // 로컬스토리의 업데이트 갱신
      localStorage.removeItem(todoItem.item);
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    }
  },
  
};
</script>

<style scoped>
  ul {
    width: 80%;
    margin: 0 auto;
  }
  li {
    display: flex;
    align-items: center;
    min-height: 60px;
    line-height: 60px;
    margin: 0.5rem 0;
    padding: 0 0.9rem;
    background: #fff;
    border-radius: 6px;
  }
  .removeBtn {
    margin-left: auto;
    color: rebeccapurple;
    cursor: pointer;
  }
  .checkBtn {
    color:#62acde;
    padding:0 10px;
    margin-right: 5px;
    cursor: pointer;
  }
  .checkBtnCompleted {
    color:#bbb;
  }
  .textCompleted {
    color:#bbb;
    text-decoration: line-through;
  }
  
</style>