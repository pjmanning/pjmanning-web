<template>
    <div>
        <!-- nav  -->
        <div class="h-4 bg-gray-800"></div>
        <nav class="bg-white shadow">
            <div class="mx-auto px-4 max-w-7xl sm:px-6 lg:px-8">
                <div class="flex justify-between h-20">
                    <nuxt-link to="/" class="flex items-center hover:text-gray-600 text-gray-800 font-marker text-3xl uppercase">PJ&nbsp;MANNING</nuxt-link>
                    <div class="flex">
                        <div class="hidden sm:flex sm:ml-6 sm:mr-auto sm:space-x-8">
                            <!-- Current: "border-blue-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" -->
                            <nuxt-link to="/work" class="inline-flex items-center pt-1 px-1 hover:text-gray-600 text-gray-800 font-medium uppercase"> Work </nuxt-link>
                            <a v-if="$route.path === '/'" href="/#projects" v-scroll-to="'#projects'" class="inline-flex items-center pt-1 px-1 hover:text-gray-600 text-gray-800 font-medium uppercase"> Projects </a>
                            <nuxt-link v-else to="/#projects" v-scroll-to="'#projects'" class="inline-flex items-center pt-1 px-1 hover:text-gray-600 text-gray-800 font-medium uppercase"> Projects </nuxt-link>
                            <a v-if="$route.path === '/'" href="/#about" v-scroll-to="'#about'" class="inline-flex items-center pt-1 px-1 hover:text-gray-600 text-gray-800 font-medium uppercase"> About </a>
                            <nuxt-link v-else to="/#about" v-scroll-to="'#about'" class="inline-flex items-center pt-1 px-1 hover:text-gray-600 text-gray-800 font-medium uppercase"> About </nuxt-link>
                            <nuxt-link to="/blog" class="inline-flex items-center pt-1 px-1 hover:text-gray-600 text-gray-800 font-medium uppercase"> Blog </nuxt-link>
                            <a href="https://www.getrevue.co/profile/pjmanning" target="_blank" class="inline-flex items-center pt-1 px-1 hover:text-gray-600 text-gray-800 font-medium uppercase"> Newsletter </a>
                            <a v-if="$route.path === '/'" href="/#contact" v-scroll-to="'#contact'" class="inline-flex items-center pt-1 px-1 hover:text-gray-600 text-gray-800 font-medium uppercase"> Contact </a>
                            <nuxt-link v-else to="/#contact" v-scroll-to="'#contact'" class="inline-flex items-center pt-1 px-1 hover:text-gray-600 text-gray-800 font-medium uppercase"> Contact </nuxt-link>
                        </div>
                    </div>
                    <div class="flex items-center -mr-2 sm:hidden">
                        <!-- Mobile menu button -->
                        <button @click="isMenuOpen = !isMenuOpen" class="inline-flex items-center justify-center p-2 text-gray-400 hover:text-gray-500 hover:bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500" aria-expanded="false">
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
                <div class="pb-3 pt-2 space-y-1">
                    <!-- Current: "bg-blue-50 border-blue-500 text-blue-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" -->
                    <nuxt-link to="/work" @click.native="isMenuOpen = !isMenuOpen" class="block pl-3 pr-4 py-2 text-gray-500 hover:text-gray-700 text-base font-medium hover:bg-gray-50 border-l-4 hover:border-gray-300 border-transparent">Work</nuxt-link>
                    <a v-if="$route.path === '/'" href="/#projects" v-scroll-to="'#projects'" @click="isMenuOpen = !isMenuOpen" class="block pl-3 pr-4 py-2 text-gray-500 hover:text-gray-700 text-base font-medium hover:bg-gray-50 border-l-4 hover:border-gray-300 border-transparent">Projects</a>
                    <nuxt-link v-else to="/#projects" v-scroll-to="'#projects'" class="block pl-3 pr-4 py-2 text-gray-500 hover:text-gray-700 text-base font-medium hover:bg-gray-50 border-l-4 hover:border-gray-300 border-transparent">Projects</nuxt-link>
                    <a v-if="$route.path === '/'" href="/#about" v-scroll-to="'#about'" @click="isMenuOpen = !isMenuOpen" class="block pl-3 pr-4 py-2 text-gray-500 hover:text-gray-700 text-base font-medium hover:bg-gray-50 border-l-4 hover:border-gray-300 border-transparent">About</a>
                    <nuxt-link v-else to="/#about" v-scroll-to="'#about'" class="block pl-3 pr-4 py-2 text-gray-500 hover:text-gray-700 text-base font-medium hover:bg-gray-50 border-l-4 hover:border-gray-300 border-transparent">About</nuxt-link>
                    <nuxt-link to="/blog" @click.native="isMenuOpen = !isMenuOpen" class="block pl-3 pr-4 py-2 text-gray-500 hover:text-gray-700 text-base font-medium hover:bg-gray-50 border-l-4 hover:border-gray-300 border-transparent">Blog</nuxt-link>
                    <a href="https://www.getrevue.co/profile/pjmanning" target="_blank" @click="isMenuOpen = !isMenuOpen" class="block pl-3 pr-4 py-2 text-gray-500 hover:text-gray-700 text-base font-medium hover:bg-gray-50 border-l-4 hover:border-gray-300 border-transparent">Newsletter</a>
                    <a v-if="$route.path === '/'" href="/#contact" v-scroll-to="'#contact'" @click="isMenuOpen = !isMenuOpen" class="block pl-3 pr-4 py-2 text-gray-500 hover:text-gray-700 text-base font-medium hover:bg-gray-50 border-l-4 hover:border-gray-300 border-transparent">Contact</a>
                    <nuxt-link v-else to="/#contact" v-scroll-to="'#contact'" class="block pl-3 pr-4 py-2 text-gray-500 hover:text-gray-700 text-base font-medium hover:bg-gray-50 border-l-4 hover:border-gray-300 border-transparent">Contact</nuxt-link>
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
