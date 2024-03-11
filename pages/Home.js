import Layout from '../components/layout';
import Guitarra from '../components/guitarra';
import styles from '../styles/grid.module.css';


export default function Home({ guitarras, posts }) {
  //console.log(guitarras)
  //console.log(posts)

  return (
    <>
      <Layout
        title={'Inicio'}
        description={"blog de nusica, venta de guitarras y mas"}
      >
      </Layout>
      <main className='contenedor'>
        <h1 className='heading'> Nuestra Colección</h1>

        <div className={styles.grid}>
          {guitarras?.map(guitarra => (
            <Guitarra
              key={guitarra?.id}
              guitarra={guitarra?.attributes} />
          ))}
        </div>



      </main>
      <section>


      </section>

    </>
  );
}
