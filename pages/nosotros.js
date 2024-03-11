import Link from "next/link"
import Layout from "../components/layout"
import Image from "next/image"
import styles from "../styles/nosotros.module.css"


export default function Nosotros() {
  return (
    <Layout
      title= {"nosotros"}
      description = "Sobre nosotros GuitarLA, tienda de música"   
    >
    <main className="contenedor">
      <h1 className="heading"> Nosotros</h1>

      <div className={styles.contenido}>
        <Image src = "/img/nosotros.jpg" width={1000} height= {800} alt="Imagen sobre nosotros"/>
        <div>
           <p>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
           sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
           Ut enim ad minim veniam, quis nostrud exercitation ullamco 
           laboris nisi ut aliquip ex ea commodo consequat. Duis aute
            irure dolor in reprehenderit in voluptate velit esse cillum 
            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
           </p>

        </div>

      </div>

    </main>

    </Layout>
  )
}
