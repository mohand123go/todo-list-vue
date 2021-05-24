const app = new Vue({
  el: "#app",

  data() {
    return {
      title: ` todo-list App 🚀`,
      todoItems: [
        { todoText: "TODO features list 🍉", finshedTaskState: false },
        { todoText: "Add new Task ✅", finshedTaskState: false },
        { todoText: "Edit exsited task 🦄", finshedTaskState: false },
        { todoText: "Delet exsited task 🗑️", finshedTaskState: false },
        { todoText: "dbclick to end task 🏴", finshedTaskState: true },
      ],
      loading: true,
    };
  },

  mounted() {
    this.loading = false;
    console.log("mounted");
  },
  methods: {
    handleTaskState(todoitem) {
      const idx = this.todoItems.indexOf(todoitem);
      this.todoItems.splice(idx, 1);
    },

    handleItemDelet(todoitem) {
      const idx = this.todoItems.indexOf(todoitem);
      this.todoItems.splice(idx, 1);
    },
    handleNewTask(newTask) {
      this.todoItems.push(newTask);
    },
    handleItemEdit(todoitem) {
      const idx = this.todoItems.indexOf(todoitem);
      this.todoItems.splice(idx, 1, todoitem);
    },
  },
});
