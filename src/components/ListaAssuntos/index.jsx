import { Link } from "react-router-dom";

export default function ListaDeAssuntos( {assunto, referencia}){
    return (
        <div>
            <ul>
                <li>
                    <Link to={referencia}>
                        {assunto}
                    </Link>
                </li>
            </ul>
        </div>
    )
}