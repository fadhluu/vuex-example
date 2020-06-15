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
import * as types from '../store/types';

export default {
  computed: {
    ...mapGetters({
      clickCounter: [types.CLICK_COUNTER],
      doubleCounter: [types.DOUBLE_COUNTER],
    }),
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
