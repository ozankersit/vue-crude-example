<template>
    <Layout>
        <h2 class="text-center mt-5 mb-3">Edit Project</h2>
        <div class="card">
            <div class="card-header">
                <RouterLink class="btn btn-outline-info float-right" to="/">View All Projects</RouterLink>
            </div>
            <div class="card-body">
                <form @submit.prevent="handleSave">
                    <div class="form-group">
                        <label for="name">Name</label>
                        <input type="text" v-model="project.name" id="name" name="name" class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="description">Description</label>
                        <textarea v-model="project.description" id="description" name="description" class="form-control"></textarea>
                    </div>
                    <button :disabled="isSaving" type="submit" class="btn btn-outline-primary mt-3">Save Project</button>
                </form>
            </div>
        </div>
    </Layout>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Layout from '../components/Layout.vue';
import { useRouter } from 'vue-router';
import { useRoute } from 'vue-router';
import axios from 'axios';

type ProjectTypes = {
    name: string;
    description: string;
};

const isSaving = ref();
const project = ref<ProjectTypes>({
    name: '',
    description: ''
});
const route = useRoute();
const router = useRouter();
const projectId = ref<string | null>(null);

const API_URL = 'https://mock-api.binaryboxtuts.com/api/projects/'

const fetchProject = async (id: string) => {
    try {
        const response = await axios.get(`${API_URL}${id}`, {
            headers: { 'X-Binarybox-Api-Key': 'binarybox_api_key_VzO8M31mfzUAW58MBuDkyVX68IWufWJWW7m5BqqSi3FSXHHwKeHjuXQzOC7QdACzffplQ93npFb6Q3sMQLeImXxkz3IHQDkWy1yt' }
        });
        project.value = response.data;
    } catch (error) {
        console.error("Error", error);
    }
};

onMounted(() => {
    if (route.params.id) {
        projectId.value = route.params.id as string;
        fetchProject(projectId.value);
    }
});

const handleSave = async () => {
    if (!projectId.value) {
        return;
    }

    isSaving.value = true;
    try {
         await axios.patch(`${API_URL}${projectId.value}`, project.value, {
            headers: { 'X-Binarybox-Api-Key': 'binarybox_api_key_VzO8M31mfzUAW58MBuDkyVX68IWufWJWW7m5BqqSi3FSXHHwKeHjuXQzOC7QdACzffplQ93npFb6Q3sMQLeImXxkz3IHQDkWy1yt' }
        });
        isSaving.value = false;
        router.push('/')
    } catch (error) {
        isSaving.value = false;
        console.error("Error updating project:", error);
    }
};
</script>
