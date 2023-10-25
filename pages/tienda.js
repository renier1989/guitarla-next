import Guitarra from "@/components/guitarra";
import Layout from "@/components/layout";


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

        {guitarras?.map(guitarra=>(
          <Guitarra 
          key={guitarra.id}
            guitarra={guitarra.attributes}
          />

        ))}
      </main>
    </Layout>
  );
}

// // esta funcion simepre requiere de un build por cada cambio en la api
// export async function getStaticProps(){
//   const resp = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`);
//   const {data: guitarras} = await resp.json();
//   // console.log(guitarras);
//   return {
//     props:{
//       guitarras
//     }
//   }
// }


export async function getServerSideProps(){
  const resp = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`);
  const {data: guitarras} = await resp.json();
  // console.log(guitarras);
  return {
    props:{
      guitarras
    }
  }
}