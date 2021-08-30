<template>
    <div>
        <!-- nav  -->
        <div class="h-4 bg-gray-800"></div>
        <nav class="bg-white shadow">
            <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div class="flex justify-between h-20">
                    <nuxt-link to="/" class="flex items-center text-3xl text-gray-800 uppercase font-marker hover:text-gray-600">PJ MANNING</nuxt-link>
                    <div class="flex">
                        <div class="hidden sm:ml-6 sm:flex sm:mr-auto sm:space-x-8">
                            <!-- Current: "border-blue-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" -->
                            <a v-if="$route.path === '/'" href="/#projects" v-scroll-to="'#projects'" class="inline-flex items-center px-1 pt-1 font-medium text-gray-800 uppercase hover:text-gray-600"> Projects </a>
                            <nuxt-link v-else to="/#projects" v-scroll-to="'#projects'" class="inline-flex items-center px-1 pt-1 font-medium text-gray-800 uppercase hover:text-gray-600"> Projects </nuxt-link>
                            <a v-if="$route.path === '/'" href="/#about" v-scroll-to="'#about'" class="inline-flex items-center px-1 pt-1 font-medium text-gray-800 uppercase hover:text-gray-600"> About </a>
                            <nuxt-link v-else to="/#about" v-scroll-to="'#about'" class="inline-flex items-center px-1 pt-1 font-medium text-gray-800 uppercase hover:text-gray-600"> About </nuxt-link>
                            <nuxt-link to="/blog" class="inline-flex items-center px-1 pt-1 font-medium text-gray-800 uppercase hover:text-gray-600"> Blog </nuxt-link>
                            <a href="https://www.getrevue.co/profile/pjmanning" target="_blank" class="inline-flex items-center px-1 pt-1 font-medium text-gray-800 uppercase hover:text-gray-600"> Newsletter </a>
                            <a v-if="$route.path === '/'" href="/#contact" v-scroll-to="'#contact'" class="inline-flex items-center px-1 pt-1 font-medium text-gray-800 uppercase hover:text-gray-600"> Contact </a>
                            <nuxt-link v-else to="/#contact" v-scroll-to="'#contact'" class="inline-flex items-center px-1 pt-1 font-medium text-gray-800 uppercase hover:text-gray-600"> Contact </nuxt-link>
                        </div>
                    </div>
                    <div class="flex items-center -mr-2 sm:hidden">
                        <!-- Mobile menu button -->
                        <button @click="isMenuOpen = !isMenuOpen" class="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500" aria-expanded="false">
                            <span class="sr-only">Open main menu</span>
                            <svg v-if="!isMenuOpen" class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                            <svg v-else class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <div class="sm:hidden" :class="isMenuOpen ? 'block' : 'hidden'">
                <div class="pt-2 pb-3 space-y-1">
                    <!-- Current: "bg-blue-50 border-blue-500 text-blue-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" -->
                    <a v-if="$route.path === '/'" href="/#projects" v-scroll-to="'#projects'" @click="isMenuOpen = !isMenuOpen" class="block py-2 pl-3 pr-4 text-base font-medium text-gray-500 border-l-4 border-transparent hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700">Projects</a>
                    <nuxt-link v-else to="/#projects" v-scroll-to="'#projects'" class="block py-2 pl-3 pr-4 text-base font-medium text-gray-500 border-l-4 border-transparent hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700">Projects</nuxt-link>
                    <a v-if="$route.path === '/'" href="/#about" v-scroll-to="'#about'" @click="isMenuOpen = !isMenuOpen" class="block py-2 pl-3 pr-4 text-base font-medium text-gray-500 border-l-4 border-transparent hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700">About</a>
                    <nuxt-link v-else to="/#about" v-scroll-to="'#about'" class="block py-2 pl-3 pr-4 text-base font-medium text-gray-500 border-l-4 border-transparent hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700">About</nuxt-link>
                    <nuxt-link to="/blog" @click.native="isMenuOpen = !isMenuOpen" class="block py-2 pl-3 pr-4 text-base font-medium text-gray-500 border-l-4 border-transparent hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700">Blog</nuxt-link>
                    <a href="https://www.getrevue.co/profile/pjmanning" target="_blank" @click="isMenuOpen = !isMenuOpen" class="block py-2 pl-3 pr-4 text-base font-medium text-gray-500 border-l-4 border-transparent hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700">Newsletter</a>
                    <a v-if="$route.path === '/'" href="/#contact" v-scroll-to="'#contact'" @click="isMenuOpen = !isMenuOpen" class="block py-2 pl-3 pr-4 text-base font-medium text-gray-500 border-l-4 border-transparent hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700">Contact</a>
                    <nuxt-link v-else to="/#contact" v-scroll-to="'#contact'" class="block py-2 pl-3 pr-4 text-base font-medium text-gray-500 border-l-4 border-transparent hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700">Contact</nuxt-link>
                </div>
            </div>
        </nav>
        <!-- end nav  -->
    </div>
</template>

<script>
export default {
    data() {
        return {
            isMenuOpen: false,
        }
    },
}
</script>

<style></style>
