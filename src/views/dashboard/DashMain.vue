<script setup>

    import Sidebar  from '@/components/dashboard/Sidebar.vue'
    import Header   from '@/components/dashboard/Header.vue'
    import DashMain from '@/components/dashboard/DashMain.vue'
    import Dropdown from '@/components/dashboard/dropdown.vue'
    import editTask from '@/components/dashboard/Modals/editTask.vue'
    import remTask  from '@/components/dashboard/Modals/remTask.vue'

</script>

<template>
    <main class="flex bg-gray-50 dark:bg-gray-900 ">
        
        <Sidebar />
        <div class="flex flex-col flex-1 w-full ">

            <Header />
            <DashMain class=" min-h-screen mb-10" />
            <editTask />
            <remTask />

        </div>

    </main>

</template>