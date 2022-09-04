<template>
  <div class="slide-up-btn">
    <div class="btn-header">
      <div class="left">
        <div class="img">
          <img alt="profile pic" src="~assets/img1.jpg" />
          <div class="online"></div>
        </div>
        <p>Messanging</p>
      </div>
      <div class="right">
        <q-btn-dropdown
          size="lg"
          style="padding: 0 !important"
          flat
          rounded
          label=""
        >
          <q-list>
            <q-item clickable v-close-popup @click="onItemClick">
              <q-item-section>
                <q-item-label>Photos</q-item-label>
              </q-item-section>
            </q-item>

            <q-item clickable v-close-popup @click="onItemClick">
              <q-item-section>
                <q-item-label>Videos</q-item-label>
              </q-item-section>
            </q-item>

            <q-item clickable v-close-popup @click="onItemClick">
              <q-item-section>
                <q-item-label>Articles</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
        <q-btn size="sm" class="q-mx-sm" round flat icon="mdi-lead-pencil" />
        <q-btn size="lg" round flat icon="mdi-menu-up" @click="toggleMessage" />
      </div>
    </div>
    <div class="btn-content" :style="{ maxHeight: slideUpBtn }">
      <q-input
        dense
        borderless
        class="full-width search-messages-input"
        placeholder="search messages"
      >
        <template #prepend> <q-icon name="search" /> </template>
        <template #append> <q-icon name="mdi-tune" /> </template>
      </q-input>
      <q-avatar
        v-for="n in 4"
        :key="n"
        size="40px"
        class="overlapping q-mt-xl"
        :style="`left: ${n * -8 + 75}px`"
      >
        <img :src="`https://cdn.quasar.dev/img/avatar${n + 1}.jpg`" />
      </q-avatar>

      <p class="first">Reach out to your network</p>

      <p class="second">
        Your connections can offer advice or <br />
        help you find a job
      </p>
      <q-btn
        rounded
        color="primary"
        class="send-message-btn"
        label="Send message"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slideUpBtn: "0px",
    };
  },
  methods: {
    toggleMessage() {
      if (this.slideUpBtn === "600px") return (this.slideUpBtn = "0px");
      else {
        return (this.slideUpBtn = "600px");
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
