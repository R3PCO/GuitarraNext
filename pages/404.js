import Layout from "../components/layout.js"
import Link from "next/link.js"

export default function Pagina404() {

  

  return (
    <Layout
        title= "pagina no encontrada"
    >
      <p className="error"> Pagina no encontrada</p>
      <Link legacyBehavior href="/">
        <a className="error-enlace">
            ir al inicio
        </a>      
      </Link>
    </Layout>


  )
}

