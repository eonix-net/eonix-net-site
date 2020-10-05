<template>
  <label class="textbox" :class="classes">
    <span v-if="label" class="textbox__label">{{ label }}</span>
    <input
      v-if="!multiline"
      ref="input"
      v-autofocus="autofocus"

      :value="value"
      :placeholder="placeholder"
      :type="type"
      :required="required"
      :disabled="disabled"

      class="textbox__input placeholder-gray-600"

      @blur="handleBlur"
      @change="handleChange"
      @focus="handleFocus"
      @input="handleInput"
    >
    <textarea
      v-else
      ref="textarea"
      v-autofocus="autofocus"

      :disabled="disabled"
      :required="required"
      :value="value"
      :rows="rows"
      :placeholder="placeholder"

      class="textbox__textarea placeholder-gray-600"

      @blur="handleBlur"
      @change="handleChange"
      @focus="handleFocus"
      @input="handleInput"
    />
  </label>
</template>

<script>
import autofocus from '@/directives/autofocus'

export default {
  name: 'Textbox',
  directives: {
    autofocus
  },
  props: {
    type: {
      type: String,
      default: 'text'
    },
    label: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    },
    required: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    multiline: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'md'
    },
    rows: {
      type: Number,
      default: 4
    },
    autofocus: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      isTouched: false,
      isFocused: false,
      initialValue: this.value
    }
  },
  computed: {
    classes () {
      return [
        `textbox--size-${this.size}`
      ]
    }
  },
  created () {
    if (this.value === null) {
      this.initialValue = ''
      this.updateValue('')
    }
  },
  methods: {
    getInput () {
      return this.$refs.input || this.$refs.textarea
    },
    focus () {
      this.getInput().focus()
    },
    blur () {
      this.getInput().blur()
    },
    select () {
      this.getInput().select()
    },
    clear () {
      this.$emit('input', '')
      this.$emit('change', '')
      this.$emit('clear')
    },
    reset () {
      this.$emit('input', this.initialValue)
      this.$emit('change', this.initialValue)
      this.$emit('reset')
    },
    updateValue (value) {
      this.$emit('input', value)
    },
    handleBlur (event) {
      this.isFocused = false
      this.$emit('blur', event)
    },
    handleFocus (event) {
      this.isFocused = true
      this.$emit('focus', event)
    },
    handleInput (event) {
      this.$emit('input', event.target.value)
    },
    handleChange (event) {
      this.$emit('change', event.target.value)
    }
  }
}
</script>

<style lang="postcss">
  .textbox {
    @apply flex flex-col;
  }

  .textbox__label {
    @apply font-semibold inline-block mb-2;
  }

  .textbox__input, .textbox__textarea {
    @apply w-full border rounded outline-none px-3;
  }
  .textbox__input:focus, .textbox__textarea:focus {
    @apply border-blue-500 shadow;
  }

  .textbox--size-xs .textbox__input {
    @apply h-6;
  }
  .textbox--size-sm .textbox__input {
    @apply h-8;
  }
  .textbox--size-md .textbox__input {
    @apply h-10;
  }
  .textbox--size-lg .textbox__input {
    @apply h-12 text-base;
  }
  .textbox--size-xl .textbox__input {
    @apply h-16 text-base;
  }

  .textbox--size-xs .textbox__textarea {
    @apply py-3;
  }
  .textbox--size-sm .textbox__textarea {
    @apply py-3;
  }
  .textbox--size-md .textbox__textarea {
    @apply py-3;
  }
  .textbox--size-lg .textbox__textarea {
    @apply py-3 text-base;
  }
  .textbox--size-xl .textbox__textarea {
    @apply py-3 text-base;
  }
</style>
