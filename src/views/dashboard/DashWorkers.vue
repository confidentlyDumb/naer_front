<script setup>

    import Sidebar    from '@/components/dashboard/Sidebar.vue'
    import Header     from '@/components/dashboard/Header.vue'
    import DashMain   from '@/components/dashboard/DashWorkers.vue'
    import Dropdown   from '@/components/dashboard/dropdown.vue'
    import editTask   from '@/components/dashboard/Modals/editTask.vue'
    import remTask    from '@/components/dashboard/Modals/remTask.vue'
    import addWorker  from '@/components/dashboard/Modals/addWorker.vue'
    import remWorker  from '@/components/dashboard/Modals/remWorker.vue'
    import editWorker from '@/components/dashboard/Modals/editWorker.vue'
    import editData   from '@/components/dashboard/Modals/editData.vue'

</script>

<template>
    <main class="flex bg-gray-50 dark:bg-gray-900 border-l dark:border-gray-700 border-gray-200">
        
        <Sidebar />
        <div class="flex flex-col flex-1 w-full ">

            <Header />
            <DashMain class=" min-h-screen mb-10" />
            <editTask />
            <remTask />
            <addWorker />
            <remWorker />
            <editWorker />
            <editData />

        </div>

    </main>

</template>
