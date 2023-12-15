import Container from "./Container";
import App from "./App";

export default function Deckcard(props){

    const key = parseInt(props.id)
    const owneditem = props.ownedArr
    const itemsArr = props.mainArr
   
    return(
        <>
        <Container className="deckCard">
            {owneditem[key] == null ?"Available Slot":<>
            <img src={itemsArr[owneditem[key]].img}/>
            <p>Name: {itemsArr[owneditem[key]].name}</p>
            <p>Level: {itemsArr[owneditem[key]].level}</p>
            <button onClick={props.onClick} className="btn-default" >Sell</button></>}
        </Container>
        </>
    )
    
}