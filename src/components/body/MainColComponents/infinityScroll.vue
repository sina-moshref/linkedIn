<template>
  <div>
    <q-infinite-scroll @load="onLoad" :offset="250">
      <div v-for="(item, index) in items" :key="index" class="caption">
        <post-single />
      </div>
      <template v-slot:loading>
        <div class="row justify-center q-my-md">
          <q-spinner-dots color="primary" size="40px" />
        </div>
      </template>
    </q-infinite-scroll>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import PostSingle from "./PostSingle.vue";

export default {
  components: { PostSingle },
  setup() {
    const items = ref([{}, {}, {}, {}, {}, {}, {}]);

    return {
      items,
      onLoad(index, done) {
        setTimeout(() => {
          items.value.push({}, {}, {}, {}, {}, {}, {});
          done();
        }, 2000);
      },
    };
  },
};
</script>
