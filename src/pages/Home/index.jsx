import ListaDeAssuntos from "../../components/ListaAssuntos";


export default function Home(){
    return (
        <div>
            <div>
                <h1>GIT</h1>
                <ListaDeAssuntos 
                assunto="Como publicar no GitHub" 
                referencia="/PublicarNoGitHub"
                />
            </div>
            <div>
                <h1>FRONT-END</h1>
                <h2>ReactJS</h2>
                <ListaDeAssuntos assunto="Como criar um componente em React" />
            </div>
        </div>
    )
}