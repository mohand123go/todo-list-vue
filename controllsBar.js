Vue.component("controlls-bar", {
  props: ["selectedtasksprops"],
  data() {
    return {
      selectedTaskState: this.selectedtasksprops,
    };
  },
  methods: {
    changeTasksState() {
      console.log(" this.selectedTaskStateProp", this.selectedTaskState);
      this.$emit("onchangetask", this.selectedTaskState);
    },
  },
  watch: {
    selectedtasksprops: function () {
      this.selectedTaskState = this.selectedtasksprops;
    },
  },
  mounted() {
    console.log("ththis.selectedtasksprops", this.selectedtasksprops);
  },

  template: `<div class='controll-bar'>
  <button @click="selectedTaskState='all';changeTasksState()" :class=" selectedtasksprops=='all'&& 'btn-controll-active'" >All</button>
  <button @click="selectedTaskState='completed' ;changeTasksState()" :class="selectedtasksprops=='completed'&& 'btn-controll-active'">Completed</button>
  <button @click="selectedTaskState='uncompleted' ;changeTasksState()" :class="selectedtasksprops=='uncompleted' && 'btn-controll-active'">uncompleted</button>
  </div>`,
});
