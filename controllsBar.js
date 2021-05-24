Vue.component("controlls-bar", {
  props: ["selectedtasksprops"],

  methods: {
    changeTasksState(state) {
      console.log("statttttte", state);
      this.$emit("onchangetask", state);
    },
  },

  mounted() {
    console.log("ththis.selectedtasksprops", this.selectedtasksprops);
  },

  template: `<div class='controll-bar'>
  <button @click="changeTasksState('all')" :class=" selectedtasksprops=='all'&& 'btn-controll-active'" >All</button>
  <button @click="changeTasksState('completed')  " :class="selectedtasksprops=='completed'&& 'btn-controll-active'">Completed</button>
  <button @click="changeTasksState('uncompleted')" :class="selectedtasksprops=='uncompleted' && 'btn-controll-active'">uncompleted</button>
  </div>`,
});
