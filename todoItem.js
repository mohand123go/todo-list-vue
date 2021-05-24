Vue.component("todo-item", {
  props: ["todoprop"],
  data() {
    return {
      todoText: this.todoprop.todoText,
      hover: false,
      editMood: false,
      editText: this.todoprop.todoText,
      finshedTaskState: this.todoprop.finshedTaskState,
    };
  },
  methods: {
    handleTaskProps() {
      this.finshedTaskState = !this.finshedTaskState;
      this.todoprop.finshedTaskState = this.finshedTaskState;

      this.$emit("ontaskstate", this.todoprop);
    },
    DeletItem() {
      this.$emit("ondeletitem", this.todoprop);
    },
    EditItem() {
      if (this.editText === "") return;
      this.todoprop.todoText = this.editText;
      console.log(this.editText);
      this.$emit("onedititem", this.todoprop);
      this.editMood = false;
    },
  },

  template: `<div
    :class="{ active: hover }"
    @mouseover="hover=true"
    @mouseleave="hover=false"
    class='todo-item'>
    <template v-if='!editMood'>
          <span class='bullet'></span>
            <p v-bind:class="{'finshed-task':finshedTaskState}" @dblclick='handleTaskProps' class='text-content'>{{todoText | textLimit}}</p>
            <div class='todo-item__icons'>
                <i @click="DeletItem"  class="far fa-trash-alt"></i>
                <i @click="editMood=!editMood" class="far fa-edit"></i>
            </div>
    </template>
    <template v-if="editMood">
        <input v-model="editText" class="editInput" type='text' placeholder="Edit the todo item" />
        <i @click="EditItem"  class="icon fas fa-plus-circle"></i>
    </template>


    </div>`,
});
