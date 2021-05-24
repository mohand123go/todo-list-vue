Vue.component("new-task", {
  data() {
    return {
      inputText: "",
      newTaskState: false,
    };
  },

  methods: {
    changeNewTaskState() {
      this.newTaskState = !this.newTaskState;
    },
    insertNewTask() {
      console.log(this.inputText);
      if (this.inputText === "") return;
      const newTodoList = {
        id: Math.random() * 100000,
        todoText: this.inputText,
        finshedTaskState: false,
      };

      this.$emit("oninserttask", newTodoList);
      this.inputText = "";
    },
  },
  template: `
    <div class='new-task'>
        <button v-show="!newTaskState" @click='changeNewTaskState' class="new-task__btn">+ New Task</button>
        <div v-show="newTaskState"  class='new-task__field-wraper'>
            <input v-model='inputText'  @keyup.enter="insertNewTask" type='text' class="new-task__textField" placeholder="enter your new task"   />
            <span  class='new-task__cancel' @click='changeNewTaskState'>x</span>


            <i class="new-task__add fas fa-paper-plane" @click='insertNewTask'></i>
        </div>
    </div/>
    `,
});
