<template>
  <div class="filter-container">
    <div class="hr-line"></div>
    <div class="filter-text-container">
      <span> sort by: </span>
      <span>
        <q-btn-dropdown color="black" size="sm" flat label="Top">
          <q-list style="width: 160px">
            <q-item clickable v-close-popup @click="onItemClick">
              <q-item-section>
                <q-item-label>Top</q-item-label>
              </q-item-section>
            </q-item>

            <q-item clickable v-close-popup @click="onItemClick">
              <q-item-section>
                <q-item-label>Recent</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
