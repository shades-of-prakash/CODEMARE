import Image from "next/image"
import ToggleTheme from "./ToggleTheme"
import {Search} from "lucide-react"
import {auth} from "../app/auth"
import Link from 'next/link'

async function Navbar(){
    const session=await auth();

    return <section className="w-full">
        <nav className="w-full h-20 flex justify-between bg-primary p-2.5 border-b border-border-color text-txt-color">
            <div className="logo_div flex justify-center items-center space-x-3">
                <svg className="w-6 h-6" viewBox="0 0 255 255" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="127.5" cy="127.5" r="123" stroke="currentcolor" strokeWidth="9"/>
                    <path d="M111.5 98C111.5 112.083 100.083 123.5 86 123.5C71.9167 123.5 60.5 112.083 60.5 98C60.5 83.9167 71.9167 72.5 86 72.5C100.083 72.5 111.5 83.9167 111.5 98Z" stroke="currentcolor" strokeWidth="9"/>
                    <circle cx="164" cy="98" r="25.5" stroke="currentcolor" strokeWidth="9"/>
                    <path d="M30 202L87 160L121 180L155 160L225 202" stroke="currentcolor" strokeWidth="12"/>
                </svg>
                <span className="text-2xl font-normal">Codemare</span>
            </div>
            <div className="flex justify-between items-center space-x-5 text-txt-color">
                <div className="w-sm bg-background flex items-center p-2 rounded-md space-x-2 border border-border-color font-light">
                    <Search className="w-0.1 text-txt-color w-6 h-6 stroke-[1px]"/>
                    <input type="text" name="" id="" className="w-full outline-none flex items-center" />
                </div>
                {/* <div><ToggleTheme/></div> */}
                <div>
                    {session && session?.user ? (
                        <>
                        <div>Something...</div>
                        </>
                    ):(<><Link href="/login" className="bg-button-default-background px-4 py-2 rounded-sm">Login</Link></>)}
                </div>
            </div>
        </nav> 
    </section>
}
export default Navbar;