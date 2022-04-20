<template>
  <div class="h-32 md:h-auto md:w-1/2">
    <img
      aria-hidden="true"
      class="object-cover w-full h-full block"
      src="https://images.unsplash.com/photo-1475082622110-f0e90ff503ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
      alt="Office"
    />
  </div>
  <div class="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
    <form class="w-full" @submit="loginData" >
      <h1
        class="text-4xl w-100 text-right mb-4 font-bold text-gray-300 dark:text-gray-600"
      >
        Nær
      </h1>
      <h1 class="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
        Login
      </h1>
      <label class="block text-sm">
        <span class="text-gray-700 dark:text-gray-400">Name</span>
        <input
          class="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
          placeholder="Jane Doe"
          type="text"
          name="name"
          v-model="name"
        />
      </label>
      <label class="block mt-4 text-sm">
        <span class="text-gray-700 dark:text-gray-400">Email</span>
        <input
          class="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
          placeholder="JaneDoe@mail.mail"
          type="email"
          name="email"
          v-model="email"
        />
      </label>
      <label class="block mt-4 text-sm">
        <span class="text-gray-700 dark:text-gray-400">Password</span>
        <input
          class="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
          placeholder="***************"
          type="password"
          name="password"
          v-model="password"
        />
      </label>

      <!-- You should use a button here, as the anchor is only used for the example  -->
      <button type="submit"
        class="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
      >
      Log in
      </button>

      <p class="mt-4">
        <a
          class="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
          href="/forgot-password"
        >
          Forgot your password?
        </a>
      </p>
      <p class="mt-1">
        <a
          class="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
          href="/register"
        >
          Create account
        </a>
      </p>
    </form>
  </div>
  
</template>

<script>

    import axios from "axios";

    export default {
        name: "Login",
        data() {
            return {
                name: null,
                email: null,
                password: null,
                errors: {},
                success: false,
                loading: false,
                message: "",
                // token: "{{ $token }}",
            };
        },
        methods: {
            loginData(e) {
                this.loading = true;
                
                axios
                    .post("http://localhost:9000/api/auth/login", {
                        name: this.name,
                        email: this.email,
                        password: this.password,
                        role_id: 1,
                        // token: this.token,
                    })
                    .then((response) => {
                        this.loading = false;
                        this.success = true;
                        this.message = response.data.message;
                    })
                    .catch((error) => {
                        this.loading = false;

                        showModal(error);
                    });

                e.preventDefault();
            },
        },
    };
</script>