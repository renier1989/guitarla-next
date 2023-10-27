
export default function Guitarra({guitarra}) {
  console.log(guitarra[0].attributes.nombre);
  return (
    <div>Guitarra unica</div>
  )
}


export async function getStaticPaths(){
  const respuesta = await fetch(`${process.env.API_URL}/guitarras`);
  const {data } = await respuesta.json();
  const paths = data.map(guitarra => ({
    params:{url: guitarra.attributes.url}
  }));
  // este return debe declararse de esta manera, sino next dara un error.
  return {
    paths,
    fallback: false // esto es para validar una pagina que no exista.
  }
}

// de forma estatica se le tiene que pasar todas las paginas que se deben generar
// esto es asi para las paginas que se manejan de forma dinamica.
// por regla de next el atributo por defecto que espero getStatisProps es params
export async function getStaticProps({params: {url}}){
  const respuesta = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`);
  const {data: guitarra} = await respuesta.json();
  return{
    props:{
      guitarra
    }
  }
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