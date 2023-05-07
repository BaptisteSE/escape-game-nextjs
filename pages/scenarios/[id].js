import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'


const Scenario = ({scenario}) => {
  const attributes = scenario.data.attributes;
  return (
    <>
      <Head>
        <meta charset="utf-8" name="description" content="Bienvenue sur notre escape game incroyable ! rejoins-nous"/>
      </Head>
      <div className="max-w-3xl mx-auto mt-10 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">{attributes.title}</h1>
        <ul className="mt-10 space-y-4">
          <li key={attributes.id} className="bg-white shadow-md rounded-lg p-4">
            
            <p className="mt-4 text-gray-600">{attributes.desc}</p>
            <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center text-gray-600">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="12"></line>
                  <line x1="12" y1="16" x2="12" y2="16"></line>
                </svg>
                <span className="ml-2">{attributes.duration} heure(s)</span>
              </div>
              <div className="flex items-center text-gray-600">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line>
                  <line x1="19.07" y1="4.93" x2="4.93" y2="19.07"></line>
                </svg>
                <span className="ml-2">{attributes.numberPlayerMin} - {attributes.numberPlayerMax} joueurs</span>
              </div>
            </div>
          </li>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {attributes.gallery.data.map((image) => (
                <div key={image.id} className="bg-white shadow-md rounded-lg p-4">
                <Image
                    src={"http://localhost:1337" + image.attributes?.url}
                    alt={image.attributes.alternativeText || ''}
                    layout="responsive"
                    width={image.attributes.width}
                    height={image.attributes.height}
                    className="rounded-lg"
                />

                </div>
            ))}
            </div>

        </ul>
      </div>
    </>
  );
};

export async function getStaticPaths() {
  const res = await fetch('http://localhost:1337/api/scenarios')
  const scenarios = await res.json()
  const paths = scenarios.data.map((scenario) => ({
    params: { id: scenario.id.toString() },
  }))
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

export async function getStaticProps({params}) {
  const res = await fetch('http://localhost:1337/api/scenarios/'+params.id+'?populate=*')
  const scenario = await res.json()
  return {
    props: {scenario},
  }
}

export default Scenario;
