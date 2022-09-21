import { useState, KeyboardEvent } from "react";
import { Container } from "./styles";

type Props = {
    addTaskFunction: (taskName: string) => void
}

export const AddArea = ({addTaskFunction}: Props) => {
    const [inputText, setInputText] = useState('');

    function handleKeyUp(e: KeyboardEvent){
        if (e.code !== 'Enter') return
        handleAddItem()
    }

    function handleAddItem(){
        if(inputText === '') return
        addTaskFunction(inputText);
    }

    return(
        <Container>
            <button 
                className="image"
                onClick={handleAddItem}
            >➕</button>
            <input
                type="text"
                placeholder="Adicione uma tarefa"
                onChange={e => setInputText(e.target.value)}
                onKeyUp={handleKeyUp}
            />
        </Container>    
    );
}