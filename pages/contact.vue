<template>
  <div>
    <header class="relative text-center py-16 py-32">
      <h1 class="font-bold text-5xl">
        Contact us
      </h1>
      <p class="text-xl text-gray-600">
        Get in touch and let us know how we can help.
      </p>
      <img class="absolute bottom-0 right-0" src="~/assets/images/bg-1.png" alt="background-image">
      <img
        class="hidden lg:block absolute left-0 bottom-0 transform rotate-90"
        src="~/assets/images/bg-1.png"
        alt="background-image"
      >
    </header>
    <main class="bg-gray-100 border-t flex-1">
      <section class="relative">
        <div class="container mx-auto px-4 pt-16">
          <div class="flex flex-wrap -m-2">
            <div class="w-full lg:w-1/3 p-2">
              <div class="bg-white text-center border rounded hover:shadow-lg p-4 lg:p-8">
                <v-sales-icon width="70" height="70" class="mx-auto mb-4" />
                <h4 class="text-2xl font-bold">Sales</h4>
                <p class="text-gray-600 mb-4">We'd love talk about how we can work together</p>
                <a class="inline-block border rounded text-blue-500 hover:text-white hover:bg-blue-500 px-4 py-2" href="#">
                  Contact Sales
                </a>
              </div>
            </div>
            <div class="w-full lg:w-1/3 p-2">
              <div class="bg-white text-center border rounded hover:shadow-lg p-4 lg:p-8">
                <v-help-icon width="70" height="70" class="mx-auto mb-4" />
                <h4 class="text-2xl font-bold">Help &amp; Support</h4>
                <p class="text-gray-600 mb-4">
                  We'd love talk about how we can work together
                </p>
                <a class="inline-block border rounded text-blue-500 hover:text-white hover:bg-blue-500 px-4 py-2" href="#">
                  Contact Help
                </a>
              </div>
            </div>
            <div class="w-full lg:w-1/3 p-2">
              <div class="bg-white text-center border rounded hover:shadow-lg p-4 lg:p-8">
                <v-media-icon width="70" height="70" class="mx-auto mb-4" />
                <h4 class="text-2xl font-bold">Media &amp; Press</h4>
                <p class="text-gray-600 mb-4">
                  We'd love talk about how we can work together
                </p>
                <a class="inline-block border rounded text-blue-500 hover:text-white hover:bg-blue-500 px-4 py-2" href="#">
                  Contact Media
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="container mx-auto py-16 lg:py-32 px-4">
          <div class="flex flex-wrap text-center -m-2">
            <div class="w-full lg:w-1/2 lg:border-r p-2">
              <div class="max-w-lg mx-auto py-8">
                <h1 class="font-bold text-4xl">Join us on IRC</h1>
                <p
                  class="text-xl"
                >If you have technical questions, chat live with developers in #eonix on freenode.</p>
              </div>
            </div>
            <div class="border-b"></div>
            <div class="w-full lg:w-1/2 p-2">
              <div class="max-w-lg mx-auto py-8">
                <h1 class="font-bold text-4xl">General communication</h1>
                <p class="text-xl">
                  For general queries, including partnership opportuinitie, please email
                  <a class="text-blue-500" href="mailto:info@eonix.com">info@eonix.com</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import VSalesIcon from '@/components/icons/Sales.vue'
import VHelpIcon from '@/components/icons/Help.vue'
import VMediaIcon from '@/components/icons/Media.vue'

export default {
  components: { VSalesIcon, VHelpIcon, VMediaIcon },
  head () {
    return {
      title: 'About | Eonix Corporation',
      meta: [
        { hid: 'description', name: 'description', content: 'Get in touch and let us know how we can help.' }
      ]
    }
  }
}
</script>
