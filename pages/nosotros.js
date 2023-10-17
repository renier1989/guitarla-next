import Layout from "@/components/layout";
import Link from "next/link";

export default function Nosotros() {
  return (
    <Layout
        title={'Nosotros'}
        description={'Acerca de Nosotros, GuitarLA , Venta de guitarras y mas'}
    >
      <Link href="/">Ir al inicio</Link>
    </Layout>
  );
}
