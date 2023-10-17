import Image from "next/image";
import logo from "../public/img/logo.svg"
import Link from "next/link";

export default function Header() {
    return (
      <header>
        <div className="contenedor">
            <Image src={logo.src} width={300} height={40} alt="imagen logotipo" />
        </div>
        <nav>
            <Link href="/">Inicio</Link>
            <Link href="/nosotros">Nosotros</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/tienda">Tienda</Link>
        </nav>
      </header>
    )
  }