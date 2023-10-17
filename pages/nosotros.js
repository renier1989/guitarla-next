import Layout from "@/components/layout";
import Image from "next/image";
import styles from "../styles/nosotros.module.css";

export default function Nosotros() {
  return (
    <Layout
      title={"Nosotros"}
      description={"Acerca de Nosotros, GuitarLA , Venta de guitarras y mas"}
    >
      <main className="contenedor">
        <h2 className="heading">Nosotros</h2>
        <div className={styles.contenido}>
          <Image
            src="/img/nosotros.jpg"
            width={1000}
            height={800}
            alt="Imagen de nosotros"
          />

          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non illo
              harum, ducimus amet labore esse tenetur ea, deleniti libero
              repudiandae, repellendus ratione nam debitis inventore blanditiis.
              Blanditiis, ipsum facere! Expedita neque dignissimos corrupti
              necessitatibus quasi distinctio incidunt perspiciatis quaerat ea,
              inventore illum tempora nulla aperiam quis dolor dolore quia
              pariatur! Ipsa, aspernatur animi. Fuga, laboriosam delectus
              cupiditate maxime facere consectetur.
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              animi cupiditate voluptates debitis! Pariatur, quod tempore libero
              vitae eligendi tenetur culpa nisi beatae cumque, ex voluptas
              placeat repellat explicabo expedita ea.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
}
