<template>
    <ul class="list-group">
        <li class="list-group-item">
        <RouterLink to="/profile/home">Profile</RouterLink>
        </li>
        <li class="list-group-item">
        <RouterLink to="/profile/dashboard">Dashboard</RouterLink>
        </li>
        <li class="list-group-item">
        <RouterLink to="/profile/settings">Settings</RouterLink>
        </li>
    </ul>
    <slot name="main-content">main content: {{ mainTitle }}</slot>
</template>

<script setup lang="ts">
defineProps<{
    mainTitle: string
}>()
</script>