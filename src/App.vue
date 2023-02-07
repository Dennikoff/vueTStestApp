<template>
  <div class="app">
    <form @submit.prevent class="form">
      <my-input
          class="myinput"
          type="text"
          :value="textField1"
          :maxLength="5"
          @keypress="fieldInput1"
          placeholder="input1"
      />
      <my-input
          class="myinput"
          type="string"
          :maxLength="5"
          :value="textField2"
          @input="fieldInput2"
          placeholder="input2"
      />
      <my-input
          class="myinput"
          type="text"
          :value="textField3"
          @input="fieldInput3"
          placeholder="input3"
      />
      <my-select
          style="margin-top: 10px"
          v-model="selectedOption"
          :options="options"
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
      <div
          class="checkboxContainer"
          v-if="counter > 5"
      >
        <my-input
            type="checkbox"
            :checked="checkbox"
            @input="fieldInput5"
        />
        <div class="checkBoxName">
          privileged
        </div>
      </div>
      <div
          class="toggleContainer"
           v-if="counter > 5"
      >
        <div>Close</div>
        <Toggle
            style="padding: 10px"
            v-model="toggle"
        />
        <div>Open</div>
      </div>
      <button
          class="confirmButton"
          @click="confirmButtonClicked"
      >
        Отправить
      </button>
    </form>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import MyInput from "@/components/MyInput.vue";
import MySelect from "@/components/MySelect.vue";
import Toggle from '@vueform/toggle'

interface options {
  title: string,
  name: string,
}

interface form {
  input1: string,
  input2: Number,
}

export default defineComponent({
  name: 'app',
  components: {MySelect, MyInput, Toggle},
  data() {
    return {
      textField1: '',
      textField2: '',
      textField3: '',
      textField4: '',
      counter: 0,
      checkbox: false,
      toggle: true,
      selectedOption: '',
      options: [
        {title: 'Option1', name: 'Опция 1'} as options,
        {title: 'Option2', name: 'Опция 2'} as options,
      ],
    }
  },
  methods: {
    fieldInput1(e: { target: { value: string } }) {
      if (e.target.value.length <= 5) {
        this.textField1 = e.target.value
      }
    },
    fieldInput2(e: { target: { value: string } }) {
      this.textField2 = e.target.value
    },
    fieldInput3(e: { target: { value: string } }) {
      this.textField3 = e.target.value
    },
    fieldInput5() {
      this.checkbox = !this.checkbox
    },
    increaseCounter() {
      if (this.counter < 10) {
        this.counter += 1
      }
    },
    decreaseCounter() {
      if (this.counter > 0) {
        this.counter -= 1
      }
    },
    confirmButtonClicked() {

    },
  }
})
</script>

<style src="@vueform/toggle/themes/default.css"></style>

<style >
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
  height: 29%;
  display: flex;
  padding: 20px 30px;
  flex-direction: column;
  align-items: center;
  border: 2px solid teal;
  border-radius: 2vw;
}

.counter {
  display: flex;
  padding: 10px 20px;
  margin-top: 10px;
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

.myinput {
  margin-top: 10px;
}

.counterValue {
  font-size: 30px;
}

.checkboxContainer {
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.checkBoxName {
  margin-left: 10px
}

.toggleContainer {
  display: flex;
  align-items: center;
}

.confirmButton {
  padding: 10px;
  position: relative;
  margin-top: auto;
}

</style>