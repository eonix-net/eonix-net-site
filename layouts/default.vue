<template>
  <div class="min-h-screen flex flex-col">
    <Nav />
    <Nuxt class="flex-1" />
    <Footer />
  </div>
</template>

<script>
export default {
  head () {
    const i18nSeo = this.$nuxtI18nSeo()

    return {
      htmlAttrs: i18nSeo.htmlAttrs,
      meta: [
        // Open Graph
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.$i18n.t('meta.title')
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.$i18n.t('meta.description')
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.$i18n.t('meta.title')
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.$i18n.t('meta.description')
        }
      ],
      ...i18nSeo,
      ...i18nSeo.link
    }
  }
}
</script>
