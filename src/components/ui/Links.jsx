import { NavLink } from "react-router-dom";
const NavLinks = ({ content, path }) => {
    return (
        <NavLink
            to={path}
            className="text-orange-primary uppercase hover:border-b hover:border-b-orange-primary align-top hover:-translate-y-1.5 py-1.5"
        >
            {content}
        </NavLink>
    );
};

export default NavLinks;
