<template>
  <div style="width: 100%">
    <div class="right-col-container">
      <div class="feed">
        <div class="feed-header">
          <p>Add your feed</p>
          <div>
            <q-icon size="sm" name="mdi-dots-horizontal" />
          </div>
        </div>
        <feed-item />
        <feed-item />
        <feed-item />

        <p class="recommendation">View all recommendation</p>
      </div>
    </div>
  </div>
</template>

<script>
import FeedItem from "./RightColComponents/FeedItem.vue";
export default {
  components: { FeedItem },
};
</script>

<style lang="sass" scoped></style>
