<script setup>
import Register from '@/components/Register.vue'
import Modal from '@/components/modals/Alert.vue'
</script>

<template>
<main class="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
    <div class="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
        <div class="flex flex-col overflow-y-auto md:flex-row">
            <Register />
        </div>
    </div>
</main>
<Modal />
</template>
