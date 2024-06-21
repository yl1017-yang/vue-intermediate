<template>
  <div>
    <!-- <todo-header></todo-header> 컴포넌트 태그명 파스칼케이스(대문자), 컴포넌트는 케밥사용(-) 권고 -->
    <TodoHeader></TodoHeader>
    <TodoInput></TodoInput>
    <TodoList v-bind:propsdata="todoItems"></TodoList>
    <TodoFooter></TodoFooter>
    
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue';
import TodoInput from './components/TodoInput.vue';
import TodoList from './components/TodoList.vue';
import TodoFooter from './components/TodoFooter.vue';

export default {
  name: 'App',

  //Todolist 컴포넌트의 내용
  data: function() {
    return {
      todoItems: []
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
      }
    }
  }, 

  components: {
    //컴포넌트 태그명 : 컴포넌트 내용
    // 파스칼케이스 단어앞 첫글자 대문자 사용!
    TodoHeader : TodoHeader,
    TodoInput : TodoInput,
    TodoList : TodoList,
    TodoFooter : TodoFooter,
  },
}
</script>

<style>
  body {
    text-align: center;
    background: #eee;
    font-family: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
    font-size: 1.2rem;
    font-weight: 500;
    color: #333;
    line-height: 1.4;
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing:border-box;-webkit-box-sizing:border-box;
  }
  input {
    /* border : 1px solid #333; */
    /* width: 240px;
    height: 46px; */
    font: inherit;
  }
  button {
    /* background :#333;
    height: 50px; */
    font: inherit;
    /* color: #fff; */
    padding: 0 30px;
    border: 0;
    cursor: pointer;
  }
  ul, li {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .shadow {
    box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.2);
  }
</style>
