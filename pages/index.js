import Tarifs from '../components/tarifs'
import Head from 'next/head'

export default function Home({tarifs}) {
  return (
    <>
    <Head>
      <meta charset="utf-8" name="description" content="Bienvenue sur notre escape game incroyable ! rejoins-nous"/>
    </Head>
    <div>
      <section className="bg-gray-100 py-16">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">Bienvenue sur notre site</h1>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">À propos de notre escape game</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Plongez dans un univers captivant
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Notre escape game est le lieu idéal pour les amateurs de sensations fortes et de défis intellectuels. Avec ses énigmes originales, son ambiance immersive et son décor soigné, notre escape game vous garantit une expérience inoubliable.
            </p>
          </div>

          <div className="mt-20">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                    Des énigmes originales
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">
                    Nos énigmes ont été conçues spécialement pour notre escape game et sont donc uniques. Elles vous surprendront par leur originalité et leur complexité.
                  </dd>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
            <div className="ml-4">
              <dt className="text-lg leading-6 font-medium text-gray-900">
                Une ambiance immersive
              </dt>
              <dd className="mt-2 text-base text-gray-500">
                Dès votre entrée dans notre escape game, vous serez plongé(e) dans un univers fascinant et mystérieux. Chaque détail de notre décor a été soigneusement pensé pour vous offrir une expérience immersive et réaliste.
              </dd>
            </div>
          </div>

          <div className="flex">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
            <div className="ml-4">
              <dt className="text-lg leading-6 font-medium text-gray-900">
                Un défi intellectuel
              </dt>
              <dd className="mt-2 text-base text-gray-500">
                Notre escape game est conçu pour mettre à l'épreuve vos capacités intellectuelles et votre esprit d'équipe. Chaque énigme vous demandera de la réflexion et de la logique, et vous devrez travailler ensemble pour résoudre toutes les énigmes à temps.
              </dd>
            </div>
          </div>
        </dl>
      </div>
    </div>
    <div className="my-10 border border-gray-200 rounded-lg shadow-lg">
      <div className="p-6">
        <p className="text-lg leading-6 font-medium text-gray-900 text-center mb-4">Voici nos tarifs</p>
        <div className="flex flex-col items-center">
          <Tarifs tarifs={tarifs} />
        </div>
      </div>
    </div>
  </section>
</div>
</>
  )
}

export async function getStaticProps() {
  const res = await fetch('http://localhost:1337/api/tarifs/')
  const tarifs = await res.json()
  return {
      props: {tarifs},
  }
}

