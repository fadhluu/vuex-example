<template>
  <div class="container">
    <div class="row">
      <div class="col-8 mx-auto mt-4">
        <h1>Vuex</h1>
        <hr>
        <Result></Result>
        <hr />
        <Counter></Counter>
      </div>
    </div>
  </div>
</template>

<script>
import Counter from './components/Counter';
import Result from './components/Result';

export default {
  components: {
    Counter,
    Result,
  },
};
</script>
