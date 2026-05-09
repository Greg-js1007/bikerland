

const Chips = ({ bike }) => {
    return (
        <div className="flex gap-1">
            <p className="text-gray-400 px-2 py-1 bg-black-neutral text-sm font-space-grotesk! max-w-16 min-w-16 text-center">
                {bike.cilindraje}CC
            </p>
            <p className="text-gray-400 px-2 py-1 bg-black-neutral text-sm font-space-grotesk! max-w-16 min-w-16 text-center">
                {bike.peso_kg}KG
            </p>
            <p className="text-gray-400 px-2 py-1 bg-black-neutral text-sm font-space-grotesk! max-w-16 min-w-16 text-center">
                {bike.altura_asiento_mm}MM
            </p>
        </div>
    );
}

export default Chips; 