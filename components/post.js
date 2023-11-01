import Image from "next/image"
import Link from "next/link"

export default function Post({post}) {
    const {contenido, titulo, publishedAt, imagen, url} = post
  return (
    <article>
        <Image src={imagen.data.attributes.formats.medium.url} width={600} height={400} alt={`Imagen blog ${titulo}`} />
        <div>
            <h3>{titulo}</h3>
            <p>{contenido}</p>
            <p>{publishedAt}</p>
            <Link href={`/blog/${url}`}>Ir al Post</Link>
        </div>
    </article>
  )
}