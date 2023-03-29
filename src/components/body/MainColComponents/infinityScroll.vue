<template>
  <div>
    <q-infinite-scroll @load="onLoad" :offset="250">
      <div v-for="item in items" :key="item.id" class="caption">
        <post-single :title="item.title" :body="item.body" :img="randompic()" />
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
    const items = ref([]);
    const totalItems = ref([]);

    const getPosts = async () => {
      const data = await fetch("https://jsonplaceholder.typicode.com/posts");

      const jData = await data.json();

      return jData;
    };

    onMounted(async () => {
      const posts = await getPosts();

      totalItems.value = posts;

      const initData = posts.slice(0, 5);

      console.log(initData);

      items.value = initData;
    });

    return {
      items,
      onLoad(index, done) {
        setTimeout(() => {
          let count = items.value.length;
          let newData = totalItems.value.slice(0, count + 5);
          items.value = newData;
          done();
        }, 1500);
      },
    };
  },
  methods: {
    randompic() {
      return `https://picsum.photos/700`;
    },
  },
};
</script>
