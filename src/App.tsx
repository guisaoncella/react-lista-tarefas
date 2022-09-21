import { useState } from 'react';

import { Item } from './types/Item';
import { ListItem } from './components/ListItem';

import {Area, Container, Header} from './App.styles'

const App = () => {
    const [list, setList] = useState<Item[]>([
        {id: 1, name: 'Comprar pao', done: true},
        {id: 2, name: 'Comprar ovo', done: false}
    ]);

    return(
        <Container>
            <Header>Lista de Tarefas</Header>
            <Area>
                {list.map((item, index) => (
                    <ListItem key={index} item={item} />
                ))}   
            </Area>
        </Container>
    );
}

export default App;