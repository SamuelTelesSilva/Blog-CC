import React, {useState} from 'react';
import {Container} from './styles';

const MenuMobile = (props) => {

    const [result, setResult] = useState(false);
    const [button, setButton] = useState("abrir");
    let menuClasses = ["menu"];


    if(result){
        menuClasses = ["menu", "open"]
    }


    const abrir = () => {
        if(result === true){
            setResult(false)
            setButton("abrir");
        }else{
            setResult(true)
            setButton("fechar")
        }
    }

   
    return(
        <Container>
            <div className={menuClasses.join(' ')}>conteudo</div>
            <div className="button" onClick={abrir}>{button}</div>
            
        </Container>
    );
}
export default MenuMobile;
