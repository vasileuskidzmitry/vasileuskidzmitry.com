import Link from "next/link"
import {useRouter} from 'next/router'

export default function NavLink({title, href}) {
  const router = useRouter()
  const isActive = router.asPath === href

  return (
    <Link href={href}>
      <a className={`ml-4 mr-4 md:ml-8 md:mr-0 hover:underline ${isActive && 'underline'}`}>{title}</a>
    </Link>
  )
}
