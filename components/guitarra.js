import Image from "next/image"
import Link from "next/link"

export default function Guitarra({guitarra}) {
  
  const { nombre , descripcion, imagen , precio , url} = guitarra
  return (
    <div>

      <Image src={imagen.data.attributes.formats.medium.url} width={600} height={400} alt={`nombre de la guitarra ${nombre}`} />

      <div>
        <h3>{nombre}</h3>
        <p>{descripcion}</p>
        <p>${precio}</p>

        <Link href={`/guitarras/${url}`}>
          ver guitarra
        </Link>
      </div>

    </div>
  )
}
