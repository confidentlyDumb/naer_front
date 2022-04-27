<template>
  <div class="container px-6 mx-auto grid">
    <h2 class="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
      Recent activity
    </h2>

    <!-- New Table -->
    <div class="w-full overflow-hidden rounded-lg shadow-xs">
      <div class="w-full overflow-x-auto">
        <table class="w-full whitespace-no-wrap">
          <thead>
            <tr
              class="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800"
            >
              <th class="px-4 py-3">Location</th>
              <th class="px-4 py-3">Task</th>
              <th class="px-4 py-3">Status</th>
              <th class="px-4 py-3">Date</th>
            </tr>
          </thead>
          <tbody
            class="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800"
          >
            <tr class="text-gray-700 dark:text-gray-400">
              <td class="px-4 py-3">
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
                    d="M343.9 213.4L245.3 312L310.6 377.4C318.5 385.3 321.8 396.8 319.1 407.6C316.4 418.5 308.2 427.2 297.5 430.5L41.55 510.5C30.18 514.1 17.79 511 9.373 502.6C.9565 494.2-2.093 481.8 1.458 470.5L81.46 214.5C84.8 203.8 93.48 195.6 104.4 192.9C115.2 190.3 126.7 193.5 134.6 201.4L200 266.7L298.6 168.1C284.4 153.5 284.5 130.1 298.9 115.6L394.4 20.18C421.3-6.728 464.9-6.728 491.8 20.18C518.7 47.1 518.7 90.73 491.8 117.6L396.4 213.1C381.9 227.5 358.5 227.6 343.9 213.4V213.4z"
                  />
                </svg>
                Weed
              </td>
              <td class="px-4 py-3 text-xs">
                <span
                  class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100"
                >
                  Finished
                </span>
              </td>
              <td class="px-4 py-3 text-sm">12/06/2022</td>
            </tr>

            <tr class="text-gray-700 dark:text-gray-400">
              <td class="px-4 py-3">
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
                Plant (tomato)
              </td>
              <td class="px-4 py-3 text-xs">
                <span
                  class="px-2 py-1 font-semibold leading-tight text-blue-700 bg-blue-100 rounded-full dark:text-white dark:bg-blue-600"
                >
                  In progress
                </span>
              </td>
              <td class="px-4 py-3 text-sm">12/06/2022</td>
            </tr>

            <tr class="text-gray-700 dark:text-gray-400">
              <td class="px-4 py-3">
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
                  viewBox="0 0 384 512"
                >
                  <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                  <path
                    d="M16 319.1C16 245.9 118.3 89.43 166.9 19.3C179.2 1.585 204.8 1.585 217.1 19.3C265.7 89.43 368 245.9 368 319.1C368 417.2 289.2 496 192 496C94.8 496 16 417.2 16 319.1zM112 319.1C112 311.2 104.8 303.1 96 303.1C87.16 303.1 80 311.2 80 319.1C80 381.9 130.1 432 192 432C200.8 432 208 424.8 208 416C208 407.2 200.8 400 192 400C147.8 400 112 364.2 112 319.1z"
                  />
                </svg>
                Water
              </td>
              <td class="px-4 py-3 text-xs">
                <span
                  class="px-2 py-1 font-semibold leading-tight text-red-700 bg-red-100 rounded-full dark:text-red-100 dark:bg-red-700"
                >
                  Problem
                </span>
              </td>
              <td class="px-4 py-3 text-sm">11/06/2022</td>
            </tr>

            <tr class="text-gray-700 dark:text-gray-400">
              <td class="px-4 py-3">
                <div class="flex items-center text-sm">
                  <a href="/dashboard/field/456">
                    <p class="font-semibold">Block 2</p>
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
                  viewBox="0 0 384 512"
                >
                  <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                  <path
                    d="M16 319.1C16 245.9 118.3 89.43 166.9 19.3C179.2 1.585 204.8 1.585 217.1 19.3C265.7 89.43 368 245.9 368 319.1C368 417.2 289.2 496 192 496C94.8 496 16 417.2 16 319.1zM112 319.1C112 311.2 104.8 303.1 96 303.1C87.16 303.1 80 311.2 80 319.1C80 381.9 130.1 432 192 432C200.8 432 208 424.8 208 416C208 407.2 200.8 400 192 400C147.8 400 112 364.2 112 319.1z"
                  />
                </svg>
                Water
              </td>
              <td class="px-4 py-3 text-xs">
                <span
                  class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100"
                >
                  Finished
                </span>
              </td>
              <td class="px-4 py-3 text-sm">11/06/2022</td>
            </tr>

            <tr class="text-gray-700 dark:text-gray-400">
              <td class="px-4 py-3">
                <div class="flex items-center text-sm">
                  <a href="/dashboard/field/456">
                    <p class="font-semibold">Block 2</p>
                    <p class="text-xs text-gray-600 dark:text-gray-400">
                      Field 9
                    </p>
                  </a>
                </div>
              </td>
              <td class="px-4 flex py-3 text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-3 h-3 mr-2 mt-1"
                  fill="currentColor"
                  viewBox="0 0 384 512"
                >
                  <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                  <path
                    d="M16 319.1C16 245.9 118.3 89.43 166.9 19.3C179.2 1.585 204.8 1.585 217.1 19.3C265.7 89.43 368 245.9 368 319.1C368 417.2 289.2 496 192 496C94.8 496 16 417.2 16 319.1zM112 319.1C112 311.2 104.8 303.1 96 303.1C87.16 303.1 80 311.2 80 319.1C80 381.9 130.1 432 192 432C200.8 432 208 424.8 208 416C208 407.2 200.8 400 192 400C147.8 400 112 364.2 112 319.1z"
                  />
                </svg>
                Water
              </td>
              <td class="px-4 py-3 text-xs">
                <span
                  class="px-2 py-1 font-semibold leading-tight text-yellow-500 bg-yellow-100 rounded-full dark:text-gray-100 dark:bg-yellow-500"
                >
                  Paused
                </span>
              </td>
              <td class="px-4 py-3 text-sm">11/06/2022</td>
            </tr>

            <tr class="text-gray-700 dark:text-gray-400">
              <td class="px-4 py-3">
                <div class="flex items-center text-sm">
                  <a href="/dashboard/field/456">
                    <p class="font-semibold">Blcok 4</p>
                    <p class="text-xs text-gray-600 dark:text-gray-400">
                      Field 7
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
                Plant (eggplant)
              </td>
              <td class="px-4 py-3 text-xs">
                <span
                  class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100"
                >
                  Finished
                </span>
              </td>
              <td class="px-4 py-3 text-sm">10/06/2022</td>
            </tr>

            <tr class="text-gray-700 dark:text-gray-400">
              <td class="px-4 py-3">
                <div class="flex items-center text-sm">
                  <a href="/dashboard/field/456">
                    <p class="font-semibold">Block 2</p>
                    <p class="text-xs text-gray-600 dark:text-gray-400">
                      Filed 3
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
                Plant (pumpkin)
              </td>
              <td class="px-4 py-3 text-xs">
                <span
                  class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100"
                >
                  Finished
                </span>
              </td>
              <td class="px-4 py-3 text-sm">10/06/2022</td>
            </tr>

            <tr class="text-gray-700 dark:text-gray-400">
              <td class="px-4 py-3">
                <div class="flex items-center text-sm">
                  <a href="/dashboard/field/456">
                    <p class="font-semibold">Blcok 5</p>
                    <p class="text-xs text-gray-600 dark:text-gray-400">
                      Field 1
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
                    d="M343.9 213.4L245.3 312L310.6 377.4C318.5 385.3 321.8 396.8 319.1 407.6C316.4 418.5 308.2 427.2 297.5 430.5L41.55 510.5C30.18 514.1 17.79 511 9.373 502.6C.9565 494.2-2.093 481.8 1.458 470.5L81.46 214.5C84.8 203.8 93.48 195.6 104.4 192.9C115.2 190.3 126.7 193.5 134.6 201.4L200 266.7L298.6 168.1C284.4 153.5 284.5 130.1 298.9 115.6L394.4 20.18C421.3-6.728 464.9-6.728 491.8 20.18C518.7 47.1 518.7 90.73 491.8 117.6L396.4 213.1C381.9 227.5 358.5 227.6 343.9 213.4V213.4z"
                  />
                </svg>
                Weed
              </td>
              <td class="px-4 py-3 text-xs">
                <span
                  class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100"
                >
                  Finished
                </span>
              </td>
              <td class="px-4 py-3 text-sm">10/06/2022</td>
            </tr>

            <tr class="text-gray-700 dark:text-gray-400">
              <td class="px-4 py-3">
                <div class="flex items-center text-sm">
                  <a href="/dashboard/field/456">
                    <p class="font-semibold">Block 10</p>
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
                    d="M343.9 213.4L245.3 312L310.6 377.4C318.5 385.3 321.8 396.8 319.1 407.6C316.4 418.5 308.2 427.2 297.5 430.5L41.55 510.5C30.18 514.1 17.79 511 9.373 502.6C.9565 494.2-2.093 481.8 1.458 470.5L81.46 214.5C84.8 203.8 93.48 195.6 104.4 192.9C115.2 190.3 126.7 193.5 134.6 201.4L200 266.7L298.6 168.1C284.4 153.5 284.5 130.1 298.9 115.6L394.4 20.18C421.3-6.728 464.9-6.728 491.8 20.18C518.7 47.1 518.7 90.73 491.8 117.6L396.4 213.1C381.9 227.5 358.5 227.6 343.9 213.4V213.4z"
                  />
                </svg>
                Weed
              </td>
              <td class="px-4 py-3 text-xs">
                <span
                  class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100"
                >
                  Finished
                </span>
              </td>
              <td class="px-4 py-3 text-sm">09/06/2022</td>
            </tr>

            <tr class="text-gray-700 dark:text-gray-400">
              <td class="px-4 py-3">
                <div class="flex items-center text-sm">
                  <a href="/dashboard/field/456">
                    <p class="font-semibold">Block 1</p>
                    <p class="text-xs text-gray-600 dark:text-gray-400">
                      Field 3
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
                    d="M343.9 213.4L245.3 312L310.6 377.4C318.5 385.3 321.8 396.8 319.1 407.6C316.4 418.5 308.2 427.2 297.5 430.5L41.55 510.5C30.18 514.1 17.79 511 9.373 502.6C.9565 494.2-2.093 481.8 1.458 470.5L81.46 214.5C84.8 203.8 93.48 195.6 104.4 192.9C115.2 190.3 126.7 193.5 134.6 201.4L200 266.7L298.6 168.1C284.4 153.5 284.5 130.1 298.9 115.6L394.4 20.18C421.3-6.728 464.9-6.728 491.8 20.18C518.7 47.1 518.7 90.73 491.8 117.6L396.4 213.1C381.9 227.5 358.5 227.6 343.9 213.4V213.4z"
                  />
                </svg>
                Weed
              </td>
              <td class="px-4 py-3 text-xs">
                <span
                  class="px-2 py-1 font-semibold leading-tight text-blue-700 bg-blue-100 rounded-full dark:bg-blue-700 dark:text-blue-100"
                >
                  In progress
                </span>
              </td>
              <td class="px-4 py-3 text-sm">09/06/2022</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div
        class="grid px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase border-t dark:border-gray-700 bg-gray-50 sm:grid-cols-9 dark:text-gray-400 dark:bg-gray-800"
      >
        <span class="flex items-center col-span-3"> Showing 21-30 of 100 </span>
        <span class="col-span-2"></span>
        <!-- Pagination -->
        <span class="flex col-span-4 mt-2 sm:mt-auto sm:justify-end">
          <nav aria-label="Table navigation">
            <ul class="inline-flex items-center">
              <li>
                <button
                  class="px-3 py-1 rounded-md rounded-l-lg focus:outline-none focus:shadow-outline-purple"
                  aria-label="Previous"
                >
                  <svg
                    aria-hidden="true"
                    class="w-4 h-4 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </li>
              <li>
                <button
                  class="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple"
                >
                  1
                </button>
              </li>
              <li>
                <button
                  class="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple"
                >
                  2
                </button>
              </li>
              <li>
                <button
                  class="px-3 py-1 text-white transition-colors duration-150 bg-purple-600 border border-r-0 border-purple-600 rounded-md focus:outline-none focus:shadow-outline-purple"
                >
                  3
                </button>
              </li>
              <li>
                <button
                  class="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple"
                >
                  4
                </button>
              </li>
              <li>
                <span class="px-3 py-1">...</span>
              </li>
              <li>
                <button
                  class="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple"
                >
                  8
                </button>
              </li>
              <li>
                <button
                  class="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple"
                >
                  9
                </button>
              </li>
              <li>
                <button
                  class="px-3 py-1 rounded-md rounded-r-lg focus:outline-none focus:shadow-outline-purple"
                  aria-label="Next"
                >
                  <svg
                    class="w-4 h-4 fill-current"
                    aria-hidden="true"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </li>
            </ul>
          </nav>
        </span>
      </div>
    </div>
  </div>
</template>
