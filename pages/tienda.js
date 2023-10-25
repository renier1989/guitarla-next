import Layout from "@/components/layout";
import ListadoGuitarras from "@/components/listado-guitarras";

export default function Tienda() {
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
