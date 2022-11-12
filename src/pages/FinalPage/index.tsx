import { useNavigate } from 'react-router-dom';
import * as C from "./styled";
import { useForm, FormActions } from '../../contexts/FormContext';
import { Theme } from '../../components/Theme';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BiRevision } from "react-icons/bi"

export const FinalPage = () => {
    const navigate = useNavigate();
    const { state, dispatch } = useForm();

    useEffect(() => {
        if(state.name === '' || state.email === '' || state.github === '') {
            navigate('/');
        } else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 4
            });
        }
    }, []);

    const handleNextStep = () => {
        if(state.name !== '' && state.email !== '' && state.github !== '') {
            navigate('/');
        } else {
            alert("Preencha os dados");
        }
    }

    return(
        <Theme>
            <C.Container>
                <span>Confirmação</span>
                <h1>Parabéns !</h1>
                <p>Seu cadastro foi finalizado, confira os dados abaixo.</p>
                
                <hr/>

                {/* //dados cadastrados */}

                <C.Area>
                    <p>Nome: </p> 
                    <span>{state.name}</span>

                    <p>Nível profissional: </p> 
                    <span>
                        {state.level == 1 && ('Programa há 2 anos ou mais')}
                        {state.level == 0 && ('Programa há menos de 2 anos')}
                    </span>

                    <p>Contatos: </p>
                    <C.Contact>
                        <span>
                            <p className="tip"> E-mail: </p>
                            {state.email}
                        </span>
                        <span>
                            <p className="tip"> Github: </p>
                            {state.github} 
                        </span>
                    </C.Contact>


                </C.Area>

                <Link to="/step3" className="backButton">Voltar</Link>
                <button onClick={handleNextStep}><BiRevision/></button>
            </C.Container>
        </Theme>
    );
}