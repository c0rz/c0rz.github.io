import { AiFillGithub, AiFillLinkedin, AiOutlineMedium } from 'react-icons/ai'
import { FaServer, FaDatabase, FaCode } from 'react-icons/fa'
import { SiPostman, SiNodedotjs, SiPostgresql, SiPhp, SiRedhat, SiMicrosoftsqlserver, SiPython } from 'react-icons/si'

function Banner() {
    return (
        <>
            {/* Hero Section */}
            <section className="py-20 px-4 md:px-8 bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
                        <div className="flex-1 text-center md:text-left">
                            <div className="mb-6">
                                <h2 className="text-lg font-medium text-blue-600 dark:text-blue-400 mb-2">Backend Developer</h2>
                                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
                                    Hi, I'm Cornelius
                                </h1>
                                <p className="text-lg text-gray-600 dark:text-gray-300">
                                    Crafting robust and scalable backend solutions
                                </p>
                            </div>
                            <p className="text-lg mb-8 text-gray-700 dark:text-gray-300 max-w-2xl">
                                I'm a backend developer focused on building efficient server-side applications. 
                                Currently exploring NextJS for frontend while maintaining my expertise in backend technologies.
                            </p>
                            <div className="flex gap-4 justify-center md:justify-start mb-8">
                                <a
                                    href="https://github.com/c0rz"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                                >
                                    <AiFillGithub className="w-6 h-6" />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/cornelius-s-alfredo/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                                >
                                    <AiFillLinkedin className="w-6 h-6" />
                                </a>
                                <a
                                    href="https://corneliusalfredo.medium.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                                >
                                    <AiOutlineMedium className="w-6 h-6" />
                                </a>
                            </div>
                        </div>
                        <div className="flex-1 max-w-md">
                            <div className="relative">
                                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-20"></div>
                                <img
                                    src="/foto-alfred.jpg"
                                    alt="Cornelius S Alfredo"
                                    className="relative rounded-2xl shadow-xl w-full object-cover border-2 border-gray-200 dark:border-gray-700"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tech Stack Section */}
            <section className="py-16 px-4 md:px-8 bg-white dark:bg-gray-900">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
                        Technical Expertise
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
                            <div className="flex items-center mb-4">
                                <FaServer className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3" />
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Backend Development</h3>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300">
                                Specialized in building scalable server-side applications and RESTful APIs
                            </p>
                        </div>
                        <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
                            <div className="flex items-center mb-4">
                                <FaDatabase className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3" />
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Database Design</h3>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300">
                                Experienced in designing and optimizing database schemas and queries
                            </p>
                        </div>
                        <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
                            <div className="flex items-center mb-4">
                                <FaCode className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3" />
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Clean Code</h3>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300">
                                Focus on writing maintainable, efficient, and well-documented code
                            </p>
                        </div>
                    </div>

                    <div className="mt-16 flex flex-wrap justify-center gap-8">
                        <div className="flex items-center space-x-8">
                            <SiNodedotjs className="w-12 h-12 text-gray-600 dark:text-gray-400" />
                            <SiPostgresql className="w-12 h-12 text-gray-600 dark:text-gray-400" />
                            <SiPostman className="w-12 h-12 text-gray-600 dark:text-gray-400" />
                            <SiRedhat className="w-12 h-12 text-gray-600 dark:text-gray-400" />
                            <SiPhp className="w-12 h-12 text-gray-600 dark:text-gray-400" />
                            <SiPython className="w-12 h-12 text-gray-600 dark:text-gray-400" />
                            <SiMicrosoftsqlserver className="w-12 h-12 text-gray-600 dark:text-gray-400" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner