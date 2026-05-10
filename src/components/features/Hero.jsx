import SearchBar from "../ui/SearchBar";

const Hero = () => {
    return (
        <header className="relative w-full h-100 lg:h-150 overflow-hidden bg-neutral-950">

            <figure className="h-full w-full">
                <img
                    className="md:w-full md:h-full object-cover object-[75%] md:object-center"
                    src="../assets/bg-bike-home.jpg"
                    alt="A high-performance black and orange sport motorcycle captured in a dramatic, low-angle studio shot with cinematic industrial lighting."
                />
            </figure>

            {/* 2. GRADIENTE (Superposición) */}
            {/* El gradiente ahora se queda "pegado" a la imagen gracias al 'relative' del header */}
            <div className="absolute inset-0 bg-linear-to-b from-transparent via-neutral-950/60 to-neutral-950" />

            {/* 3. CONTENIDO  */}
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4">
                <h1 className=" relative text-white text-lg md:text-2xl font-bold tracking-wider uppercase bottom-10 lg:bottom-0">
                    Encuentra tu compañera de ruta ideal
                </h1>
                <SearchBar />
            </div>

        </header>
    );
}

export default Hero;
