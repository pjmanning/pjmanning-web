<template>
    <div>
        <!-- nav  -->
        <div class="h-4 bg-gray-800"></div>
        <nav class="bg-white shadow">
            <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div class="flex justify-between h-20">
                    <nuxt-link to="/" class="flex items-center text-3xl text-gray-800 uppercase font-marker hover:text-gray-600">PJ MANNING</nuxt-link>
                    <div class="flex">
                        <div class="hidden sm:ml-6 sm:flex sm:mr-auto sm:space-x-8">
                            <!-- Current: "border-blue-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" -->
                            <a href="#projects" v-scroll-to="'#projects'" class="inline-flex items-center px-1 pt-1 font-medium text-gray-800 uppercase hover:text-gray-600"> Projects </a>
                            <a href="#about" v-scroll-to="'#about'" class="inline-flex items-center px-1 pt-1 font-medium text-gray-800 uppercase hover:text-gray-600"> About </a>
                            <a href="#contact" v-scroll-to="'#contact'" class="inline-flex items-center px-1 pt-1 font-medium text-gray-800 uppercase hover:text-gray-600"> Contact </a>
                            <nuxt-link to="/blog" class="inline-flex items-center px-1 pt-1 font-medium text-gray-800 uppercase hover:text-gray-600"> Blog </nuxt-link>
                        </div>
                    </div>
                    <div class="flex items-center -mr-2 sm:hidden">
                        <!-- Mobile menu button -->
                        <button @click="isMenuOpen = !isMenuOpen" class="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500" aria-expanded="false">
                            <span class="sr-only">Open main menu</span>
                            <svg v-if="!isMenuOpen" class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                            <svg v-else class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <div class="sm:hidden" :class="isMenuOpen ? 'block' : 'hidden'">
                <div class="pt-2 pb-3 space-y-1">
                    <!-- Current: "bg-blue-50 border-blue-500 text-blue-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" -->
                    <a href="#projects" v-scroll-to="'#projects'" class="block py-2 pl-3 pr-4 text-base font-medium text-blue-700 border-l-4 border-blue-500 bg-blue-50">Projects</a>
                    <a href="#about" v-scroll-to="'#about'" class="block py-2 pl-3 pr-4 text-base font-medium text-gray-500 border-l-4 border-transparent hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700">About</a>
                    <a href="#contact" v-scroll-to="'#contact'" class="block py-2 pl-3 pr-4 text-base font-medium text-gray-500 border-l-4 border-transparent hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700">Contact</a>
                    <nuxt-link to="/blog" class="block py-2 pl-3 pr-4 text-base font-medium text-gray-500 border-l-4 border-transparent hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700">Blog</nuxt-link>
                </div>
            </div>
        </nav>
        <!-- end nav  -->

        <!-- hero -->
        <div class="flex flex-col justify-between max-w-3xl py-24 mx-4 sm:mx-auto sm:flex-row">
            <div class="w-full text-4xl font-bold text-center md:w-full md:-ml-12 md:mr-8 md:mt-5 md:text-5xl sm:w-3/5 sm:text-left">
                <div class="leading-tight">
                    Hey, I'm PJ. I&nbsp;build&nbsp;stuff...
                    <span class="leading-tight text-blue-400"> <br />and spend a lot of time in the water. </span>
                </div>
            </div>
            <div class="mt-8 sm:mt-0">
                <img src="~/assets/images/home/working.jpg" width="285px" alt="hero" class="mx-auto rounded-lg sm:mx-0" />
            </div>
        </div>
        <!-- end hero -->

        <!-- blurb  -->
        <div class="max-w-3xl mx-4 sm:mx-auto">
            <p class="text-lg sm:text-xl">
                I believe the next wave of great of advances in human society with come from combining
                <strong>technology</strong>, <strong>community</strong>, and <strong>sustainability</strong>. I'm currently working on a few independent and open-sourced projects based on these pillars.
            </p>

            <div class="flex items-center justify-between py-6">
                <div class="w-full py-8 sm:py-0">
                    <img src="~/assets/images/home/whaleSharkPhoto.jpg" alt="whale shark" />
                </div>
            </div>
        </div>
        <!-- end blurb  -->

        <!-- divider  -->
        <div class="relative max-w-3xl mx-auto mt-12" id="projects">
            <div class="absolute inset-0 flex items-center" aria-hidden="true">
                <div class="w-full border-t border-gray-300"></div>
            </div>
            <div class="relative flex justify-center">
                <span class="px-3 text-lg font-medium text-gray-900 bg-white"> Projects </span>
            </div>
        </div>
        <!-- end divider  -->

        <!-- projects  -->
        <div class="overflow-x-hidden">
            <div class="relative max-w-3xl py-16 mx-4 mb-16 text-xl border-b border-gray-300 sm:mx-auto">
                <ul class="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <!-- BINNDLE -->
                    <li class="col-span-1 border border-gray-100 rounded-lg shadow bg-background-card">
                        <div class="flex items-center justify-between w-full p-6 space-x-6">
                            <div class="flex-1 truncate">
                                <div class="flex items-center space-x-3">
                                    <h3 class="text-xl font-medium leading-5 text-gray-900 truncate">Binndle</h3>
                                </div>
                                <p class="mt-1 text-sm leading-5 text-gray-500 truncate">Find out what people use</p>
                            </div>
                            <img class="flex-shrink-0 w-12 h-12 bg-gray-300 rounded-full" src="~/assets/images/home/binndle-logo.png" alt />
                        </div>
                        <div class="bg-gray-100 border-t border-gray-200 rounded-b-lg">
                            <div class="flex -mt-px">
                                <div class="flex flex-1 w-0 border-r border-gray-200">
                                    <a href="https://binndle.com" target="_blank" class="relative inline-flex items-center justify-center flex-1 w-0 py-4 -mr-px text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out border border-transparent rounded-bl-lg hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:z-10">
                                        <svg class="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                                        </svg>
                                        <span class="ml-3">Website</span>
                                    </a>
                                </div>
                                <!-- <div class="flex flex-1 w-0 -ml-px">
                                    <a
                                        href="https://itunes.apple.com/gb/app/whale-shark-network-maldives/id882042297?mt=8"
                                        target="_blank"
                                        class="relative inline-flex items-center justify-center flex-1 w-0 py-4 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out border border-transparent rounded-br-lg hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:z-10"
                                    >
                                        <svg
                                            class="w-5 h-5 text-gray-400"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                                                clip-rule="evenodd"
                                            />
                                        </svg>
                                        <span class="ml-3">iOS</span>
                                    </a>
                                </div>-->
                            </div>
                        </div>
                    </li>

                    <!-- ANIMALI -->
                    <li class="col-span-1 border border-gray-100 rounded-lg shadow bg-background-card">
                        <div class="flex items-center justify-between w-full p-6 space-x-6">
                            <div class="flex-1 truncate">
                                <div class="flex items-center space-x-3">
                                    <h3 class="text-xl font-medium leading-5 text-gray-900 truncate">Animali</h3>
                                </div>
                                <p class="mt-1 text-sm leading-5 text-gray-500 truncate">Animal conservation platform</p>
                            </div>
                            <img class="flex-shrink-0 w-12 h-12 bg-gray-300 rounded-full" src="~/assets/images/home/animali-logo.png" alt />
                        </div>
                        <div class="bg-gray-100 border-t border-gray-200 rounded-b-lg">
                            <div class="flex -mt-px">
                                <div class="flex flex-1 w-0 border-r border-gray-200">
                                    <a href="https://animali.life" target="_blank" class="relative inline-flex items-center justify-center flex-1 w-0 py-4 -mr-px text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out border border-transparent rounded-bl-lg hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:z-10">
                                        <svg class="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                                        </svg>
                                        <span class="ml-3">Website</span>
                                    </a>
                                </div>
                                <!-- <div class="flex flex-1 w-0 -ml-px">
                                    <a
                                        href="https://itunes.apple.com/gb/app/whale-shark-network-maldives/id882042297?mt=8"
                                        target="_blank"
                                        class="relative inline-flex items-center justify-center flex-1 w-0 py-4 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out border border-transparent rounded-br-lg hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:z-10"
                                    >
                                        <svg
                                            class="w-5 h-5 text-gray-400"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                                                clip-rule="evenodd"
                                            />
                                        </svg>
                                        <span class="ml-3">iOS</span>
                                    </a>
                                </div>-->
                            </div>
                        </div>
                    </li>

                    <!-- WAVETROTTER -->
                    <li class="col-span-1 border border-gray-100 rounded-lg shadow bg-background-card">
                        <div class="flex items-center justify-between w-full p-6 space-x-6">
                            <div class="flex-1 truncate">
                                <div class="flex items-center space-x-3">
                                    <h3 class="text-xl font-medium leading-5 text-gray-900 truncate">Wavetrotter</h3>
                                </div>
                                <p class="mt-1 text-sm leading-5 text-gray-500 truncate">The best surf spots around the world</p>
                            </div>
                            <img class="flex-shrink-0 w-12 h-12 bg-gray-300 rounded-full" src="~/assets/images/home/wavetrotter-logo.png" alt />
                        </div>
                        <div class="bg-gray-100 border-t border-gray-200 rounded-b-lg">
                            <div class="flex -mt-px">
                                <div class="flex flex-1 w-0 border-r border-gray-200">
                                    <a href="https://wavetrottersurf.com" target="_blank" class="relative inline-flex items-center justify-center flex-1 w-0 py-4 -mr-px text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out border border-transparent rounded-bl-lg hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:z-10">
                                        <svg class="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                                        </svg>
                                        <span class="ml-3">Website</span>
                                    </a>
                                </div>
                                <div class="flex flex-1 w-0 -ml-px border-r border-gray-200">
                                    <a href="https://itunes.apple.com/app/id1318032776" target="_blank" class="relative inline-flex items-center justify-center flex-1 w-0 py-4 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out border border-transparent rounded-br-lg hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:z-10">
                                        <svg class="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" />
                                        </svg>
                                        <span class="ml-3">iOS</span>
                                    </a>
                                </div>
                                <div class="flex flex-1 w-0 -ml-px">
                                    <a href="https://play.google.com/store/apps/details?id=com.dooddevelopments.Wavetrotter" target="_blank" class="relative inline-flex items-center justify-center flex-1 w-0 py-4 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out border border-transparent rounded-br-lg hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10">
                                        <svg class="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" />
                                        </svg>
                                        <span class="ml-3">Android</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </li>
                    <!-- <li class="col-span-1 rounded-lg shadow bg-background-card">
                        <div
                            class="flex items-center justify-between w-full p-6 space-x-6"
                        >
                            <div class="flex-1 truncate">
                                <div class="flex items-center space-x-3">
                                    <h3
                                        class="text-xl font-medium leading-5 text-gray-900 truncate"
                                    >
                                        Travel Developer
                                    </h3>
                                </div>
                                <p
                                    class="mt-1 text-sm leading-5 text-gray-500 truncate"
                                >
                                    Learn how to work remotely
                                </p>
                            </div>
                            <img
                                class="flex-shrink-0 w-12 h-12 bg-gray-300 rounded-full"
                                src="../../static/traveldeveloper-logo.png"
                                alt
                            />
                        </div>
                        <div
                            class="bg-gray-100 border-t border-gray-200 rounded-b-lg"
                        >
                            <div class="flex -mt-px">
                                <div
                                    class="flex flex-1 w-0 border-r border-gray-200"
                                >
                                    <a
                                        href="https://www.traveldeveloper.com/"
                                        target="_blank"
                                        class="relative inline-flex items-center justify-center flex-1 w-0 py-4 -mr-px text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out border border-transparent rounded-bl-lg hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:z-10"
                                    >
                                        <svg
                                            class="w-5 h-5 text-gray-400"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"
                                            />
                                        </svg>
                                        <span class="ml-3">Website</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </li> -->
                    <!-- STARTSMALL  -->
                    <li class="col-span-1 border border-gray-100 rounded-lg shadow bg-background-card">
                        <div class="flex items-center justify-between w-full p-6 space-x-6">
                            <div class="flex-1 truncate">
                                <div class="flex items-center space-x-3">
                                    <h3 class="text-xl font-medium leading-5 text-gray-900 truncate">#startsmall</h3>
                                </div>
                                <p class="mt-1 text-sm leading-5 text-gray-500 truncate">Jack Dorsey's $1B COVID-19 relief fund</p>
                            </div>
                            <img class="flex-shrink-0 w-12 h-12 bg-gray-300 rounded-full" src="~/assets/images/home/startsmall-logo.jpg" alt />
                        </div>
                        <div class="bg-gray-100 border-t border-gray-200 rounded-b-lg">
                            <div class="flex -mt-px">
                                <div class="flex flex-1 w-0 border-r border-gray-200">
                                    <a href="https://startsmall.llc/" target="_blank" class="relative inline-flex items-center justify-center flex-1 w-0 py-4 -mr-px text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out border border-transparent rounded-bl-lg hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:z-10">
                                        <svg class="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                                        </svg>
                                        <span class="ml-3">Website</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>

                <div class="absolute right-0" style="top: 50px; transform: translate(100%) rotate(180deg)">
                    <svg width="170px" height="170px">
                        <use xlink:href="#dots-triangle" />
                    </svg>
                </div>
            </div>
        </div>
        <!-- end projects  -->

        <!-- about me  -->
        <div class="overflow-x-hidden border-b border-gray-200">
            <div class="relative max-w-3xl pb-16 mx-4 text-xl get-to-know-me sm:mx-auto">
                <h2 class="mb-6 font-bold text-center sm:text-left" id="about">A little about me...</h2>

                <div class="absolute left-0" style="top: 50px; transform: translateX(-100%)">
                    <svg width="170px" height="170px">
                        <use xlink:href="#dots-triangle" />
                    </svg>
                </div>

                <div class="flex flex-col items-center justify-between mb-16 sm:flex-row">
                    <div>
                        <img src="~/assets/images/home/meSmallCircle.png" alt="avatar" class="w-32 h-32 mb-8 rounded-full lg:mb-0" />
                    </div>
                    <div class="flex-1 text-lg sm:text-xl sm:ml-6">Over the past 10 years, I've worked with 30+ businesses creating websites and mobile applications. I have a unique perspective having worked with the fastest growing e-commerce website in the world (Jet.com), to tracking whale sharks in the Maldives.</div>
                </div>

                <div class="h-96">
                    <iframe class="top-0 left-0 w-full h-full border-0" src="https://www.youtube.com/embed/FlAYtA1exRA" style="border: 0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
        </div>
        <!-- end about me  -->

        <!-- contact form  -->
        <div class="px-4 py-16 overflow-hidden bg-white sm:px-6 lg:px-8 lg:py-24" id="contact">
            <div class="relative max-w-xl mx-auto">
                <svg class="absolute transform translate-x-1/2 left-full" width="404" height="404" fill="none" viewBox="0 0 404 404" aria-hidden="true">
                    <defs>
                        <pattern id="85737c0e-0916-41d7-917f-596dc7edfa27" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                            <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
                        </pattern>
                    </defs>
                    <rect width="404" height="404" fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
                </svg>
                <svg class="absolute bottom-0 transform -translate-x-1/2 right-full" width="404" height="404" fill="none" viewBox="0 0 404 404" aria-hidden="true">
                    <defs>
                        <pattern id="85737c0e-0916-41d7-917f-596dc7edfa27" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                            <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
                        </pattern>
                    </defs>
                    <rect width="404" height="404" fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
                </svg>
                <div class="text-center">
                    <h2 class="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">For projects, inquiries, and/or beer...</h2>
                    <!-- <p class="mt-4 text-lg leading-6 text-gray-500">Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.</p> -->
                </div>
                <div class="mt-12">
                    <form action="https://formspree.io/xyydaozy" method="POST" class="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                        <div>
                            <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
                            <div class="mt-1">
                                <input id="name" type="text" name="name" placeholder="Jon Snow" required autocomplete="given-name" class="block w-full px-4 py-3 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
                            </div>
                        </div>
                        <div>
                            <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                            <div class="mt-1">
                                <input id="email" type="email" name="_replyto" placeholder="elon@spacex.com" required autocomplete="email" class="block w-full px-4 py-3 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
                            </div>
                        </div>
                        <div class="sm:col-span-2">
                            <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
                            <div class="mt-1">
                                <textarea id="message" name="message" rows="5" required placeholder="Let's build some cool shit together..." class="block w-full px-4 py-3 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"></textarea>
                            </div>
                        </div>

                        <div class="sm:col-span-2">
                            <button type="submit" class="inline-flex items-center justify-center w-full px-6 py-3 text-base font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Let's chat</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        <!-- follow me  -->
        <div class="bg-gray-100">
            <div class="max-w-3xl py-16 pb-8 mx-auto text-xl text-center">
                <h2 class="mb-8 text-2xl font-bold">Follow My Work!</h2>

                <div class="w-4/5 mx-auto mb-8">
                    <p class="mb-8 text-lg sm:text-xl">If you're interested in my projects and want to keep up or collaborate - follow and contact me on twitter</p>

                    <a href="https://twitter.com/pj_manning" target="_blank" class="inline-flex items-center px-12 py-4 rounded" style="background-color: #1da1f2">
                        <svg width="20" height="17" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M19.807 1.943a8.588 8.588 0 0 1-2.036 2.135 11.918 11.918 0 0 1-.465 3.854 12.085 12.085 0 0 1-1.452 3.177 12.426 12.426 0 0 1-2.318 2.691c-.897.78-1.978 1.402-3.243 1.867-1.265.464-2.618.697-4.06.697-2.27 0-4.348-.618-6.233-1.854.293.034.62.051.98.051 1.885 0 3.565-.588 5.04-1.764a3.915 3.915 0 0 1-2.363-.825 4.038 4.038 0 0 1-1.432-2.039c.276.043.532.064.766.064.36 0 .717-.047 1.068-.14A3.982 3.982 0 0 1 1.73 8.43c-.617-.754-.925-1.63-.925-2.627v-.051c.57.324 1.182.498 1.835.524a4.1 4.1 0 0 1-1.32-1.47 4.078 4.078 0 0 1-.49-1.969c0-.75.185-1.445.553-2.084a11.548 11.548 0 0 0 3.702 3.05 11.163 11.163 0 0 0 4.669 1.271c-.067-.324-.1-.639-.1-.946 0-1.142.395-2.116 1.187-2.92C11.632.402 12.589 0 13.712 0c1.173 0 2.161.435 2.966 1.304a7.878 7.878 0 0 0 2.576-.997 3.997 3.997 0 0 1-1.785 2.275 7.98 7.98 0 0 0 2.338-.639z"
                                fill-rule="nonzero"
                            />
                        </svg>
                        <span class="ml-4 text-xl text-white">@pj_manning</span>
                    </a>
                </div>
            </div>

            <div class="pb-4 mx-auto -mt-32 overflow-x-hidden">
                <svg width="725" height="166" class="mx-auto" xmlns="http://www.w3.org/2000/svg">
                    <g fill="none" fill-rule="evenodd">
                        <g opacity=".515">
                            <path
                                d="M1.848 165.696a1.848 1.848 0 1 1 0-3.696 1.848 1.848 0 0 1 0 3.696zm370 0a1.848 1.848 0 1 1 0-3.696 1.848 1.848 0 0 1 0 3.696zM20.326 162a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm-351.522 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm-351.521 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zM75.76 162a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm-351.52 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm-351.522 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm-351.521 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm-351.522 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm-351.522 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm-351.305 3.696a1.848 1.848 0 1 1 0-3.696 1.848 1.848 0 0 1 0 3.696zm370 0a1.848 1.848 0 1 1 0-3.696 1.848 1.848 0 0 1 0 3.696zM205.326 162a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm-351.522 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm-351.521 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm-351.523 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm-351.52 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm-351.522 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm-351.521 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm-351.522 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm-351.522 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696z"
                                opacity=".503"
                                fill="#2E855A"
                            />
                        </g>
                        <g opacity=".9">
                            <g opacity=".515" fill="#2E855A">
                                <path
                                    d="M1.848 147.696a1.848 1.848 0 1 1 0-3.696 1.848 1.848 0 0 1 0 3.696zm370 0a1.848 1.848 0 1 1 0-3.696 1.848 1.848 0 0 1 0 3.696zM20.326 144a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm-351.522 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm-351.521 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zM75.76 144a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm-351.52 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm-351.522 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm-351.521 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm-351.522 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm-351.522 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm-351.305 3.696a1.848 1.848 0 1 1 0-3.696 1.848 1.848 0 0 1 0 3.696zm370 0a1.848 1.848 0 1 1 0-3.696 1.848 1.848 0 0 1 0 3.696zM205.326 144a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm-351.522 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm-351.521 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm-351.523 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm-351.52 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm-351.522 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm-351.521 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm-351.522 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm-351.522 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696z"
                                    opacity=".503"
                                />
                            </g>
                        </g>
                        <g opacity=".8">
                            <g opacity=".515" fill="#2E855A">
                                <path
                                    d="M1.848 129.696a1.848 1.848 0 1 1 0-3.696 1.848 1.848 0 0 1 0 3.696zm370 0a1.848 1.848 0 1 1 0-3.696 1.848 1.848 0 0 1 0 3.696zM20.326 126a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm-351.522 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm-351.521 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zM75.76 126a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm-351.52 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm-351.522 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm-351.521 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm-351.522 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm-351.522 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm-351.305 3.696a1.848 1.848 0 1 1 0-3.696 1.848 1.848 0 0 1 0 3.696zm370 0a1.848 1.848 0 1 1 0-3.696 1.848 1.848 0 0 1 0 3.696zM205.326 126a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm-351.522 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm-351.521 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm-351.523 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm-351.52 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm-351.522 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm-351.521 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm-351.522 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm-351.522 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696z"
                                    opacity=".503"
                                />
                            </g>
                        </g>
                        <g opacity=".7">
                            <g opacity=".515" fill="#2E855A">
                                <path
                                    d="M1.848 111.696a1.848 1.848 0 1 1 0-3.696 1.848 1.848 0 0 1 0 3.696zm370 0a1.848 1.848 0 1 1 0-3.696 1.848 1.848 0 0 1 0 3.696zM20.326 108a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm-351.522 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm-351.521 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zM75.76 108a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm-351.52 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm-351.522 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm-351.521 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm-351.522 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm-351.522 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm-351.305 3.696a1.848 1.848 0 1 1 0-3.696 1.848 1.848 0 0 1 0 3.696zm370 0a1.848 1.848 0 1 1 0-3.696 1.848 1.848 0 0 1 0 3.696zM205.326 108a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm-351.522 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm-351.521 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm-351.523 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm-351.52 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm-351.522 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm-351.521 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm-351.522 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm-351.522 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696z"
                                    opacity=".503"
                                />
                            </g>
                        </g>
                        <g opacity=".6">
                            <g opacity=".515" fill="#2E855A">
                                <path
                                    d="M1.848 93.696a1.848 1.848 0 1 1 0-3.696 1.848 1.848 0 0 1 0 3.696zm370 0a1.848 1.848 0 1 1 0-3.696 1.848 1.848 0 0 1 0 3.696zM20.326 90a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zM38.804 90a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zM57.283 90a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zM75.76 90a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zM94.24 90a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm-351.522 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm-351.521 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm-351.522 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm-351.522 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm-351.305 3.696a1.848 1.848 0 1 1 0-3.696 1.848 1.848 0 0 1 0 3.696zm370 0a1.848 1.848 0 1 1 0-3.696 1.848 1.848 0 0 1 0 3.696zM205.326 90a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm-351.522 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm-351.521 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zM260.76 90a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm-351.52 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm-351.522 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm-351.521 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm-351.522 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm-351.522 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696z"
                                    opacity=".503"
                                />
                            </g>
                        </g>
                        <g opacity=".5">
                            <g opacity=".515" fill="#2E855A">
                                <path
                                    d="M1.848 75.696a1.848 1.848 0 1 1 0-3.696 1.848 1.848 0 0 1 0 3.696zm370 0a1.848 1.848 0 1 1 0-3.696 1.848 1.848 0 0 1 0 3.696zM20.326 72a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zM38.804 72a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zM57.283 72a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zM75.76 72a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zM94.24 72a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm-351.522 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm-351.521 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm-351.522 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm-351.522 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm-351.305 3.696a1.848 1.848 0 1 1 0-3.696 1.848 1.848 0 0 1 0 3.696zm370 0a1.848 1.848 0 1 1 0-3.696 1.848 1.848 0 0 1 0 3.696zM205.326 72a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm-351.522 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm-351.521 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zM260.76 72a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm-351.52 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm-351.522 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm-351.521 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm-351.522 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm-351.522 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696z"
                                    opacity=".503"
                                />
                            </g>
                        </g>
                        <g opacity=".4">
                            <g opacity=".515" fill="#2E855A">
                                <path
                                    d="M1.848 57.696a1.848 1.848 0 1 1 0-3.696 1.848 1.848 0 0 1 0 3.696zm370 0a1.848 1.848 0 1 1 0-3.696 1.848 1.848 0 0 1 0 3.696zM20.326 54a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zM38.804 54a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zM57.283 54a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zM75.76 54a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zM94.24 54a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm-351.522 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm-351.521 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm-351.522 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm-351.522 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm-351.305 3.696a1.848 1.848 0 1 1 0-3.696 1.848 1.848 0 0 1 0 3.696zm370 0a1.848 1.848 0 1 1 0-3.696 1.848 1.848 0 0 1 0 3.696zM205.326 54a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm-351.522 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm-351.521 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zM260.76 54a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm-351.52 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm-351.522 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm-351.521 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm-351.522 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm-351.522 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696z"
                                    opacity=".503"
                                />
                            </g>
                        </g>
                        <g opacity=".3">
                            <g opacity=".515" fill="#2E855A">
                                <path
                                    d="M1.848 39.696a1.848 1.848 0 1 1 0-3.696 1.848 1.848 0 0 1 0 3.696zm370 0a1.848 1.848 0 1 1 0-3.696 1.848 1.848 0 0 1 0 3.696zM20.326 36a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zM38.804 36a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zM57.283 36a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zM75.76 36a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zM94.24 36a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm-351.522 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm-351.521 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm-351.522 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm-351.522 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm-351.305 3.696a1.848 1.848 0 1 1 0-3.696 1.848 1.848 0 0 1 0 3.696zm370 0a1.848 1.848 0 1 1 0-3.696 1.848 1.848 0 0 1 0 3.696zM205.326 36a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm-351.522 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm-351.521 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zM260.76 36a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm-351.52 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm-351.522 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm-351.521 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm-351.522 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm-351.522 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696z"
                                    opacity=".503"
                                />
                            </g>
                        </g>
                        <g opacity=".2">
                            <g opacity=".515" fill="#1C75BC">
                                <path
                                    d="M1.848 21.696a1.848 1.848 0 1 1 0-3.696 1.848 1.848 0 0 1 0 3.696zm370 0a1.848 1.848 0 1 1 0-3.696 1.848 1.848 0 0 1 0 3.696zM20.326 18a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zM38.804 18a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zM57.283 18a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zM75.76 18a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zM94.24 18a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm-351.522 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm-351.521 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm-351.522 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm-351.522 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm-351.305 3.696a1.848 1.848 0 1 1 0-3.696 1.848 1.848 0 0 1 0 3.696zm370 0a1.848 1.848 0 1 1 0-3.696 1.848 1.848 0 0 1 0 3.696zM205.326 18a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm-351.522 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm-351.521 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zM260.76 18a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm-351.52 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm-351.522 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm-351.521 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm-351.522 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm-351.522 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696z"
                                    opacity=".503"
                                />
                            </g>
                        </g>
                        <g opacity=".1">
                            <g opacity=".515" fill="#2E855A">
                                <path
                                    d="M1.848 3.696a1.848 1.848 0 1 1 0-3.696 1.848 1.848 0 0 1 0 3.696zm370 0a1.848 1.848 0 1 1 0-3.696 1.848 1.848 0 0 1 0 3.696zM20.326 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zM38.804 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zM57.283 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zM75.76 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zM94.24 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zM112.718 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zM131.197 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zM149.675 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zM168.153 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zM186.848 3.696a1.848 1.848 0 1 1 0-3.696 1.848 1.848 0 0 1 0 3.696zm370 0a1.848 1.848 0 1 1 0-3.696 1.848 1.848 0 0 1 0 3.696zM205.326 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zM223.804 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zM242.283 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zM260.76 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zM279.24 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zM297.718 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zM316.197 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zM334.675 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zM353.153 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696zm370 0a1.848 1.848 0 1 1 0 3.696 1.848 1.848 0 0 1 0-3.696z"
                                    opacity=".503"
                                />
                            </g>
                        </g>
                    </g>
                </svg>
            </div>
        </div>

        <!-- footer -->
        <footer class="text-white bg-gray-800">
            <div class="container flex flex-col items-center justify-between py-8 mx-auto lg:flex-row">
                <div class="mb-8 lg:mb-0">
                    <div>Copyright {{ new Date().getFullYear() }}. All rights reserved.</div>
                    <div>
                        <a href="/rss.xml" class="font-normal text-white hover:text-gray-400">RSS Feed</a>
                        |
                        <a href="/sitemap.xml" class="font-normal text-white hover:text-gray-400">Sitemap</a>
                    </div>
                </div>
                <ul class="flex items-center">
                    <li class="mr-8">
                        <a href="https://www.youtube.com/channel/UCX0zkbdpllaa3h-OZsJhSLQ" target="_blank" class="text-white hover:text-gray-400">
                            <svg width="26" height="20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M25.457 3.13c-.3-1.232-1.18-2.203-2.299-2.532C21.13 0 13 0 13 0S4.87 0 2.842.598c-1.119.33-2 1.3-2.299 2.531C0 5.362 0 10.02 0 10.02s0 4.658.543 6.891c.3 1.232 1.18 2.162 2.299 2.49C4.87 20 13 20 13 20s8.13 0 10.158-.598c1.119-.33 2-1.26 2.299-2.49C26 14.677 26 10.02 26 10.02s0-4.658-.543-6.89zM10.34 14.25V5.79l6.795 4.23-6.795 4.23z" fill-rule="nonzero" />
                            </svg>
                        </a>
                    </li>

                    <li class="mr-8">
                        <a href="https://github.com/pjmanning" target="_blank" class="text-white hover:text-gray-400">
                            <svg width="20" height="19" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M10 0c1.814 0 3.487.435 5.02 1.306a9.827 9.827 0 0 1 3.639 3.542A9.33 9.33 0 0 1 20 9.734c0 2.121-.636 4.03-1.908 5.723a9.783 9.783 0 0 1-4.928 3.518c-.234.042-.408.012-.52-.09a.49.49 0 0 1-.17-.38l.006-.969c.005-.621.007-1.19.007-1.705 0-.82-.226-1.42-.677-1.8.495-.05.94-.126 1.335-.228a5.4 5.4 0 0 0 1.223-.494 3.62 3.62 0 0 0 1.055-.843c.282-.334.512-.777.69-1.33.178-.554.267-1.19.267-1.909a3.7 3.7 0 0 0-1.028-2.61c.32-.77.286-1.631-.105-2.586-.243-.076-.594-.03-1.054.14-.46.168-.86.354-1.198.557l-.495.304a9.478 9.478 0 0 0-2.5-.33c-.86 0-1.693.11-2.5.33a11.6 11.6 0 0 0-.553-.342c-.23-.135-.593-.298-1.088-.488-.494-.19-.863-.247-1.106-.171-.391.955-.426 1.816-.105 2.585A3.7 3.7 0 0 0 3.62 9.227c0 .719.089 1.352.267 1.902.178.549.406.993.683 1.33.278.339.627.622 1.048.85a5.4 5.4 0 0 0 1.224.494c.395.102.84.178 1.335.228-.338.305-.551.74-.638 1.306a2.631 2.631 0 0 1-.586.19 3.782 3.782 0 0 1-.742.063c-.287 0-.57-.09-.853-.272a2.256 2.256 0 0 1-.723-.792 2.068 2.068 0 0 0-.631-.66c-.256-.168-.471-.27-.645-.304l-.26-.038c-.182 0-.308.02-.378.057-.07.038-.09.087-.065.146.026.06.065.118.117.178.053.059.109.11.17.152l.09.063c.192.085.38.245.567.482.187.236.324.452.41.646l.13.292c.113.32.304.58.574.78.269.198.56.325.872.38.312.054.614.084.905.088.29.004.532-.01.723-.044l.299-.05c0 .32.002.694.007 1.12l.006.692a.49.49 0 0 1-.17.38c-.112.101-.286.13-.52.089a9.783 9.783 0 0 1-4.928-3.518C.636 13.763 0 11.855 0 9.734a9.33 9.33 0 0 1 1.341-4.886 9.827 9.827 0 0 1 3.64-3.542C6.512.436 8.185 0 10 0zM3.79 13.98c.025-.058-.005-.11-.092-.151-.087-.026-.143-.017-.17.025-.025.06.005.11.092.152.078.05.134.042.17-.025zm.403.432c.06-.043.052-.11-.026-.203-.087-.076-.157-.089-.209-.038-.06.042-.052.11.026.203.087.084.157.097.209.038zm.39.57c.078-.06.078-.14 0-.24-.07-.11-.143-.136-.221-.077-.078.042-.078.118 0 .228.078.11.152.14.221.089zm.547.532c.07-.067.052-.148-.052-.24-.104-.102-.19-.115-.26-.039-.078.068-.061.148.052.241.104.102.19.114.26.038zm.742.317c.026-.093-.03-.16-.169-.203-.13-.033-.213-.004-.247.09-.035.092.021.155.169.19.13.05.213.025.247-.077zm.82.064c0-.11-.073-.157-.22-.14-.14 0-.209.047-.209.14 0 .11.074.156.221.139.14 0 .209-.046.209-.14zm.756-.127c-.017-.093-.096-.131-.234-.114-.14.025-.2.088-.183.19.018.101.096.135.235.101.139-.034.2-.093.182-.177z"
                                    fill-rule="nonzero"
                                />
                            </svg>
                        </a>
                    </li>

                    <li class="mr-8">
                        <a href="https://twitter.com/pj_manning" target="_blank" class="text-white hover:text-gray-400">
                            <svg width="20" height="17" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M19.807 1.943a8.588 8.588 0 0 1-2.036 2.135 11.918 11.918 0 0 1-.465 3.854 12.085 12.085 0 0 1-1.452 3.177 12.426 12.426 0 0 1-2.318 2.691c-.897.78-1.978 1.402-3.243 1.867-1.265.464-2.618.697-4.06.697-2.27 0-4.348-.618-6.233-1.854.293.034.62.051.98.051 1.885 0 3.565-.588 5.04-1.764a3.915 3.915 0 0 1-2.363-.825 4.038 4.038 0 0 1-1.432-2.039c.276.043.532.064.766.064.36 0 .717-.047 1.068-.14A3.982 3.982 0 0 1 1.73 8.43c-.617-.754-.925-1.63-.925-2.627v-.051c.57.324 1.182.498 1.835.524a4.1 4.1 0 0 1-1.32-1.47 4.078 4.078 0 0 1-.49-1.969c0-.75.185-1.445.553-2.084a11.548 11.548 0 0 0 3.702 3.05 11.163 11.163 0 0 0 4.669 1.271c-.067-.324-.1-.639-.1-.946 0-1.142.395-2.116 1.187-2.92C11.632.402 12.589 0 13.712 0c1.173 0 2.161.435 2.966 1.304a7.878 7.878 0 0 0 2.576-.997 3.997 3.997 0 0 1-1.785 2.275 7.98 7.98 0 0 0 2.338-.639z"
                                    fill-rule="nonzero"
                                />
                            </svg>
                        </a>
                    </li>

                    <li class="mr-8">
                        <a href="https://instagram.com/philmanning_" target="_blank" class="text-white hover:text-gray-400">
                            <svg width="20" height="20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M10.002 4.872A5.12 5.12 0 0 0 4.876 10a5.12 5.12 0 0 0 5.126 5.128A5.12 5.12 0 0 0 15.13 10a5.12 5.12 0 0 0-5.127-5.128zm0 8.462A3.34 3.34 0 0 1 6.67 10a3.337 3.337 0 0 1 3.333-3.334A3.337 3.337 0 0 1 13.335 10a3.34 3.34 0 0 1-3.333 3.334zm6.532-8.671c0 .664-.535 1.196-1.195 1.196a1.196 1.196 0 1 1 1.196-1.196zm3.396 1.213c-.076-1.602-.442-3.02-1.615-4.19C17.145.516 15.727.15 14.125.07c-1.65-.093-6.6-.093-8.25 0-1.597.076-3.016.442-4.19 1.611C.512 2.851.151 4.27.07 5.871c-.093 1.652-.093 6.601 0 8.253.076 1.602.442 3.02 1.615 4.19 1.174 1.17 2.588 1.535 4.19 1.616 1.65.093 6.6.093 8.25 0 1.602-.076 3.02-.442 4.19-1.616 1.169-1.17 1.534-2.588 1.615-4.19.093-1.652.093-6.596 0-8.248zm-2.133 10.02a3.375 3.375 0 0 1-1.9 1.9c-1.317.523-4.44.402-5.895.402-1.454 0-4.582.116-5.894-.402a3.375 3.375 0 0 1-1.9-1.9c-.523-1.317-.402-4.441-.402-5.896s-.116-4.583.401-5.895a3.375 3.375 0 0 1 1.901-1.901c1.316-.523 4.44-.402 5.894-.402 1.455 0 4.582-.116 5.894.402a3.375 3.375 0 0 1 1.901 1.9c.522 1.317.402 4.441.402 5.896s.12 4.583-.402 5.895z"
                                    fill-rule="nonzero"
                                />
                            </svg>
                        </a>
                    </li>

                    <li class="mr-8">
                        <a href="https://www.behance.net/philmanning" target="_blank" class="text-white hover:text-gray-400">
                            <svg height="24" fill="currentColor" width="24" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24">
                                <path d="m12.363 14.947c0-1.848-.879-3.214-2.695-3.726 1.325-.631 2.016-1.587 2.016-3.074 0-2.932-2.192-3.647-4.721-3.647h-6.963v14.721h7.158c2.684 0 5.205-1.283 5.205-4.274zm-9.117-7.934h3.046c1.171 0 2.225.328 2.225 1.682 0 1.25-.82 1.753-1.98 1.753h-3.291zm-.001 9.708v-4.054h3.538c1.429 0 2.333.594 2.333 2.102 0 1.487-1.079 1.952-2.4 1.952z" />
                                <path d="m18.796 19.5c2.554 0 4.208-1.147 5.004-3.585h-2.592c-.279.91-1.429 1.391-2.321 1.391-1.721 0-2.625-1.005-2.625-2.713h7.713c.244-3.418-1.66-6.331-5.18-6.331-3.259 0-5.471 2.442-5.471 5.641 0 3.32 2.096 5.597 5.472 5.597zm-.092-9.026c1.475 0 2.217.864 2.341 2.277h-4.779c.097-1.401 1.03-2.277 2.438-2.277z" />
                                <path d="m15.667 5.273h5.988v1.45h-5.988z" />
                            </svg>
                        </a>
                    </li>

                    <li class="mr-5">
                        <a href="https://medium.com/@pjmanning" target="_blank" class="text-white hover:text-gray-400">
                            <svg width="26" height="22" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="m22.085 4.733 1.915-1.832v-.401h-6.634l-4.728 11.768-5.379-11.768h-6.956v.401l2.237 2.693c.218.199.332.49.303.783v10.583c.069.381-.055.773-.323 1.05l-2.52 3.054v.396h7.145v-.401l-2.52-3.049c-.273-.278-.402-.663-.347-1.05v-9.154l6.272 13.659h.729l5.393-13.659v10.881c0 .287 0 .346-.188.534l-1.94 1.877v.402h9.412v-.401l-1.87-1.831c-.164-.124-.249-.332-.214-.534v-13.467c-.035-.203.049-.411.213-.534z" fill-rule="nonzero" />
                            </svg>
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isMenuOpen: false,
        }
    },
}
</script>

<style scoped></style>
