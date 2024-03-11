//import { useRouter } from "next/router"
import { useState } from "react"
import Image from "next/image"
import styles from "../../styles/guitarras.module.css"
import Layout from "../../components/layout"

export default function Producto({guitarra, agregarCarrito}) {
 //const router = useRouter()
 //console.log(guitarra[0].attributes.nombre)
//console.log(guitarra)
//console.log(guitarra[0])

  const [cantidad, setCantidad] = useState(0)
  const { descripcion,Imagen,precio,nombre} = guitarra[0].attributes

  //console.log(cantidad)
  //  console.log(Imagen)
  const handleSubmit= e =>{
    e.preventDefault()
  
    if(cantidad <1){
        alert('cantidad no valida')
        return
    }  
  
  
 //Constrccion del objeto
    const guitarraSeleccionada = {
      id:guitarra[0].id, 
      imagen:Imagen.data.attributes.url,
      nombre,
      precio,
      cantidad
    }

  //Pasando la información

  agregarCarrito(guitarraSeleccionada)


  }

  return (
    <Layout
      title= {`Guitarra ${nombre}`}
    >  
      <div className={styles.guitarra}>
        <Image src={Imagen.data.attributes.formats.medium.url} width={600} height={400} alt={`Imagen guitarra ${nombre}`} />
      
        <div className={styles.contenido}>
          <h3> {nombre}</h3>
          
          <p className={styles.descripcion}> {descripcion}</p>
          <p className={styles.precio}>${precio},00  </p>  

          <form 
            onSubmit= {handleSubmit}
            className={styles.formulario}>
            <label htmlFor= "cantidad"> Cantidad</label>

            <select
              onChange={e =>setCantidad(+e.target.value)}
              id = "cantidad">
                <option value ="0">--Seleccione--</option>
                <option value ="1">1</option>
                <option value ="2">2</option>
                <option value ="3">3</option>
                <option value ="4">4</option>
                <option value ="5">5</option>
            </select>
            
            <input
              type="submit"
              value= "Agregar al carrito"           
            />
          </form>
        </div>
      </div>
    </Layout>    
  )
}
/*
export async function getServerSideProps({query:{url}}){

    //console.log(url)
    const respuesta = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen
    `)
  
    const {data:guitarra} = await respuesta.json()
    //console.log(data)    
    return {
        props:{
           guitarra
            
        }
    }

}*/
export async function getStaticPaths(){

  //const respuesta = await fetch(`${process.env.API_URL}/guitarras`)
  const respuesta = await fetch(`${process.env.API_URL}/guitarras`)
  const {data}  = await respuesta.json()

 // console.log(data)

  const paths = data.map(guitarra => ({
    params:{
      url: guitarra.attributes.url
    }
  }))
  
  //console.log(paths)

  return {
     paths, 
     fallback:false
  }
  
}

export async function getStaticProps({params:{url}}){

  //console.log(url)
  const respuesta = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${url}&populate=Imagen
  `)

  const {data:guitarra} = await respuesta.json()
  //console.log(data)    
  return {
      props:{
         guitarra
          
      }
  }

}