<template>
  <div class="app">
    <form @submit.prevent class="form">
      <my-input
          class="myinput"
          type="text"
          v-model:value="textField1"
          :maxLength="5"
          @input="fieldInput1"
          placeholder="letters"
      />
      <my-input
          class="myinput"
          type="string"
          :maxLength="5"
          v-model:value="textField2"
          @input="fieldInput2"
          placeholder="numbers"
      />
      <my-input
          class="myinput"
          type="email"
          v-model:value="textField3"
          @input="fieldInput3"
          placeholder="email"
      />
      <my-select
          style="margin-top: 10px"
          v-model="selectedOption"
          :options="options"
      />
      <my-counter
          class="counter"
          :counter="counter"
          @increase="this.increaseCounter"
          @decrease="this.decreaseCounter"
      />
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
import {makeRequest} from "@/api/sendForm";
import MyCounter from "@/components/MyCounter.vue";
import {validate} from "@/utils/main";

export default defineComponent({
  name: 'app',
  components: {MyCounter, MySelect, MyInput, Toggle},
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
    fieldInput1(e: { target: { value: string } }):void {
        this.textField1 = e.target.value
    },
    fieldInput2(e: { target: { value: string } }):void {
      this.textField2 = e.target.value
    },
    fieldInput3(e: { target: { value: string } }):void {
      this.textField3 = e.target.value
    },
    fieldInput5():void {
      this.checkbox = !this.checkbox
    },
    increaseCounter():void {
      if (this.counter < 10) {
        this.counter += 1
      }
    },
    decreaseCounter():void {
      if (this.counter > 0) {
        this.counter -= 1
      }
    },
    confirmButtonClicked():void {
      let tempObject: formInputs
      if(this.counter <= 5) {
        let [flag, msg]: [boolean, string] = validate(this.textField1, this.textField2, this.textField3)
        if(!flag) {
          alert(msg)
          return
        } else {
          console.log('input is correct')
        }
        tempObject = {
          input1: this.textField1,
          input2: this.textField2,
          input3: this.textField3,
          input4: this.selectedOption,
          counter: this.counter,
        }
      } else {
        let [flag, msg]: [boolean, string] = validate(this.textField1, this.textField2, this.textField3)
        if(!flag) {
          alert(msg)
          return
        } else {
          console.log('input is correct')
        }
        tempObject = {
          input1: this.textField1,
          input2: this.textField2,
          input3: this.textField3,
          input4: this.selectedOption,
          counter: this.counter,
          privileged: this.checkbox,
          input6: this.toggle ? 'Open': 'Close',
        }
      }
      makeRequest(tempObject)
    },
  }
})
</script>

<style src="@vueform/toggle/themes/default.css"></style>

<style >
@font-face {
  font-family: "NotoSans-Regular";
  src: url("@/font/NotoSans-Regular.ttf") format("truetype");
  font-weight: 400;
}

@font-face {
  font-family: "NotoSans-Bold";
  src: url("@/font/NotoSans-Bold.ttf") format("truetype");
  font-weight: 700;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "NotoSans-Regular";
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
  max-width: 400px;
  height: 400px;
  display: flex;
  padding: 20px 30px;
  flex-direction: column;
  align-items: center;
  border: 2px solid teal;
  border-radius: 2vw;
}

.myinput {
  margin-top: 10px;
}

.counter {
  margin-top: 10px;
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
  margin-top: auto;
}

</style>