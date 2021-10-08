import * as C from './styles';
import { useState, KeyboardEvent } from 'react';

type Props = {
    onEnter: (taskName: string) => void
}

export const AddArea = ({onEnter} : Props) =>{

    const [inputText,setInputText] = useState('');

    const handleKeyUp = (e: KeyboardEvent) =>{
        if(e.keyCode === 13 && inputText !== ''){
            onEnter(inputText);
            setInputText('');
        } 
    }

    return(
        <C.Container>
            <div className="image">➕</div>
            <input 
                type="text"
                placeholder="Digite um nome para a tarefa!"
                value={inputText}
                onChange={e => setInputText(e.target.value)}
                onKeyUp={handleKeyUp}/>
        </C.Container>
    );
};