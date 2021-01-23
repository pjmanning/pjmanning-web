<template>
    <div class="bg-gray-100 border-t border-b">
        <div class="container mx-auto">
            <div class="px-4 lg:mx-32 md:mx-16 sm:px-0">
                <section class="container py-10 mx-auto">
                    <div class="flex flex-wrap justify-center">
                        <div class="flex justify-center w-full mb-4 text-center md:w-10/12">
                            <div class="w-full mb-2 sm:mb-0">
                                <div class="self-center p-6 pl-0 md:flex">
                                    <img :src="author.image" class="w-16 h-16 mx-auto bg-gray-200 rounded-full md:h-24 md:w-24 md:mx-0 md:mr-6" />
                                    <div class="text-center md:text-left">
                                        <h2 class="my-1 mt-2 text-xl md:mt-0">
                                            {{ author.name }}
                                        </h2>
                                        <div class="py-2 font-light leading-relaxed tracking-wider sm:pt-0">
                                            {{ author.bio }}
                                        </div>
                                        <a :href="author.twitter" target="_blank" rel="noopener noreferrer" class="hover:text-blue-500">
                                            <svg class="w-10 h-10 mx-auto text-center md:mx-0" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        author: {
            type: Object,
            required: true,
        },
    },

    computed: {},
}
</script>
