<script setup>

    import Sidebar    from '@/components/dashboard/Sidebar.vue'
    import Header     from '@/components/dashboard/Header.vue'
    import DashField  from '@/components/dashboard/DashField.vue'
    import Dropdown   from '@/components/dashboard/dropdown.vue'
    import editTask   from '@/components/dashboard/Modals/editTask.vue'
    import remTask    from '@/components/dashboard/Modals/remTask.vue'
    import remBlock   from '@/components/dashboard/Modals/remBlock.vue'
    import editBlock  from '@/components/dashboard/Modals/editBlock.vue'
    import addBlock   from '@/components/dashboard/Modals/addBlock.vue'

</script>

<template>
    <main class="flex bg-gray-50 dark:bg-gray-900 border-l dark:border-gray-700 border-gray-200">
        
        <Sidebar />
        <div class="flex flex-col flex-1 w-full ">

            <Header />
            <DashField class=" min-h-screen mb-10" />

            <editTask />
            <remTask />
            <remBlock />
            <editBlock />
            <addBlock />

        </div>

    </main>

</template>
