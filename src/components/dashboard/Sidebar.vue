<template>
  <aside
    class="z-20 hidden w-64 overflow-y-auto bg-white dark:bg-gray-800 md:block flex-shrink-0 "
  >
    <div class="py-4 text-gray-500 dark:text-gray-400" id="sidebar">
      <a
        class="ml-6 text-lg font-bold text-gray-800 dark:text-gray-200"
        href="#"
      >
        Nær
      </a>
      <ul class="mt-6 pt-px">
        <li class="relative px-6 py-3 mt-px border-t dark:border-gray-700 border-gray-200">
          <span
            class="absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg"
            aria-hidden="true" id="indicator"
          ></span>
          <a
            class="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
            href="/dashboard"
          >
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              ></path>
            </svg>
            <span class="ml-4">Dashboard</span>
          </a>
        </li>
      </ul>
      <ul>
        <li class="relative px-6 py-3">
          <a
            class="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
            href="/dashboard/fields"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5"
              aria-hidden="true"
              fill="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 512 512"
            >
              <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
              <path
                d="M64 95.1H0c0 123.8 100.3 224 224 224v128C224 465.6 238.4 480 255.1 480S288 465.6 288 448V320C288 196.3 187.7 95.1 64 95.1zM448 32c-84.25 0-157.4 46.5-195.8 115.3c27.75 30.12 48.25 66.88 59 107.5C424 243.1 512 147.9 512 32H448z"
              />
            </svg>
            <span class="ml-4">Fields</span>
          </a>
        </li>
        <li class="relative px-6 py-3">
          <a
            class="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
            href="/dashboard/tasks"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5"
              aria-hidden="true"
              fill="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 320 512"
            >
              <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
              <path
                d="M318.4 304.5c-3.531 9.344-12.47 15.52-22.45 15.52h-105l45.15 94.82c9.496 19.94 1.031 43.8-18.91 53.31c-19.95 9.504-43.82 1.035-53.32-18.91L117.3 351.3l-75 88.25c-4.641 5.469-11.37 8.453-18.28 8.453c-2.781 0-5.578-.4844-8.281-1.469C6.281 443.1 0 434.1 0 423.1V56.02c0-9.438 5.531-18.03 14.12-21.91C22.75 30.26 32.83 31.77 39.87 37.99l271.1 240C319.4 284.6 321.1 295.1 318.4 304.5z"
              />
            </svg>

            <span class="ml-4">Tasks</span>
          </a>
        </li>
      </ul>
      <div class="px-6 my-6">
        <button
          class="flex items-center justify-between w-full px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
        >
          Add new
          <span class="ml-2" aria-hidden="true">+</span>
        </button>
      </div>
    </div>
  </aside>
  <!-- Mobile sidebar -->
  <!-- Backdrop -->
  <aside
    class="fixed inset-y-0 z-20 flex-shrink-0 w-64 mt-16 overflow-y-auto bg-white dark:bg-gray-800 md:hidden"
    x-show="isSideMenuOpen"
    x-transition:enter="transition ease-in-out duration-150"
    x-transition:enter-start="opacity-0 transform -translate-x-20"
    x-transition:enter-end="opacity-100"
    x-transition:leave="transition ease-in-out duration-150"
    x-transition:leave-start="opacity-100"
    x-transition:leave-end="opacity-0 transform -translate-x-20"
    @click.away="closeSideMenu"
    @keydown.escape="closeSideMenu"
  >
    <div class="py-4 text-gray-500 dark:text-gray-400">
      <a
        class="ml-6 text-lg font-bold text-gray-800 dark:text-gray-200"
        href="#"
      >
        Nær
      </a>
      <ul class="mt-6">
        <li class="relative px-6 py-3">
          <span
            class="absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg"
            aria-hidden="true"
          ></span>
          <a
            class="inline-flex items-center w-full text-sm font-semibold text-gray-800 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 dark:text-gray-100"
            href="index.html"
          >
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              ></path>
            </svg>
            <span class="ml-4">Dashboard</span>
          </a>
        </li>
      </ul>
      <ul>
        <li class="relative px-6 py-3">
          <a
            class="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
            href="forms.html"
          >
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
              ></path>
            </svg>
            <span class="ml-4">Fields</span>
          </a>
        </li>
        <li class="relative px-6 py-3">
          <a
            class="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
            href="cards.html"
          >
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
              ></path>
            </svg>
            <span class="ml-4">Tasks</span>
          </a>
        </li>
      </ul>
      <div class="px-6 my-6">
        <button
          class="flex items-center justify-between px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
        >
          Create account
          <span class="ml-2" aria-hidden="true">+</span>
        </button>
      </div>
    </div>
  </aside>
</template>
