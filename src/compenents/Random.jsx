import { useState } from "react";


export default function Random({val1,val2,val3}){
    async function initQuote(){
        const response= await fetch('https://')
        const data=await response.json();
        const randomQuote=data.quote;
        return randomQuote;
    }
   const [quote,setQuote]= useState(initQuote)

   async function fetchQuote(){
        const response= await fetch('https://')
        const data=await response.json();
        const randomQuote=data.quote;
        setQuote(randomQuote);
   }
    return (
        <div>
            <button onClick={fetchQuote}>click to change Quote</button>
            <h1>{quote.text}</h1>
            <h3>{quote.author}</h3>
        </div>
    );
}