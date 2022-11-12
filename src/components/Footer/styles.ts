import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 5rem;
    display: flex;
    flex-direction: column;

    hr {
        margin-top: 1rem;
        width: 100%;
        height: 1px;
        border: 0;
        background-color: #16195C;
    }

    p{
        margin: 10px 0;
        font-size: 12px;
    }
    div{
        display: flex;
        justify-content: space-between;

        p,a{
            margin-right: 1rem;
            color: #fff;
            transition: .5s;
        }
        p:hover,a:hover{
            color: #25CD89;
            cursor: pointer;
        }

    }

`