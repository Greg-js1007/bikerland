

const AsideBar = ({ className }) => {
    return(
    <aside className={`w-full bg-black-neutral p-5 ${className}`}>
        <div>
            <h3 className="text-orange-primary uppercase">filtros técnicos</h3>
            <p className="capitalize text-gray-400 text-sm">
                precisión industrial
            </p>
        </div>
        </aside>
    )
}

export default AsideBar; 