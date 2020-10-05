<template>
  <div>
    <header>
      <div class="container mx-auto py-8 lg:py-16">
        <div class="flex items-center flex-wrap">
          <div class="w-full lg:w-1/2">
            <h1 class="capitalize text-5xl leading-tight font-bold mb-4 lg:mb-8">
              {{ page.title }}
            </h1>
          </div>
          <div class="w-full lg:w-1/2">
            <img
              src="~/assets/images/brand.png"
              srcset="~/assets/images/brand.png 1x, ~/assets/images/brand@2x.png 2x"
              alt="header-image"
            >
          </div>
        </div>
      </div>
    </header>
    <main>
      <section>
        <div class="container mx-auto pb-16">
          <div class="flex flex-wrap">
            <div class="content w-full lg:w-3/4 lg:pr-32">
              <article class="content">
                <nuxt-content :document="page" />
              </article>
            </div>
            <div class="w-full lg:w-1/4">
              <ul class="space-y-4">
                <li>
                  <div class="font-bold text-4xl">50M</div>
                  <div class="uppercase text-sm font-semibold text-gray-600">users</div>
                </li>
                <li>
                  <div class="font-bold text-4xl">100M</div>
                  <div class="uppercase text-sm font-semibold text-gray-600">contributions</div>
                </li>
                <li>
                  <div class="font-bold text-4xl">1.5M</div>
                  <div class="uppercase text-sm font-semibold text-gray-600">organizations</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="container mx-auto pb-16">
          <VueSlickCarousel v-bind="settings">
            <div class="carousel-height">
              <img
                src="~/assets/images/1.jpg"
                alt="carousel image"
              >
            </div>
            <div class="carousel-height">
              <img
                src="~/assets/images/2.jpg"
                alt="carousel image"
              >
            </div>
            <div class="carousel-height">
              <img
                src="~/assets/images/3.jpg"
                alt="carousel image"
              >
            </div>
            <div class="carousel-height">
              <img
                src="~/assets/images/4.jpg"
                alt="carousel image"
              >
            </div>
          </VueSlickCarousel>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content, app, params, error }) {
    let page

    try {
      page = await $content(`${app.i18n.locale}/brand`).fetch()
    } catch (e) {
      return error({ statusCode: 404, message: 'Page not found' })
    }

    return {
      page
    }
  },
  data: () => ({
    settings: {
      arrows: false,
      autoplay: true,
      dots: false,
      infinite: true,
      centerMode: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      variableWidth: true,
      draggable: true,
      swipeToSlide: true,
      responsive: [
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
            variableWidth: false
          }
        }
      ]
    }
  }),
  head () {
    return {
      title: this.page.title,
      titleTemplate: '%s | Eonix Corporation',
      meta: [
        { hid: 'description', name: 'description', content: this.page.description }
      ]
    }
  }
}
</script>

<style scoped>
.carousel-height {
  height: 290px;
}
.carousel-height img {
  @apply object-cover object-center h-full px-2;
}
</style>
