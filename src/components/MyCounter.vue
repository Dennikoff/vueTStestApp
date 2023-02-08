<template>
  <div class="counter">
    <div
        class="counterValue"
    >
      <strong>{{ counter }}</strong>
    </div>
    <div class="buttonsContainer">
      <button
          class="btn"
          @click="increaseCounter"
      >
        +
      </button>
      <button
          class="btn"
          @click="decreaseCounter"
      >
        -
      </button>
    </div>
  </div>
</template>

<script lang="ts">

import {defineComponent} from "vue";

export default defineComponent({
  name: 'my-counter',
  props: {
    counter : {
      type: Number,
      required: true,
    }
  },
  methods: {
    increaseCounter() {
      this.$emit('increase')
    },
    decreaseCounter() {
      this.$emit('decrease')
    }
  },

})
</script>

<style scoped>
.counter {
  display: flex;
  padding: 10px 20px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 2vh;
  border: 2px solid black;
}

.buttonsContainer {
  display: flex;
  align-items: center;
  margin-left: 20px;
}

.btn {
  width: 3vw;
  height: 20px;
}

.counterValue {
  font-size: 30px;
}
</style>


