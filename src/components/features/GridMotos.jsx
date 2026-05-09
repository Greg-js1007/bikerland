import { useState, useEffect } from "react";
import OrderFilter from "../ui/OrderFilter";
import { obtenerDatos } from "../../services/api.js";
import { Listbox, ListboxButton, ListboxOptions } from "@headlessui/react";
import CardBike from "../ui/CardsBike";

const itemFilter = [
    { id: 1, filter: "más costosas" },
    { id: 2, filter: "menos costosas" },
    { id: 3, filter: "mayor cilindraje" },
    { id: 4, filter: "menor cilindraje" },
];

const GridMotos = ({ classname }) => {
    const [loading, setLoading] = useState(true);
    const [motos, setMotos] = useState([]);
    const [selectFilter, setSelectFilter] = useState(itemFilter[0]);

    useEffect(() => {
        const cargarDatos = async () => {
            try {
                const response = await obtenerDatos();
                setMotos(response);
            } catch (error) {
                console.error("Error al cargar las motos", error);
            } finally {
                setLoading(false);
            }
        };

        cargarDatos();
    }, []);

    const motosFiltradas = [...motos].sort((a, b,) => {
        if (selectFilter.id === 1) return b.precio - a.precio;
        if (selectFilter.id === 2) return a.precio - b.precio;
        if (selectFilter.id === 3) return b.cilindraje - a.cilindraje; // Mayor cilindraje
        if (selectFilter.id === 4) return a.cilindraje - b.cilindraje; // Menor cilindraje
    });

    const motosSeleccionadas = [...motosFiltradas].slice(0, 9);

    // const handlerClickFilter = () => {

    // }

    return (
        <section className={`w-full bg-stone-secundary py-7 px-7 ${classname}`}>
            <div className="flex justify-between gap-2 pb-7">
                <h3 className="text-gray-200 capitalize">
                    resultados ({motosSeleccionadas.length})
                </h3>
                <div className="flex gap-2">
                    <Listbox value={selectFilter} onChange={setSelectFilter}>
                        <label htmlFor="orderFilter" className="text-gray-400">
                            Ordenado por:{" "}
                        </label>
                        <div className="relative">
                            <ListboxButton className="text-orange-primary capitalize focus:outline-none">
                                {selectFilter.filter}
                            </ListboxButton>
                            <ListboxOptions
                                anchor="bottom end"
                                className="w-52 mt-2 z-50 bg-[#121212] border border-white/10 rounded-xl shadow-2xl focus:outline-none overflow-hidden"
                            >
                                {itemFilter.map((item) => (
                                    <OrderFilter key={item.key} item={item} />
                                ))}
                            </ListboxOptions>
                        </div>
                    </Listbox>
                </div>
            </div>
            {loading ? (
                <p className="text-white">Cargando...</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {motosSeleccionadas.map((moto) => (
                        <div
                            key={moto.id}
                            className="bg-neutral-900 border border-white/5"
                        >
                            <CardBike bikes={moto}></CardBike>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
};

export default GridMotos;
