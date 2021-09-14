<template>
    <div class="mb-8">
        <div class="relative px-4 pt-16 sm:px-6 lg:px-8">
            <div class="absolute inset-0">
                <div class="bg-white h-1/3 sm:h-2/3"></div>
            </div>
            <div class="relative mx-auto max-w-7xl">
                <div class="text-center">
                    <h2 class="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10">Ecommerce Design & Development</h2>
                    <p class="max-w-2xl mx-auto mt-3 text-xl leading-7 text-gray-500 sm:mt-4">Thoughtful design for modern commerce...</p>
                </div>

                <ul role="list" class="grid grid-cols-1 my-12 gap-x-4 gap-y-8 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8">
                    <a v-for="project in work" :key="project.title" :href="project.slug" target="_blank" class="relative">
                        <div class="block w-full overflow-hidden bg-gray-100 rounded-lg group aspect-w-16 aspect-h-9 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-blue-500">
                            <img :src="project.image" :alt="project.title" class="object-cover pointer-events-none group-hover:opacity-75" />
                            <button type="button" class="absolute inset-0 focus:outline-none">
                                <span class="sr-only">View details for {{ project.title }} </span>
                            </button>
                        </div>
                        <p class="block mt-2 text-lg font-medium text-gray-900 truncate pointer-events-none">{{ project.title }}</p>
                        <p class="block text-sm font-medium text-gray-500 pointer-events-none">{{ project.description }}</p>
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
