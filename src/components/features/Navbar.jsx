import { useState } from "react";

import NavLinks from "../ui/Links";
import { Link, NavLink } from "react-router";
import { CircleUser } from "lucide-react";
import MenuMobil from "../ui/Menu";


const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { id: 1, content: "Explorar", path: "/explorar" },
        { id: 2, content: "Comparador", path: "/comparador" },
        { id: 3, content: "Comunidad", path: "/comunidad" },
    ];

    return (
        <nav className="relative bg-stone-secundary py-3 font-space-grotesk">
            <div className="px-4 flex justify-between items-center">
                <div className="flex justify-center items-center gap-5">
                    <NavLink to={'/'}>
                        <p className="text-orange-primary uppercase text-4xl">
                            Bikerland
                        </p>
                    </NavLink>

                    {/* {MENU DESKTOP} */}
                    <div className="hidden md:flex gap-5">
                        {navItems.map((item) => (
                            <NavLinks
                                key={item.id}
                                content={item.content}
                                path={item.path}
                            />
                        ))}
                    </div>
                </div>
                <div>
                    <Link className="hidden md:flex">
                        <CircleUser size={24} color="#fff" />
                    </Link>
                    <MenuMobil isOpen={isOpen} OnToggle={() => setIsOpen(!isOpen)} />
                </div>

                {/* {MENU MOVIL} */}
                {isOpen && (
                    <>
                        <div className="absolute top-full left-0 w-full bg-stone-secundary flex flex-col items-center gap-5 py-5 border-white/10 z-50 opacity-90">
                            {navItems.map((item) => (
                                <NavLinks
                                    key={item.id}
                                    content={item.content}
                                    path={item.path}
                                />
                            ))}
                        </div>
                    </>
                )}
            </div>
        </nav>
    );
};

export default NavBar;
