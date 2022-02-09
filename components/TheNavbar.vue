<template>
    <div>
        <!-- nav  -->
        <div class="h-4 bg-gray-800"></div>
        <nav class="bg-white shadow">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div class="flex h-20 justify-between">
                    <nuxt-link to="/" class="flex items-center font-marker text-3xl uppercase text-gray-800 hover:text-gray-600">PJ&nbsp;MANNING</nuxt-link>
                    <div class="flex">
                        <div class="hidden sm:ml-6 sm:mr-auto sm:flex sm:space-x-8">
                            <!-- Current: "border-blue-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" -->
                            <nuxt-link to="/work" class="inline-flex items-center px-1 pt-1 font-medium uppercase text-gray-800 hover:text-gray-600"> Work </nuxt-link>
                            <a v-if="$route.path === '/'" v-scroll-to="'#projects'" href="/#projects" class="inline-flex items-center px-1 pt-1 font-medium uppercase text-gray-800 hover:text-gray-600"> Projects </a>
                            <nuxt-link v-else v-scroll-to="'#projects'" to="/#projects" class="inline-flex items-center px-1 pt-1 font-medium uppercase text-gray-800 hover:text-gray-600"> Projects </nuxt-link>
                            <a v-if="$route.path === '/'" v-scroll-to="'#about'" href="/#about" class="inline-flex items-center px-1 pt-1 font-medium uppercase text-gray-800 hover:text-gray-600"> About </a>
                            <nuxt-link v-else v-scroll-to="'#about'" to="/#about" class="inline-flex items-center px-1 pt-1 font-medium uppercase text-gray-800 hover:text-gray-600"> About </nuxt-link>
                            <nuxt-link to="/blog" class="inline-flex items-center px-1 pt-1 font-medium uppercase text-gray-800 hover:text-gray-600"> Blog </nuxt-link>
                            <a href="https://www.getrevue.co/profile/pjmanning" target="_blank" class="inline-flex items-center px-1 pt-1 font-medium uppercase text-gray-800 hover:text-gray-600"> Newsletter </a>
                            <a v-if="$route.path === '/'" v-scroll-to="'#contact'" href="/#contact" class="inline-flex items-center px-1 pt-1 font-medium uppercase text-gray-800 hover:text-gray-600"> Contact </a>
                            <nuxt-link v-else v-scroll-to="'#contact'" to="/#contact" class="inline-flex items-center px-1 pt-1 font-medium uppercase text-gray-800 hover:text-gray-600"> Contact </nuxt-link>
                        </div>
                    </div>
                    <div class="-mr-2 flex items-center sm:hidden">
                        <!-- Mobile menu button -->
                        <button class="focus:outline-none inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-blue-500" aria-expanded="false" @click="isMenuOpen = !isMenuOpen">
                            <span class="sr-only">Open main menu</span>
                            <svg v-if="!isMenuOpen" class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                            <svg v-else class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <div class="sm:hidden" :class="isMenuOpen ? 'block' : 'hidden'">
                <div class="space-y-1 pb-3 pt-2">
                    <!-- Current: "bg-blue-50 border-blue-500 text-blue-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" -->
                    <nuxt-link to="/work" class="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700" @click.native="isMenuOpen = !isMenuOpen">Work</nuxt-link>
                    <a v-if="$route.path === '/'" v-scroll-to="'#projects'" href="/#projects" class="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700" @click="isMenuOpen = !isMenuOpen">Projects</a>
                    <nuxt-link v-else v-scroll-to="'#projects'" to="/#projects" class="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700">Projects</nuxt-link>
                    <a v-if="$route.path === '/'" v-scroll-to="'#about'" href="/#about" class="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700" @click="isMenuOpen = !isMenuOpen">About</a>
                    <nuxt-link v-else v-scroll-to="'#about'" to="/#about" class="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700">About</nuxt-link>
                    <nuxt-link to="/blog" class="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700" @click.native="isMenuOpen = !isMenuOpen">Blog</nuxt-link>
                    <a href="https://www.getrevue.co/profile/pjmanning" target="_blank" class="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700" @click="isMenuOpen = !isMenuOpen">Newsletter</a>
                    <a v-if="$route.path === '/'" v-scroll-to="'#contact'" href="/#contact" class="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700" @click="isMenuOpen = !isMenuOpen">Contact</a>
                    <nuxt-link v-else v-scroll-to="'#contact'" to="/#contact" class="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700">Contact</nuxt-link>
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
