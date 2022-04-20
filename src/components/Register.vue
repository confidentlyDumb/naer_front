
<template>

    <div class="h-32 md:h-auto md:w-1/2">
        <img
            aria-hidden="true"
            class=" object-cover w-full h-full block"
            src="https://images.unsplash.com/photo-1528955875280-5950644ae697?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2942&q=80"
            alt="Office"
        />
        </div>
        <div class="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
        <form @submit="regData" class="w-full">
            <h1 class="text-4xl w-100 text-right mb-4 font-bold text-gray-300 dark:text-gray-600">Nær</h1>

            <h1
            class="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200"
            >
            Create account
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
                type="text"
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
            <label class="block mt-4 text-sm">
            <span class="text-gray-700 dark:text-gray-400">
                Confirm password
            </span>
            <input
                class="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                placeholder="***************"
                type="password"
            />
            </label>

            <div class="flex mt-2 mb-6 text-sm">
            <label class="flex items-center dark:text-gray-400">
                <input
                type="checkbox"
                class="text-purple-600 form-checkbox focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray"
                />
                <span class="ml-2">
                I agree to the
                <span class="underline">privacy policy</span>
                </span>
            </label>
            </div>

            <button type="submit"
                class="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
            >
            Create account
            </button>

            <p class="mt-4">
            <a
                class="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
                href="/"
            >
                Already have an account? Login
            </a>
            </p>
        </form>
    </div>
</template>


<script>
    import axios from "axios";

    export default {
        name: "Register",
        data() {
            return {
                name: null,
                email: null,
                password: null,
                password_confirmation: null,
                errors: {},
                success: false,
                loading: false,
                message: "",
                // token: "{{ $token }}",
            };
        },
        methods: {
            regData(e) {
                this.loading = true;
                axios
                    .post("http://localhost:9000/api/auth/registerUser", {
                        name: this.name,
                        email: this.email,
                        password: this.password,
                        role_id: 1,
                        password_confirmation: this.password_confirmation, // TODO: verify match
                        // token: this.token,                              // server-side.
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