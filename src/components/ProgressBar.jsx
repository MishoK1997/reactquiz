
import { useEffect, useState} from "react";

export default function ProgressBar ({trigger}) {
    const [ remainingTime, setRemainingTime] = useState(20000);

    useEffect(()=> {
        setRemainingTime(20000);
       const interval = setInterval( ()=> {
         console.log("Interval");
         setRemainingTime(prevTime => prevTime - 10);
       }, 10)
   
       return () => {  
        console.log("Clear Interval");
         clearInterval(interval);
       }
     }, [trigger])  

        return (<progress value={remainingTime} max={20000}/>)

}