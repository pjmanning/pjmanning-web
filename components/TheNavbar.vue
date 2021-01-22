<template>
    <div class="relative bg-gray-50">
        <div class="relative mb-6 bg-white shadow">
            <div class="px-4 mx-auto max-w-7xl sm:px-6">
                <div class="flex items-center justify-between py-6 md:justify-start md:space-x-10">
                    <div class="flex flex-1 w-0">
                        <nuxt-link to="/" class="inline-flex">
                            <img class="w-auto h-12" src="~/assets/images/td-logo-circle.png" alt="Workflow" />
                        </nuxt-link>
                    </div>
                    <div class="-my-2 -mr-2 md:hidden">
                        <button type="button" class="inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500" @click="menuOpen = true">
                            <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                    <nav class="hidden space-x-10 md:flex">
                        <nuxt-link to="/digital-nomad-jobs" class="inline-flex items-center space-x-2 text-base font-medium leading-6 text-gray-500 transition duration-150 ease-in-out hover:text-gray-900"> Jobs </nuxt-link>
                        <nuxt-link to="/travel-developer-toolkit" class="inline-flex items-center space-x-2 text-base font-medium leading-6 text-gray-500 transition duration-150 ease-in-out hover:text-gray-900"> Tools </nuxt-link>
                        <nuxt-link to="/digital-nomad-blog" class="text-base font-medium leading-6 text-gray-500 transition duration-150 ease-in-out hover:text-gray-900"> Blog </nuxt-link>
                    </nav>
                    <div class="items-center justify-end hidden space-x-8 md:flex md:flex-1 lg:w-0">
                        <a href="https://sso.teachable.com/secure/36980/users/sign_in?clean_login=true&reset_purchase_session=1" target="_blank" class="text-base font-medium leading-6 text-gray-500 whitespace-no-wrap transition duration-150 ease-in-out hover:text-gray-900"> Log in </a>
                        <span class="inline-flex rounded-md shadow-sm">
                            <a href="https://www.udemy.com/the-complete-travel-developer-course-become-a-digital-nomad/" target="_blank" class="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap transition duration-150 ease-in-out border border-transparent rounded-md bg-secondary hover:bg-primary focus:outline-none"> Enroll Now </a>
                        </span>
                    </div>
                </div>
            </div>

            <transition enter-active-class="duration-200 ease-out" enter-class="scale-95 opacity-0" enter-to-class="scale-100 opacity-100" leave-active-class="duration-100 ease-in" leave-class="scale-100 opacity-100" leave-to-class="scale-95 opacity-0">
                <div v-show="menuOpen" class="absolute inset-x-0 top-0 z-10 p-2 transition origin-top-right transform md:hidden">
                    <div class="rounded-lg shadow-lg">
                        <div class="bg-white divide-y-2 rounded-lg shadow-xs divide-gray-50">
                            <div class="px-5 pt-5 pb-6 space-y-6">
                                <div class="flex items-center justify-between">
                                    <nuxt-link to="/">
                                        <img class="w-auto h-12" src="~/assets/images/td-logo-circle.png" alt="travel developer" />
                                    </nuxt-link>
                                    <div class="-mr-2">
                                        <button type="button" class="inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500" @click="menuOpen = false">
                                            <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div>
                                    <nav class="grid row-gap-8">
                                        <nuxt-link to="/digital-nomad-jobs" class="flex items-center p-3 -m-3 space-x-3 transition duration-150 ease-in-out rounded-md hover:bg-gray-50">
                                            <svg class="flex-shrink-0 w-6 h-6 text-secondary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                            <div class="text-base font-medium leading-6 text-gray-900">Jobs</div>
                                        </nuxt-link>
                                        <nuxt-link to="/travel-developer-toolkit" class="flex items-center p-3 -m-3 space-x-3 transition duration-150 ease-in-out rounded-md hover:bg-gray-50">
                                            <svg class="flex-shrink-0 w-6 h-6 text-secondary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                            </svg>
                                            <div class="text-base font-medium leading-6 text-gray-900">Tools</div>
                                        </nuxt-link>
                                        <nuxt-link to="/digital-nomad-blog" class="flex items-center p-3 -m-3 space-x-3 transition duration-150 ease-in-out rounded-md hover:bg-gray-50">
                                            <svg class="flex-shrink-0 w-6 h-6 text-secondary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                                            </svg>
                                            <div class="text-base font-medium leading-6 text-gray-900">Blog</div>
                                        </nuxt-link>
                                    </nav>
                                </div>
                            </div>
                            <div class="px-5 py-6 space-y-6">
                                <div class="space-y-6">
                                    <span class="flex w-full rounded-md shadow-sm">
                                        <a href="https://www.udemy.com/the-complete-travel-developer-course-become-a-digital-nomad/" target="_blank" class="flex items-center justify-center w-full px-4 py-2 text-base font-medium leading-6 text-white transition duration-150 ease-in-out border border-transparent rounded-md bg-secondary hover:bg-primary focus:outline-none"> Enroll Now </a>
                                    </span>
                                    <p class="text-base font-medium leading-6 text-center text-gray-500">
                                        Legacy customer?
                                        <a href="https://sso.teachable.com/secure/36980/users/sign_in?clean_login=true&reset_purchase_session=1" target="_blank" class="transition duration-150 ease-in-out text-secondary hover:text-primary"> Log in </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            menuOpen: false,
        }
    },
}
</script>

<style></style>
