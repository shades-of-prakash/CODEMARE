import Image from "next/image"
function Navbar(){
    return <section className="w-full">
        <nav className="w-full flex justify-between bg-green-500 p-2.5">
            <div className="logo_div flex justify-center items-center">
                <Image src="next.svg" alt="logo" width={100} height={100}/>
            </div>
            <div>
                <div className="search_div">
                    <input type="text" name="" id="" />
                </div>
                <div>
                    <p>On progress...</p>
                </div>
            </div>
        </nav>
    </section>
}
export default Navbar;