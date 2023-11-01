import Guitarra from "@/components/guitarra";
import Layout from "@/components/layout";
import styles from "../styles/grid.module.css";
import Post from "@/components/post";
import Curso from "@/components/curso";

export default function Home({ guitarras, posts, curso }) {
  console.log(curso);
  return (
    <>
      <Layout
        title={"Inicio"}
        description={"Blog de guitarras, tienda de guitarras , GuitarLa y mas"}
      >

        {/* SECCION DE LAS GUITARRAS */}
        <main className="contenedor">
          <h1 className="heading">Nuestra Colección</h1>
          <div className={styles.grid}>
            {guitarras?.map((guitarra) => (
              <Guitarra key={guitarra.id} guitarra={guitarra.attributes} />
            ))}
          </div>
        </main>
        
        {/* SECCION DEL CURSO */}
        <Curso curso={curso}/>

        {/* SECCION DEL BLOG */}
        <section className="contenedor">
          <h2 className="heading">Últimas Publicaciones</h2>
          <div className={styles.grid}>
          {posts?.map(post=>(
            <Post 
            key={post.id}
            post={post.attributes}
            />
          ))}
        </div>
        </section>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const urlGuitarras = `${process.env.API_URL}/guitarras?populate=imagen`;
  const urlPost = `${process.env.API_URL}/posts?populate=imagen`;
  const urlCurso = `${process.env.API_URL}/curso?populate=imagen`;

  const [resGuitarras, resPosts,resCurso] = await Promise.all([
    fetch(urlGuitarras),
    fetch(urlPost),
    fetch(urlCurso),
  ]);

  const [{ data: guitarras }, { data: posts },{data: curso}] = await Promise.all([
    resGuitarras.json(),
    resPosts.json(),
    resCurso.json(),
  ]);

  return {
    props: {
      guitarras,
      posts,
      curso,
    },
  };
}
