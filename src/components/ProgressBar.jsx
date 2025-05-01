
import { useEffect, useState} from "react";

export default function ProgressBar ({trigger, timeInterval}) {
    const [ remainingTime, setRemainingTime] = useState(timeInterval);

    useEffect(()=> {
        setRemainingTime(timeInterval);
       const interval = setInterval( ()=> {
         console.log("Interval");
         setRemainingTime(prevTime => prevTime - 10);
       }, 10)
   
       return () => {  
        console.log("Clear Interval");
         clearInterval(interval);
       }
     }, [trigger])  

        return (<progress value={remainingTime} max={timeInterval}/>)

}