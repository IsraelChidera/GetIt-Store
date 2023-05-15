import { NavLink } from 'react-router-dom';
import { useShoppingCart } from '../context/CartContext';
import { Button } from 'react-bootstrap';

export function Navbar() {

    const { openCart, cartQuantity } = useShoppingCart();

    return (
        <>

            <nav
                className="flex justify-around items-center"
            >
                <div>

                    <NavLink
                        to="/home"
                    >
                        OneStopStore
                    </NavLink>


                    <ul
                        className="list-style-none mr-auto flex flex-col pl-0 lg:flex-row">
                        <li className="mb-4 lg:mb-0 lg:pr-2">

                            <NavLink                                
                                to="/store"
                            >
                                Store
                            </NavLink>
                        </li>

                    </ul>
                </div>


                <div>

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
            </nav>


        </>
    )
}

