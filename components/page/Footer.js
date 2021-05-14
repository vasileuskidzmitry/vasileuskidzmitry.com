import {ICON_CONFIGURATION} from "../../constants/social"
import SocialLink from "./SocialLink"

export default function Footer() {
  return (
    <footer className="flex flex-col md:flex-row pt-4 justify-between items-center mb-4 w-full border-t-2 border-black">
      <p className="text-xs mb-4">
        Copyright &copy; {new Date().getFullYear()} Vasileuski Dzmitry. All rights reserved.
      </p>
      <div className="flex justify-end mb-4">
        {Object.entries(ICON_CONFIGURATION).map(([type]) => <SocialLink key={type} type={type}/>)}
      </div>
    </footer>
  )
}
