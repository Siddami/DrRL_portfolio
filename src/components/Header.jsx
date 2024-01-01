function Header(){
    return(
        <header className="max-h-20 py-6">
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    {/* logo */}
                    <a href="#">
                        <h2 className="text-4xl font-semibold">
                            <span className=" text-pink-300">DR.</span><span className=" text-indigo-900"> RL</span>
                        </h2>
                    </a>

                    {/* button */}
                    <button className="btn btn-sm">Work with me</button>
                </div>
            </div>
        </header>
    )
}
export default Header
