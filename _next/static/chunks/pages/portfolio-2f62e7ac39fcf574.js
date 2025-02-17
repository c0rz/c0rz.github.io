(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[371],{

/***/ 1641:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/portfolio",
      function () {
        return __webpack_require__(2066);
      }
    ]);
    if(false) {}
  

/***/ }),

/***/ 2066:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ Portfolio; }
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/next/head.js
var head = __webpack_require__(9008);
var head_default = /*#__PURE__*/__webpack_require__.n(head);
;// CONCATENATED MODULE: ./data/projects.js
const projects = [
    {
        name: "InstagramPHP",
        description: "Library berbasis Instagram web version dengan fitur lengkap untuk mendukung pengembangan aplikasi Instagram.",
        repo: "https://github.com/c0rz/InstagramPHP",
        image: "/images/instagram-php.png",
        tags: [
            "PHP",
            "API",
            "Web Scraping"
        ]
    },
    {
        name: "Portfolio Website",
        description: "Website portfolio personal yang dibangun menggunakan Next.js dan Tailwind CSS.",
        repo: "https://github.com/c0rz/portfolio",
        image: "/images/portfolio.png",
        demo: "https://cornelius.com",
        tags: [
            "Next.js",
            "React",
            "Tailwind CSS"
        ]
    },
    {
        name: "E-Commerce Dashboard",
        description: "Dashboard admin untuk manajemen toko online dengan fitur analitik dan manajemen produk.",
        repo: "https://github.com/c0rz/ecommerce-dashboard",
        image: "/images/dashboard.png",
        tags: [
            "React",
            "Node.js",
            "MongoDB"
        ]
    },
    {
        name: "Weather App",
        description: "Aplikasi cuaca real-time dengan data dari OpenWeatherMap API.",
        repo: "https://github.com/c0rz/weather-app",
        demo: "https://weather.cornelius.com",
        image: "/images/weather.png",
        tags: [
            "JavaScript",
            "API",
            "CSS"
        ]
    },
    {
        name: "Chat Application",
        description: "Aplikasi chat real-time menggunakan Socket.io dan Express.",
        repo: "https://github.com/c0rz/chat-app",
        image: "/images/chat-app.png",
        tags: [
            "Node.js",
            "Socket.io",
            "Express"
        ]
    },
    {
        name: "Task Manager",
        description: "Aplikasi manajemen tugas dengan fitur kolaborasi tim.",
        repo: "https://github.com/c0rz/task-manager",
        demo: "https://tasks.cornelius.com",
        image: "/images/task-manager.png",
        tags: [
            "React",
            "Firebase",
            "Material UI"
        ]
    }
];

// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs + 248 modules
var proxy = __webpack_require__(9068);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
;// CONCATENATED MODULE: ./pages/portfolio.js





function Portfolio() {
    const [selectedTag, setSelectedTag] = (0,react.useState)("all");
    // Mengumpulkan semua tag unik dari proyek
    const allTags = [
        "all",
        ...new Set(projects.flatMap((project)=>project.tags))
    ];
    // Filter proyek berdasarkan tag yang dipilih
    const filteredProjects = selectedTag === "all" ? projects : projects.filter((project)=>project.tags.includes(selectedTag));
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "min-h-screen bg-white dark:bg-gray-900",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("title", {
                        children: "Portfolio - Cornelius"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("meta", {
                        name: "description",
                        content: "Lihat koleksi proyek-proyek yang telah saya kerjakan"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "container mx-auto px-4 pt-20 pb-16",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(proxy/* motion */.E.h1, {
                        initial: {
                            opacity: 0,
                            y: -20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        className: "text-4xl md:text-5xl font-bold text-center text-gray-800 dark:text-white mb-4",
                        children: "Portfolio Saya"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(proxy/* motion */.E.p, {
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        transition: {
                            delay: 0.2
                        },
                        className: "text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto",
                        children: "Kumpulan proyek yang telah saya kerjakan. Setiap proyek mencerminkan dedikasi dan passion saya dalam pengembangan web."
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "flex flex-wrap justify-center gap-3 mb-12",
                        children: allTags.map((tag)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(proxy/* motion */.E.button, {
                                whileHover: {
                                    scale: 1.05
                                },
                                whileTap: {
                                    scale: 0.95
                                },
                                onClick: ()=>setSelectedTag(tag),
                                className: "px-4 py-2 rounded-full text-sm font-medium transition-colors\n                                ".concat(selectedTag === tag ? "bg-blue-500 text-white" : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"),
                                children: tag.charAt(0).toUpperCase() + tag.slice(1)
                            }, tag))
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                        children: filteredProjects.map((project, index)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(proxy/* motion */.E.div, {
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    duration: 0.5,
                                    delay: index * 0.1
                                },
                                className: "bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300",
                                children: [
                                    project.image && /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                        src: project.image,
                                        alt: project.name,
                                        className: "w-full h-48 object-cover"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "p-6",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                                className: "text-xl font-bold text-gray-800 dark:text-white mb-2",
                                                children: project.name
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                className: "text-gray-600 dark:text-gray-300 mb-4",
                                                children: project.description
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                className: "flex flex-wrap gap-2 mb-4",
                                                children: project.tags.map((tag)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                        className: "px-3 py-1 bg-gray-100 dark:bg-gray-700 text-sm text-gray-600 dark:text-gray-300 rounded-full",
                                                        children: tag
                                                    }, tag))
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "flex gap-4",
                                                children: [
                                                    project.repo && /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                                                        href: project.repo,
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        className: "inline-flex items-center text-blue-500 hover:text-blue-600 transition-colors",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
                                                                className: "w-5 h-5 mr-2",
                                                                fill: "currentColor",
                                                                viewBox: "0 0 24 24",
                                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                                                    d: "M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"
                                                                })
                                                            }),
                                                            "Github"
                                                        ]
                                                    }),
                                                    project.demo && /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                                                        href: project.demo,
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        className: "inline-flex items-center text-green-500 hover:text-green-600 transition-colors",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
                                                                className: "w-5 h-5 mr-2",
                                                                fill: "none",
                                                                stroke: "currentColor",
                                                                viewBox: "0 0 24 24",
                                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                                                    strokeLinecap: "round",
                                                                    strokeLinejoin: "round",
                                                                    strokeWidth: "2",
                                                                    d: "M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                                                })
                                                            }),
                                                            "Live Demo"
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }, project.name))
                    })
                ]
            })
        ]
    });
}


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [629,774,888,179], function() { return __webpack_exec__(1641); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);