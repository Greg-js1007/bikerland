import { Menu } from "lucide-react";


const MenuMobil = ({ OnToggle }) => {
    
    return (
        <Menu onClick={OnToggle} color="#fff" className="cursor-pointer md:hidden" />
    )
};

export default MenuMobil