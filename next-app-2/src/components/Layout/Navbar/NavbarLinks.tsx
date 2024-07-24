import { links } from "@/lib/constant"
import NavbarLink from "./NavbarLink"
import NavbarMobile from "./NavbarMobile"
import ThemeToggler from "./ThemeToggler"



export default function NavbarLinks() {
  return (
    <div className="flex items-center gap-2">
      <div className="hidden md:flex items-center gap-2">
        {links.map(link=> <NavbarLink key={link.title} title={link.title} path={link.path}/>)}
        <ThemeToggler/>
      </div>
      <NavbarMobile/>
    </div>
  )
}
