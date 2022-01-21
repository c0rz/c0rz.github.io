import {HiOutlineMenu} from 'react-icons/hi'

function Navbar(props) {
    return (
        <div>
            <div className="navbar mb-2 shadow-lg bg-base-200 text-black z-[200] fixed w-full">
                <div className="px-2 mx-2 navbar-start">
                    <span className="text-lg font-bold">
                        Cornelius S Alfredo
                    </span>
                </div>
                <div className="navbar-end hidden px-2 mx-2 md:block md:flex">
                    <div className="flex items-stretch">
                        <a href="/" className="btn btn-ghost btn-sm rounded-btn">
                            Home
                        </a>
                        <a href="/portfolio" className="btn btn-ghost btn-sm rounded-btn">
                            Portfolio
                        </a>
                        <a className="btn btn-ghost btn-sm rounded-btn">
                            About
                        </a>
                        <a className="btn btn-ghost btn-sm rounded-btn">
                            Contact
                        </a>
                    </div>
                </div>
                <div className="md:hidden navbar-end">
                    <div className="dropdown dropdown-end">
                        <div tabIndex="0" className="m-1 bg-white text-black border-white hover:bg-gray-300 hover:border-white btn">
                            <HiOutlineMenu/>
                        </div>
                        <ul tabIndex="0" className="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <a>Home</a>
                            </li>
                            <li>
                                <a>Portfolio</a>
                            </li>
                            <li>
                                <a>About</a>
                            </li>
                            <li>
                                <a>Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;