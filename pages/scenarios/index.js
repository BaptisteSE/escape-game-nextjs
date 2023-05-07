import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

const Scenarios = ({ scenarios }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" name="description" content="Bienvenue sur notre escape game incroyable ! rejoins-nous"/>
      </Head>
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center my-8">Mes scénarios</h1>
      <div className="mx-4 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {scenarios.data.map((scenario) => {
          const attributes = scenario.attributes;
          const images = attributes?.gallery;
          const MAX_DESCRIPTION_LENGTH = 100; // définir la longueur maximale de la description
          const description = attributes.desc.length > MAX_DESCRIPTION_LENGTH ? attributes.desc.slice(0, MAX_DESCRIPTION_LENGTH) + '...' : attributes.desc; // couper la description si elle dépasse la longueur maximale
          return (
            <div key={scenario.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center">
              <Link href={`/scenarios/${scenario.id}`}>
                <div className="block rounded-lg rounded-b-none overflow-hidden">
                  {images && images.data[0] && (
                    <Image
                      src={"http://localhost:1337" + images.data[0].attributes?.url}
                      alt={attributes.title}
                      width={500}
                      height={500}
                      layout="responsive"
                      className="object-cover object-center w-full h-full"
                    />
                  )}
                  {!images && (
                    <div className="bg-gray-300 h-64 w-full"></div>
                  )}
                </div>
              </Link>
              <div className="p-4 flex flex-col items-center">
                <Link href={`/scenarios/${scenario.id}`}>
                  <span className="block text-xl font-semibold text-gray-900 cursor-pointer text-center mb-2">{attributes.title}</span>
                </Link>
                <p className="text-gray-600">{description}</p>
              </div>
            </div>
          )
        })}
      </div>
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
