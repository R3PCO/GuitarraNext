import Layout from '../components/layout'
import {Inter} from 'next/font/google'
import Guitarra from '../components/guitarra'
import Post from '../components/post'
import Curso from '../components/curso'
import styles from '../styles/grid.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home({guitarras,posts,curso}){

 console.log(curso)

  return(
  <>
    <Layout
      title = {'ïnicio'}
      description={'Blog de musica venta de guitarras y más'}
    >
      <main className='contenedor'>
        <h1 className= 'heading'> Nuestra Colección</h1>
        <div className={styles.grid}>        
              {guitarras?.map(guitarra =>(
                <Guitarra
                  key={guitarra?.id}
                  guitarra ={guitarra?.attributes}
                
                />
              ))}
        </div>
      </main>
    
      <Curso
        curso={curso.attributes}
      />

    <section className='contenedor'>
      <h2 className='heading'> Blog</h2>
      
      <div className= {styles.grid}>
            {posts?.map(post => (
              <Post
                key={post.id}
                post= {post.attributes}
              />
            ))}
        </div>
    </section>
  </Layout>
  </>
)
}



export async function getStaticProps(){
  const urlGuitarras =`${process.env.API_URL}/guitarras?populate=*`
  const urlPosts =`${process.env.API_URL}/posts?populate=*`
  const urlCurso =`${process.env.API_URL}/curso?populate=*`

  const[resGuitarras, resPosts, resCurso]= await Promise.all([
    fetch(urlGuitarras),
    fetch(urlPosts),
    fetch(urlCurso)  

  ])

  const[{data:guitarras},{data:posts},{data:curso}]= await Promise.all([
    resGuitarras.json(),
    resPosts.json(),
    resCurso.json()

  ])

 // console.log(guitarras)
 // console.log(posts)
  
  return {
    props:{
      guitarras,
      posts,
      curso
    }
  }
}