<template>
    <Layout>
        <div class="container">
            <h2 class="text-center mt-5 mb-3">Project Manager</h2>
            <div class="card">
                <div class="card-header">
                    <RouterLink to="/create" class="btn btn-outline-primary">Create New Project
                    </RouterLink>
                </div>
                <div class="card-body">
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            <tr v-for="project in projects" :key="project.id">
                                <td>{{ project.name }}</td>
                                <td>{{ project.description }}</td>
                                <td>
                                    <RouterLink :to="`/show/${project.id}`" class="btn btn-outline-info mx-1">Show</RouterLink>
                                    <RouterLink :to="`/edit/${project.id}`"
                                        class="btn btn-outline-success mx-1">Edit</RouterLink>
                                    <button @click="handleDelete(project.id)" className="btn btn-outline-danger mx-1">
                                        Delete
                                    </button>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </Layout>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import Layout from '../components/Layout.vue'
import axios from 'axios';



const projects = ref([{ id: '', name: '', description: '' }])

const fetchProjectsList = () => {
    axios.get('https://mock-api.binaryboxtuts.com/api/projects', { headers: { 'X-Binarybox-Api-Key': 'binarybox_api_key_VzO8M31mfzUAW58MBuDkyVX68IWufWJWW7m5BqqSi3FSXHHwKeHjuXQzOC7QdACzffplQ93npFb6Q3sMQLeImXxkz3IHQDkWy1yt' } }).then(response => {
        projects.value = response.data
        return response
    }).catch(error => {
        return error
    })
}

const handleDelete = (id: string) => {
    axios.delete(`https://mock-api.binaryboxtuts.com/api/projects/${id}`, { headers: { 'X-Binarybox-Api-Key': 'binarybox_api_key_VzO8M31mfzUAW58MBuDkyVX68IWufWJWW7m5BqqSi3FSXHHwKeHjuXQzOC7QdACzffplQ93npFb6Q3sMQLeImXxkz3IHQDkWy1yt' } }).then(response => {
        fetchProjectsList()
        return response
    })
        .catch(error => {
            return error
        })
}

onMounted(() => {
    fetchProjectsList()
})

</script>