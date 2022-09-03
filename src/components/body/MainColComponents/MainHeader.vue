<template>
  <div>
    <div class="main-header q-pt-sm" padding>
      <q-list>
        <q-item>
          <q-item-section side>
            <q-avatar size="xl">
              <img alt="profile pic" src="~assets/img1.jpg" />
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <div class="start-post">
              <p>start a post</p>
            </div>
          </q-item-section>
        </q-item>
      </q-list>

      <div class="post-buttons">
        <div><q-btn flat color="grey" icon="mdi-image" label="Photo" /></div>
        <div><q-btn flat color="grey" icon="mdi-video" label="Video" /></div>
        <div>
          <q-btn flat color="grey" icon="mdi-calendar-check" label="Event" />
        </div>
        <div>
          <q-btn flat color="grey" icon="mdi-lead-pencil" label="Write" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: "",
    };
  },
};
</script>

<style lang="sass" scoped></style>
