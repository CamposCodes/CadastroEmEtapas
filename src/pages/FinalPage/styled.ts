import styled from "styled-components";

export const Container = styled.div`
    p {

    }
    span {
        font-size: 15px;
        color: #25CD89;
    }
    h1 {
        margin: 0;
        padding: 0;
        font-size: 26px;
    }
    hr {
        height: 1px;
        border: 0;
        background-color: #16195C;
        margin: 30px 0;
    }

    // voltar

    .backButton {
        text-decoration: none;
        transition: .3s;
        background-color: #25CD89;
        color: #FFF;
        font-size: 15px;
        padding: 15px 25px;
        border: 0;
        border-radius: 2rem;
        cursor: pointer;
        margin-top: 30px;
        background: #02044A;
        box-shadow:  20px 20px 50px #02033f,
                    -20px -20px 50px #020555;
    }
    .backButton:hover{
        color: #25CD89;
        background: #02044A;
        box-shadow:  -20px -20px 50px #02033f,
                    20px 20px 50px #020555;
    }
    button {
        margin-right: .1rem;
        transition: .3s;
        background-color: #25CD89;
        color: #FFF;
        font-size: 18px;
        font-weight: bold;
        padding: 15px 25px;
        border: 0;
        border-radius: 2rem;
        cursor: pointer;
        margin-top: 30px;
        background: #02044A;
        box-shadow:  20px 20px 50px #02033f,
                    -20px -20px 50px #020555;
    }
    button:hover{
        color: #25CD89;
        font-weight: bold;
        background: #02044A;
        box-shadow:  -20px -20px 50px #02033f,
                    20px 20px 50px #020555;
    }
`;

export const Area = styled.div`
    display: flex;
    flex-direction: column;
    margin: 30px 0;
    padding: 1rem 0;

    p{
        font-weight: bold;
        font-size: 14px;
        color: #B8B8D4;
        margin-right: .5rem;
        margin: 10px 0px 1px 0;
        color: #25CD89;
        display: flex;
    }
    span{
        border: 2px solid #25CD89;
        font-size: 18px;
        display: block;
        margin-top: 7px;
        margin-bottom: 10px;
        box-sizing: border-box;
        width: 100%;
        padding: 15px 10px;
        border: 2px solid #25CD89;
        border-radius: 10px;
        color: #FFF;
        outline: 0;
        background-color: #02044A;
    }
    span:hover{
        box-shadow: 1px -1px 35px 5px rgba(37,205,137,0.28);
    }

    .tip{
        font-size: 10px;
        padding: 0;
        margin: 0;
        margin-top: -8px;
    }
`;

export const Contact = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;

    span{
        width: 19rem;
    }
`;