import { useState } from 'react';

import { Item } from './types/Item';
import { ListItem } from './components/ListItem';

import {Area, Container, Header} from './App.styles'
import { AddArea } from './components/AddArea';

const App = () => {
    const [list, setList] = useState<Item[]>([]);

    function handleAddTask(taskName: string){
        let newList = [...list];
        newList.push({
            id: list.length + 1,
            name: taskName,
            done: false
        });
        setList(newList);
    }

    function handleDoneChange(id: number){
        let filtered = list.filter((item) => item.id === id);
        filtered[0].done = !filtered[0].done;
    }

    return(
        <Container>
            <Header>Lista de Tarefas</Header>
            <Area>
                <AddArea addTaskFunction={handleAddTask}/>

                {list.map((item, index) => (
                    <ListItem key={index} item={item} handleCheckFunction={handleDoneChange} />
                ))}   
            </Area>
        </Container>
    );
}

export default App;