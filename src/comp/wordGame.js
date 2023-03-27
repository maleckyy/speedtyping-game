import {useEffect, useRef, useState} from "react"



function WordGame(startingTime = 10){
    // const STARTING_TIME= 5; 

    const[text, setText] = useState('')
    
    const[time, setTime] = useState(startingTime)
  
    const[isStarted, setIsStarted] = useState(false)
  
    const[words, setWords] = useState(0)
  
    const areaBoxRef = useRef(null)
    
  
    useEffect(() => { 
  
      if(isStarted === true){
        const timeoutID = setTimeout(()=>{
          setTime(prevTime=> prevTime-1)
        },1000)
    
        if(time == 0){
          clearTimeout(timeoutID)
          endGame()
        }
  
      }
  
    }, [time,isStarted]);
  
    function updateTextarea(event){
      setText(event.target.value)
      
    }
    
    function calcWords(text){
      const wordsArr = text.trim().split(' ')
  
      const filtered = wordsArr.filter(word => word !=='')
  
      console.log(wordsArr)
      setWords(filtered.length)
    }
  
    function startGame(){
      setIsStarted(true)
      setText('')
      console.log(areaBoxRef)
      areaBoxRef.current.disabled = false
      areaBoxRef.current.focus()
      
    }
    function endGame(){
      setTime(startingTime)
      setIsStarted(false)
  
      calcWords(text)
    }
  
    
    return {areaBoxRef , text, updateTextarea, isStarted, time, startGame, words}
}
export default WordGame

