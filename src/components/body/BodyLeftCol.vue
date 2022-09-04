<template>
  <div class="left-col-container">
    <div class="left-col-header">
      <div class="header-top">
        <div class="img">
          <img alt="profile pic" src="~assets/img1.jpg" />
        </div>
      </div>
    </div>
    <div class="user-info">
      <p class="name">{{ userData.userName }}</p>
      <p class="profession">{{ userData.profession }}</p>
    </div>

    <div class="hr"></div>

    <div class="user-info-2">
      <div class="connection q-mt-md">
        <p class="left">connections</p>
        <p class="right">{{ userData.userConnections }}</p>
      </div>
      <span class="grow">grow your network</span>
    </div>

    <div class="user-info-2">
      <div class="connection q-mt-sm">
        <p class="left">who visited your profile</p>
        <p class="right">{{ userData.userVisitedProfiles }}</p>
      </div>
    </div>

    <div class="hr"></div>

    <div class="premium q-my-xs">
      <span> Access exclusive tools & insights </span>
      <p>Try premium for free</p>
    </div>

    <div class="hr"></div>

    <p class="my-items">
      <q-icon size="xs" name="mdi-package-down" /> My items
    </p>

    <div class="hr"></div>
  </div>

  <div class="left-col-container q-mt-sm">
    <q-list class="q-mt-sm">
      <q-item class="my-list" dense>
        <q-item-section> Groups </q-item-section>
      </q-item>
      <q-item dense class="my-list">
        <q-item-section> Events </q-item-section>
        <q-item-section side>
          <q-btn size="md" round flat color="primary" icon="add" />
        </q-item-section>
      </q-item>
      <q-item dense class="my-list">
        <q-item-section> Followed hashtag </q-item-section>
      </q-item>
    </q-list>

    <div class="hr q-mt-xs"></div>

    <div class="text-center">
      <p>Discover more</p>
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

<style lang="sass" scoped></style>
