import Layout from "@/components/layout";
import ListadoGuitarras from "@/components/listado-guitarras";

export default function Tienda({guitarras}) {
  console.log(guitarras);
  return (
    <Layout
      title={"Tienda Virtual"}
      description={
        "Tienda Virtual, GuitarLA, Instrumentos Musicales, Guitarras Electricas"
      }
    >
      <main className="container">
        <h1 className="heading">Nuestra Colección</h1>

        <ListadoGuitarras/>
      </main>
    </Layout>
  );
}

export async function getStaticProps(){

  
  const resp = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`);
  const {data: guitarras} = await resp.json();

  // console.log(guitarras);

  return {
    props:{
      guitarras
    }
  }
}