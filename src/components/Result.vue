<template>
  <div class="form-group">
    <p>Counter: {{ doubleCounter }}</p>
    <p>Number of click: {{ clickCounter }}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['doubleCounter', 'clickCounter']),
  },
};
</script>
