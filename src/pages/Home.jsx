import Hero from "../components/features/Hero";
import HomeLayout from "../components/features/HomeLayout";
import AsideBar from "../components/features/Asidebar";
import GridMotos from "../components/features/GridMotos";


const Home = () => {
    return (
        <>
            <Hero />
            <HomeLayout>
                <AsideBar className="col-span-3" />
                <GridMotos classname= "col-span-7" />
            </HomeLayout>
        </>
    )
}

export default Home; 