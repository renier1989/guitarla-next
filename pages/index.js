import Layout from "@/components/layout";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Layout
        title={'Inicio'}
        description={'Blog de guitarras, tienda de guitarras , GuitarLa y mas'}
      >
        <h1>Hola, esta es una aplicacion de Next</h1>
        <Link href="/nosotros">Ir a nosotros</Link>
      </Layout>
    </>
  );
}
