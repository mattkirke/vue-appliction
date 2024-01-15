<template>
    <div class="heading">
        <h1>Task List</h1>
        <!-- Form for adding new tasks -->
        <form @submit.prevent="addTask">
            <!--v-model for two way data pairing-->
            <input v-model="newTask" class="inputBox" placeholder="Enter Task Here..." />
            <button class="buttonLink" type="submit">Add Task</button>
        </form>
    </div>
    <!-- display all tasks -->
    <div>
        <p>Tasks that need to be complete: </p>
        <div class="list">
        <!-- display all tasks by iterating through our list  -->
            <li v-for="(task, index) in tasks" :key="index" class="taskItem">
                <span>{{ task }}</span>
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
        tasks: JSON.parse(localStorage.getItem('tasks')) || ['Hang painting', 'Fix radiator',],
        }
    },
    methods:{
        // Add Task
        addTask() {
            if (this.newTask !== '') {
                this.tasks.push(this.newTask)
                this.newTask = ''
                this.saveTasks()
            }
        },
        // Delete Tasks
        deleteTask(index){
            this.tasks.splice(index, 1)
            this.saveTasks()

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
    .heading{
    
    }

    .buttonLink {
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
    
    .buttonDelete{
        display: inline-block;
        background-color: #007BFF;
        color: #FFFFFF;
        border-radius: 5px;
        transition: background-color 0.3s ease;
        font-size: 19px;
        margin-left: 5px;
    }
</style>
