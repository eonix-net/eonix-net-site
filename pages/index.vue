<template>
  <div>
    <header>
      <div class="container mx-auto py-8 lg:py-16">
        <div>
          <div class="text-center">
            <h1
              class="capitalize text-5xl leading-tight font-bold mb-4 lg:mb-8"
            >We build relationships.</h1>
            <p
              class="max-w-2xl text-xl text-gray-600 mx-auto mb-8"
            >
              From website hosting and design to email marketing our brands deliver the tools and support that small business owners need to fuel their online presence and reach customers everywhere.
            </p>
          </div>
          <img
            src="~/assets/images/home-header.png"
            srcset="~/assets/images/home-header.png 1x, ~/assets/images/home-header@2x.png 2x"
          >
          <div class="flex flex-wrap justify-center mt-4 mb-16 lg:mb-0 space-x-16">
            <div class="">
              <div class="font-bold text-4xl">50M</div>
              <div class="uppercase text-sm font-semibold text-gray-600">users</div>
            </div>
            <div class="">
              <div class="font-bold text-4xl">100M</div>
              <div class="uppercase text-sm font-semibold text-gray-600">contributions</div>
            </div>
            <div class="">
              <div class="font-bold text-4xl">1.5M</div>
              <div class="uppercase text-sm font-semibold text-gray-600">organizations</div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <main class="pb-16">
      <section>
        <div class="container mx-auto p-4 py-16">
          <div class="flex items-center flex-wrap -m-2">
            <div class="w-full lg:w-1/2 p-2">
              <h2 class="capitalize text-4xl font-bold mb-4">
                Our brand
              </h2>
              <p
                class="max-w-lg text-xl text-gray-600"
              >
                Meet your developers where already are. GitHub is home to over 40 million developers and the world's largest open source community.
              </p>
              <Link to="/brand/" class="mt-4">
                Learn more
              </Link>
            </div>
            <div class="w-full lg:w-1/2 p-2">
              <img
                src="~/assets/images/home-image-1.png"
                srcset="~/assets/images/home-image-1.png 1x, ~/assets/images/home-image-1@2x.png 2x"
                alt="image-1"
              >
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="container mx-auto p-4 py-16">
          <div class="flex items-center flex-wrap -m-2">
            <div class="w-full lg:w-1/2 p-2">
              <img
                src="~/assets/images/home-image-2.png"
                srcset="~/assets/images/home-image-2.png 1x, ~/assets/images/home-image-2@2x.png 2x"
                alt="image-1"
              >
            </div>
            <div class="w-full lg:w-1/2 p-2">
              <h2 class="capitalize text-4xl font-bold mb-4">
                Careers
              </h2>
              <p
                class="max-w-lg text-xl text-gray-600"
              >
                Meet your developers where already are. GitHub is home to over 40 million developers and the world's largest open source community.
              </p>
              <Link to="/careers/" class="mt-4">
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="container mx-auto p-4 py-16">
          <div class="flex items-center flex-wrap -m-2">
            <div class="w-full lg:w-1/2 p-2">
              <h2 class="capitalize text-4xl font-bold mb-4">
                About us
              </h2>
              <p
                class="max-w-lg text-xl text-gray-600"
              >
                Meet your developers where already are. GitHub is home to over 40 million developers and the world's largest open source community.
              </p>
              <Link to="/about/" class="mt-4">
                Learn more
              </Link>
            </div>
            <div class="w-full lg:w-1/2 p-2">
              <img
                src="~/assets/images/home-image-3.png"
                srcset="~/assets/images/home-image-3.png 1x, ~/assets/images/home-image-3@2x.png 2x"
                alt="image-1"
              >
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  head () {
    return {
      title: 'Eonix Corporation',
      meta: [
        { hid: 'description', name: 'description', content: 'From website hosting and design to email marketing our brands deliver the tools and support that small business owners need to fuel their online presence and reach customers everywhere.' }
      ]
    }
  }
}
</script>
