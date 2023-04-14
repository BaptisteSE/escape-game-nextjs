import Tarifs from '../components/tarifs'
import Head from 'next/head'
export default function Home({tarifs}) {
  return (
    <>
    <Head>
      <meta charset="utf-8" name="description" content="Bienvenue sur notre escape game incroyable ! rejoins-nous"/>
      <title>Bienvenue sur notre escape game</title>
    </Head>
    <div>
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">Bienvenue sur notre site</h1>
      <p className="text-center">Voici nos tarifs</p>
      <Tarifs tarifs={tarifs} />
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
