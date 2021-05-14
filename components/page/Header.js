import Nav from "./Nav"
import {NAV_LINKS, HOME_HREF} from "../../constants/navigation"
import Link from "next/link"

export default function Header() {
  return (
    <header
      className="flex flex-col md:flex-row justify-between items-center w-full pt-4 pb-4 mb-4 border-b-2 border-black">
      <Link href={HOME_HREF}>
        <a className="font-bold border-b-2 border-black md:border-0 pb-4 md:pb-0 mb-4 md:mb-0 w-full md:w-auto text-center text-2xl">
          Vasileuski Dzmitry
        </a>
      </Link>
      <Nav links={NAV_LINKS}/>
    </header>
  )
}
