<template>
    <div class="mb-8">
        <div class="relative px-4 pt-16 sm:px-6 lg:px-8">
            <div class="absolute inset-0">
                <div class="h-1/3 bg-white sm:h-2/3"></div>
            </div>
            <div class="relative mx-auto max-w-7xl">
                <div class="text-center">
                    <h2 class="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10">Ecommerce Design & Development</h2>
                    <p class="mx-auto mt-3 max-w-2xl text-xl leading-7 text-gray-500 sm:mt-4">Thoughtful design for modern commerce...</p>
                </div>

                <ul role="list" class="my-12 grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8">
                    <a v-for="project in work" :key="project.title" :href="project.slug" target="_blank" class="relative">
                        <div class="group aspect-w-16 aspect-h-9 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                            <img :src="project.image" :alt="project.title" class="pointer-events-none object-cover group-hover:opacity-75" />
                            <button type="button" class="focus:outline-none absolute inset-0">
                                <span class="sr-only">View details for {{ project.title }} </span>
                            </button>
                        </div>
                        <p class="pointer-events-none mt-2 block truncate text-lg font-medium text-gray-900">{{ project.title }}</p>
                        <p class="pointer-events-none block text-sm font-medium text-gray-500">{{ project.description }}</p>
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
