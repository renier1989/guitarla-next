import Image from "next/image"
import Link from "next/link"
import {formatearFecha} from "../utils/helpers"
import styles from "../styles/blog.module.css"

export default function Post({post}) {
    const {contenido, titulo, publishedAt, imagen, url} = post
  return (
    <article>
        <Image src={imagen.data.attributes.formats.medium.url} width={600} height={400} alt={`Imagen blog ${titulo}`} />
        <div className={styles.contenido}>
            <h3>{titulo}</h3>
            <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
            <p className={styles.resumen}>{contenido}</p>
            <Link className={styles.enlace} href={`/blog/${url}`}>Ir al Post</Link>
        </div>
    </article>
  )
}