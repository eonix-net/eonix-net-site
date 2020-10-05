<template>
  <footer class="bg-black text-white">
    <div class="container mx-auto py-16">
      <div class="flex flex-col lg:flex-row justify-between">
        <div class="mb-8 lg:mb-0 lg:mr-32 px-4">
          <a href="/">
            <Logo />
          </a>
          <ul class="flex items-center mt-8 space-x-4">
            <li v-for="link in $t('socialLinks')" :key="link.name" class="opacity-50 hover:opacity-100">
              <a :href="link.href">
                <Instagram v-if="link.name === 'instagram'" width="24" height="24" />
                <Facebook v-if="link.name === 'facebook'" width="24" height="24" />
                <Github v-if="link.name === 'github'" width="24" height="24" />
                <Twitter v-if="link.name === 'twitter'" width="24" height="24" />
              </a>
            </li>
          </ul>
        </div>

        <div class="flex flex-1 flex-wrap">
          <div class="flex-1 p-4">
            <h4 class="uppercase text-sm font-semibold opacity-50 mb-2">Products</h4>
            <ul class="space-y-2">
              <li>
                <a class="capitalize hover:opacity-50" href="#">Block storage</a>
              </li>
              <li>
                <a class="capitalize hover:opacity-50" href="#">Compute</a>
              </li>
              <li>
                <a class="capitalize hover:opacity-50" href="#">Networking</a>
              </li>
              <li>
                <a class="capitalize hover:opacity-50" href="#">Security</a>
              </li>
              <li>
                <a class="capitalize hover:opacity-50" href="#">Applications</a>
              </li>
            </ul>
          </div>
          <div class="flex-1 p-4">
            <h4 class="uppercase text-sm font-semibold opacity-50 mb-2">Solutions</h4>
            <ul class="text-white space-y-2">
              <li>
                <a class="capitalize hover:opacity-50" href="#">Pricing</a>
              </li>
              <li>
                <a class="capitalize hover:opacity-50" href="#">Customers</a>
              </li>
              <li>
                <a class="capitalize hover:opacity-50" href="#">Global</a>
              </li>
            </ul>
          </div>
          <div class="flex-1 p-4">
            <h4 class="uppercase text-sm font-semibold opacity-50 mb-2">Support</h4>
            <ul class="text-white space-y-2">
              <li>
                <a class="capitalize hover:opacity-50" href="#">Documentation</a>
              </li>
              <li>
                <a class="capitalize hover:opacity-50" href="#">API reference</a>
              </li>
              <li>
                <a class="capitalize hover:opacity-50" href="#">API status</a>
              </li>
              <li>
                <a class="capitalize hover:opacity-50" href="#">Open status</a>
              </li>
            </ul>
          </div>
          <div class="flex-1 p-4">
            <h4 class="uppercase text-sm font-semibold opacity-50 mb-2">Company</h4>
            <ul class="text-white space-y-2">
              <li>
                <a class="capitalize hover:opacity-50" href="#">About</a>
              </li>
              <li>
                <a class="capitalize hover:opacity-50" href="#">Blog</a>
              </li>
              <li>
                <a class="capitalize hover:opacity-50" href="#">Jobs</a>
              </li>
              <li>
                <a class="capitalize hover:opacity-50" href="#">Press</a>
              </li>
            </ul>
          </div>
          <div class="flex-1 p-4">
            <h4 class="uppercase text-sm font-semibold opacity-50 mb-2">Community</h4>
            <ul class="text-white space-y-2">
              <li>
                <a class="capitalize hover:opacity-50" href="#">Tutorials</a>
              </li>
              <li>
                <a class="capitalize hover:opacity-50" href="#">Discussions</a>
              </li>
              <li>
                <a class="capitalize hover:opacity-50" href="#">Store</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="opacity-50 flex flex-col md:flex-row justify-between space-y-4 md:space-y-0 mt-8 px-4">
        <div>Made with love by Eonix Team.</div>
        <div>Copyright 2020 Eonix.</div>
      </div>
    </div>
  </footer>
</template>
