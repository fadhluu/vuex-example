<template>
  <div class="form-group">
    <button class="btn btn-primary" @click="increment">Increase</button>
    <button class="btn btn-warning" @click="decrement">Decrease</button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  methods: {
    ...mapMutations(['increment', 'decrement']),
  },
};
</script>
