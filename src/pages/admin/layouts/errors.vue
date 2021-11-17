<template>
  <div v-if="errors">
    <div class="alert alert-danger" role="alert">
      <ul>
        <li v-for="(error, index) in errors" :key="index">
          {{ error[0] }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "errors",
  props: {
    errors: {
      type: Object,
      default: {},
    },
  },
};
</script>