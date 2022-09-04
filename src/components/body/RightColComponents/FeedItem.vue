<template>
  <div class="feed-item q-mt-md">
    <div class="left-col">
      <img alt="profile pic" src="~assets/img1.jpg" />
    </div>
    <div class="right-col">
      <span class="name">{{ userData.userName }}</span>
      <span class="profession">{{ userData.profession }}</span>
      <q-btn
        class="q-mt-xs"
        outline
        rounded
        color="black"
        icon="add"
        label="follow"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters("linkedIn", ["userData"]),
  },
};
</script>

<style lang="scss" scoped></style>
