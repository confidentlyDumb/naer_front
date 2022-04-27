<template>
  <div class="container px-6 mx-auto grid">
    <h2 class="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
      Dashboard
    </h2>
    <!-- CTA -->
    <a
      class="flex items-center justify-between p-4 mb-8 text-sm font-semibold text-purple-100 bg-purple-600 rounded-lg shadow-md focus:outline-none focus:shadow-outline-purple"
      href="/tasks"
    >
      <div class="flex items-center">
        <svg
          class="w-5 h-5 mr-2 relative -mt-1"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 512"
        >
          <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
          <path
            d="M9.375 233.4C3.375 239.4 0 247.5 0 256v128c0 8.5 3.375 16.62 9.375 22.62S23.5 416 32 416h32V224H32C23.5 224 15.38 227.4 9.375 233.4zM464 96H352V32c0-17.62-14.38-32-32-32S288 14.38 288 32v64H176C131.8 96 96 131.8 96 176V448c0 35.38 28.62 64 64 64h320c35.38 0 64-28.62 64-64V176C544 131.8 508.3 96 464 96zM256 416H192v-32h64V416zM224 296C201.9 296 184 278.1 184 256S201.9 216 224 216S264 233.9 264 256S246.1 296 224 296zM352 416H288v-32h64V416zM448 416h-64v-32h64V416zM416 296c-22.12 0-40-17.88-40-40S393.9 216 416 216S456 233.9 456 256S438.1 296 416 296zM630.6 233.4C624.6 227.4 616.5 224 608 224h-32v192h32c8.5 0 16.62-3.375 22.62-9.375S640 392.5 640 384V256C640 247.5 636.6 239.4 630.6 233.4z"
          />
        </svg>
        <span>Task 12 has been finished.</span>
      </div>
      <span>Task status &RightArrow;</span>
    </a>

    <h3 class="my-6 text-xl font-semibold text-gray-700 dark:text-gray-200">
      Your fields
    </h3>

    <div class="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
      <!-- Card -->
      <div
        class="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800"
      >
        <div
          class="p-3 mr-4 text-green-500 bg-green-100 rounded-full dark:text-green-100 dark:bg-green-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 448 512"
          >
            <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
            <path
              d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z"
            />
          </svg>
        </div>
        <div>
          <p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
            Field 2
          </p>
          <p class="text-lg font-semibold text-gray-700 dark:text-gray-200">
            Pumpkin
          </p>
        </div>
      </div>
      <!-- Card -->
      <div
        class="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800"
      >
        <div
          class="p-3 mr-4 text-blue-500 bg-blue-100 rounded-full dark:text-blue-100 dark:bg-blue-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            class="w-5 h-5"
            fill="currentColor"
          >
            <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
            <path
              clip-rule="evenodd"
              d="M343.9 213.4L245.3 312L310.6 377.4C318.5 385.3 321.8 396.8 319.1 407.6C316.4 418.5 308.2 427.2 297.5 430.5L41.55 510.5C30.18 514.1 17.79 511 9.373 502.6C.9565 494.2-2.093 481.8 1.458 470.5L81.46 214.5C84.8 203.8 93.48 195.6 104.4 192.9C115.2 190.3 126.7 193.5 134.6 201.4L200 266.7L298.6 168.1C284.4 153.5 284.5 130.1 298.9 115.6L394.4 20.18C421.3-6.728 464.9-6.728 491.8 20.18C518.7 47.1 518.7 90.73 491.8 117.6L396.4 213.1C381.9 227.5 358.5 227.6 343.9 213.4V213.4z"
            />
          </svg>
        </div>
        <div>
          <p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
            Field 6
          </p>
          <p class="text-lg font-semibold text-gray-700 dark:text-gray-200">
            Tomato
          </p>
        </div>
      </div>
      <!-- Card -->
      <div
        class="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800"
      >
        <div
          class="p-3 mr-4 text-red-500 bg-orange-100 rounded-full dark:text-red-100 dark:bg-red-500"
        >
          <svg
            class="w-5 h-5"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
            <path
              d="M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z"
            />
          </svg>
        </div>
        <div>
          <p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
            Field 1
          </p>
          <p class="text-lg font-semibold text-gray-700 dark:text-gray-200">
            Pumpkin
          </p>
        </div>
      </div>
      <!-- Card -->
      <div
        class="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800"
      >
        <a href="/dashboard/fields"
          class="flex items-center justify-center px-10 py-4 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple w-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-4 h-4 mr-2 -ml-1"
            fill="currentColor"
            aria-hidden="true"
            viewBox="0 0 512 512"
          >
            <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
            <path
              d="M416.1 128.1C407.6 138.3 392.4 138.3 383 128.1C373.7 119.6 373.7 104.4 383 95.03L471 7.029C480.4-2.343 495.6-2.343 504.1 7.029C514.3 16.4 514.3 31.6 504.1 40.97L416.1 128.1zM327.2 230.1L295.3 261.1C323.8 264.7 351.5 277 373.4 298.8L395.1 321.5L373.4 344.1C335.9 381.6 275.1 381.6 237.6 344.1L225.4 331.9L193.5 363.8C221.1 366.5 249.7 378.8 271.5 400.7L294.2 423.3L271.5 445.9C234 483.4 173.3 483.4 135.8 445.9L123.5 433.7L54.63 502.6C42.13 515.1 21.87 515.1 9.372 502.6C-3.124 490.1-3.124 469.9 9.372 457.4L78.29 388.5L67.88 378C30.39 340.6 30.39 279.8 67.88 242.3L90.51 219.6L113.1 242.3C134.1 263.3 146.3 289.7 149.7 317.1L180.1 286.6L169.7 276.2C132.2 238.7 132.2 177.9 169.7 140.5L192.3 117.8L214.1 140.5C235.1 161.4 248.1 187.9 251.5 215.3L281.9 184.8L271.5 174.4C234 136.9 234 76.12 271.5 38.63L294.2 16L316.8 38.63C321.3 43.15 325.4 47.94 329.1 52.93L375 7.03C384.4-2.343 399.6-2.343 408.1 7.03C418.3 16.4 418.3 31.6 408.1 40.97L350.7 99.2C355.9 120.7 355.4 143.2 349.3 164.5C369.6 158.7 391.1 157.1 411.7 162.4L471 103C480.4 93.66 495.6 93.66 504.1 103C514.3 112.4 514.3 127.6 504.1 136.1L458.8 183.2C464.5 187.2 470 191.9 475.2 197L497.8 219.6L475.2 242.3C437.7 279.8 376.9 279.8 339.4 242.3L327.2 230.1z"
            />
          </svg>
          <span>View fields</span>
        </a>
      </div>
    </div>

    <h3 class="my-6 text-xl font-semibold text-gray-700 dark:text-gray-200">
      Recent activity
    </h3>

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
                  <div>
                    <p class="font-semibold">Block 12</p>
                    <p class="text-xs text-gray-600 dark:text-gray-400">
                      Field 2
                    </p>
                  </div>
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
                  <div>
                    <p class="font-semibold">Block 4</p>
                    <p class="text-xs text-gray-600 dark:text-gray-400">
                      Field 6
                    </p>
                  </div>
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
                  <div>
                    <p class="font-semibold">Block 1</p>
                    <p class="text-xs text-gray-600 dark:text-gray-400">
                      Field 1
                    </p>
                  </div>
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
                  <div>
                    <p class="font-semibold">Block 2</p>
                    <p class="text-xs text-gray-600 dark:text-gray-400">
                      Field 1
                    </p>
                  </div>
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
                  <div>
                    <p class="font-semibold">Block 2</p>
                    <p class="text-xs text-gray-600 dark:text-gray-400">
                      Field 9
                    </p>
                  </div>
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
                  <div>
                    <p class="font-semibold">Blcok 4</p>
                    <p class="text-xs text-gray-600 dark:text-gray-400">
                      Field 7
                    </p>
                  </div>
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
                  <div>
                    <p class="font-semibold">Block 2</p>
                    <p class="text-xs text-gray-600 dark:text-gray-400">
                      Field 3
                    </p>
                  </div>
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
                  <div>
                    <p class="font-semibold">Blcok 5</p>
                    <p class="text-xs text-gray-600 dark:text-gray-400">
                      Field 1
                    </p>
                  </div>
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
                  <div>
                    <p class="font-semibold">Block 10</p>
                    <p class="text-xs text-gray-600 dark:text-gray-400">
                      Field 2
                    </p>
                  </div>
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
          </tbody>
        </table>
      </div>
      <div
        class="border-t rounded-t-none flex w-full justify-end rounded-lg shadow-xs dark:border-gray-700 bg-gray-50 dark:bg-gray-800"
      >
        <div class="w-1/4 p-4">
          <a
            href="/dashboard/tasks"
            class="flex items-center justify-center px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple w-full"
          >
            <span>Activity log</span>
          </a>
        </div>
      </div>
    </div>

    <!-- Charts -->
    <h2 class="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
      Charts
    </h2>
    <div class="grid gap-6 mb-8 md:grid-cols-2">
      <div class="min-w-0 p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
        <h4 class="mb-4 font-semibold text-gray-800 dark:text-gray-300">
          Crops
        </h4>
        <canvas id="pie"></canvas>
        <div
          class="flex justify-center mt-4 space-x-3 text-sm text-gray-600 dark:text-gray-400"
        >
          <!-- Chart legend -->
          <div class="flex items-center">
            <span
              class="inline-block w-3 h-3 mr-1 bg-blue-500 rounded-full"
            ></span>
            <span>tomato</span>
          </div>
          <div class="flex items-center">
            <span
              class="inline-block w-3 h-3 mr-1 bg-teal-600 rounded-full"
            ></span>
            <span>Eggplant</span>
          </div>
          <div class="flex items-center">
            <span
              class="inline-block w-3 h-3 mr-1 bg-purple-600 rounded-full"
            ></span>
            <span>Pumpkin</span>
          </div>
        </div>
      </div>
      <div class="min-w-0 p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
        <h4 class="mb-4 font-semibold text-gray-800 dark:text-gray-300">
          Stats
        </h4>
        <canvas id="line"></canvas>
        <div
          class="flex justify-center mt-4 space-x-3 text-sm text-gray-600 dark:text-gray-400"
        >
          <!-- Chart legend -->
          <div class="flex items-center">
            <span
              class="inline-block w-3 h-3 mr-1 bg-teal-600 rounded-full"
            ></span>
            <span>Planted</span>
          </div>
          <div class="flex items-center">
            <span
              class="inline-block w-3 h-3 mr-1 bg-purple-600 rounded-full"
            ></span>
            <span>Harvested</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
