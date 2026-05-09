import { Search } from "lucide-react"

const SearchBar = () => {
    return (
        <div className="bg-stone-secundary py-3 flex w-full gap-2 items-center md:min-w-2xl md:max-w-3xl md:mt-2.5 border border-stone-700">
            <span className="pl-5">
                <Search color="#d1d5dc" size={18} />
            </span>
            <input
                type="text"
                name=""
                id=""
                placeholder="BUSCA POR MARCA, CILINDRADA O ESTILO..." className="text-gray-300 w-3/4 focus:outline-none text-sm md:text-base"
            />
        </div>
    );
}

export default SearchBar; 