<template>
    <div class="mb-8">
        <div class="relative px-4 pt-16 sm:px-6 lg:px-8">
            <div class="absolute inset-0">
                <div class="h-1/3 bg-white sm:h-2/3"></div>
            </div>
            <div class="relative mx-auto max-w-7xl">
                <div class="text-center">
                    <h2 class="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10">News & Updates</h2>
                    <p class="mx-auto mt-3 max-w-2xl text-xl leading-7 text-gray-500 sm:mt-4">Projects I'm working on, where I'm working & more...</p>
                </div>
                <div class="mx-auto my-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
                    <nuxt-link v-for="post in posts" :key="post.title" :to="post.slug" class="flex transform flex-col overflow-hidden rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl">
                        <div class="flex-shrink-0">
                            <img class="h-48 min-h-[48] w-full bg-gray-300 object-cover" :src="post.image" :alt="post.title" />
                        </div>
                        <div class="flex flex-1 flex-col justify-between bg-white p-6">
                            <div class="flex-1">
                                <p class="text-sm font-medium uppercase leading-5 text-secondary">
                                    {{ post.tags }}
                                </p>
                                <a href="#" class="block">
                                    <h3 class="mt-2 text-xl font-semibold leading-7 text-gray-900">
                                        {{ post.title }}
                                    </h3>
                                    <p class="mt-3 text-base leading-6 text-gray-500">
                                        {{ post.description }}
                                    </p>
                                </a>
                            </div>

                            <div v-if="postAuthor(post.author)" class="mt-6 flex items-center">
                                <div class="flex-shrink-0">
                                    <img class="bg-animate-pulse h-10 w-10 rounded-full bg-gray-300" :src="postAuthor(post.author).image" :alt="postAuthor(post.author).name" />
                                </div>
                                <div class="ml-3">
                                    <p class="text-sm font-medium leading-5 text-gray-900">
                                        {{ postAuthor(post.author).name }}
                                    </p>
                                    <div class="flex text-sm leading-5 text-gray-500">
                                        <time :datetime="post.createdAt">
                                            {{ $moment(post.createdAt).format('MMMM Do YYYY') }}
                                        </time>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nuxt-link>
                </div>
            </div>
        </div>

        <!-- Pagination -->
        <!-- <nav
            class="flex items-center justify-between px-4 mx-auto mt-12 border-t border-gray-200 max-w-7xl sm:px-0"
        >
            <div class="flex flex-1 w-0">
                <a
                    href="#"
                    class="inline-flex items-center pt-4 pr-1 -mt-px text-sm font-medium leading-5 text-gray-500 transition duration-150 ease-in-out border-t-2 border-transparent hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-400"
                >
                    <svg
                        class="w-5 h-5 mr-3 text-gray-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                            clip-rule="evenodd"
                        />
                    </svg>
                    Previous
                </a>
            </div>
            <div class="hidden md:flex">
                <a
                    href="#"
                    class="inline-flex items-center px-4 pt-4 -mt-px text-sm font-medium leading-5 text-gray-500 transition duration-150 ease-in-out border-t-2 border-transparent hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-400"
                >
                    1
                </a>
                <a
                    href="#"
                    class="inline-flex items-center px-4 pt-4 -mt-px text-sm font-medium leading-5 text-indigo-600 transition duration-150 ease-in-out border-t-2 border-indigo-500 focus:outline-none focus:text-indigo-800 focus:border-indigo-700"
                >
                    2
                </a>
                <a
                    href="#"
                    class="inline-flex items-center px-4 pt-4 -mt-px text-sm font-medium leading-5 text-gray-500 transition duration-150 ease-in-out border-t-2 border-transparent hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-400"
                >
                    3
                </a>
            </div>
            <div class="flex justify-end flex-1 w-0">
                <a
                    href="#"
                    class="inline-flex items-center pt-4 pl-1 -mt-px text-sm font-medium leading-5 text-gray-500 transition duration-150 ease-in-out border-t-2 border-transparent hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-400"
                >
                    Next
                    <svg
                        class="w-5 h-5 ml-3 text-gray-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                        />
                    </svg>
                </a>
            </div>
        </nav> -->
    </div>
</template>

<script>
export default {
    async fetch() {
        this.posts = await this.$content('posts').sortBy('createdAt', 'desc').fetch()
        this.authors = await this.$content('authors').fetch()
    },

    data() {
        return {
            posts: [],
            authors: [],
            currentPage: 1,
        }
    },

    methods: {
        postAuthor(authorId) {
            return this.authors.find(author => {
                return author.id === authorId
            })
        },
    },
}
</script>

<style></style>
