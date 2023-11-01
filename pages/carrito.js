import Layout from "@/components/layout";
import styles from "../styles/carrito.module.css";
import Image from "next/image";

export default function Carrito({ carrito }) {
  return (
    <Layout title="Carrito de Compras">
      <main className="contenedor">
        <h1 className="heading">Carrito</h1>
        <div className={styles.contenido}>
          <div className={styles.carrito}>
            <h2>Artículos</h2>

            {carrito.length === 0
              ? "Carrito Vacio"
              : carrito.map((producto) => (
                  <div key={producto.id} className={styles.producto}>
                    <div>
                      <Image
                        width={250}
                        height={480}
                        src={producto.imagen}
                        alt={`Imagen de la guitarra ${producto.nombre}`}
                      />
                    </div>
                    <div>
                      <p className={styles.nombre}>{producto.nombre}</p>
                      <p>Cantidad : {producto.cantidad}</p>
                      <p className={styles.precio}>$<span>{producto.precio}</span></p>
                      <p className={styles.subtotal}>
                        
                        Subtotal: $<span>{producto.cantidad * producto.precio}</span>
                      </p>
                    </div>
                  </div>
                ))}
          </div>
          <aside className={styles.resumen}>
            <h3>Resumen del pedido</h3>
            <p>Total a pagar: $1000</p>
          </aside>
        </div>
      </main>
    </Layout>
  );
}
