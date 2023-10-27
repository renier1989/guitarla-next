// import React from 'react'

import Layout from "@/components/layout";
import Link from "next/link";

export default function Pagina404() {
  return <Layout
  title="Pagino no encontrada"
  >
    <p className="error">Pagina no encontrada</p>
    <Link href="/" className="error-enlace">
    Ir al Inicio
    </Link>
  </Layout>;
}
