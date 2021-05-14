import NavLink from "./NavLink"

export default function Nav({links}) {
  return (
    <nav className="flex justify-end">
      {links.map(({title, href}) => <NavLink key={title} title={title} href={href}/>)}
    </nav>
  )
}
