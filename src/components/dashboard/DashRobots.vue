<template>
  <div class="container px-6 mx-auto">
    <h2 class="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
      Robots
    </h2>
    <div>
      <div
        class="flex text-base text-left transform transition md:inline-block md:my-8 w-full 2xl:w-1/2"
      >
      <span class="mx-4 mt-14 mb-8 sm:mx-6 sm:mt-8 md:m-6 lg:m-8 absolute right-0 top-0 z-10 px-2 py-1 font-semibold leading-tight text-blue-700 bg-blue-100 rounded-full dark:text-white dark:bg-blue-600"> Working </span>
        <div
          class="w-full relative flex items-center bg-white dark:bg-gray-800 px-4 pt-14 pb-8 overflow-hidden shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8"
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
                  <span class="text-sm text-gray-500">(55.714378453, 12.286777907)</span>
                </p>
                <p class="mb-3 text-lg text-gray-900 dark:text-gray-400">
                  Current task: plant (eggplant)<br>
                  <span class="text-sm text-gray-500">Time remaining: 2 hrs, 27 min</span>
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
                          <a href="/dashboard/field/?id=1">
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
                        Plant (strawberry)
                      </td>
                      <td class="px-4 py-3 text-sm">11/06/2022</td>
                    </tr>
                    <tr class="text-gray-700 dark:text-gray-400">
                      <td class="pr-4 py-3">
                        <div class="flex items-center text-sm">
                          <a href="/dashboard/field/?id=1">
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
                        Plant (eggplant)
                      </td>
                      <td class="px-4 py-3 text-sm">12/06/2022</td>
                    </tr>

                    <tr class="text-gray-700 dark:text-gray-400">
                      <td class="pr-4 py-3">
                        <div class="flex items-center text-sm">
                          <a href="/dashboard/field/?id=1">
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
                        Plant (tomato)
                      </td>
                      <td class="px-4 py-3 text-sm">12/06/2022</td>
                    </tr>
                  </tbody>
                </table>
              </section>
            </div>
          </div>
        </div>
        <div
          class="border-t rounded-t-none flex w-full justify-end rounded-lg shadow-xs dark:border-gray-700 bg-gray-50 dark:bg-gray-800"
        >
          <div class="w-1/4 p-4">
            <a
              href="/dashboard/tasks"
              class="flex items-center justify-center px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple w-full"
            >
              <span>Edit tasks</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
