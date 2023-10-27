import Image from "next/image";
import styles from "../../styles/guitarras.module.css";
import Layout from "@/components/layout";
export default function Guitarra({ guitarra }) {
  // console.log(guitarra[0].attributes.nombre);
  const { nombre, descripcion, imagen, precio } = guitarra[0].attributes;
  return (
    <div>
      <Layout
      title={`Guitarra ${nombre}`}
      >
        <div className={styles.guitarra}>
          <Image
            src={imagen.data.attributes.url}
            width={600}
            height={400}
            alt={`nombre de la guitarra ${nombre}`}
          />

          <div className={styles.contenido}>
            <h3>{nombre}</h3>
            <p className={styles.descripcion}>{descripcion}</p>
            <p className={styles.precio}>${precio}</p>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export async function getStaticPaths() {
  const respuesta = await fetch(`${process.env.API_URL}/guitarras`);
  const { data } = await respuesta.json();
  const paths = data.map((guitarra) => ({
    params: { url: guitarra.attributes.url },
  }));
  // este return debe declararse de esta manera, sino next dara un error.
  return {
    paths,
    fallback: false, // esto es para validar una pagina que no exista.
  };
}

// de forma estatica se le tiene que pasar todas las paginas que se deben generar
// esto es asi para las paginas que se manejan de forma dinamica.
// por regla de next el atributo por defecto que espero getStatisProps es params
export async function getStaticProps({ params: { url } }) {
  const respuesta = await fetch(
    `${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`
  );
  const { data: guitarra } = await respuesta.json();
  return {
    props: {
      guitarra,
    },
  };
}
// export async function getServerSideProps({query: {url}}){
//   const respuesta = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`);
//   const {data: guitarra} = await respuesta.json();
//   return{
//     props:{
//       guitarra
//     }
//   }
// }
