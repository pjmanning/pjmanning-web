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

                <div class="flex flex-col">
                    <div class="mt-12 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                            <div class="overflow-hidden border-b border-gray-200 shadow sm:rounded-lg">
                                <table class="min-w-full divide-y divide-gray-200">
                                    <thead class="bg-gray-50">
                                        <tr>
                                            <th scope="col" class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">Project</th>
                                            <th scope="col" class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">Type</th>
                                            <th scope="col" class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">Description</th>
                                            <th scope="col" class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">Started</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="project in projects" :key="project.title" class="odd:bg-white even:bg-gray-50">
                                            <td class="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">{{ project.title }}</td>
                                            <td class="px-6 py-4 text-sm text-indigo-600 capitalize whitespace-nowrap">{{ project.type }}</td>
                                            <td class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">{{ project.tagline }}</td>
                                            <td class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">{{ project.started }}</td>
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
        this.projects = await this.$content('graveyard').sortBy('started').fetch()
    },

    data() {
        return {
            projects: [],
        }
    },
}
</script>

<style scoped></style>
