<template>
    <div class="mb-8">
        <div class="relative pt-16 px-4 sm:px-6 lg:px-8">
            <div class="absolute inset-0">
                <div class="h-1/3 bg-white sm:h-2/3"></div>
            </div>
            <div class="relative mx-auto max-w-7xl">
                <div class="text-center">
                    <h2 class="text-gray-900 text-3xl font-extrabold tracking-tight leading-9 sm:text-4xl sm:leading-10">Ecommerce Design & Development</h2>
                    <p class="mt-3 mx-auto max-w-2xl text-gray-500 text-xl leading-7 sm:mt-4">Thoughtful design for modern commerce...</p>
                </div>

                <ul role="list" class="grid gap-x-4 gap-y-8 grid-cols-1 my-12 sm:gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                    <a v-for="project in work" :key="project.title" :href="project.slug" target="_blank" class="relative">
                        <div class="group aspect-w-16 aspect-h-9 block w-full bg-gray-100 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                            <img :src="project.image" :alt="project.title" class="group-hover:opacity-75 pointer-events-none object-cover" />
                            <button type="button" class="absolute inset-0 focus:outline-none">
                                <span class="sr-only">View details for {{ project.title }} </span>
                            </button>
                        </div>
                        <p class="block mt-2 text-gray-900 text-lg font-medium pointer-events-none truncate">{{ project.title }}</p>
                        <p class="block text-gray-500 text-sm font-medium pointer-events-none">{{ project.description }}</p>
                    </a>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    async fetch() {
        this.work = await this.$content('work').sortBy('createdAt', 'desc').fetch()
    },

    data() {
        return {
            work: [],
        }
    },

    methods: {},
}
</script>

<style scoped></style>
