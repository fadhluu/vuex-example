<template>
  <div class="form-group">
    <button class="btn btn-primary" @click="increment">Increase</button>
    <button class="btn btn-warning" @click="decrement">Decrease</button>
  </div>
</template>

<script>
export default {
  methods: {
    increment() {
      this.$store.state.counter += 1;
    },
    decrement() {
      this.$store.state.counter -= 1;
    },
  },
};
</script>
