<template>
  <div>
    <div class="form-group">
      <button class="btn btn-primary" @click="increment(100)">Increase</button>
      <button class="btn btn-warning" @click="decrement(100)">Decrease</button>
    </div>
    <div class="form-group">
      <button
        class="btn btn-primary"
        @click="asyncIncrement({ by: 100, duration: 3000 })"
      >
        Increase Async
      </button>
      <button
        class="btn btn-warning"
        @click="asyncDecrement({ by: 100, duration: 3000 })"
      >
        Decrease Async
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods: {
    ...mapActions([
      'increment',
      'decrement',
      'asyncIncrement',
      'asyncDecrement',
    ]),
    increment(by) {
      this.$store.dispatch('increment', by);
    },
    decrement(by) {
      this.$store.dispatch('decrement', by);
    },
  },
};
</script>
