import Head from 'next/head'
import Navbar from '../components/navbar'
import { projects } from "../data/projects";
import Fade from "react-reveal/Fade";

export default function Portofolio() {
    return (
        <div>
            <Head>
                <title>Portfolio - Cornelius</title>
            </Head>
            <Navbar />
            <div className="hero min-h-screen bg-base-200">
                <div className="flex-col hero-content lg:flex-row-reverse mt-16">
                    <div className="grid grid-cols-2">
                        {projects.map((item) => (
                            <Fade bottom key={item.name}>
                                <a href={item.repo} className="card" >
                                    <div>
                                        <div className="name">{item.name}</div>
                                        <div className="info">{item.description}</div>
                                        {item.tags.map((tag) => (
                                            <div key={tag} className="tag">
                                                {tag}
                                            </div>
                                        ))}
                                    </div>
                                </a>
                            </Fade>
                        ))}
                    </div>
                </div>
            </div>
        </div >
    )
}