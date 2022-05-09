<template>
  <div class="container px-6 mx-auto">
    <h2 class="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
      Robots
    </h2>
    <div>
      <div
        class=" flex shadow-xs text-base text-left transform transition md:inline-block md:my-8 w-full 2xl:w-1/2"
      >
        <span class="text-sm mx-4 mt-14 mb-8 sm:mx-6 sm:mt-8 md:m-6 lg:m-8 absolute right-0 top-0 z-10 px-2 py-1 font-semibold leading-tight text-blue-700 bg-blue-100 rounded-full dark:text-white dark:bg-blue-600"> Working </span>
        <div
          class="rounded-lg rounded-b-none w-full relative flex items-center bg-white dark:bg-gray-800 px-4 pt-14 pb-8 overflow-hidden sm:px-6 sm:pt-8 md:p-6 lg:p-8"
        >
          <div
            class="w-full grid grid-cols-1 gap-y-8 gap-x-6 items-start sm:grid-cols-12 lg:gap-x-8"
          >
            <div
              class="h-full max-h-xl w-full rounded-lg bg-gray-100 overflow-hidden col-span-6 2xl:col-span-7"
            >
              <img
                src="/src/assets/img/seeder.jpg"
                alt="Seeder robot ready to plant some seeds."
                class="h-full w-full object-cover object-center transform transition duration-300 hover:scale-105 hover:opacity-75"
              />
            </div>
            <div class="col-span-6 2xl:col-span-5 pl-6">
              <h2
                class="text-2xl font-extrabold text-gray-900 dark:text-gray-200 sm:pr-12"
              >
                Robot Name
              </h2>

              <section aria-labelledby="information-heading" class="mt-2">
                <p class="mb-5 text-2xl text-gray-900 dark:text-gray-300">
                  ID: 123
                </p>
                <p class="my-3 text-lg text-gray-900 dark:text-gray-400">
                  Type: Seeder
                </p>
                <p class="mb-3 text-lg text-gray-900 dark:text-gray-400">
                  Location: Field 1, block 7<br>
                  <span class="text-sm text-gray-500 flex">
                  <svg class="mr-2" fill="currentColor" width="10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2H168.3zM192 256C227.3 256 256 227.3 256 192C256 156.7 227.3 128 192 128C156.7 128 128 156.7 128 192C128 227.3 156.7 256 192 256z"/></svg>
                  (55.714378453, 12.286777907)</span>
                </p>
                <p class="mb-3 text-lg text-gray-900 dark:text-gray-400">
                  Current task: plant (Eggplant)<br>
                  <span class="text-sm text-gray-500 flex">
                  <svg class="mr-2" fill="currentColor" width="10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512zM232 256C232 264 236 271.5 242.7 275.1L338.7 339.1C349.7 347.3 364.6 344.3 371.1 333.3C379.3 322.3 376.3 307.4 365.3 300L280 243.2V120C280 106.7 269.3 96 255.1 96C242.7 96 231.1 106.7 231.1 120L232 256z"/></svg>
                  Time remaining: 2 hrs, 27 min</span>
                </p>
              </section>

              <h3 class="mt-10 text-xl font-semibold text-gray-700 dark:text-gray-200"> Scheduled tasks: </h3>

              <section aria-labelledby="options-heading" class="mt-4">
                <table class="w-full whitespace-no-wrap">
                  <thead>
                    <tr
                      class="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800"
                    >
                      <th class="pr-4 py-3">Location</th>
                      <th class="px-4 py-3">Task</th>
                      <th class="px-4 py-3">Date</th>
                    </tr>
                  </thead>
                  <tbody
                    class="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800"
                  >
                    <tr class="text-gray-700 dark:text-gray-400">
                      <td class="pr-4 py-3">
                        <div class="flex items-center text-sm">
                          <a href="/dashboard/field/456">
                            <p class="font-semibold">Block 1</p>
                            <p class="text-xs text-gray-600 dark:text-gray-400">
                              Field 1
                            </p>
                          </a>
                        </div>
                      </td>
                      <td class="px-4 flex py-3 text-sm">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="w-3 h-3 mr-2 mt-1"
                          fill="currentColor"
                          viewBox="0 0 512 512"
                        >
                          <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                          <path
                            d="M64 95.1H0c0 123.8 100.3 224 224 224v128C224 465.6 238.4 480 255.1 480S288 465.6 288 448V320C288 196.3 187.7 95.1 64 95.1zM448 32c-84.25 0-157.4 46.5-195.8 115.3c27.75 30.12 48.25 66.88 59 107.5C424 243.1 512 147.9 512 32H448z"
                          />
                        </svg>
                        Plant (Pumpkin)
                      </td>
                      <td class="px-4 py-3 text-sm relative">11/06/2022
                        <span class="absolute flex right-0 -mt-5 mr-3">
                            <svg id="editBlock_01" width="12px" onclick="openModal('editTask', 'editBlock_01')"
                                 data-worker="Robot Name (id: 123, seeder)" data-block="1" data-field="1" data-task="Plant" data-crop="Pumpkin" data-date="2022-06-11"
                                 class="editTask mr-4 fill-indigo-500 text-indigo-500 fill-current cursor-pointer transition ease-in-out duration-200 hover:fill-indigo-400 hover:text-indigo-400"
                                 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M421.7 220.3L188.5 453.4L154.6 419.5L158.1 416H112C103.2 416 96 408.8 96 400V353.9L92.51 357.4C87.78 362.2 84.31 368 82.42 374.4L59.44 452.6L137.6 429.6C143.1 427.7 149.8 424.2 154.6 419.5L188.5 453.4C178.1 463.8 165.2 471.5 151.1 475.6L30.77 511C22.35 513.5 13.24 511.2 7.03 504.1C.8198 498.8-1.502 489.7 .976 481.2L36.37 360.9C40.53 346.8 48.16 333.9 58.57 323.5L291.7 90.34L421.7 220.3zM492.7 58.75C517.7 83.74 517.7 124.3 492.7 149.3L444.3 197.7L314.3 67.72L362.7 19.32C387.7-5.678 428.3-5.678 453.3 19.32L492.7 58.75z"/></svg>
                            <svg width="12px" class=" fill-red-500 text-red-500 fill-current cursor-pointer transition ease-in-out duration-200 hover:fill-red-400 hover:text-red-400" onclick="openModal('remBlock')" fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"/></svg>
                        
                        </span>
                      </td>
                    </tr>
                    <tr class="text-gray-700 dark:text-gray-400">
                      <td class="pr-4 py-3">
                        <div class="flex items-center text-sm">
                          <a href="/dashboard/field/456">
                            <p class="font-semibold">Block 12</p>
                            <p class="text-xs text-gray-600 dark:text-gray-400">
                              Field 2
                            </p>
                          </a>
                        </div>
                      </td>
                      <td class="px-4 py-3 text-sm flex">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="w-3 h-3 mr-2 mt-1"
                          fill="currentColor"
                          viewBox="0 0 512 512"
                        >
                          <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                          <path
                            d="M64 95.1H0c0 123.8 100.3 224 224 224v128C224 465.6 238.4 480 255.1 480S288 465.6 288 448V320C288 196.3 187.7 95.1 64 95.1zM448 32c-84.25 0-157.4 46.5-195.8 115.3c27.75 30.12 48.25 66.88 59 107.5C424 243.1 512 147.9 512 32H448z"
                          />
                        </svg>
                        Plant (Eggplant)
                      </td>
                      <td class="px-4 py-3 text-sm relative">12/06/2022
                        <span class="absolute flex right-0 -mt-5 mr-3">
                            <svg id="editBlock_02" width="12px" onclick="openModal('editTask', 'editBlock_02')" 
                                data-worker="Robot Name (id: 123, seeder)" data-block="12" data-field="2" data-task="Plant" data-crop="Eggplant" data-date="2022-06-12"
                                class="editTask mr-4 fill-indigo-500 text-indigo-500 fill-current cursor-pointer transition ease-in-out duration-200 hover:fill-indigo-400 hover:text-indigo-400"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M421.7 220.3L188.5 453.4L154.6 419.5L158.1 416H112C103.2 416 96 408.8 96 400V353.9L92.51 357.4C87.78 362.2 84.31 368 82.42 374.4L59.44 452.6L137.6 429.6C143.1 427.7 149.8 424.2 154.6 419.5L188.5 453.4C178.1 463.8 165.2 471.5 151.1 475.6L30.77 511C22.35 513.5 13.24 511.2 7.03 504.1C.8198 498.8-1.502 489.7 .976 481.2L36.37 360.9C40.53 346.8 48.16 333.9 58.57 323.5L291.7 90.34L421.7 220.3zM492.7 58.75C517.7 83.74 517.7 124.3 492.7 149.3L444.3 197.7L314.3 67.72L362.7 19.32C387.7-5.678 428.3-5.678 453.3 19.32L492.7 58.75z"/></svg>
                            <svg width="12px" class=" fill-red-500 text-red-500 fill-current cursor-pointer transition ease-in-out duration-200 hover:fill-red-400 hover:text-red-400" onclick="openModal('remBlock')" fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"/></svg>
                        
                        </span>
                      </td>
                    </tr>

                    <tr class="text-gray-700 dark:text-gray-400">
                      <td class="pr-4 py-3">
                        <div class="flex items-center text-sm">
                          <a href="/dashboard/field/456">
                            <p class="font-semibold">Block 4</p>
                            <p class="text-xs text-gray-600 dark:text-gray-400">
                              Field 6
                            </p>
                          </a>
                        </div>
                      </td>
                      <td class="flex px-4 py-3 text-sm">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="w-3 h-3 mr-2 mt-1"
                          fill="currentColor"
                          viewBox="0 0 512 512"
                        >
                          <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                          <path
                            d="M64 95.1H0c0 123.8 100.3 224 224 224v128C224 465.6 238.4 480 255.1 480S288 465.6 288 448V320C288 196.3 187.7 95.1 64 95.1zM448 32c-84.25 0-157.4 46.5-195.8 115.3c27.75 30.12 48.25 66.88 59 107.5C424 243.1 512 147.9 512 32H448z"
                          />
                        </svg>
                        Plant (Tomato)
                      </td>
                      <td class="px-4 py-3 text-sm relative">12/06/2022
                        <span class="absolute flex right-0 -mt-5 mr-3">
                            <svg width="12px" onclick="openModal('editTask', 'editBlock_03')"
                                 id="editBlock_03" data-worker="Robot Name (id: 123, seeder)" data-block="4" data-field="6" data-task="Plant" data-crop="Tomato" data-date="2022-06-12"
                                 class="editTask mr-4 fill-indigo-500 text-indigo-500 fill-current cursor-pointer transition ease-in-out duration-200 hover:fill-indigo-400 hover:text-indigo-400"
                                 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M421.7 220.3L188.5 453.4L154.6 419.5L158.1 416H112C103.2 416 96 408.8 96 400V353.9L92.51 357.4C87.78 362.2 84.31 368 82.42 374.4L59.44 452.6L137.6 429.6C143.1 427.7 149.8 424.2 154.6 419.5L188.5 453.4C178.1 463.8 165.2 471.5 151.1 475.6L30.77 511C22.35 513.5 13.24 511.2 7.03 504.1C.8198 498.8-1.502 489.7 .976 481.2L36.37 360.9C40.53 346.8 48.16 333.9 58.57 323.5L291.7 90.34L421.7 220.3zM492.7 58.75C517.7 83.74 517.7 124.3 492.7 149.3L444.3 197.7L314.3 67.72L362.7 19.32C387.7-5.678 428.3-5.678 453.3 19.32L492.7 58.75z"/></svg>
                            <svg width="12px" class=" fill-red-500 text-red-500 fill-current cursor-pointer transition ease-in-out duration-200 hover:fill-red-400 hover:text-red-400" onclick="openModal('remBlock')" fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"/></svg>
                        
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </section>
            </div>
          </div>
        </div>
        <div
          class="border-t rounded-t-none flex w-full justify-end rounded-lg dark:border-gray-700 bg-gray-50 dark:bg-gray-800  px-4 py-2 sm:px-6"
        >
          <div class="w-1/4 p-4">
            <a 
              onclick="openModal('addTask')"
              class="cursor-pointer flex items-center justify-center px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple w-full"
            >
              <span>Assign task</span>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div id="addTask" class="hidden fixed inset-0 z-30 items-end bg-black bg-opacity-50 sm:items-center sm:justify-center transition ease-in-out duration-300 opacity-0">

        <div  class="w-full px-6 py-4 overflow-hidden bg-white rounded-t-lg dark:bg-gray-800 sm:rounded-lg sm:m-4 sm:max-w-xl" role="dialog" id="editBlock">
            <!-- Remove header if you don't want a close icon. Use modal body to place modal tile. -->
            <header class="flex justify-end">
            <button class="inline-flex items-center justify-center w-6 h-6 text-gray-400 transition-colors duration-150 rounded dark:hover:text-gray-200 hover: hover:text-gray-700" aria-label="close" onclick="closeModal('addTask')">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" role="img" aria-hidden="true">
                <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" fill-rule="evenodd"></path>
                </svg>
            </button>
            </header>
            
            <div class="mt-4 mb-6">
                <p class="mb-2 text-lg font-semibold text-gray-700 dark:text-gray-300">
                    Add task
                </p>
                <div class="py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
                <label class="block text-sm">
                    <span class="text-gray-700 dark:text-gray-400">
                    Action
                    </span>
                    <select name="task" disabled class="block w-full mt-1 text-sm dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 form-select focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray">
                    <option>Plant</option>
                    </select>
                </label>

                <label class="block text-sm mt-4">
                    <span class="text-gray-700 dark:text-gray-400">
                    Worker
                    </span>
                    <select name="worker" disabled class="block w-full mt-1 text-sm dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 form-select focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray">
                    <option>Robot Name (id: 123, seeder)</option>
                    </select>
                </label>
                
                <label class="block text-sm mt-4">
                    <span class="text-gray-700 dark:text-gray-400">
                    Field
                    </span>
                    <select name="field" class="block w-full mt-1 text-sm dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 form-select focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    </select>
                </label>

                <label class="block text-sm mt-4">
                    <span class="text-gray-700 dark:text-gray-400">
                    Block
                    </span>
                    <select name="block" class="block w-full mt-1 text-sm dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 form-select focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    </select>
                </label>

                 <label class="block text-sm mt-4">
                    <span class="text-gray-700 dark:text-gray-400">
                    Crop
                    </span>
                    <select name="crop" class="block w-full mt-1 text-sm dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 form-select focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray">
                    <option>Pumpkin</option>
                    <option>Eggplant</option>
                    <option>Tomato</option>
                    </select>
                </label>

                <label class="block text-sm mt-4">
                    <span class="text-gray-700 dark:text-gray-400">
                    Start at:
                    </span>
                    <div class="relative">
                        <div class="flex absolute inset-y-0 right-0 mr-3 items-center pl-3 pointer-events-none">
                            <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                        </div>
                        <input datepicker name="date" type="date" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date">
                    </div>
                </label>

                </div>
            </div>
            <footer class="flex flex-col items-center justify-end px-6 py-3 -mx-6 -mb-4 space-y-4 sm:space-y-0 sm:space-x-6 sm:flex-row bg-gray-50 dark:bg-gray-800">
            <button onclick="closeModal('addTask')" class="w-full px-5 py-3 text-sm font-medium leading-5 text-white text-gray-700 transition-colors duration-150 border border-gray-300 rounded-lg dark:text-gray-400 sm:px-4 sm:py-2 sm:w-auto active:bg-transparent hover:border-gray-500 focus:border-gray-500 active:text-gray-500 focus:outline-none focus:shadow-outline-gray">
                Cancel
            </button>
            <button class="w-full px-5 py-3 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg sm:w-auto sm:px-4 sm:py-2 active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple">
                Done
            </button>
            </footer>
        </div>
    </div>

    <div id="remBlock" class="hidden fixed z-20 inset-0 overflow-y-auto items-center justify-center" aria-labelledby="modal-title" role="dialog" aria-modal="true">
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
                    <h3 class="text-lg leading-6 font-medium text-gray-900 dark:text-gray-200" id="modal-title">Remove task</h3>
                    <div class="mt-2">
                    <p class="text-sm text-gray-500 dark:text-gray-400">Are you sure you want to delete this task?</p>
                    </div>
                </div>
                </div>
            </div>
            <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse dark:bg-gray-900">
                <button type="button" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">Delete</button>
                <button  onclick="closeModal('remBlock')" type="button" class="flex  items-center justify-center px-4 py-2 text-sm font-medium leading-5 text-blue-600 transition-colors duration-150 border border-blue-600 rounded-lg active:bg-transparent hover:border-blue-500 hover:text-blue-500 focus:border-blue-500 focus:text-blue-500 active:text-blue-500 focus:outline-none focus:shadow-outline-gray">Cancel</button>
            </div>
            </div>
        </div>
    </div>


  </div>

</template>
