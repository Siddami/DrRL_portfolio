function Header(){
    return(
        <header className="max-h-28">
            <div className="container mx-auto">
                <div className="flex justify-between items-center h-[120px]">
                    {/* logo */}
                    <a href="#">
                        <img src="/images/logo.svg"
                             alt="Dr RL"
                             className="items-center justify-center h-[30vh]" />
                    </a>

                    {/* button */}
                    <button className="btn btn-sm">Work with me</button>
                </div>
            </div>
        </header>
    )
}
export default Header
