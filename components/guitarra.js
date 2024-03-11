import Image from "next/image"
import Link from "next/link"
import styles from "../styles/guitarras.module.css"

export default function Guitarra({guitarra}) {

 const {nombre, descripcion, Imagen, precio, url} = guitarra

  console.log(guitarra)
  return (
    <div className={styles.guitarras}>
      <Image src={Imagen.data.attributes.formats.medium.url} 
      width={600} height={400} alt={'Imagen guitarra ${nombre}'}/>
    
      <div className={styles.contenido}>
        <h1> {nombre}</h1>
        <p className={styles.descripcion}> {descripcion}</p>
        <p className={styles.precio}> ${precio}  </p>
        <nav className={styles.enlace}>
          <Link legacyBehavior href={`/guitarras/${url}`}>          
             <a className={styles.enlace}>
              Ver producto
            </a> 
          </Link>
        </nav>

      </div>


    </div>

  )
}
