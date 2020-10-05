<template>
  <div>
    <header>
      <div class="container mx-auto py-8 lg:py-16">
        <div class="flex items-center flex-wrap mb-4 lg:mb-16">
          <div class="w-full lg:w-1/2">
            <h1 class="capitalize text-5xl leading-tight font-bold mb-8 lg:mb-0">
              We're thinkers
              <br />and product makers
            </h1>
          </div>
          <div class="w-full lg:w-1/2">
            <p
              class="text-xl text-gray-600"
            >From website hosting and design to email marketing our brands deliver the tools and support that small business owners need to fuel their online presence and reach customers everywhere.</p>
          </div>
        </div>
        <div class="relative text-right">
          <img
            src="~/assets/images/about-header.jpg"
            srcset="~/assets/images/about-header.jpg 1x, ~/assets/images/about-header@2x.jpg 2x"
            alt="image"
            class="block relative z-20 rounded xl:pr-32"
          >
          <div
            class="lg:max-w-6xl bg-gray-900 text-white text-left inline-flex flex-wrap rounded p-4 pt-24 pb-8 -m-4 -mt-16"
          >
            <div class="w-full lg:w-1/2 lg:border-r px-4 py-2">
              <h2 class="text-4xl font-bold mb-4">Our values</h2>
              <p
                class="text-xl mb-8"
              >Our vision is to discover rich possibilities of reaching many people through our works, by teaming up width many great clients.</p>
            </div>
            <div class="w-full lg:w-1/2 px-4 py-2">
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
      </div>
    </header>
    <main>
      <section>
        <div class="container mx-auto py-16">
          <div class="text-center lg:max-w-2xl mx-auto mb-16">
            <h2 class="capitalize text-4xl font-bold mb-4">
              Our values
            </h2>
            <p
              class="text-2xl text-gray-600"
            >
              Meet your developers where already are. GitHub is home to over 40 million developers and the world's largest open source community.
            </p>
          </div>
          <tabs vertical>
            <tab title="Our community is bigger than us" active="true">
              <p>
                We create an environment where we are transparent and respecful so we are confident in bringing our best serves on behalf of our customers and each other, every day.
              </p>
            </tab>
            <tab title="Simplicity in all we DO">
              Tab 2
            </tab>
            <tab title="We speak when we have something to say and listen when other DO">
              Tab 3
            </tab>
            <tab title="Our community is bigger than us">
              Tab 4
            </tab>
          </tabs>
          <!-- <div class="flex flex-wrap text-xl -m-4">
            <div class="w-full lg:w-1/2 p-4">
              <ul class="text-gray-600 border-l space-y-4 pl-4">
                <li class="font-semibold text-black hover:font-semibold text-black">
                  <a href="#">Our community is bigger than us</a>
                </li>
                <li class="hover:font-semibold hover:text-black">
                  <a href="#">Simplicity in all we DO</a>
                </li>
                <li class="hover:font-semibold hover:text-black">
                  <a href="#">We speak when we have something to say and listen when other DO</a>
                </li>
                <li class="hover:font-semibold hover:text-black">
                  <a href="#">We speak when we have something to say and listen when other DO</a>
                </li>
              </ul>
            </div>
            <div class="w-full lg:w-1/2 p-4">
              <div>
                <p>We create an environment where we are transparent and respecful so we are confident in bringing our best serves on behalf of our customers and each other, every day.</p>
              </div>
            </div>
          </div> -->
        </div>
      </section>
      <section>
        <div class="max-w-4xl mx-auto px-4 md:px-8 py-16">
          <div class="text-center lg:max-w-2xl mx-auto mb-16">
            <h2 class="capitalize text-4xl font-bold mb-4">The Eonix Team</h2>
            <p
              class="text-2xl text-gray-600"
            >Meet your developers where already are. GitHub is home to over 40 million developers and the world's largest open source community.</p>
          </div>
          <div class="flex flex-wrap -m-4 md:-m-8">
            <div class="w-1/2 sm:w-1/3 lg:w-1/4 p-4 md:p-8">
              <img class="rounded" src="~/assets/images/people-1.jpg" alt="people" >
              <h4 class="text-xl font-bold mt-2">Nick Evans</h4>
              <div class="text-gray-600">Product designer</div>
            </div>
            <div class="w-1/2 sm:w-1/3 lg:w-1/4 p-4 md:p-8">
              <img class="rounded" src="~/assets/images/people-2.jpg" alt="people" >
              <h4 class="text-xl font-bold mt-2">Nick Evans</h4>
              <div class="text-gray-600">Product designer</div>
            </div>
            <div class="w-1/2 sm:w-1/3 lg:w-1/4 p-4 md:p-8">
              <img class="rounded" src="~/assets/images/people-3.jpg" alt="people" >
              <h4 class="text-xl font-bold mt-2">Nick Evans</h4>
              <div class="text-gray-600">Product designer</div>
            </div>
            <div class="w-1/2 sm:w-1/3 lg:w-1/4 p-4 md:p-8">
              <img class="rounded" src="~/assets/images/people-4.jpg" alt="people" >
              <h4 class="text-xl font-bold mt-2">Nick Evans</h4>
              <div class="text-gray-600">Product designer</div>
            </div>
            <div class="w-1/2 sm:w-1/3 lg:w-1/4 p-4 md:p-8">
              <img class="rounded" src="~/assets/images/people-5.jpg" alt="people" >
              <h4 class="text-xl font-bold mt-2">Nick Evans</h4>
              <div class="text-gray-600">Product designer</div>
            </div>
            <div class="w-1/2 sm:w-1/3 lg:w-1/4 p-4 md:p-8">
              <img class="rounded" src="~/assets/images/people-6.jpg" alt="people" >
              <h4 class="text-xl font-bold mt-2">Nick Evans</h4>
              <div class="text-gray-600">Product designer</div>
            </div>
            <div class="w-1/2 sm:w-1/3 lg:w-1/4 p-4 md:p-8">
              <img class="rounded" src="~/assets/images/people-7.jpg" alt="people" >
              <h4 class="text-xl font-bold mt-2">Nick Evans</h4>
              <div class="text-gray-600">Product designer</div>
            </div>
            <div class="w-1/2 sm:w-1/3 lg:w-1/4 p-4 md:p-8">
              <img class="rounded" src="~/assets/images/people-8.jpg" alt="people" >
              <h4 class="text-xl font-bold mt-2">Nick Evans</h4>
              <div class="text-gray-600">Product designer</div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="relative container mx-auto py-16">
          <img
            src="~/assets/images/about-joining-section.png"
            srcset="~/assets/images/about-joining-section.png 1x, ~/assets/images/about-joining-section@2x.png 2x"
            alt="about-section"
          >
          <div
            class="absolute transform bg-gray-900 text-white text-center rounded p-4 lg:p-8"
            style="left:50%;top:60%;transform: translate(-50%,-60%);"
          >
            <h4 class="text-2xl font-bold mb-4">Interested in joining the Eonix team?</h4>
            <a
              class="inline-block border hover:bg-white hover:text-black rounded px-4 py-2"
              href="#"
            >See our open positions</a>
          </div>
        </div>
      </section>
      <section>
        <div class="container mx-auto py-16">
          <div class="text-center lg:max-w-2xl mx-auto mb-16">
            <h2 class="capitalize text-4xl font-bold mb-4">Our office</h2>
            <p
              class="text-2xl text-gray-600"
            >Eonix is a values-driven organization. Here is what we believe in.</p>
          </div>
          <div class="flex items-center justify-center md:w-1/2 h-64 bg-gray-300 rounded mx-auto">
            <span class="font-bold">Google map</span>
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
      title: 'About | Eonix Corporation',
      meta: [
        { hid: 'description', name: 'description', content: 'From website hosting and design to email marketing our brands deliver the tools and support that small business owners need to fuel their online presence and reach customers everywhere.' }
      ]
    }
  }
}
</script>
