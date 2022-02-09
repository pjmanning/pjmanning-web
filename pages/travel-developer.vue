<template>
    <div class>
        <div class="relative bg-secondary">
            <div class="mx-auto max-w-screen-xl px-3 py-3 sm:px-6 lg:px-8">
                <div class="pr-16 sm:px-16 sm:text-center">
                    <p class="font-medium text-white">
                        <span class="md:hidden">We're giving away a freebie!</span>
                        <span class="hidden md:inline"> Big news! We're giving away a free guide on how to create a location-independent business. </span>
                        <span class="block sm:ml-2 sm:inline-block">
                            <a class="font-bold text-white underline" target="_blank" href="https://firebasestorage.googleapis.com/v0/b/travel-developer.appspot.com/o/2018RemoteWorkGuide2.pdf?alt=media&token=9e02e8ca-3f10-4b30-b9a0-53633fcf8d96">Download the guide &rarr;</a>
                        </span>
                    </p>
                </div>
                <!-- <div
                    class="absolute inset-y-0 right-0 flex items-start pt-1 pr-1 sm:pt-1 sm:pr-2 sm:items-start"
                >
                    <button
                        class="flex p-2 transition duration-150 ease-in-out rounded-md hover:bg-primary focus:outline-none focus:bg-primary"
                        type="button"
                        aria-label="Dismiss"
                    >
                        <svg
                            class="w-6 h-6 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>-->
            </div>
        </div>

        <div class="relative overflow-hidden bg-white">
            <div class="mx-auto max-w-screen-xl">
                <div class="relative z-10 bg-white pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
                    <svg class="absolute inset-y-0 right-0 hidden h-full w-48 translate-x-1/2 transform text-white lg:block" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <polygon points="50,0 100,0 50,100 0,100" />
                    </svg>
                    <div class="relative px-4 pt-6 sm:px-6 lg:px-8">
                        <nav class="relative flex items-center justify-between sm:h-10 lg:justify-start">
                            <div class="flex flex-shrink-0 flex-grow items-center lg:flex-grow-0">
                                <div class="flex w-full items-center justify-between md:w-auto">
                                    <nuxt-link to="/" aria-label="Home">
                                        <img class="h-12 w-auto" src="~/assets/images/td-logo-circle.png" alt="travel developer" />
                                    </nuxt-link>
                                    <div class="-mr-2 flex hidden items-center">
                                        <button id="main-menu" class="focus:outline-none inline-flex items-center justify-center rounded-md p-2 text-gray-400 transition duration-150 ease-in-out hover:bg-gray-100 hover:text-gray-500 focus:bg-gray-100 focus:text-gray-500" type="button" aria-label="Main menu" aria-haspopup="true">
                                            <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div class="ml-10 block pr-4">
                                <nuxt-link class="font-medium text-gray-500 transition duration-150 ease-in-out hover:text-gray-900" to="/digital-nomad-jobs">Jobs</nuxt-link>
                                <nuxt-link class="ml-8 font-medium text-gray-500 transition duration-150 ease-in-out hover:text-gray-900" to="/travel-developer-toolkit">Tools</nuxt-link>
                                <nuxt-link class="ml-8 font-medium text-gray-500 transition duration-150 ease-in-out hover:text-gray-900" to="/blog">Blog</nuxt-link>
                                <a class="ml-8 font-medium text-secondary transition duration-150 ease-in-out hover:text-primary" href="https://sso.teachable.com/secure/36980/users/sign_in?clean_login=true&reset_purchase_session=1" target="_blank">Log in</a>
                            </div>
                        </nav>
                    </div>
                    <!-- Mobile menu  -->
                    <!-- <div
                        class="absolute inset-x-0 top-0 hidden p-2 transition origin-top-right transform"
                    >
                        <div class="rounded-lg shadow-md">
                            <div
                                class="overflow-hidden bg-white rounded-lg shadow-xs"
                                role="menu"
                                aria-orientation="vertical"
                                aria-labelledby="main-menu"
                            >
                                <div
                                    class="flex items-center justify-between px-5 pt-4"
                                >
                                    <div>
                                        <img
                                            class="w-auto h-8"
                                            src="https://tailwindui.com/img/logos/workflow-mark-on-white.svg"
                                            alt
                                        />
                                    </div>
                                    <div class="-mr-2">
                                        <button
                                            class="inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500"
                                            type="button"
                                            aria-label="Close menu"
                                        >
                                            <svg
                                                class="w-6 h-6"
                                                stroke="currentColor"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    d="M6 18L18 6M6 6l12 12"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div class="px-2 pt-2 pb-3">
                                    <nuxt-link
                                        class="block px-3 py-2 text-base font-medium text-gray-700 transition duration-150 ease-in-out rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50"
                                        to="/travel-developer-toolkit"
                                        role="menuitem"
                                        >Tools</nuxt-link
                                    >
                                    <nuxt-link
                                        class="block px-3 py-2 mt-1 text-base font-medium text-gray-700 transition duration-150 ease-in-out rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50"
                                        to="/blog"
                                        role="menuitem"
                                        >Blog</nuxt-link
                                    >
                                </div>
                                <div>
                                    <a
                                        class="block w-full px-5 py-3 font-medium text-center transition duration-150 ease-in-out text-secondary bg-gray-50 hover:bg-gray-100 hover:text-primary focus:outline-none focus:bg-gray-100 focus:text-primary"
                                        href="https://sso.teachable.com/secure/36980/users/sign_in?clean_login=true&reset_purchase_session=1"
                                        target="_blank"
                                        role="menuitem"
                                        >Log in</a
                                    >
                                </div>
                            </div>
                        </div>
                    </div>-->
                    <main class="mx-auto mt-10 max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                        <div class="sm:text-center lg:text-left">
                            <h2 class="text-4xl font-extrabold leading-10 tracking-tight text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
                                <span class="mr-1">Learn the basics of</span>
                                <br class="xl:hidden" />
                                <span class="text-secondary">remote work</span>
                            </h2>
                            <p class="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">Learn design, development, SEO, sales, marketing, how to find remote jobs, and other tips on working remotely</p>
                            <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                                <div class="rounded-md shadow">
                                    <a class="focus:outline-none flex w-full items-center justify-center rounded-md border border-transparent bg-secondary px-8 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out hover:bg-primary md:py-4 md:px-10 md:text-lg" href="https://www.udemy.com/the-complete-travel-developer-course-become-a-digital-nomad/" target="_blank">Enroll Now</a>
                                </div>
                                <div class="mt-3 sm:mt-0 sm:ml-3">
                                    <a class="focus:outline-none flex w-full items-center justify-center rounded-md border border-transparent bg-blue-100 px-8 py-3 text-base font-medium leading-6 text-primary transition duration-150 ease-in-out hover:bg-blue-50 hover:text-secondary md:py-4 md:px-10 md:text-lg" href="#video-section">Learn More</a>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
            <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                <img class="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full" src="~/assets/images/mountainlaptopoverlook.jpg" alt />
            </div>
        </div>

        <!-- logos  -->
        <div class="bg-gray-100 py-4">
            <div class="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8">
                <div class="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
                    <div class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                        <img class="h-12" src="~/assets/images/Discovery-Channel-logo2-1030x361.png" alt="discovery" />
                    </div>
                    <div class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                        <img class="h-12" src="~/assets/images/the-inertia-logo-removebg-preview.png" alt="inertia" />
                    </div>
                    <div class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                        <img class="h-12" src="~/assets/images/apple-logo.png" alt="apple" />
                    </div>
                    <div class="col-span-1 flex justify-center md:col-span-3 lg:col-span-1">
                        <img class="h-12" src="~/assets/images/surfoffice70.png" alt="surf office" />
                    </div>
                    <div class="col-span-2 flex justify-center md:col-span-3 lg:col-span-1">
                        <img class="h-12" src="~/assets/images/andco70.png" alt="andco" />
                    </div>
                </div>
            </div>
        </div>

        <!-- wistia video -->
        <client-only>
            <div id="video-section" class="wistia_responsive_padding mx-auto mt-12 mb-24 max-w-screen-lg lg:mt-24 lg:mb-12" style="padding: 50% 0 0 0; position: relative">
                <div class="wistia_responsive_wrapper" style="height: 100%; left: 0; position: absolute; top: 0; width: 100%">
                    <iframe src="https://fast.wistia.net/embed/iframe/950z1grlg6?videoFoam=true" title="Complete Travel Developer Intro Video" allow="autoplay; fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen msallowfullscreen width="100%" height="100%"></iframe>
                </div>
            </div>
            <script src="https://fast.wistia.net/assets/external/E-v1.js" async></script>
        </client-only>

        <!-- course details -->
        <div class="bg-gray-100">
            <div class="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-24">
                <div class="space-y-12">
                    <div class="text-center">
                        <h2 class="pb-2 text-4xl font-thin leading-9 tracking-tight text-secondary md:text-5xl">
                            The
                            <span class="font-medium underline">Complete</span>
                            Travel Developer Course
                        </h2>
                        <p class="p-4 text-lg font-light leading-7 md:text-xl">All the Tools You'll Need to Become a Remote Freelancer</p>
                        <p class="text-md px-4 font-light leading-7 md:text-lg">
                            Course Updated:
                            <span class="font-medium">February 2018</span>
                        </p>
                    </div>
                    <ul class="space-y-4 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:grid-cols-3 lg:gap-8">
                        <li class="rounded-lg bg-white px-6 py-10 text-center shadow-2xl xl:px-10 xl:text-left">
                            <div class="space-y-6 xl:space-y-10">
                                <img class="mx-auto" src="~/assets/images/web_training.png" alt="html" />
                                <div class="space-y-2 text-center">
                                    <div class="space-y-4 leading-6">
                                        <h4 class="text-2xl font-semibold text-primary">HTML, CSS, JS</h4>
                                        <p class="text-lg text-blue-400">Learn the web basics and how to create just about any website</p>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li class="rounded-lg bg-white px-6 py-10 text-center shadow-2xl xl:px-10 xl:text-left">
                            <div class="space-y-6 xl:space-y-10">
                                <img class="mx-auto" src="~/assets/images/wordpress-logo-notext-rgb.png" alt="wordpress" />
                                <div class="space-y-2 text-center">
                                    <div class="space-y-4 leading-6">
                                        <h4 class="text-2xl font-semibold text-primary">Using Wordpress</h4>
                                        <p class="text-lg text-blue-400">An overview of the most popular website CMS in the world</p>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li class="rounded-lg bg-white px-6 py-10 text-center shadow-2xl xl:px-10 xl:text-left">
                            <div class="space-y-6 xl:space-y-10">
                                <img class="mx-auto" src="~/assets/images/sketch3.png" alt="html" />
                                <div class="space-y-2 text-center">
                                    <div class="space-y-4 leading-6">
                                        <h4 class="text-2xl font-semibold text-primary">Learn Sketch</h4>
                                        <p class="text-lg text-blue-400">The most popular (and easiest) design tool in the industry today</p>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li class="rounded-lg bg-white px-6 py-10 text-center shadow-2xl xl:px-10 xl:text-left">
                            <div class="space-y-6 xl:space-y-10">
                                <img class="mx-auto" src="~/assets/images/search.png" alt="html" />
                                <div class="space-y-2 text-center">
                                    <div class="space-y-4 leading-6">
                                        <h4 class="text-2xl font-semibold text-primary">Search Engine Optimization</h4>
                                        <p class="text-lg text-blue-400">Learn the basics of SEO and how to upsell your services</p>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li class="rounded-lg bg-white px-6 py-10 text-center shadow-2xl xl:px-10 xl:text-left">
                            <div class="space-y-6 xl:space-y-10">
                                <img class="mx-auto" src="~/assets/images/pie-chart.png" alt="wordpress" />
                                <div class="space-y-2 text-center">
                                    <div class="space-y-4 leading-6">
                                        <h4 class="text-2xl font-semibold text-primary">Marketing Strategy</h4>
                                        <p class="text-lg text-blue-400">Create a streamlined marketing process from start to finish</p>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li class="rounded-lg bg-white px-6 py-10 text-center shadow-2xl xl:px-10 xl:text-left">
                            <div class="space-y-6 xl:space-y-10">
                                <img class="mx-auto" src="~/assets/images/phone-call.png" alt="html" />
                                <div class="space-y-2 text-center">
                                    <div class="space-y-4 leading-6">
                                        <h4 class="text-2xl font-semibold text-primary">Selling Your Service</h4>
                                        <p class="text-lg text-blue-400">How to cold-contact potential clients in a foreign country</p>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li class="rounded-lg bg-white px-6 py-10 text-center shadow-2xl xl:px-10 xl:text-left">
                            <div class="space-y-6 xl:space-y-10">
                                <img class="mx-auto" src="~/assets/images/diagram.png" alt="html" />
                                <div class="space-y-2 text-center">
                                    <div class="space-y-4 leading-6">
                                        <h4 class="text-2xl font-semibold text-primary">Project Management</h4>
                                        <p class="text-lg text-blue-400">Learn to manage multiple clients from different countries while on the move</p>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li class="rounded-lg bg-white px-6 py-10 text-center shadow-2xl xl:px-10 xl:text-left">
                            <div class="space-y-6 xl:space-y-10">
                                <img class="mx-auto" src="~/assets/images/dollar-bill-1.png" alt="wordpress" />
                                <div class="space-y-2 text-center">
                                    <div class="space-y-4 leading-6">
                                        <h4 class="text-2xl font-semibold text-primary">Billing & Finance</h4>
                                        <p class="text-lg text-blue-400">Manage your expenses and make sure your business/lifestyle runs smoothly</p>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li class="rounded-lg bg-white px-6 py-10 text-center shadow-2xl xl:px-10 xl:text-left">
                            <div class="space-y-6 xl:space-y-10">
                                <img class="mx-auto" src="~/assets/images/luggage.png" alt="html" />
                                <div class="space-y-2 text-center">
                                    <div class="space-y-4 leading-6">
                                        <h4 class="text-2xl font-semibold text-primary">Working Abroad Hacks</h4>
                                        <p class="text-lg text-blue-400">Learn what to pack, safety tips, and digital nomad lifestyle design</p>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>

                    <div class="overflow-hidden rounded-lg bg-secondary py-12 text-center shadow-2xl">
                        <div class="px-6 pb-6 text-3xl text-white md:text-5xl">
                            <p class="">Learn design, development, and SEO</p>
                            <p class="font-bold">...IN ONE COURSE!</p>
                        </div>
                        <div class="px-4 py-4 sm:px-6">
                            <span class="inline-flex rounded-md shadow-xl">
                                <a class="focus:outline-none inline-flex items-center rounded-md border border-transparent bg-white px-8 py-4 text-2xl font-medium uppercase leading-6 text-secondary transition duration-150 ease-in-out hover:opacity-75" href="https://www.udemy.com/the-complete-travel-developer-course-become-a-digital-nomad/" target="_blank"> Enroll Today! </a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="overflow-hidden bg-white">
            <div class="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                <div class="absolute top-0 bottom-0 left-3/4 hidden w-screen bg-gray-50 lg:block"></div>
                <div class="mx-auto max-w-prose text-base lg:max-w-none">
                    <p class="text-base font-semibold uppercase leading-6 tracking-wide text-secondary">Blueprint to Becoming a Profitable Freelancer</p>
                    <h1 class="mt-2 mb-8 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
                        How to Work Remotely with
                        <a href="https://twitter.com/pj_manning" target="_blank" class="text-secondary">PJ Manning</a>
                    </h1>
                </div>
                <div class="lg:grid lg:grid-cols-2 lg:gap-8">
                    <div class="relative mb-8 lg:col-start-2 lg:row-start-1 lg:mb-0">
                        <svg class="absolute top-0 right-0 -mt-20 -mr-20 hidden lg:block" width="404" height="384" fill="none" viewBox="0 0 404 384">
                            <defs>
                                <pattern id="de316486-4a29-4312-bdfc-fbce2132a2c1" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                    <rect class="text-gray-200" x="0" y="0" width="4" height="4" fill="currentColor" />
                                </pattern>
                            </defs>
                            <rect width="404" height="384" fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)" />
                        </svg>
                        <div class="relative mx-auto max-w-prose text-base lg:max-w-none">
                            <figure>
                                <a href="https://twitter.com/pj_manning" target="_blank" class="pb-7/12 relative lg:pb-0">
                                    <img class="absolute inset-0 h-full w-full rounded-lg object-cover object-center shadow-lg lg:static lg:ml-24 lg:-mt-8 lg:h-auto lg:w-3/5" src="~/assets/images/meMedium.jpg" alt="pj manning" />
                                </a>
                            </figure>
                        </div>
                    </div>
                    <div>
                        <div class="mx-auto max-w-prose text-base lg:max-w-none">
                            <p class="mb-5 text-lg leading-7 text-gray-500">
                                <a href="https://twitter.com/pj_manning" target="_blank" class="text-secondary">PJ Manning</a>
                                is a self-taught, full-stack developer and small-business consultant. Over the past 6 years, he has worked with 30+ businesses creating websites and iOS applications while also providing business consultant services from SEO and digital marketing to strategy and pricing. He has a unique perspective having worked with boutique hotels in Costa Rica, to the fastest growing e-commerce website in the world.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="overflow-hidden bg-gray-50 py-16 lg:py-24">
            <div class="relative mx-auto max-w-xl px-4 sm:px-6 lg:max-w-screen-xl lg:px-8">
                <svg class="absolute left-full hidden -translate-x-1/2 -translate-y-1/4 transform lg:block" width="404" height="784" fill="none" viewBox="0 0 404 784">
                    <defs>
                        <pattern id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                            <rect class="text-gray-200" x="0" y="0" width="4" height="4" fill="currentColor" />
                        </pattern>
                    </defs>
                    <rect width="404" height="784" fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)" />
                </svg>
                <div class="relative">
                    <h3 class="text-center text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl sm:leading-10">Everything You Need, Nothing You Don't</h3>
                    <p class="mx-auto mt-4 max-w-3xl text-center text-xl leading-7 text-gray-500">An Easy to Follow 3 Step Solution on How to Become a Digital Nomad</p>
                </div>
                <div class="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:items-center lg:gap-8">
                    <div class="relative">
                        <h4 class="text-2xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-3xl sm:leading-9">1. Learn Technical Skills</h4>
                        <p class="mt-3 text-lg leading-7 text-gray-500">The first step to launching a successful freelance career lies in the mastery of technical skills. By taking the Travel Developer Course, you'll become a Designer, Developer, and SEO Marketer by learning with hands-on projects.</p>
                        <!-- <ul class="mt-10">
                            <li>
                                <div class="flex">
                                    <div class="flex-shrink-0">
                                        <div
                                            class="flex items-center justify-center w-12 h-12 text-white bg-indigo-500 rounded-md"
                                        >
                                            <svg
                                                class="w-6 h-6"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="ml-4">
                                        <h5
                                            class="text-lg font-medium leading-6 text-gray-900"
                                        >
                                            fasdfad fasdf asdf
                                        </h5>
                                        <p
                                            class="mt-2 text-base leading-6 text-gray-500"
                                        >
                                            Lorem ipsum, dolor sit amet
                                            consectetur adipisicing elit.
                                            Maiores impedit perferendis suscipit
                                            eaque, iste dolor cupiditate
                                            blanditiis ratione.
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li class="mt-10">
                                <div class="flex">
                                    <div class="flex-shrink-0">
                                        <div
                                            class="flex items-center justify-center w-12 h-12 text-white bg-indigo-500 rounded-md"
                                        >
                                            <svg
                                                class="w-6 h-6"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="ml-4">
                                        <h5
                                            class="text-lg font-medium leading-6 text-gray-900"
                                        >
                                            No hidden fees
                                        </h5>
                                        <p
                                            class="mt-2 text-base leading-6 text-gray-500"
                                        >
                                            Lorem ipsum, dolor sit amet
                                            consectetur adipisicing elit.
                                            Maiores impedit perferendis suscipit
                                            eaque, iste dolor cupiditate
                                            blanditiis ratione.
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li class="mt-10">
                                <div class="flex">
                                    <div class="flex-shrink-0">
                                        <div
                                            class="flex items-center justify-center w-12 h-12 text-white bg-indigo-500 rounded-md"
                                        >
                                            <svg
                                                class="w-6 h-6"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    d="M13 10V3L4 14h7v7l9-11h-7z"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="ml-4">
                                        <h5
                                            class="text-lg font-medium leading-6 text-gray-900"
                                        >
                                            Transfers are instant
                                        </h5>
                                        <p
                                            class="mt-2 text-base leading-6 text-gray-500"
                                        >
                                            Lorem ipsum, dolor sit amet
                                            consectetur adipisicing elit.
                                            Maiores impedit perferendis suscipit
                                            eaque, iste dolor cupiditate
                                            blanditiis ratione.
                                        </p>
                                    </div>
                                </div>
                            </li>
                        </ul> -->
                    </div>
                    <div class="relative -mx-4 mt-10 lg:mt-0">
                        <svg class="absolute left-1/2 -translate-x-1/2 translate-y-16 transform lg:hidden" width="784" height="404" fill="none" viewBox="0 0 784 404">
                            <defs>
                                <pattern id="ca9667ae-9f92-4be7-abcb-9e3d727f2941" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                    <rect class="text-gray-200" x="0" y="0" width="4" height="4" fill="currentColor" />
                                </pattern>
                            </defs>
                            <rect width="784" height="404" fill="url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)" />
                        </svg>
                        <img class="relative mx-auto" width="490" src="~/assets/images/codingcomputer.jpg" alt />
                    </div>
                </div>
                <svg class="absolute right-full hidden translate-x-1/2 translate-y-12 transform lg:block" width="404" height="784" fill="none" viewBox="0 0 404 784">
                    <defs>
                        <pattern id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                            <rect class="text-gray-200" x="0" y="0" width="4" height="4" fill="currentColor" />
                        </pattern>
                    </defs>
                    <rect width="404" height="784" fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" />
                </svg>
                <div class="relative mt-12 sm:mt-16 lg:mt-24">
                    <div class="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:items-center lg:gap-8">
                        <div class="lg:col-start-2">
                            <h4 class="text-2xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-3xl sm:leading-9">2. Create Your Own Freelance Business</h4>
                            <p class="mt-3 text-lg leading-7 text-gray-500">Learn how to run your own business. From marketing and sales, to finance and project management, having your business run on autopilot will help keep you worry-free while working and traveling the world.</p>
                            <!-- <ul class="mt-10">
                                <li>
                                    <div class="flex">
                                        <div class="flex-shrink-0">
                                            <div
                                                class="flex items-center justify-center w-12 h-12 text-white bg-indigo-500 rounded-md"
                                            >
                                                <svg
                                                    class="w-6 h-6"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        stroke-width="2"
                                                        d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                        <div class="ml-4">
                                            <h5
                                                class="text-lg font-medium leading-6 text-gray-900"
                                            >
                                                Mobile notifications
                                            </h5>
                                            <p
                                                class="mt-2 text-base leading-6 text-gray-500"
                                            >
                                                Lorem ipsum, dolor sit amet
                                                consectetur adipisicing elit.
                                                Maiores impedit perferendis
                                                suscipit eaque, iste dolor
                                                cupiditate blanditiis ratione.
                                            </p>
                                        </div>
                                    </div>
                                </li>
                                <li class="mt-10">
                                    <div class="flex">
                                        <div class="flex-shrink-0">
                                            <div
                                                class="flex items-center justify-center w-12 h-12 text-white bg-indigo-500 rounded-md"
                                            >
                                                <svg
                                                    class="w-6 h-6"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        stroke-width="2"
                                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                        <div class="ml-4">
                                            <h5
                                                class="text-lg font-medium leading-6 text-gray-900"
                                            >
                                                Reminder emails
                                            </h5>
                                            <p
                                                class="mt-2 text-base leading-6 text-gray-500"
                                            >
                                                Lorem ipsum, dolor sit amet
                                                consectetur adipisicing elit.
                                                Maiores impedit perferendis
                                                suscipit eaque, iste dolor
                                                cupiditate blanditiis ratione.
                                            </p>
                                        </div>
                                    </div>
                                </li>
                            </ul> -->
                        </div>
                        <div class="relative -mx-4 mt-10 lg:col-start-1 lg:mt-0">
                            <svg class="absolute left-1/2 -translate-x-1/2 translate-y-16 transform lg:hidden" width="784" height="404" fill="none" viewBox="0 0 784 404">
                                <defs>
                                    <pattern id="e80155a9-dfde-425a-b5ea-1f6fadd20131" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                        <rect class="text-gray-200" x="0" y="0" width="4" height="4" fill="currentColor" />
                                    </pattern>
                                </defs>
                                <rect width="784" height="404" fill="url(#e80155a9-dfde-425a-b5ea-1f6fadd20131)" />
                            </svg>
                            <img class="relative mx-auto" width="490" src="~/assets/images/busydeskhands.jpg" alt />
                        </div>
                    </div>
                </div>
                <div class="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:items-center lg:gap-8">
                    <div class="relative">
                        <h4 class="text-2xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-3xl sm:leading-9">3. Set up a Digital Nomad Lifestyle</h4>
                        <p class="mt-3 text-lg leading-7 text-gray-500">With your newfound skills and business up and running, the final step is to learn how to be a 'digital nomad'. This includes what tools to use (software and hardware), when and where to work, and how to grow your remote business while on the road.</p>
                        <!-- <ul class="mt-10">
                            <li>
                                <div class="flex">
                                    <div class="flex-shrink-0">
                                        <div
                                            class="flex items-center justify-center w-12 h-12 text-white bg-indigo-500 rounded-md"
                                        >
                                            <svg
                                                class="w-6 h-6"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="ml-4">
                                        <h5
                                            class="text-lg font-medium leading-6 text-gray-900"
                                        >
                                            fasdfad fasdf asdf
                                        </h5>
                                        <p
                                            class="mt-2 text-base leading-6 text-gray-500"
                                        >
                                            Lorem ipsum, dolor sit amet
                                            consectetur adipisicing elit.
                                            Maiores impedit perferendis suscipit
                                            eaque, iste dolor cupiditate
                                            blanditiis ratione.
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li class="mt-10">
                                <div class="flex">
                                    <div class="flex-shrink-0">
                                        <div
                                            class="flex items-center justify-center w-12 h-12 text-white bg-indigo-500 rounded-md"
                                        >
                                            <svg
                                                class="w-6 h-6"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="ml-4">
                                        <h5
                                            class="text-lg font-medium leading-6 text-gray-900"
                                        >
                                            No hidden fees
                                        </h5>
                                        <p
                                            class="mt-2 text-base leading-6 text-gray-500"
                                        >
                                            Lorem ipsum, dolor sit amet
                                            consectetur adipisicing elit.
                                            Maiores impedit perferendis suscipit
                                            eaque, iste dolor cupiditate
                                            blanditiis ratione.
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li class="mt-10">
                                <div class="flex">
                                    <div class="flex-shrink-0">
                                        <div
                                            class="flex items-center justify-center w-12 h-12 text-white bg-indigo-500 rounded-md"
                                        >
                                            <svg
                                                class="w-6 h-6"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    d="M13 10V3L4 14h7v7l9-11h-7z"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="ml-4">
                                        <h5
                                            class="text-lg font-medium leading-6 text-gray-900"
                                        >
                                            Transfers are instant
                                        </h5>
                                        <p
                                            class="mt-2 text-base leading-6 text-gray-500"
                                        >
                                            Lorem ipsum, dolor sit amet
                                            consectetur adipisicing elit.
                                            Maiores impedit perferendis suscipit
                                            eaque, iste dolor cupiditate
                                            blanditiis ratione.
                                        </p>
                                    </div>
                                </div>
                            </li>
                        </ul> -->
                    </div>
                    <div class="relative -mx-4 mt-10 lg:mt-0">
                        <svg class="absolute left-1/2 -translate-x-1/2 translate-y-16 transform lg:hidden" width="784" height="404" fill="none" viewBox="0 0 784 404">
                            <defs>
                                <pattern id="ca9667ae-9f92-4be7-abcb-9e3d727f2941" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                    <rect class="text-gray-200" x="0" y="0" width="4" height="4" fill="currentColor" />
                                </pattern>
                            </defs>
                            <rect width="784" height="404" fill="url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)" />
                        </svg>
                        <img class="relative mx-auto" width="490" src="~/assets/images/map-and-laptop-440.jpg" alt />
                    </div>
                </div>
            </div>
        </div>

        <!-- Freebies -->
        <div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20 lg:px-8">
            <!-- We've used 3xl here, but feel free to try other max-widths based on your needs -->
            <div class="mx-auto max-w-3xl">
                <!-- Content goes here -->
                <p class="text-center text-3xl italic md:text-5xl">Plus $300+ worth of freebies!</p>
                <img class="my-8" src="~/assets/images/discounts.png" alt="discounts" />
                <p class="text-center text-sm">*not all discounts are available if purchasing course through Udemy.com</p>
            </div>
        </div>

        <!-- Pricing -->
        <div class="bg-gray-100">
            <div class="pt-12 sm:pt-16 lg:pt-20">
                <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                    <div class="text-center">
                        <h2 class="text-3xl font-extrabold leading-9 text-gray-900 sm:text-4xl sm:leading-10 lg:text-5xl lg:leading-none">Simple pricing</h2>
                        <p class="mt-4 text-xl leading-7 text-gray-600">If you're not satisfied, you can request a full refund within the first 30 days</p>
                    </div>
                </div>
            </div>
            <div class="mt-8 bg-white pb-16 sm:mt-12 sm:pb-20 lg:pb-28">
                <div class="relative">
                    <div class="absolute inset-0 h-1/2 bg-gray-100"></div>
                    <div class="relative mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                        <div class="mx-auto max-w-lg overflow-hidden rounded-lg shadow-lg lg:flex lg:max-w-none">
                            <div class="lg:flex-shrink-1 bg-white px-6 py-8 lg:p-12">
                                <h3 class="text-2xl font-extrabold leading-8 text-gray-900 sm:text-3xl sm:leading-9">Lifetime Membership</h3>
                                <p class="mt-6 text-base leading-6 text-gray-500">Get full-access to all of the course content. All plans include free updates for life with a 30-day money back guarantee.</p>
                                <div class="mt-8">
                                    <div class="flex items-center">
                                        <h4 class="flex-shrink-0 bg-white pr-4 text-sm font-semibold uppercase leading-5 tracking-wider text-secondary">What's included</h4>
                                        <div class="flex-1 border-t-2 border-gray-200"></div>
                                    </div>
                                    <ul class="lg:col-gap-8 lg:row-gap-5 mt-8 lg:grid lg:grid-cols-2">
                                        <li class="flex items-start lg:col-span-1">
                                            <div class="flex-shrink-0">
                                                <svg class="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                                </svg>
                                            </div>
                                            <p class="ml-3 text-sm leading-5 text-gray-700">10+ hours of video content</p>
                                        </li>
                                        <li class="mt-5 flex items-start lg:col-span-1 lg:mt-0">
                                            <div class="flex-shrink-0">
                                                <svg class="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                                </svg>
                                            </div>
                                            <p class="ml-3 text-sm leading-5 text-gray-700">Member resources</p>
                                        </li>
                                        <li class="mt-5 flex items-start lg:col-span-1 lg:mt-0">
                                            <div class="flex-shrink-0">
                                                <svg class="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                                </svg>
                                            </div>
                                            <p class="ml-3 text-sm leading-5 text-gray-700">Travel Developer Docs</p>
                                        </li>
                                        <li class="mt-5 flex items-start lg:col-span-1 lg:mt-0">
                                            <div class="flex-shrink-0">
                                                <svg class="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                                </svg>
                                            </div>
                                            <p class="ml-3 text-sm leading-5 text-gray-700">Freebies ;)</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="bg-gray-50 px-6 py-8 text-center lg:flex lg:flex-shrink-0 lg:flex-col lg:justify-center lg:p-12">
                                <p class="text-lg font-medium leading-6 text-gray-900">Pay once, own it forever</p>
                                <div class="mt-4 flex items-center justify-center text-5xl font-extrabold leading-none text-gray-900">
                                    <span>$199</span>
                                    <span class="ml-3 text-xl font-medium leading-7 text-gray-500">USD</span>
                                </div>
                                <div class="mt-6">
                                    <div class="rounded-md shadow">
                                        <a class="focus:outline-none focus:shadow-outline flex items-center justify-center rounded-md border border-transparent bg-secondary px-5 py-3 text-base font-medium uppercase leading-6 text-white transition duration-150 ease-in-out hover:bg-primary" href="https://www.udemy.com/the-complete-travel-developer-course-become-a-digital-nomad/" target="_blank">Get Access</a>
                                    </div>
                                </div>
                                <div class="mt-4 text-sm leading-5">
                                    <a class="font-medium text-gray-400" href="https://firebasestorage.googleapis.com/v0/b/travel-developer.appspot.com/o/2018RemoteWorkGuide2.pdf?alt=media&token=9e02e8ca-3f10-4b30-b9a0-53633fcf8d96" target="_blank">Get a free guide (20 mb)</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="bg-gray-50">
            <div class="mx-auto max-w-screen-xl px-4 py-12 sm:py-16 sm:px-6 lg:px-8">
                <div class="mx-auto max-w-3xl">
                    <h2 class="text-center text-3xl font-extrabold leading-9 text-gray-900 sm:text-4xl sm:leading-10">Frequently asked questions</h2>
                    <div class="mt-6 border-t-2 border-gray-200 pt-6">
                        <dl>
                            <div>
                                <dt class="text-lg leading-7">
                                    <button class="focus:outline-none flex w-full items-start justify-between text-left text-gray-400 focus:text-gray-900" @click="q1 = !q1">
                                        <span class="font-medium text-gray-900"> What is The Complete Travel Developer Course? </span>
                                        <span class="ml-6 flex h-7 items-center">
                                            <svg class="h-6 w-6 transform" :class="q1 ? 'rotate-180' : 'rotate-0'" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </span>
                                    </button>
                                </dt>
                                <dd class="mt-2 pr-12" :class="q1 ? 'block' : 'hidden'">
                                    <p class="text-base leading-6 text-gray-500">The Complete Travel Developer Course is a web design, development, and SEO course that helps students start their own remote freelancing business.</p>
                                </dd>
                            </div>
                            <div class="mt-6 border-t border-gray-200 pt-6">
                                <div>
                                    <dt class="text-lg leading-7">
                                        <button class="focus:outline-none flex w-full items-start justify-between text-left text-gray-400 focus:text-gray-900" @click="q2 = !q2">
                                            <span class="font-medium text-gray-900">Who is this course for?</span>
                                            <span class="ml-6 flex h-7 items-center">
                                                <svg class="h-6 w-6 transform" :class="q2 ? 'rotate-180' : 'rotate-0'" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </span>
                                        </button>
                                    </dt>
                                    <dd class="mt-2 pr-12" :class="q2 ? 'block' : 'hidden'">
                                        <p class="text-base leading-6 text-gray-500">
                                            Anyone looking to become a designer, developer, or increase their freelancing skills. Knowing how to create websites and further your freelancing profitability will greatly help any person looking to work while traveling. Also, the course is definitely not limited to travelers! - Small business owners, people looking to get into design and/or development, startup entrepreneurs and many other people can benefit from this course.
                                        </p>
                                    </dd>
                                </div>
                            </div>
                            <div class="mt-6 border-t border-gray-200 pt-6">
                                <div>
                                    <dt class="text-lg leading-7">
                                        <button class="focus:outline-none flex w-full items-start justify-between text-left text-gray-400 focus:text-gray-900" @click="q3 = !q3">
                                            <span class="font-medium text-gray-900">How long is the course?</span>
                                            <span class="ml-6 flex h-7 items-center">
                                                <svg class="h-6 w-6 transform" :class="q3 ? 'rotate-180' : 'rotate-0'" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </span>
                                        </button>
                                    </dt>
                                    <dd class="mt-2 pr-12" :class="q3 ? 'block' : 'hidden'">
                                        <p class="text-base leading-6 text-gray-500">In total, the course contains 10+ hours of content. However, most of the course is cut into short pieces of specific content for extreme clarity. You can easily search for and find sections of the course to rewatch whenever you need a reference.</p>
                                    </dd>
                                </div>
                            </div>
                            <div class="mt-6 border-t border-gray-200 pt-6">
                                <div>
                                    <dt class="text-lg leading-7">
                                        <button class="focus:outline-none flex w-full items-start justify-between text-left text-gray-400 focus:text-gray-900" @click="q4 = !q4">
                                            <span class="font-medium text-gray-900"> Do I need prior design, development, or traveling experience? </span>
                                            <span class="ml-6 flex h-7 items-center">
                                                <svg class="h-6 w-6 transform" :class="q4 ? 'rotate-180' : 'rotate-0'" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </span>
                                        </button>
                                    </dt>
                                    <dd class="mt-2 pr-12" :class="q4 ? 'block' : 'hidden'">
                                        <p class="text-base leading-6 text-gray-500">While all these skills are most definitely a benefit and will help ease you through some portions of the course, the outline of the course was made so a student with zero experience could easily learn each subject.</p>
                                    </dd>
                                </div>
                            </div>
                            <div class="mt-6 border-t border-gray-200 pt-6">
                                <div>
                                    <dt class="text-lg leading-7">
                                        <button class="focus:outline-none flex w-full items-start justify-between text-left text-gray-400 focus:text-gray-900" @click="q5 = !q5">
                                            <span class="font-medium text-gray-900"> How often do you update the course? </span>
                                            <span class="ml-6 flex h-7 items-center">
                                                <svg class="h-6 w-6 transform" :class="q5 ? 'rotate-180' : 'rotate-0'" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </span>
                                        </button>
                                    </dt>
                                    <dd class="mt-2 pr-12" :class="q5 ? 'block' : 'hidden'">
                                        <p class="text-base leading-6 text-gray-500">We update the course pretty regularly depending on new tools in the market or simply finding better ways to pass along knowledge. By purchasing the course you will have lifetime access and free updates.</p>
                                    </dd>
                                </div>
                            </div>
                            <div class="mt-6 border-t border-gray-200 pt-6">
                                <div>
                                    <dt class="text-lg leading-7">
                                        <button class="focus:outline-none flex w-full items-start justify-between text-left text-gray-400 focus:text-gray-900" @click="q6 = !q6">
                                            <span class="font-medium text-gray-900"> How long can I access the course material? </span>
                                            <span class="ml-6 flex h-7 items-center">
                                                <svg class="h-6 w-6 transform" :class="q6 ? 'rotate-180' : 'rotate-0'" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </span>
                                        </button>
                                    </dt>
                                    <dd class="mt-2 pr-12" :class="q6 ? 'block' : 'hidden'">
                                        <p class="text-base leading-6 text-gray-500">For life! Seriously - or at least until the internet ceases to exist.</p>
                                    </dd>
                                </div>
                            </div>
                            <div class="mt-6 border-t border-gray-200 pt-6">
                                <div>
                                    <dt class="text-lg leading-7">
                                        <button class="focus:outline-none flex w-full items-start justify-between text-left text-gray-400 focus:text-gray-900" @click="q7 = !q7">
                                            <span class="font-medium text-gray-900"> How quickly can I apply the knowledge learned in this course? </span>
                                            <span class="ml-6 flex h-7 items-center">
                                                <svg class="h-6 w-6 transform" :class="q7 ? 'rotate-180' : 'rotate-0'" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </span>
                                        </button>
                                    </dt>
                                    <dd class="mt-2 pr-12" :class="q7 ? 'block' : 'hidden'">
                                        <p class="text-base leading-6 text-gray-500">After completing the course you’ll have all the necessary skills and resources to immediately start building websites or designs from scratch. After another 3-4 weeks of travel prep work you could be on your way to working anywhere in the world!</p>
                                    </dd>
                                </div>
                            </div>
                            <div class="mt-6 border-t border-gray-200 pt-6">
                                <div>
                                    <dt class="text-lg leading-7">
                                        <button class="focus:outline-none flex w-full items-start justify-between text-left text-gray-400 focus:text-gray-900" @click="q8 = !q8">
                                            <span class="font-medium text-gray-900"> What in this course will set me above other developers doing the same thing? </span>
                                            <span class="ml-6 flex h-7 items-center">
                                                <svg class="h-6 w-6 transform" :class="q8 ? 'rotate-180' : 'rotate-0'" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </span>
                                        </button>
                                    </dt>
                                    <dd class="mt-2 pr-12" :class="q8 ? 'block' : 'hidden'">
                                        <p class="text-base leading-6 text-gray-500">
                                            Many people in any freelance field are well versed in a certain skill - design, development, etc. The Complete Travel Developer Course gives you the basics of all these skills plus a proven professional process that many traveling freelancers don’t excel at. This includes tested Proposals, Contracts, Sales Strategies and more. That being said there’s nothing in this course that is the ‘magic bullet’ to success. This course provides digestable resources
                                            to point you in the right direction - but your hard work will ultimately set you apart.
                                        </p>
                                    </dd>
                                </div>
                            </div>
                            <div class="mt-6 border-t border-gray-200 pt-6">
                                <div>
                                    <dt class="text-lg leading-7">
                                        <button class="focus:outline-none flex w-full items-start justify-between text-left text-gray-400 focus:text-gray-900" @click="q9 = !q9">
                                            <span class="font-medium text-gray-900"> Do I need to be a designer or developer to take this course? </span>
                                            <span class="ml-6 flex h-7 items-center">
                                                <svg class="h-6 w-6 transform" :class="q9 ? 'rotate-180' : 'rotate-0'" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </span>
                                        </button>
                                    </dt>
                                    <dd class="mt-2 pr-12" :class="q9 ? 'block' : 'hidden'">
                                        <p class="text-base leading-6 text-gray-500">Not at all. We start from ground zero to help you gain design, development, and many more skills. Many digital nomads are designers or developers but being a freelancer in any niche field can give you a great competitive edge. Also, you could use this course to supplement your other freelance skills.</p>
                                    </dd>
                                </div>
                            </div>
                            <div class="mt-6 border-t border-gray-200 pt-6">
                                <div>
                                    <dt class="text-lg leading-7">
                                        <button class="focus:outline-none flex w-full items-start justify-between text-left text-gray-400 focus:text-gray-900" @click="q10 = !q10">
                                            <span class="font-medium text-gray-900"> Can I take this course with a PC, Mac, or both? </span>
                                            <span class="ml-6 flex h-7 items-center">
                                                <svg class="h-6 w-6 transform" :class="q10 ? 'rotate-180' : 'rotate-0'" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </span>
                                        </button>
                                    </dt>
                                    <dd class="mt-2 pr-12" :class="q10 ? 'block' : 'hidden'">
                                        <p class="text-base leading-6 text-gray-500">All of the content is taught from a Mac. Also, Sketch is currently only available for Mac. So we HIGHLY suggest you have a Mac to take the course. Having worked in the industry for awhile, I know most designers and developers use a Mac. And trust me once you go Mac, you'll never go back!</p>
                                    </dd>
                                </div>
                            </div>
                            <div class="mt-6 border-t border-gray-200 pt-6">
                                <div>
                                    <dt class="text-lg leading-7">
                                        <button class="focus:outline-none flex w-full items-start justify-between text-left text-gray-400 focus:text-gray-900" @click="q11 = !q11">
                                            <span class="font-medium text-gray-900"> How much money can I make working remotely? </span>
                                            <span class="ml-6 flex h-7 items-center">
                                                <svg class="h-6 w-6 transform" :class="q11 ? 'rotate-180' : 'rotate-0'" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </span>
                                        </button>
                                    </dt>
                                    <dd class="mt-2 pr-12" :class="q11 ? 'block' : 'hidden'">
                                        <p class="text-base leading-6 text-gray-500">This course isn’t going to make you an instant millionaire - or millionaire at all for that matter. But the skills and strategies in the Complete Travel Developer Course will help you sustain a comfortable lifestyle while working remotely.</p>
                                    </dd>
                                </div>
                            </div>
                            <div class="mt-6 border-t border-gray-200 pt-6">
                                <div>
                                    <dt class="text-lg leading-7">
                                        <button class="focus:outline-none flex w-full items-start justify-between text-left text-gray-400 focus:text-gray-900" @click="q12 = !q12">
                                            <span class="font-medium text-gray-900"> What are my other options to learn how to become a remote worker? </span>
                                            <span class="ml-6 flex h-7 items-center">
                                                <svg class="h-6 w-6 transform" :class="q12 ? 'rotate-180' : 'rotate-0'" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </span>
                                        </button>
                                    </dt>
                                    <dd class="mt-2 pr-12" :class="q12 ? 'block' : 'hidden'">
                                        <p class="text-base leading-6 text-gray-500">
                                            There are plenty of resources online from various forums, blog posts, and YouTube videos. These will take much longer to learn but for travel tips I would suggestion looking at
                                            <a href="http://nomadicmatt.com/" target="_blank">Nomadic Matt's blog</a>
                                            and
                                            <a href="http://nomadlist.com/" target="_blank">Nomadlist</a>
                                            and for technical skills use
                                            <a href="https://teamtreehouse.com/" target="_blank">Treehouse</a>, <a href="https://www.codecademy.com/" target="_blank">Codecademy</a>, and <a href="https://generalassemb.ly/" target="_blank">General Assembly</a>.
                                        </p>
                                    </dd>
                                </div>
                            </div>
                            <div class="mt-6 border-t border-gray-200 pt-6">
                                <div>
                                    <dt class="text-lg leading-7">
                                        <button class="focus:outline-none flex w-full items-start justify-between text-left text-gray-400 focus:text-gray-900" @click="q13 = !q13">
                                            <span class="font-medium text-gray-900">Is there a refund policy?</span>
                                            <span class="ml-6 flex h-7 items-center">
                                                <svg class="h-6 w-6 transform" :class="q13 ? 'rotate-180' : 'rotate-0'" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </span>
                                        </button>
                                    </dt>
                                    <dd class="mt-2 pr-12" :class="q13 ? 'block' : 'hidden'">
                                        <p class="text-base leading-6 text-gray-500">The Complete Travel Developer Course includes a full 100% money back guarantee within 30 days.</p>
                                    </dd>
                                </div>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>
        </div>

        <div class="bg-gray-100">
            <div class="mx-auto max-w-screen-xl px-4 py-12 text-center sm:px-6 lg:py-16 lg:px-8">
                <h2 class="text-3xl font-extrabold leading-9 tracking-tight text-gray-800 sm:text-4xl sm:leading-10">
                    <span>Ready to become a remote worker?</span>
                    <br />
                    <span>Get started today.</span>
                </h2>
                <div class="mt-8 flex justify-center">
                    <div class="inline-flex rounded-md shadow">
                        <a class="focus:outline-none focus:shadow-outline inline-flex items-center justify-center rounded-md border border-transparent bg-secondary px-5 py-3 text-xl font-medium uppercase leading-6 text-white transition duration-150 ease-in-out hover:bg-primary" href="https://www.udemy.com/the-complete-travel-developer-course-become-a-digital-nomad/" target="_blank">Join Now</a>
                    </div>
                </div>
            </div>
        </div>

        <TheFooter />
    </div>
</template>

<script>
import TheFooter from '~/components/TheFooter'

export default {
    components: {
        TheFooter,
    },

    data() {
        return {
            q1: false,
            q2: false,
            q3: false,
            q4: false,
            q5: false,
            q6: false,
            q7: false,
            q8: false,
            q9: false,
            q10: false,
            q11: false,
            q12: false,
            q13: false,
        }
    },
}
</script>
