import styled from "styled-components";

export const Container = styled.div`
    border: 1px solid #555;
    border-radius: 15px;
    padding: 10px;
    margin: 20px 0;
    display: flex;
    align-items: center;

    .image{
        font-size: 20px;
        margin-left: 10px;
    }

    input{
        margin-left: 10px;
        border: 0;
        border-bottom: 1px solid #ccc;
        border-radius: 5px;
        padding: 3px;
        outline: 0;
        background: transparent;
        font-size: 18px;
        color: #fff;
        flex: 1
    }
`;