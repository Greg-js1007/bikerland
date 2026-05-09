import Chips from "./Chip"

const CardBike = ({ bikes }) => {

    const formateador = new Intl.NumberFormat("de-DE");
    return (
        <div>
            <figure className="w-full ">
                <img src={bikes.imagen} alt="" className="l" />
            </figure>
            <div className="p-4">
                <p className="flex gap-2">
                    <span className="text-gray-400 font-bold text-lg font-space-grotesk!">
                        {bikes.marca}
                    </span>
                    <span className="text-gray-400 font-bold text-lg font-space-grotesk!">
                        {bikes.modelo}
                    </span>
                </p>
                <p className="text-orange-primary text-lg">
                    ${formateador.format(bikes.precio)}
                </p>
                <div className="py-2.5">
                    <Chips bike={bikes} />
                </div>
            </div>
        </div>
    );
}

export default CardBike