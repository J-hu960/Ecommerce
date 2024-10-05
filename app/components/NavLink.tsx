import Link from 'next/link';
import { usePathname } from 'next/navigation'


const NavLink = ({ href, children }) => {
  const pathname = usePathname();

  // Verificamos si la ruta actual es igual a la del link
  const isActive = pathname === href;

  return (
    <Link href={href} className={isActive ? 'text-sm  leading-6 text-gray-600 underline font-bold' :"text-sm font-semibold leading-6 text-gray-600"}>
        {children}
      
    </Link>
  )}

  export default NavLink
