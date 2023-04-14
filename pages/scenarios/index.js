import Head from 'next/head'
import Image from 'next/image'
const Scenarios = ({ scenarios }) => {
    return (
      <>
      <Head>
        <meta charset="utf-8" name="description" content="Bienvenue sur notre escape game incroyable ! rejoins-nous"/>
        <title>Bienvenue sur notre escape game</title>
      </Head>
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">Mes scénarios</h1>
        <ul>
          {scenarios.data.map((scenario) => {
            const attributes = scenario.attributes;
            const images = attributes?.gallery;
            return(
            <>
            
            <li key={scenario.id}>{attributes.title}</li>
            <p>{attributes.desc}</p><br></br>
            <section class="overflow-hidden text-neutral-700">
                <div class="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
                <div class="-m-1 flex flex-wrap md:-m-2">
            {images.data.map((image) => (
              
                  
                    <div class="flex w-1/3 flex-wrap">
                      <div class="w-full p-1 md:p-2">
                        <Image width={500} height={500}  alt="gallery"
                      class="block h-full w-full rounded-lg object-cover object-center" src={"http://localhost:1337" + image.attributes?.url} />
                    </div>
                  </div>
                
              
            ))} 
            </div>    
            </div>
            </section>       
            </>
          )
        })}
        </ul>
      </>
    );
  };
  


export async function getStaticProps() {
    const res = await fetch('http://localhost:1337/api/scenarios?populate=*')
    const scenarios = await res.json()
    return {
        props: {scenarios},
    }
}
   
export default Scenarios;