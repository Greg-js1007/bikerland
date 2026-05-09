import { ListboxOption } from "@headlessui/react";
const OrderFilter = ({ item }) => {
    return (
        <ListboxOption value={item} className="capitalize text-orange-primary bg-stone-secundary focus:outline-none border-none cursor-pointer">
            {item.filter}
        </ListboxOption>
    );
}

export default OrderFilter; 