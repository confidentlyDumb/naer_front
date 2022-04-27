<style>
input[type=number]::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
</style>

<template>
  <div class="container px-6 mx-auto">
      <!-- Cards -->

    <h2 class="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
      Field 2 (ID: 456) / Blocks
    </h2>
    <div class="grid gap-6 mb-8 md:grid-cols-2">
      <div
        class="rp-4 bg-white rounded-lg shadow-xs dark:bg-gray-800"
      >
        <div
            class="flex text-base text-left transform transition md:inline-block shadow-xs w-full"
        >
            <span class="text-sm mx-4 mt-14 mb-8 sm:mx-6 sm:mt-8 md:m-6 lg:m-8 absolute right-0 top-0 z-10 px-2 py-1 font-semibold leading-tight text-blue-700 bg-blue-100 rounded-full dark:text-white dark:bg-blue-600"> Working </span>
            <div
            class="rounded-lg rounded-b-none w-full relative flex items-center bg-white dark:bg-gray-800 px-4 pt-14 pb-8 overflow-hidden sm:px-6 sm:pt-8 md:p-6 lg:p-8"
            >
                <div class="w-full">
                <h2
                    class="text-2xl font-extrabold text-gray-900 dark:text-gray-200 sm:pr-12"
                >
                    Block 5
                </h2>

                <section aria-labelledby="information-heading" class="mt-2">
                    <p class="mb-5 text-2xl text-gray-900 dark:text-gray-300">
                    ID: 420
                    </p>
                    <p class=" my-3 text-lg text-gray-900 dark:text-gray-400">
                    Crop: eggplant
                    </p>
                    <p class="mb-3 text-lg text-gray-900 dark:text-gray-400">
                    Currently: plant (eggplant)<br>
                    <span class="text-sm text-gray-500 flex">
                    <svg class="mr-2" fill="currentColor" width="10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512zM232 256C232 264 236 271.5 242.7 275.1L338.7 339.1C349.7 347.3 364.6 344.3 371.1 333.3C379.3 322.3 376.3 307.4 365.3 300L280 243.2V120C280 106.7 269.3 96 255.1 96C242.7 96 231.1 106.7 231.1 120L232 256z"/></svg>
                    Time remaining: 2 hrs, 27 min</span>
                    </p>
                    <p class=" my-3 text-lg text-gray-900 dark:text-gray-400">
                    Worker: Robot Name (id: 123)
                    </p>
                </section>
                </div>
            </div>
            <div
            class="border-t px-4 py-4 sm:px-6 sm:py-4 md:p-6 lg:p-8 rounded-t-none flex w-full justify-end rounded-lg dark:border-gray-700 bg-gray-50 dark:bg-gray-800"
            >
            <div class="w-1/4 mr-4">
                <button
                @click="openModal('remField')"
                class="flex w-full items-center justify-center px-4 py-2 text-sm font-medium leading-5 text-red-600 transition-colors duration-150 border border-red-600 rounded-lg active:bg-transparent hover:border-red-500 hover:text-red-500 focus:border-red-500 focus:text-red-500 active:text-red-500 focus:outline-none focus:shadow-outline-gray"
                >
                <span>Erase data</span>
                </button>
            </div>
            <div class="w-2/5">
                <a
                href="/dashboard/field/456"
                class="flex items-center justify-center px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple w-full"
                >
                <span>Activity log</span>
                </a>
            </div>
            </div>
        </div>

      </div>
            <div
        class="rp-4 bg-white rounded-lg shadow-xs dark:bg-gray-800"
      >
        <div
            class="flex text-base text-left transform transition md:inline-block shadow-xs w-full"
        >
            <span class="text-sm mx-4 mt-14 mb-8 sm:mx-6 sm:mt-8 md:m-6 lg:m-8 absolute right-0 top-0 z-10 px-2 py-1 font-semibold leading-tight text-gray-700 bg-gray-100 rounded-full dark:text-white dark:bg-gray-600"> Resting </span>
            <div
            class="rounded-lg rounded-b-none w-full relative flex items-center bg-white dark:bg-gray-800 px-4 pt-14 pb-8 overflow-hidden sm:px-6 sm:pt-8 md:p-6 lg:p-8"
            >
                <div class="w-full">
                <h2
                    class="text-2xl font-extrabold text-gray-900 dark:text-gray-200 sm:pr-12"
                >
                    Block 10
                </h2>

                <section aria-labelledby="information-heading" class="mt-2">
                    <p class="mb-5 text-2xl text-gray-900 dark:text-gray-300">
                    ID: 228
                    </p>
                    <p class=" my-3 text-lg text-gray-900 dark:text-gray-400">
                    Crop: pumpkin
                    </p>
                    <p class="mb-3 text-lg text-gray-900 dark:text-gray-400">
                    Currently: nothing's happening<br>
                    <span class="text-sm text-gray-500 flex">
                    <svg class="mr-2" fill="currentColor" width="10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512zM232 256C232 264 236 271.5 242.7 275.1L338.7 339.1C349.7 347.3 364.6 344.3 371.1 333.3C379.3 322.3 376.3 307.4 365.3 300L280 243.2V120C280 106.7 269.3 96 255.1 96C242.7 96 231.1 106.7 231.1 120L232 256z"/></svg>
                    Time remaining: 0 hrs, 0 min</span>
                    </p>
                    <p class=" my-3 text-lg text-gray-900 dark:text-gray-400">
                    Worker: none
                    </p>
                </section>
                </div>
            </div>
            <div
            class="border-t px-4 py-4 sm:px-6 sm:py-4 md:p-6 lg:p-8 rounded-t-none flex w-full justify-end rounded-lg dark:border-gray-700 bg-gray-50 dark:bg-gray-800"
            >
            <div class="w-1/4 mr-4">
                <button
                @click="openModal('remField')"
                class="flex w-full items-center justify-center px-4 py-2 text-sm font-medium leading-5 text-red-600 transition-colors duration-150 border border-red-600 rounded-lg active:bg-transparent hover:border-red-500 hover:text-red-500 focus:border-red-500 focus:text-red-500 active:text-red-500 focus:outline-none focus:shadow-outline-gray"
                >
                <span>Erase data</span>
                </button>
            </div>
            <div class="w-2/5">
                <a
                href="/dashboard/field/456"
                class="flex items-center justify-center px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple w-full"
                >
                <span>Activity log</span>
                </a>
            </div>
            </div>
        </div>

      </div>
            <div
        class="rp-4 bg-white rounded-lg shadow-xs dark:bg-gray-800"
      >
        <div
            class="flex text-base text-left transform transition md:inline-block shadow-xs w-full"
        >
            <span class="text-sm mx-4 mt-14 mb-8 sm:mx-6 sm:mt-8 md:m-6 lg:m-8 absolute right-0 top-0 z-10 px-2 py-1 font-semibold leading-tight text-gray-700 bg-gray-100 rounded-full dark:text-white dark:bg-gray-600"> Resting </span>
            <div
            class="rounded-lg rounded-b-none w-full relative flex items-center bg-white dark:bg-gray-800 px-4 pt-14 pb-8 overflow-hidden sm:px-6 sm:pt-8 md:p-6 lg:p-8"
            >
                <div class="w-full">
                <h2
                    class="text-2xl font-extrabold text-gray-900 dark:text-gray-200 sm:pr-12"
                >
                    Block 12
                </h2>

                <section aria-labelledby="information-heading" class="mt-2">
                    <p class="mb-5 text-2xl text-gray-900 dark:text-gray-300">
                    ID: 112
                    </p>
                    <p class=" my-3 text-lg text-gray-900 dark:text-gray-400">
                    Crop: tomato
                    </p>
                    <p class="mb-3 text-lg text-gray-900 dark:text-gray-400">
                    Currently: nothing's happening<br>
                    <span class="text-sm text-gray-500 flex">
                    <svg class="mr-2" fill="currentColor" width="10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512zM232 256C232 264 236 271.5 242.7 275.1L338.7 339.1C349.7 347.3 364.6 344.3 371.1 333.3C379.3 322.3 376.3 307.4 365.3 300L280 243.2V120C280 106.7 269.3 96 255.1 96C242.7 96 231.1 106.7 231.1 120L232 256z"/></svg>
                    Time remaining: 0 hrs, 0 min</span>
                    </p>
                    <p class=" my-3 text-lg text-gray-900 dark:text-gray-400">
                    Worker: none
                    </p>
                </section>
                </div>
            </div>
            <div
            class="border-t px-4 py-4 sm:px-6 sm:py-4 md:p-6 lg:p-8 rounded-t-none flex w-full justify-end rounded-lg dark:border-gray-700 bg-gray-50 dark:bg-gray-800"
            >
            <div class="w-1/4 mr-4">
                <button
                @click="openModal('remField')"
                class="flex w-full items-center justify-center px-4 py-2 text-sm font-medium leading-5 text-red-600 transition-colors duration-150 border border-red-600 rounded-lg active:bg-transparent hover:border-red-500 hover:text-red-500 focus:border-red-500 focus:text-red-500 active:text-red-500 focus:outline-none focus:shadow-outline-gray"
                >
                <span>Erase data</span>
                </button>
            </div>
            <div class="w-2/5">
                <a
                href="/dashboard/field/456"
                class="flex items-center justify-center px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple w-full"
                >
                <span>Activity log</span>
                </a>
            </div>
            </div>
        </div>

      </div>
      <div
        class="relative flex justify-center items-center rp-4 bg-white rounded-lg shadow-xs dark:bg-gray-800 "
      >

      <div class="w-2/5 relative -mt-8 flex flex-col">
        <img src="/src/assets/img/newBlock.svg">
        <button class="mt-10 flex items-center justify-center self-center px-10 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-lg active:bg-blue-600 hover:bg-blue-700 focus:outline-none focus:shadow-outline-purple" v-on:click="openModal('modal')">Create block</button>

      </div>
    </div>
  </div>

    <div id="modal" class="hidden fixed inset-0 z-30 items-end bg-black bg-opacity-50 sm:items-center sm:justify-center transition ease-in-out duration-300 opacity-0">
    <!-- Modal -->
        <div  class="w-full px-6 py-4 overflow-hidden bg-white rounded-t-lg dark:bg-gray-800 sm:rounded-lg sm:m-4 sm:max-w-xl" role="dialog" id="modal">
            <!-- Remove header if you don't want a close icon. Use modal body to place modal tile. -->
            <header class="flex justify-end">
            <button class="inline-flex items-center justify-center w-6 h-6 text-gray-400 transition-colors duration-150 rounded dark:hover:text-gray-200 hover: hover:text-gray-700" aria-label="close" @click="closeModal('modal')">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" role="img" aria-hidden="true">
                <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" fill-rule="evenodd"></path>
                </svg>
            </button>
            </header>
            
            <div class="mt-4 mb-6">
            <p class="mb-2 text-lg font-semibold text-gray-700 dark:text-gray-300">
                Create block
            </p>
            <div class="py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
              <label class="block text-sm">
                <span class="text-gray-700 dark:text-gray-400">
                  Crop
                </span>
                <select class="block w-full mt-1 text-sm dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 form-select focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray">
                  <option>Pumpkin</option>
                  <option>Eggplant</option>
                  <option>Tomato</option>
                </select>
              </label>
              
              <label class="block text-sm mt-4">
                <span class="text-gray-700 dark:text-gray-400">Blocks</span>
                <input type="number" min="0" class="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input" placeholder="42" value="0">
              </label>

            </div>
            </div>
            <footer class="flex flex-col items-center justify-end px-6 py-3 -mx-6 -mb-4 space-y-4 sm:space-y-0 sm:space-x-6 sm:flex-row bg-gray-50 dark:bg-gray-800">
            <button @click="closeModal('modal')" class="w-full px-5 py-3 text-sm font-medium leading-5 text-white text-gray-700 transition-colors duration-150 border border-gray-300 rounded-lg dark:text-gray-400 sm:px-4 sm:py-2 sm:w-auto active:bg-transparent hover:border-gray-500 focus:border-gray-500 active:text-gray-500 focus:outline-none focus:shadow-outline-gray">
                Cancel
            </button>
            <button class="w-full px-5 py-3 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg sm:w-auto sm:px-4 sm:py-2 active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple">
                Create
            </button>
            </footer>
        </div>
    </div>

    <div id="remField" class="hidden fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        
        <div class="fixed inset-0 bg-black bg-opacity-50 transition-opacity" aria-hidden="true"></div>

        <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

        <div class="relative inline-block align-bottom bg-white dark:bg-gray-900 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
        <div class="bg-white dark:bg-gray-900 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div class="sm:flex sm:items-start">
            <div class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-800 dark:bg-opacity-40 sm:mx-0 sm:h-10 sm:w-10">
                <svg class="h-6 w-6 text-red-600 dark:text-red-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
            </div>
            <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3 class="text-lg leading-6 font-medium text-gray-900 dark:text-gray-200" id="modal-title">Delete block</h3>
                <div class="mt-2">
                <p class="text-sm text-gray-500 dark:text-gray-400">Are you sure you want to delete this block record? All the tasks associated with it will be untracked.</p>
                </div>
            </div>
            </div>
        </div>
        <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse dark:bg-gray-900">
            <button type="button" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">Delete</button>
            <button  @click="closeModal('remField')" type="button" class="flex  items-center justify-center px-4 py-2 text-sm font-medium leading-5 text-blue-600 transition-colors duration-150 border border-blue-600 rounded-lg active:bg-transparent hover:border-blue-500 hover:text-blue-500 focus:border-blue-500 focus:text-blue-500 active:text-blue-500 focus:outline-none focus:shadow-outline-gray">Cancel</button>
        </div>
        </div>
    </div>
    </div>


    </div>
</template>

<script type="text/javascript">

export default {
  name: "addField",
  data() {
    return {
    }
  },
  methods: {
    openModal: function (elem) {
        let modal = document.getElementById(elem);

            elem != "remField" ? modal.classList.replace('hidden', 'flex')
                               : modal.classList.remove('hidden');
            modal.classList.replace('opacity-0', 'opacity-100');
    },

    closeModal: function (elem) {
        let modal = document.getElementById(elem);

            elem != "remField" ? modal.classList.replace('flex', 'hidden')
                               : modal.classList.add('hidden');
            modal.classList.replace('opacity-100', 'opacity-0')
    }
  },
};


</script>
