function Header(){
    return(
        <Header className="py-8 ">
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    {/* logo */}
                    <a href="#">
                        <img src="/images/logo.svg" alt="dad's logo" />
                    </a>

                    {/* button */}
                    <button className="btn btn-sm">Work with me</button>
                </div>
            </div>
        </Header>
    )
}
export default Header
