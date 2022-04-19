<template>
  <div class="flex flex-wrap">
    <div class="w-full sm:w-6/12 md:w-4/12 px-4">
      <div class="relative inline-flex align-middle w-full">
        <button
          class="text-white text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 bg-indigo-500 ease-linear transition-all duration-150 font-normal capitalize w-full"
          type="button"
          v-on:click="toggleDropdown()"
          ref="btnDropdownRef"
        >
          indigo Dropdown
        </button>
        <div
          v-bind:class="{
            hidden: !dropdownPopoverShow,
            block: dropdownPopoverShow,
          }"
          class="bg-indigo-500 text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1"
          style="min-width: 12rem"
          ref="popoverDropdownRef"
        >
          <a
            href="#pablo"
            class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-white"
          >
            Action
          </a>
          <a
            href="#pablo"
            class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-white"
          >
            Another action
          </a>
          <a
            href="#pablo"
            class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-white"
          >
            Something else here
          </a>
          <div
            class="h-0 my-2 border border-solid border-t-0 border-slate-800 opacity-25"
          ></div>
          <a
            href="#pablo"
            class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-white"
          >
            Seprated link
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { createPopper } from "@popperjs/core";

export default {
  name: "dropdown",
  data() {
    return {
      dropdownPopoverShow: false,
    };
  },
  methods: {
    toggleDropdown: function () {
      if (this.dropdownPopoverShow) {
        this.dropdownPopoverShow = false;
      } else {
        this.dropdownPopoverShow = true;
        createPopper(this.$refs.btnDropdownRef, this.$refs.popoverDropdownRef, {
          placement: "bottom-start",
        });
      }
    },
  },
};
</script>
