<template>
    <div class="mb-8">
        <div class="relative pt-16 px-4 sm:px-6 lg:px-8">
            <div class="absolute inset-0">
                <div class="h-1/3 bg-white sm:h-2/3"></div>
            </div>
            <div class="relative mx-auto max-w-7xl">
                <div class="text-center">
                    <h2 class="text-gray-900 text-3xl font-extrabold tracking-tight leading-9 sm:text-4xl sm:leading-10">Project Graveyard</h2>
                    <p class="mt-3 mx-auto max-w-2xl text-gray-500 text-xl leading-7 sm:mt-4">The shit that didn't quite work out... 💀 RIP</p>
                </div>

                <div class="flex flex-col">
                    <div class="-my-2 mt-12 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div class="inline-block align-middle py-2 min-w-full sm:px-6 lg:px-8">
                            <div class="border-b border-gray-200 shadow overflow-hidden sm:rounded-lg">
                                <table class="min-w-full divide-gray-200 divide-y">
                                    <thead class="bg-gray-50">
                                        <tr>
                                            <th scope="col" class="px-6 py-3 text-left text-gray-500 text-xs font-medium tracking-wider uppercase">Project</th>
                                            <th scope="col" class="px-6 py-3 text-left text-gray-500 text-xs font-medium tracking-wider uppercase">Type</th>
                                            <th scope="col" class="px-6 py-3 text-left text-gray-500 text-xs font-medium tracking-wider uppercase">Description</th>
                                            <th scope="col" class="px-6 py-3 text-left text-gray-500 text-xs font-medium tracking-wider uppercase">Started</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="project in projects" :key="project.title" class="even:bg-gray-50 odd:bg-white">
                                            <td class="px-6 py-4 text-gray-900 whitespace-nowrap text-sm font-medium">{{ project.title }}</td>
                                            <td class="px-6 py-4 text-indigo-600 whitespace-nowrap text-sm capitalize">{{ project.type }}</td>
                                            <td class="px-6 py-4 text-gray-500 whitespace-nowrap text-sm">{{ project.tagline }}</td>
                                            <td class="px-6 py-4 text-gray-500 whitespace-nowrap text-sm">{{ project.started }}</td>
                                        </tr>
                                    </tbody>
                                </table>
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
        this.projects = await this.$content('graveyard').sortBy('started', 'desc').fetch()
    },

    data() {
        return {
            projects: [],
        }
    },
}
</script>

<style scoped></style>
