<template>
  <div>
    <!-- <todo-header></todo-header> 컴포넌트 태그명 파스칼케이스(대문자), 컴포넌트는 케밥사용(-) 권고 -->
    <TodoHeader></TodoHeader>
    <TodoInput></TodoInput>
    <TodoList></TodoList>
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
    font-size: 20px;
    font-weight: 500;
    color: #333;
    line-height: 1.4;
  }
  input {
    border : 1px solid #ccc;
    width: 200px;
    height: 50px;
    font: inherit;
  }
  button {
    background :#333;
    height: 50px;
    font: inherit;
    color: #fff;
    padding: 0 20px;
    border: 0;
  }
  .shadow {
    box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.2);
  }
</style>
