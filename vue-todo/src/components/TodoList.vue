<template>
  <div>
    <ul>
      <li v-for="(todoItem, index) in todoItems" v-bind:key="todoItem.item" class="shadow">
        <i class="fas fa-check checkBtn" v-bind:class="{checkBtnCompleted: todoItem.completed}" v-on:click="toggleComplete(todoItem, index)"></i>

        <span v-bind:class="{textCompleted: todoItem.completed}">{{ todoItem.item }}</span>

        <!-- <button v-on:click="removeTodo">삭제</button> -->
        <!-- index 는 array 0 을 가리킴 -->
        <span class="removeBtn" v-on:click="removeTodo(todoItem, index)">
          <i class="fas fa-trash-alt"></i>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TodoList',  

  data() {
    return {
      todoItems: []
    };
  },

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

  created: function() {
    // vue 인스턴스 생성되자마자 호출되는 라이프사이클 훅
    console.log('created');

    // 로컬스토리지(브라우저 저장소)에 데이타가 있다면 todoItems 에 푸시 / key값은 로컬스토리지에 있는 값
    if (localStorage.length > 0) {
      for (var i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
          this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
          console.log(JSON.parse(localStorage.getItem(localStorage.key(i))));
          // this.todoItems.push(localStorage.key(i));
        }
        
        console.log(localStorage.key(i)); //동작 하자마자 localStorage.key 값 실행
      }
    }
  },  

  mounted() {
    
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