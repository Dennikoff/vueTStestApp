<template>
  <div class="app">
    <form @submit.prevent class="form">
      <my-input
          type="text"
          :value="textField1"
          @input="fieldInput1"
          placeholder="input1"
      />
      <my-input
          type="text"
          :value="textField2"
          @input="fieldInput2"
          placeholder="input2"
      />
      <my-input
          type="text"
          :value="textField3"
          @input="fieldInput3"
          placeholder="input3"
      />
      <my-input
          type="text"
          :value="textField4"
          @input="fieldInput4"
          placeholder="input4"
      />
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
      <my-input
          v-show="counter > 5"
          type="text"
          :value="textField5"
          @input="fieldInput5"
          placeholder="input5"
      />
      <my-input
          v-show="counter > 5"
          type="text"
          :value="textField6"
          @input="fieldInput6"
          placeholder="input6"
      />
    </form>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import MyInput from "@/components/MyInput.vue";

export default defineComponent({
  name: 'app',
  components: {MyInput},
  data() {
    return {
      textField1: '',
      textField2: '',
      textField3: '',
      textField4: '',
      counter: 0,
      textField5: '',
      textField6: '',
    }
  },
  methods: {
    fieldInput1(e: { target: { value: string } }) {
      this.textField1 = e.target.value
    },
    fieldInput2(e: { target: { value: string } }) {
      this.textField2 = e.target.value
    },
    fieldInput3(e: { target: { value: string } }) {
      this.textField3 = e.target.value
    },
    fieldInput4(e: { target: { value: string } }) {
      this.textField4 = e.target.value
    },
    fieldInput5(e: { target: { value: string } }) {
      this.textField4 = e.target.value
    },
    fieldInput6(e: { target: { value: string } }) {
      this.textField4 = e.target.value
    },
    increaseCounter() {
      if(this.counter < 10) {
        this.counter += 1
      }
    },
    decreaseCounter() {
      if (this.counter > 0) {
        this.counter -= 1
      }
    },
  }
})
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  display: flex;
  height: 100vh;
  width: 100vw;
  align-items: center;
  justify-content: center;
}

.form {
  width: 40%;
  height: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}

.counter {
  display: flex;
  padding: 10px 20px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 2vw;
  border: 2px solid black;
}

.buttonsContainer {
  display: flex;
  align-items: center;
  margin-left: 20px;
}

.btn {
  width: 3vw;
  height: 2vh;
}

.counterValue {
  font-size: 30px;
}

</style>