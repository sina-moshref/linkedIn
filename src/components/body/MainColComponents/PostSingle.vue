<template>
  <div class="psot-container">
    <div class="post-header">
      <div class="left-col">
        <div class="user-img">
          <img alt="profile pic" src="~assets/img1.jpg" />
        </div>
        <div class="user-info">
          <span class="name"
            >{{ title }} . <span class="name-appned">2nd</span></span
          >
          <span class="profession">{{ postsData.profession }}</span>
          <span class="time"
            >{{ postsData.uploadTime }} .
            <span><q-icon name="mail"></q-icon></span
          ></span>
        </div>
      </div>
      <div class="right-col">
        <q-icon size="sm" name="mdi-dots-horizontal" />
      </div>
    </div>

    <div class="post-text">
      <p>
        {{ body }}
      </p>
    </div>

    <div class="post-img">
      <img alt="profile pic" :src="img" />
    </div>

    <div class="sub-img">
      <div class="left-col">
        <div class="q-gutter-sm">
          <q-avatar
            v-for="n in 3"
            :key="n"
            size="17px"
            class="overlapping"
            :style="`left: ${n * 14}px`"
          >
            <img :src="`https://cdn.quasar.dev/img/avatar${n + 1}.jpg`" />
          </q-avatar>
          <span>John & {{ postsData.likes }} others</span>
        </div>
      </div>
      <div class="right-col">
        <span
          >{{ postsData.comments }} comments . {{ postsData.share }} share</span
        >
      </div>
    </div>

    <div class="post-hr">
      <div class="hr"></div>
    </div>

    <div class="post-buttons">
      <div>
        <q-btn flat color="grey" icon="mdi-thumb-up-outline" label="Lke" />
      </div>
      <div>
        <q-btn flat color="grey" icon="mdi-comment-outline" label="Comment" />
      </div>
      <div><q-btn flat color="grey" icon="mdi-share" label="Share" /></div>
      <div><q-btn flat color="grey" icon="mdi-send" label="Send" /></div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
// console.log(posts);
export default {
  computed: {
    ...mapGetters("linkedIn", ["postsData"]),
  },
  props: {
    title: {
      type: String,
      default: "",
    },
    body: {
      type: String,
      default: "",
    },
    img: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped></style>
