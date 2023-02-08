<template>
  <select :value="modelValue" @change="changeOption">
    <option disabled value="">Выберите из списка</option>
    <option
        v-for="option in options"
        :key="option.title"
        :value="option.title"
    >
      {{option.name}}
    </option>
  </select>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'my-select',
  props: {
    modelValue: {
      type: String
    },
    options: {
      type: Array,
      default: () => []
    }
  },
  methods : {
    changeOption(e: { target: { value: string } }) {
      this.$emit('update:modelValue', e.target.value)
    }
  }
})
</script>

<style scoped>

</style>
