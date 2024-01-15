<template>
    <div class="heading">
        <h1>Task List</h1>
        <!-- Form for adding new tasks -->
        <form @submit.prevent="addTask">
            <!--v-model for two way data pairing-->
            <input v-model="newTask" class="inputBox" placeholder="Enter Task Here..." />
            <button class="buttonLinkAdd" type="submit">Add Task</button>
        </form>
    </div>
    <!-- display all tasks -->
    <div>
        <p>Click on the task to mark it as done!</p>
        <p>Tasks that need to be complete: </p>
        <div class="list">
        <!-- display all tasks by iterating through our list  -->
            <li v-for="(task, index) in tasks" :key="index" class="taskItem" @click="completedTask(index)">
                <span :class="{completed:task.completed}">{{ task.text }}</span>
                <button @click="deleteTask(index)" class="buttonDelete">Delete</button>
            </li>
        </div>
    </div>
</template>

<script>
// Vue component - exporting overall shape and structure of list
export default {
    data(){
    // Initail data component for tasks (updates local storage so recent set tasks are stored even when refreshed

    return{
        newTask: '',
        tasks: JSON.parse(localStorage.getItem('tasks')) || [
            {text: 'Hang painting', completed: false},
            {text: 'Fix radiator', completed: false},
            ],
        }
    },
    methods:{
        // Add Task
        // {text: this.newTask, completed: false}
        addTask() {
            if (this.newTask !== '') {
                this.tasks.push({ text: this.newTask, completed: false })
                this.newTask = ''
                this.saveTasks()
            }
        },
        // Delete Tasks
        deleteTask(index){
            this.tasks.splice(index, 1)
            this.saveTasks()
        },
        //marking task as complete - click on the task
        completedTask(index) {
            if (typeof this.tasks[index] === 'object') {
                this.tasks[index].completed = !this.tasks[index].completed;
                this.saveTasks();
            }
        },
        // save updated list of Tasks
        saveTasks(){
            localStorage.setItem('tasks', JSON.stringify(this.tasks))
        }
    }
}
</script>


<style scoped>
/* scoped - only in this sectiion */

    .buttonLink, .buttonLinkAdd{
        display: inline-block;
        padding: 15px 25px;
        background-color: #007BFF;
        color: #FFFFFF;

        border-radius: 5px;
        transition: background-color 0.3s ease;
        font-size: 20px;
    }

    .inputBox{
        display: inline-block;
        padding: 15px 25px;
        border-radius: 5px;
        margin: 5px;
        font-size: 20px;
    }
    .list{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 15px;
        border: 1px solid #ddd;
        border-radius: 5px;
        margin-bottom: 20px;
    }
    .completed{
        color: rgb(0, 128, 0);
    }
    .buttonDelete{
        display: inline-block;
        background-color: #007BFF;
        color: #FFFFFF;
        border-radius: 5px;
        transition: background-color 0.25s ease;
        font-size: 19px;
        margin-left: 5px;
    }
</style>
