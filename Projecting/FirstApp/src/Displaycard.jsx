import Container from "./Container";

export default function Displaycard(props){
    return(
        <>
            <Container className="display-card">
                {props.children}
            </Container>
        </>
    )
}