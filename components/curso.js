import styles from "../styles/curso.module.css"
export default function Curso({curso}) {
    const { titulo, contenido, imagen, pulbishedAt } = curso.attributes;
    console.log(titulo);
  return (
    <section className={`${styles.curso} curso`}>
        <style jsx>{`
            .curso {
                background-image: linear-gradient(to right, rgb(0 0 0 / .65), rgb(0 0 0 / .7)), url(${imagen?.data?.attributes?.url})
            }
        `}</style>
        <div className={`${styles.grid} contendor`}>
            <div className={styles.contenido}>
                <h2 className="heading">{titulo}</h2>
                <p>{contenido}</p>
            </div>
        </div>
    </section>
  )
}
