<template>
  <input
      :value="value"
      @input="updateInput"
      class="input"
      type="text"
      :maxlength="maxLength"
  >
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'my-input',
  props: {
    value: [String, Number],
    maxLength: {
      type: Number,
      required: false
    }
  },
  methods: {
    updateInput(event: {target: {value: string}}) {
      this.$emit('update:value', event.target.value)
    },
    changeInput(event: any) {
      console.log(event)
    }
  },

})
</script>

<style scoped>
.input {
  width:100%;
  padding: 5px 10px;
  border: 1px solid teal;
  border-radius: 1vw;
}
</style>


