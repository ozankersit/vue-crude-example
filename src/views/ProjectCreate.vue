<template>
    <Layout>
        <h2 class="text-center mt-5 mb-3">Create New Project</h2>
        <div class="card">
            <div class="card-header">
                <RouterLink class="btn btn-outline-info float-right" to="/">View All Projects
                </RouterLink>
            </div>
            <div class="card-body">
                <form>
                    <div class="form-group">
                        <label for="name">Name</label>
                        <input type="text" v-model="project.name" id="name" name="name" class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="description">Description</label>
                        <textarea v-model="project.description" id="description" name="description"
                            class="form-control">
                        </textarea>
                    </div>
                    <button @click="handleSave" :disabled="isSaving" type="submit" class="btn btn-outline-primary mt-3">
                        Save Project
                    </button>
                </form>
            </div>
        </div>
    </Layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Layout from '../components/Layout.vue'
import axios from 'axios';
import { useRouter } from 'vue-router';

type ProjectTypes = {
    name: string;
    description: string
}

const isSaving = ref(false);

const router = useRouter()

const project = ref<ProjectTypes>({
    name: '',
    description: ''
});
const handleSave = () => {
    isSaving.value = true
    axios.post('https://mock-api.binaryboxtuts.com/api/projects', project.value, {headers: {'X-Binarybox-Api-Key': 'binarybox_api_key_VzO8M31mfzUAW58MBuDkyVX68IWufWJWW7m5BqqSi3FSXHHwKeHjuXQzOC7QdACzffplQ93npFb6Q3sMQLeImXxkz3IHQDkWy1yt'}}).then(response => {
        isSaving.value = false;
        router.push('/')
        return response
    })
        .catch(error => {
            isSaving.value = false
            return error
        })
}
</script>