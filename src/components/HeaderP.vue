<template>
  <section class="header">
    <div v-if="searchInputRes" class="input-search-res">
      <q-input outlined placeholder="search" class="search-q-input" dense>
        <template v-slot:prepend>
          <q-icon name="search" />
        </template>
        <template v-slot:append>
          <q-icon name="close" @click="closeSearchBar" class="cursor-pointer" />
        </template>
      </q-input>
    </div>
    <div class="left-col">
      <div class="search-container">
        <div class="icon">
          <img
            alt="Quasar logo"
            src="~assets/quasar-logo-vertical.svg"
            style="width: 100%"
          />
        </div>
        <div class="search-input">
          <input type="text" placeholder="search" />
        </div>
        <div class="search-input-res nav-item-res q-px-sm">
          <a href="#" @click="showSearchBar">
            <q-icon class="search-icon" name="search" />
            <span>search</span>
          </a>
        </div>
      </div>
    </div>
    <div class="right-col">
      <div class="navigation">
        <ul>
          <li class="active nav-item-res nav-item-res1">
            <a href="#" class="active">
              <q-icon class="nav-icon" name="home" />
              <span>home</span>
            </a>
          </li>
          <li class="nav-item-res nav-item-res2">
            <a href="#">
              <q-icon class="nav-icon" name="home" />
              <span>my network</span>
            </a>
          </li>
          <li class="nav-item-res nav-item-res3">
            <a href="#">
              <q-icon class="nav-icon" name="home" />
              <span>jobs</span>
            </a>
          </li>
          <li class="nav-item-res nav-item-res4">
            <a href="#">
              <q-icon class="nav-icon" name="home" />
              <span>messanging</span>
            </a>
          </li>
          <li class="nav-item-res nav-item-res5">
            <a href="#">
              <q-icon class="nav-icon" name="home" />
              <span>notifications</span>
            </a>
          </li>
          <li class="profile nav-item-res nav-item-res6">
            <a href="#">
              <img alt="profile pic" src="~assets/img1.jpg" />
              <q-btn-dropdown flat label="me">
                <div class="row no-wrap q-pa-md">
                  <div class="column">
                    <div class="text-h6 q-mb-md">Settings</div>
                    <q-toggle v-model="mobileData" label="Use Mobile Data" />
                    <q-toggle v-model="bluetooth" label="Bluetooth" />
                  </div>

                  <q-separator vertical inset class="q-mx-lg" />

                  <div class="column items-center">
                    <q-avatar size="72px">
                      <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
                    </q-avatar>

                    <div class="text-subtitle1 q-mt-md q-mb-xs">John Doe</div>

                    <q-btn
                      color="primary"
                      label="Logout"
                      push
                      size="sm"
                      v-close-popup
                    />
                  </div>
                </div>
              </q-btn-dropdown>
            </a>
          </li>
        </ul>
      </div>
      <div class="nav-aside">
        <div class="work nav-item-res">
          <a href="#">
            <q-icon
              class="work-icon"
              style="position: relative; top: 2px"
              name="mdi-dots-grid"
            />
            <span
              >work<q-btn-dropdown
                size="md"
                style="position: relative; left: -3px"
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
              </q-btn-dropdown></span
            >
          </a>
        </div>
        <p>try premium for free</p>
        <div class="nav-aside-res">
          <q-icon name="menu"></q-icon>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      searchInputRes: false,
    };
  },
  methods: {
    showSearchBar() {
      return (this.searchInputRes = true);
    },
    closeSearchBar() {
      return (this.searchInputRes = false);
    },
  },
};
</script>

<style lang="scss" scoped></style>
