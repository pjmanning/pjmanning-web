<template>
    <div>
        <!-- hero -->
        <div class="flex flex-col justify-between max-w-3xl py-12 mx-4 sm:py-24 sm:mx-auto sm:flex-row">
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
                I believe the next wave of great of advances in human society will come from combining
                <strong>technology</strong>, <strong>community</strong>, and <strong>sustainability</strong>. I'm currently working on a few independent and open-sourced projects based on these pillars.
            </p>

            <div class="flex items-center justify-between py-6">
                <div class="w-full">
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
                <span class="px-3 text-lg font-medium text-gray-900 bg-white"> Indie Projects </span>
            </div>
        </div>
        <!-- end divider  -->

        <!-- projects  -->
        <div class="overflow-x-hidden">
            <p class="max-w-3xl mx-auto mt-4 text-sm font-medium text-center text-gray-600">Independent, bootstrapped companies&nbsp;I'm&nbsp;currently&nbsp;building...</p>
            <div class="relative max-w-3xl pt-8 pb-10 mx-4 mb-16 text-xl border-b border-gray-300 sm:mx-auto">
                <ul class="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <!-- GLASSY -->
                    <li class="col-span-1 border border-gray-100 rounded-lg shadow bg-background-card">
                        <div class="flex items-center justify-between w-full p-6 space-x-6">
                            <div class="flex-1 truncate">
                                <div class="flex items-center space-x-3">
                                    <h3 class="text-xl font-medium leading-5 text-gray-900 truncate">Glassy</h3>
                                </div>
                                <p class="mt-1 text-sm leading-5 text-gray-500 truncate">Make your company more transparent</p>
                            </div>
                            <img class="flex-shrink-0 w-12 h-12 bg-gray-300 rounded-full" src="~/assets/images/home/glassy-logo-whitebg.png" alt />
                        </div>
                        <div class="bg-gray-100 border-t border-gray-200 rounded-b-lg">
                            <div class="flex -mt-px">
                                <div class="flex flex-1 w-0 border-r border-gray-200">
                                    <a href="https://glassy.so" target="_blank" class="relative inline-flex items-center justify-center flex-1 w-0 py-4 -mr-px text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out border border-transparent rounded-bl-lg hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:z-10">
                                        <svg class="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                                        </svg>
                                        <span class="ml-3">Website</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </li>

                    <!-- SwellPirate -->
                    <li class="col-span-1 border border-gray-100 rounded-lg shadow bg-background-card">
                        <div class="flex items-center justify-between w-full p-6 space-x-6">
                            <div class="flex-1 truncate">
                                <div class="flex items-center space-x-3">
                                    <h3 class="text-xl font-medium leading-5 text-gray-900 truncate">SwellPirate</h3>
                                </div>
                                <p class="mt-1 text-sm leading-5 text-gray-500 truncate">The best surf spots around the world</p>
                            </div>
                            <img class="flex-shrink-0 w-12 h-12 bg-gray-300" src="~/assets/images/home/swellpirate-logo.png" alt="swellpirate" />
                        </div>
                        <div class="bg-gray-100 border-t border-gray-200 rounded-b-lg">
                            <div class="flex -mt-px">
                                <div class="flex flex-1 w-0 border-r border-gray-200">
                                    <a href="https://swellpirate.com" target="_blank" class="relative inline-flex items-center justify-center flex-1 w-0 py-4 -mr-px text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out border border-transparent rounded-bl-lg hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:z-10">
                                        <svg class="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                                        </svg>
                                        <span class="ml-3">Website</span>
                                    </a>
                                </div>
                                <!-- <div class="flex flex-1 w-0 -ml-px border-r border-gray-200">
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
                                </div> -->
                            </div>
                        </div>
                    </li>

                    <!-- BINNDLE -->
                    <li class="col-span-1 border border-gray-100 rounded-lg shadow bg-background-card">
                        <div class="flex items-center justify-between w-full p-6 space-x-6">
                            <div class="flex-1 truncate">
                                <div class="flex items-center space-x-3">
                                    <h3 class="text-xl font-medium leading-5 text-gray-900 truncate">Binndle</h3>
                                </div>
                                <p class="mt-1 text-sm leading-5 text-gray-500 truncate">Find what people use</p>
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

                    <!-- De-Facebook-Me  -->
                    <!-- <li class="col-span-1 border border-gray-100 rounded-lg shadow bg-background-card">
                        <div class="flex items-center justify-between w-full p-6 space-x-6">
                            <div class="flex-1 truncate">
                                <div class="flex items-center space-x-3">
                                    <h3 class="text-xl font-medium leading-5 text-gray-900 truncate">De-Facebook-Me</h3>
                                </div>
                                <p class="mt-1 text-sm leading-5 text-gray-500 truncate">Guide to free yourself from FB</p>
                            </div>
                            <img class="flex-shrink-0 w-12 h-12 bg-gray-300 rounded-full" src="~/assets/images/home/startsmall-logo.jpg" alt />
                        </div>
                        <div class="bg-gray-100 border-t border-gray-200 rounded-b-lg">
                            <div class="flex -mt-px">
                                <div class="flex flex-1 w-0 border-r border-gray-200">
                                    <a href="https://defacebookme.netlify.app/" target="_blank" class="relative inline-flex items-center justify-center flex-1 w-0 py-4 -mr-px text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out border border-transparent rounded-bl-lg hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:z-10">
                                        <svg class="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
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

                    <!-- Nana's Recipes -->
                    <li class="col-span-1 border border-gray-100 rounded-lg shadow bg-background-card">
                        <div class="flex items-center justify-between w-full p-6 space-x-6">
                            <div class="flex-1 truncate">
                                <div class="flex items-center space-x-3">
                                    <h3 class="text-xl font-medium leading-5 text-gray-900 truncate">Nana's Recipes</h3>
                                </div>
                                <p class="mt-1 text-sm leading-5 text-gray-500 truncate">Nana Scoppetuolo's best recipes.</p>
                            </div>
                            <img class="flex-shrink-0 w-12 h-12 bg-gray-300 rounded-md" src="~/assets/images/home/nanasrecipes-logo.png" alt="nanas recipes" />
                        </div>
                        <div class="bg-gray-100 border-t border-gray-200 rounded-b-lg">
                            <div class="flex -mt-px">
                                <!-- <div class="flex flex-1 w-0 border-r border-gray-200">
                                    <a href="https://swellpirate.com" target="_blank" class="relative inline-flex items-center justify-center flex-1 w-0 py-4 -mr-px text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out border border-transparent rounded-bl-lg hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:z-10">
                                        <svg class="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                                        </svg>
                                        <span class="ml-3">Website</span>
                                    </a>
                                </div> -->
                                <div class="flex flex-1 w-0 -ml-px border-r border-gray-200">
                                    <a href="https://apps.apple.com/app/nana-scoppetuolos-recipes/id1012100193?l=id" target="_blank" class="relative inline-flex items-center justify-center flex-1 w-0 py-4 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out border border-transparent rounded-br-lg hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:z-10">
                                        <svg class="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" />
                                        </svg>
                                        <span class="ml-3">iOS</span>
                                    </a>
                                </div>
                                <div class="flex flex-1 w-0 -ml-px">
                                    <a href="https://play.google.com/store/apps/details?id=com.dooddevelopments.Recipe" target="_blank" class="relative inline-flex items-center justify-center flex-1 w-0 py-4 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out border border-transparent rounded-br-lg hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10">
                                        <svg class="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" />
                                        </svg>
                                        <span class="ml-3">Android</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </li>

                    <!-- DeFacebookMe  -->
                    <li class="col-span-1 border border-gray-100 rounded-lg shadow bg-background-card">
                        <div class="flex items-center justify-between w-full p-6 space-x-6">
                            <div class="flex-1 truncate">
                                <div class="flex items-center space-x-3">
                                    <h3 class="text-xl font-medium leading-5 text-gray-900 truncate">DeFacebookMe</h3>
                                </div>
                                <p class="mt-1 text-sm leading-5 text-gray-500 truncate">Remove Facebook from your life</p>
                            </div>
                            <img class="flex-shrink-0 w-12 h-12" src="~/assets/images/home/defacebookme.svg" alt="defacebookme" />
                        </div>
                        <div class="bg-gray-100 border-t border-gray-200 rounded-b-lg">
                            <div class="flex -mt-px">
                                <div class="flex flex-1 w-0 border-r border-gray-200">
                                    <a href="https://defacebookme.com/" target="_blank" class="relative inline-flex items-center justify-center flex-1 w-0 py-4 -mr-px text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out border border-transparent rounded-bl-lg hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:z-10">
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

                <p class="max-w-3xl mx-auto mt-12 text-sm font-medium text-center text-gray-600">There's plenty that didn't make it...<nuxt-link to="/graveyard" class="text-blue-600">Check&nbsp;out&nbsp;the&nbsp;graveyard&nbsp;here.</nuxt-link></p>

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

                <div class="flex flex-col items-center justify-between mb-8 sm:flex-row">
                    <div>
                        <img src="~/assets/images/home/meSmallCircle.png" alt="avatar" class="w-32 h-32 mb-8 rounded-full lg:mb-0" />
                    </div>
                    <div class="flex-1 text-lg sm:text-xl sm:ml-6">Over the past 10 years, I've worked with 30+ businesses creating websites and mobile applications. I have a unique perspective having worked with the fastest growing e-commerce website in the world (Jet.com), to tracking whale sharks in the Maldives.</div>
                </div>

                <div class="h-48 sm:h-96">
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
                    <h2 class="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">For projects, inquiries, and/or&nbsp;beer...</h2>
                    <!-- <p class="mt-4 text-lg leading-6 text-gray-500">Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.</p> -->
                </div>
                <div class="mt-8">
                    <form action="https://formspree.io/xyydaozy" method="POST" class="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                        <div>
                            <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
                            <div class="mt-1">
                                <input id="name" type="text" name="name" placeholder="Elon Musk" required autocomplete="given-name" class="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
                            </div>
                        </div>
                        <div>
                            <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                            <div class="mt-1">
                                <input id="email" type="email" name="_replyto" placeholder="elon@spacex.com" required autocomplete="email" class="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
                            </div>
                        </div>
                        <div class="sm:col-span-2">
                            <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
                            <div class="mt-1">
                                <textarea id="message" name="message" rows="5" required placeholder="Can you build me a base on Mars..." class="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"></textarea>
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
    </div>
</template>

<script>
export default {}
</script>

<style scoped></style>
