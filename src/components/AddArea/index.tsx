import { Container } from "./styles";

export const AddArea = () => {
    return(
        <Container>
            <div className="image">➕</div>
            <input
                type="text"
                placeholder="Adicione uma tarefa"
            />
        </Container>    
    );
}