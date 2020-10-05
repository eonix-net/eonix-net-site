<template>
  <div :class="[{'flex flex-wrap -m-4': vertical}]">
    <ul
      class=""
      :class="[
        vertical ? 'w-full lg:w-1/2 space-y-4 p-4' : 'flex items-center space-x-8',
        {'justify-center': centered}
      ]"
    >
      <li
        v-for="(tab, index) in tabList"
        :key="index"
        v-bind="tab.dataAttrs"
        :class="[
          isActive(index) ? 'text-black' : 'text-gray-600',
          tab.disabled ? 'cursor-not-allowed' : 'cursor-pointer'
        ]"
        class="font-bold"
        @click="select(index)"
      >
        {{ tab.title }}
      </li>
    </ul>
    <div :class="[{'w-full lg:w-1/2 p-4': vertical}]">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    vertical: {
      type: Boolean,
      default: false
    },
    centered: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      tabList: [],
      activeTabIndex: 0
    }
  },
  mounted () {
    this.select(0)
    this.activeTabIndex = this.getInitialActiveTab()
    this.$root.$on('select-tab', index => this.select(index))
  },
  methods: {
    isActive (index) {
      return this.activeTabIndex === index
    },
    select (index) {
      const tab = this.tabList[index]
      if (!tab.isDisabled) {
        this.activeTabIndex = index
      }
      this.$emit('changed', tab)
    },
    getInitialActiveTab () {
      const index = this.tabList.findIndex(tab => tab.active)
      return index === -1 ? 0 : index
    }
  }
}
</script>
