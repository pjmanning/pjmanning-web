<template>
    <div class="mb-8">
        <div class="relative px-4 pt-16 sm:px-6 lg:px-8">
            <div class="absolute inset-0">
                <div class="bg-white h-1/3 sm:h-2/3"></div>
            </div>
            <div class="relative mx-auto max-w-7xl">
                <div class="text-center">
                    <h2 class="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10">Project Graveyard</h2>
                    <p class="max-w-2xl mx-auto mt-3 text-xl leading-7 text-gray-500 sm:mt-4">The shit that didn't quite work out... 💀 RIP</p>
                </div>

                <div class="grid max-w-lg gap-5 mx-auto mt-12 lg:grid-cols-3 lg:max-w-none">
                    <div v-for="project in projects" :key="project.title" class="flex flex-col overflow-hidden rounded-lg shadow-lg">
                        <!-- <div class="flex-shrink-0">
                            <img class="object-cover w-full h-48" :src="project.image" :alt="project.title" />
                        </div> -->
                        <div class="flex flex-col justify-between flex-1 p-6 bg-white">
                            <div class="flex-1">
                                <p class="text-sm font-medium text-indigo-600 capitalize">
                                    {{ project.type }}
                                </p>
                                <div class="block mt-2">
                                    <p class="text-xl font-semibold text-gray-900">{{ project.title }}</p>
                                    <p class="mt-3 text-base text-gray-500">{{ project.description }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    async fetch() {
        this.projects = await this.$content('graveyard').sortBy('createdAt', 'desc').fetch()
    },

    data() {
        return {
            projects: [],
        }
    },
}
</script>

<style scoped></style>
