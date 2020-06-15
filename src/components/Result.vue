<template>
  <div class="form-group">
    <p>Counter: {{ doubleCounter }}</p>
    <p>Number of click: {{ clickCounter }}</p>
    <div class="form-group">
      <label>Value: {{ value }} </label>
      <input type="text" class="form-control" v-model="value" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['doubleCounter', 'clickCounter']),
    value: {
      get() {
        return this.$store.getters.value;
      },
      set(value) {
        this.$store.dispatch('setValue', value);
      },
    },
  },
};
</script>
