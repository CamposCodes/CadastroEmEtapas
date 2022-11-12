import styled from "styled-components";

export const Container = styled.div`
    display: flex;  
    padding: 25px 0;
    border-bottom: 1px solid #16195C;

    h1{
        margin: 0;  
        padding: 0;
        font-size: 28px;
    }
    p{
        font-size: 14px;
        color: #B8B8D4;
    }
    div{
        flex-direction: column;
    }
    img{
        width: 4rem;
        height: 4rem;
    }
`;