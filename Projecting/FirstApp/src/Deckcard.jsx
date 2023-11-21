import Container from "./Container";

export default function Deckcard(props){
    return(
        <>
        <Container className="deckCard">
            {props.children}
        </Container>
        </>
    )
    
}