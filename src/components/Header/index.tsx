import * as C from "./styles";
import logo from "../../imgs/icon.png";

export const Header = () => {
    return(
        <C.Container>
            <img src={logo} alt="logo"/>
            <div>
                <h1>Cadastro de Desenvolvedor</h1>
                <p>Faça seu cadastro na lista e receba um emprego instantaneamente.</p>
            </div>
        </C.Container>
    );
}