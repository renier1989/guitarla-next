import Layout from "@/components/layout";
import styles from "../styles/carrito.module.css"

export default function Carrito() {
  return (
    <Layout 
        title="Carrito de Compras"
    >
        <main className="contenedor">
        <h1 className="heading">Carrito</h1>
        <div>
            <div>
                <h2>Artículos</h2>
            </div>
            <aside>
                <h3>Resumen del pedido</h3>
                <p>Total a pagar: $1000</p>
            </aside>
        </div>
        </main>
    </Layout>
  )
}
