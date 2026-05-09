const API_URL = "/public/motos.json";

export const obtenerDatos = async () => {
    try {
        const response = await fetch(`${API_URL}`);
        if(!response.ok) throw new Error("Error en la peticion")
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error("Error al cargar las motos", error)
        return []
    }
}