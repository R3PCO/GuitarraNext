import Link from "next/link"
import Layout from "@/components/layout"
import Guitarra from "../components/guitarra"
import styles from "../styles/grid.module.css"

export default function Tienda({guitarras}) {

 console.log(guitarras)

  return (
    <Layout
      title= {"tienda"}
      description = "Tienda virtual- venta de guitarras, instrummentos,  GuirtarLA"   
    >
      <main className="contenedor">
        <h1 className="heading"> Nuestra colección</h1>
          <div className={styles.grid}>        
            {guitarras?.map(guitarra =>(
              <Guitarra
                key={guitarra?.id}
                guitarra ={guitarra?.attributes}
              
              />
            ))}
          </div>
      </main>

    </Layout>
  )
}

/*export async function getStaticProps(){

  const respuesta = await fetch(`http://127.0.0.1:1337/api/guitarras?populate=*`)
  //const resultado = await respuesta.json()
  //console.log(resultado)
  
  const {data:guitarras}= await respuesta.json()
  //console.log(guitarras)


  return {
    props:{
      guitarras
    }

  }
}*/

export async function getServerSideProps(){
  const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=*`)
  //const respuesta = await fetch(`${process.env.API_URL}/guitarras?%20filters[url]=%20${url}populate=*`) 
  const {data:guitarras}= await respuesta.json() 
  return {
    props:{
      guitarras
    }
  }
}
