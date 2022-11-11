import styled from "styled-components";

export const Container = styled.div`
    p {
        font-size: 13px;
        color: #B8B8D4;
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
    label {
        font-size: 13px;
        input {
            display: block;
            margin-top: 7px;
            box-sizing: border-box;
            width: 100%;
            padding: 20px 10px;
            border: 2px solid #25CD89;
            border-radius: 10px;
            color: #FFF;
            outline: 0;
            font-size: 15px;
            background-color: #02044A;
        }
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
`;