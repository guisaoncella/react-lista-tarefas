import { Container } from "./styles";

import {Item} from '../../types/Item'
import { ChangeEvent, useState } from "react";

type Props = {
    item: Item,
    handleCheckFunction: (id: number) => void
}

export const ListItem = ({item, handleCheckFunction}: Props) => {
    const [isChecked, setIsChecked] = useState(item.done)

    function handleCheck(checked: boolean){
        setIsChecked(checked)
        handleCheckFunction(item.id)
    }

    return (
        <Container done={isChecked}>
            <input 
                type="checkbox" 
                checked={isChecked}
                onChange={e => handleCheck(e.target.checked)}
            />
            <label>{item.name}</label>
        </Container>
    );
}