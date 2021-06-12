import {onMounted, h} from 'vue'

const config = { msg: String }
export default {
  name: 'vue3-helloworld-webpack',
  props : config,
  setup(props) {
    console.log("setup() is invoked")
    console.log(props.msg);

    onMounted(function () {
      console.log("Hooray!!! Onmounted() is triggered")
    });
  },

  render() {
    return h('div', {
      id: 'helloworld-1'
    });
  }
}