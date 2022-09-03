<template>
  <div style="width: 100%">
    <main-header />
    <filter-btn />
    <post-single />
    <post-single />
    <post-single />
    <post-single />
    <post-single />
    <post-single />
    <post-single />
  </div>
</template>

<script>
import FilterBtn from "./MainColComponents/FilterBtn.vue";
import MainHeader from "./MainColComponents/MainHeader.vue";
import PostSingle from "./MainColComponents/PostSingle.vue";

export default {
  components: {
    MainHeader,
    FilterBtn,
    PostSingle,
  },
};
</script>

<style lang="sass" scoped></style>
