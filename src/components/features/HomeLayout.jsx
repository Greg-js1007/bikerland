

const HomeLayout = ({ children }) => {
    return (
        <section className=" w-full">
            <div className="grid grid-cols-1 lg:grid-cols-10">
                {children}
            </div>
        </section>
    );
}

export default HomeLayout; 