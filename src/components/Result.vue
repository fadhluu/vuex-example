<template>
  <div class="form-group">
    <p>Counter: {{ counter }}</p>
  </div>
</template>

<script>
export default {
  computed: {
    counter() {
      return this.$store.state.counter;
    },
  },
};
</script>
