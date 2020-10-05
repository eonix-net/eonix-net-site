<template>
  <nuxt-link
    :to="to"
    class="
      inline-flex
      items-center
      text-blue-500
      hover:text-blue-600
      font-semibold
    "
  >
    <slot />
    <ArrowNarrowRight class="ml-2 -mb-1" />
  </nuxt-link>
</template>

<script>
export default {
  props: {
    to: {
      type: [Object, String],
      default: '/'
    }
  }
}
</script>
