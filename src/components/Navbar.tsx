import { NavLink } from 'react-router-dom';
import { useShoppingCart } from '../context/CartContext';
import { Button } from 'react-bootstrap';

export function Navbar() {

    const { openCart, cartQuantity } = useShoppingCart();

    return (
        <>

            <nav
                className="flex-no-wrap relative flex w-full items-center justify-between 
                    bg-neutral-100 py-2 shadow-md shadow-black/5 
                    dark:bg-neutral-600 dark:shadow-black/10 lg:flex-wrap lg:justify-start lg:py-4"
                >
                <div className="flex w-full flex-wrap items-center justify-between px-3">

                    <button
                        className="flex justify-center items-center border-0 bg-transparent px-2 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
                        type="button"
                    >

                        <span className="w-7">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="h-7 w-7">
                                <path
                                    fill-rule="evenodd"
                                    d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                                    clip-rule="evenodd" />
                            </svg>
                        </span>

                        <NavLink
                            to="/home"
                            className="mb-4 mr-2 mt-3 flex items-center text-neutral-900 
                                hover:text-neutral-900 focus:text-neutral-900 
                                dark:text-neutral-200 dark:hover:text-neutral-400 
                                dark:focus:text-neutral-400 lg:mb-0 lg:mt-0"
                        >
                            GetIt MarketPlace
                        </NavLink>
                    </button>


                    <div
                        className="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto"
                        id="navbarSupportedContent1"
                    >

                        <NavLink
                            to="/home"
                            className="mb-4 mr-2 mt-3 flex items-center text-neutral-900 
                                hover:text-neutral-900 focus:text-neutral-900 
                                dark:text-neutral-200 dark:hover:text-neutral-400 
                                dark:focus:text-neutral-400 lg:mb-0 lg:mt-0"
                        >
                            GetIt MarketPlace
                        </NavLink>


                        <ul
                            className="list-style-none mr-auto flex flex-col pl-0 lg:flex-row">
                            <li className="mb-4 lg:mb-0 lg:pr-2">

                                <NavLink
                                    className="text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-zinc-400"
                                    to="/store"
                                >
                                    Store
                                </NavLink>
                            </li>

                        </ul>
                    </div>


                    <div className=" flex items-center">

                        <Button
                            onClick={openCart}
                            style={{ width: "3rem", height: "3rem", position: "relative" }}
                        >
                            <span className="[&>svg]:w-5">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="h-5 w-5">
                                    <path
                                        d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                                </svg>
                            </span>
                            <span
                                className="p-2 border bg-red-500 absolute -mt-2.5 
                                ml-2 rounded-[0.37rem] px-[0.45em] 
                                py-[0.2em] text-[0.6rem] leading-none text-white"
                            >
                                {cartQuantity}
                            </span>
                        </Button>                        
                        
                    </div>
                </div>
            </nav>
        </>
    )
}

