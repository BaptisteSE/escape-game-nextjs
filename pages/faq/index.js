import Head from "next/head";
const Messages = ({ messages }) => {
    return (
      <>
      <Head>
        <meta charset="utf-8" name="description" content="Bienvenue sur notre escape game incroyable ! rejoins-nous"/>
      </Head>
        <h1>FAQ</h1>
        <h2>Liste des questions</h2>
        <ul>
          {messages.data.map((message) => (
            <><li key={message.id}>{message.attributes.question}</li><p>{message.attributes.reponse}</p><br></br></>
          ))}
        </ul>
        
      </>
    );
  };
  


export async function getStaticProps() {
    const res = await fetch('http://localhost:1337/api/messages/')
    const messages = await res.json()
    return {
        props: {messages},
    }
}
   
export default Messages;