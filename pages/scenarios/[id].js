import Head from 'next/head'
const Scenario = ({scenario}) => {
    const attributes = scenario.data.attributes;
    return (
        <>
        <Head>
            <meta charset="utf-8" name="description" content="Bienvenue sur notre escape game incroyable ! rejoins-nous"/>
            <title>Bienvenue sur notre escape game</title>
        </Head>
        <h1>Mon scénario</h1>
        <ul>     
            <>
            <li key={attributes.id}>{attributes.title}</li>
            <p>Description du scénario : {attributes.desc}</p>
            <p>Durée : {attributes.duration} heure(s)</p>
            <p>Nombre de joueur minimim : {attributes.numberPlayerMin}</p>
            <p>Nombre de joueur maximun : {attributes.numberPlayerMax}</p>
            </>
        </ul>
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
    const res = await fetch('http://localhost:1337/api/scenarios/'+params.id)
    const scenario = await res.json()
    return {
        props: {scenario},
    }
}

export default Scenario;