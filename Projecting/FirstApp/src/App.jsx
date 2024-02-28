import { useEffect, useRef, useState } from "react"
import Container from "./Container.jsx"
import Deckcard from "./Deckcard.jsx";
import axios from "axios";
import Displaycard from "./Displaycard.jsx";

const itemsArr = [];

export default function App(){
    const [searcheditem, setSearchedItem]= useState("");
    const [owneditem, setOwneditem]= useState([]);
    const [foundIndex, setFoundIndex]= useState(0);
    const inputRef = useRef(null);
    let i;

    useEffect(()=>{
        axios.get("https://digimon-api.vercel.app/api/digimon")
            .then((response)=>{  
                for(i=0;i<response.data.length;i++){ 
                    itemsArr.push(response.data[i])   
                } 
            })
            .then(()=>{
                setFoundIndex(Math.floor(Math.random() * 100));
            }
            )
            
    },[])

    function btnclicked(){
     const searchitem = inputRef.current.value;
     setSearchedItem(searchitem);

     for(i=0; i<=itemsArr.length; i++){
        const originalName = (itemsArr[i].name).toUpperCase()
        const duplicateName = searchitem.toUpperCase()
        if(originalName == duplicateName){
            setFoundIndex(i);
            break;
        } 
     }
    }

    function sellclick(key){
        const temparr = []
         owneditem.forEach(item=>{
            if(owneditem.indexOf(item) != key){
                temparr.push(item);
            } 
        });
        setOwneditem(temparr)
        console.log(owneditem)
    }

    return(
        <>
            <Container className="all-box">
                <Container className="left-box">
                    <br></br>
                    <input ref={inputRef} placeholder="Searching something?" type="text" />                        
                    <button className="btn-default" onClick={btnclicked}>Search</button>
                    <Container className="deckBox">
                        <Deckcard id="0" onClick={()=>{
                            sellclick(0)
                        }} ownedArr={owneditem} mainArr={itemsArr} >
                        </Deckcard>
                        <Deckcard id="1" onClick={()=>{
                            sellclick(1)
                        }} ownedArr={owneditem} mainArr={itemsArr} >
                        </Deckcard>
                        <Deckcard id="2" onClick={()=>{
                            sellclick(2)
                        }} ownedArr={owneditem} mainArr={itemsArr} >
                        </Deckcard>
                        <Deckcard id="3" onClick={()=>{
                            sellclick(3)
                        }} ownedArr={owneditem} mainArr={itemsArr} >
                        </Deckcard>
                        <Deckcard id="4" onClick={()=>{
                            sellclick(4)
                        }} ownedArr={owneditem} mainArr={itemsArr} >
                        </Deckcard>
                        <Deckcard id="5" onClick={()=>{
                            sellclick(5)
                        }} ownedArr={owneditem} mainArr={itemsArr} >
                        </Deckcard>    
                    </Container>   
                </Container>
                <Container className="right-box">
                    { foundIndex > 0 ?
                    <Displaycard>
                        <img src={itemsArr[foundIndex].img}/>
                        <h2>Name: {itemsArr[foundIndex].name}</h2>
                        <h2>Level: {itemsArr[foundIndex].level}</h2>
                    </Displaycard>:
                    <h1>Nothing to Display</h1>
                    }
                    <Container className="buttons">
                        <button className="btn-default" onClick={()=>{
                            console.log(owneditem)
                            owneditem.includes(foundIndex) ? null :setOwneditem([
                                ...owneditem,foundIndex
                            ])
                            
                        }}>BuyNow</button>
                         <button className="btn-default" 
                         onClick={()=>{
                            setFoundIndex(()=>{
                                return foundIndex < 210 ? foundIndex +1 : 0
                            });
                         }}>Next</button>
                    </Container>
                </Container>
            </Container>
        </>
    ) 
}