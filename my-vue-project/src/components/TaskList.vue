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
    <div>
        <ul>
            <li v-for="(task, index) in tasks" :key="index">{{ task }}</li>
        </ul>
    </div>
</template>

<script>
// vue component
export default {
    data(){
    //initail data component
    return{
        newTask: '',
        tasks: ['Hang painting', 'Fix radiator',],
        }
    },
    methods:{
        addTask() {
            if (this.newTask.trim() !== '') {
                this.tasks.push(this.newTask.trim());
                this.newTask = ''; // Clear the input after adding a task
            }
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
        padding: 10px 20px;
        background-color: #007BFF;
        color: #FFFFFF;
        text-decoration: none;
        border-radius: 5px;
        transition: background-color 0.3s ease;
    }
    .inputBox{
        display: inline-block;
        padding: 10px 20px;
        border-radius: 5px;
        margin: 5px;
    }

</style>
