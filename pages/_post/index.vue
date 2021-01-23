<template>
    <div>
        <div class="relative h-96 md:h-128 bg-gradient-to-b from-transparent to-black">
            <img class="object-cover w-full h-full" :src="article.image" :alt="article.alt" />
            <div class="absolute top-0 z-10 w-full h-full bg-gradient-to-b from-transparent to-black"></div>
            <h1 class="absolute bottom-0 z-10 px-4 mb-8 text-4xl font-thin leading-9 text-white sm:px-0 sm:ml-8 md:text-5xl">
                {{ article.title }}
            </h1>
        </div>

        <NuxtContent class="px-4 mx-auto my-12 prose lg:prose-lg xl:prose-xl sm:my-24" :document="article" />

        <!-- <author :author="author[0]" /> -->
    </div>
</template>

<script>
export default {
    async asyncData({ $content, params }) {
        const article = await $content('posts', params.post).fetch()
        const author = await $content('authors').where({ id: article.author }).fetch()

        return {
            article,
            author,
        }
    },

    head() {
        return {
            title: `${this.article.title} | Travel Developer`,
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: this.article.description,
                },
                // Open Graph
                {
                    hid: 'og:title',
                    property: 'og:title',
                    content: this.article.title,
                },
                {
                    hid: 'og:description',
                    property: 'og:description',
                    content: this.article.description,
                },
                {
                    hid: 'og:type',
                    property: 'og:type',
                    content: 'website',
                },
                {
                    hid: 'og:url',
                    property: 'og:url',
                    content: `https://pjmanning.dev/${this.article.slug}`,
                },
                {
                    hid: 'og:image',
                    property: 'og:image',
                    content: this.article.image,
                },
                // Twitter Card
                {
                    hid: 'twitter:title',
                    name: 'twitter:title',
                    content: this.article.title,
                },
                {
                    hid: 'twitter:description',
                    name: 'twitter:description',
                    content: this.article.description,
                },
                {
                    hid: 'twitter:image',
                    name: 'twitter:image',
                    content: this.article.image,
                },
            ],
        }
    },
}
</script>

<style></style>
