import styled from "styled-components";

type Props = {
    done: boolean
}

export const Container = styled.div(({done}: Props) => (`
    display: flex;
    background-color: #20212C;
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 10px;
    align-items: center;

    input{
        width: 20px;
        height: 20px;
        margin-right: 10px;
    }

    label{
        font-size: 18px;
        font-weight: 600;
        color: #ccc;
        text-decoration: ${done ? 'line-through' : 'initial'};
    }
`));