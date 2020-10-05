<template>
  <nav>
    <div class="container mx-auto p-4">
      <div class="flex items-center justify-between">
        <a href="/">
          <Logo />
        </a>

        <ul
          class="
            hidden
            lg:flex
            items-center
            font-semibold
            space-x-6
          "
        >
          <li v-for="link in $t('navigation')" :key="link.slug">
            <NuxtLink
              class="text-gray-600 hover:text-black"
              active-class="nav-link-active"
              :to="localePath({ name: link.slug })"
            >
              {{ link.name }}
            </NuxtLink>
          </li>
        </ul>

        <button class="lg:hidden" @click="toggle">
          <MenuIcon width="32" height="32" />
        </button>

        <div
          v-if="opened"
          class="lg:hidden text-2xl absolute z-20 inset-0 bg-white rounded overflow-y-auto shadow-lg p-8 m-4"
        >
          <button class="absolute" style="top:16px;right:16px;" @click.stop="close">
            <CloseIcon width="28" height="28" />
          </button>
          <h4 class="font-bold mb-2">
            Menu
          </h4>
          <ul class="mb-8">
            <li v-for="link in $t('navigation')" :key="link.slug">
              <NuxtLink
                class="text-gray-600 hover:text-black"
                active-class="nav-link-active"
                :to="localePath({ name: link.slug })"
              >
                {{ link.name }}
              </NuxtLink>
            </li>
          </ul>
          <h4 class="font-bold mb-2">
            Social
          </h4>
          <ul class="flex items-center space-x-4">
            <li v-for="link in $t('socialLinks')" :key="link.name">
              <a :href="link.href">
                <Instagram v-if="link.name === 'instagram'" width="32" height="32" />
                <Facebook v-if="link.name === 'facebook'" width="32" height="32" />
                <Github v-if="link.name === 'github'" width="32" height="32" />
                <Twitter v-if="link.name === 'twitter'" width="32" height="32" />
              </a>
            </li>
          </ul>
        </div>

        <div
          v-if="opened"
          class="fixed z-10 inset-0 bg-gray-900 lg:hidden opacity-75"
          @click.stop="close"
        />
      </div>
    </div>
  </nav>
</template>

<script>
import MenuIcon from '@/components/icons/Menu.vue'
import CloseIcon from '@/components/icons/Close.vue'
export default {
  components: {
    MenuIcon,
    CloseIcon
  },
  computed: {
    opened () {
      return this.$store.state.menu.opened
    }
  },
  watch: {
    opened (opened) {
      opened
        ? document.body.classList.add('overflow-hidden')
        : document.body.classList.remove('overflow-hidden')
    }
  },
  methods: {
    toggle () {
      this.$store.dispatch('menu/toggle')
    },
    close () {
      this.$store.dispatch('menu/close')
    }
  }
}
</script>

<style>
.nav-link-active {
  @apply text-black;
}
</style>
