const app = new Vue({
  el: "#app",

  data() {
    return {
      title: ` todo-list App 🚀`,
      todoItems: [
        { id: 1, todoText: "TODO features list 🍉", finshedTaskState: false },
        { id: 2, todoText: "Add new Task ✅", finshedTaskState: false },
        { id: 3, todoText: "Edit exsited task 🦄", finshedTaskState: false },
        { id: 4, todoText: "Delet exsited task 🗑️", finshedTaskState: false },
        { id: 5, todoText: "dbclick to end task 🏴", finshedTaskState: true },
      ],
      viewedTodoItems: [],
      loading: true,
      selectedTasksSate: "all",
    };
  },

  watch: {
    todoItems: function () {
      this.viewedTodoItems = this.todoItems;
    },
  },

  mounted() {
    this.loading = false;
    this.viewedTodoItems = this.todoItems;
    console.log("mounted");
  },
  methods: {
    handleTaskState(todoitem) {
      const idx = this.todoItems.indexOf(todoitem);
      this.todoItems.splice(idx, 1, todoitem);
    },

    handleItemDelet(todoitem) {
      const idx = this.todoItems.indexOf(todoitem);
      this.todoItems.splice(idx, 1);
    },
    handleNewTask(newTask) {
      this.todoItems.push(newTask);
      this.selectedTasksSate = "all";
    },
    handleItemEdit(todoitem) {
      const idx = this.todoItems.indexOf(todoitem);
      this.todoItems.splice(idx, 1, todoitem);
    },
    handlechangeTask(changeState) {
      this.selectedTasksSate = changeState;
      console.log("changeState", changeState);
      switch (this.selectedTasksSate) {
        case "completed":
          return (this.viewedTodoItems = this.todoItems.filter(
            (item) => item.finshedTaskState == true
          ));
        case "uncompleted":
          return (this.viewedTodoItems = this.todoItems.filter(
            (item) => item.finshedTaskState == false
          ));
        case "all":
          return (this.viewedTodoItems = this.todoItems);
      }
    },
  },
});
