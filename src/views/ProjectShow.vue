<template>
    <Layout>
        <h2 class="text-center mt-5 mb-3">Show Project</h2>
        <div class="card">
            <div class="card-header">
                <RouterLink 
                    class="btn btn-outline-info float-right"
                    to="/">View All Projects
                </RouterLink>
            </div>
            <div class="card-body">
                <b className="text-muted">Name:</b>
                <p>{{project.name}}</p>
                <b className="text-muted">Description:</b>
                <p>{{project.description}}</p>
            </div>
        </div>
    </Layout>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import Layout from '../components/Layout.vue';
import axios from 'axios';

type ProjectTypes = {
    name: string;
    description: string;
};

const project = ref<ProjectTypes>({
    name: '',
    description: ''
});
const route = useRoute();
const projectId = ref<string | null>(null);

const fetchProject = async (id: string) => {
    try {
        const response = await axios.get(`https://mock-api.binaryboxtuts.com/api/projects/${id}`, {
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

</script>