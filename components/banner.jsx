import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai'
import {useRouter} from 'next/router'

function Banner(){
    const router = useRouter();
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="flex-col hero-content lg:flex-row-reverse mt-16">
                    <img src="/foto-alfred.jpg" className="max-w-sm rounded-lg shadow-2xl"/>
                        <div>
                            <h1 className="mb-5 text-5xl font-bold">
                                Hello there
                            </h1>
                            <p className="mb-5">
                                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
                            </p>
                            <div className="flex gap-2">
                                <button onClick={()=>{router.push('https://github.com/c0rz')}} className="btn btn-outline"><AiFillGithub/></button>
                                <button onClick={()=>{router.push('https://www.linkedin.com/in/cornelius-s-alfredo/')}} className="btn btn-outline"><AiFillLinkedin/></button>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;