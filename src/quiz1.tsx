import * as React from "react";
import { useEffect,useState } from "react";

import question from '../assets/data.json';
import { Link, useNavigate } from "react-router-dom";



function Quiz1() {
    const navigate = useNavigate();
    useEffect(()=>{
        if(localStorage.getItem('isstatus') != 'quizstart')  navigate('/')
    })

    const qlength = question.length - 1;
     console.log(qlength)

    const [activeindex,setactiveindex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState('');
    const [uservalue,setuservalue] = useState(0);
    const [quizend,setquizend] = useState(false);
    const [getpercentage,setpercentage] = useState('')

     const [score,setscore] = useState(0);
    
           const nextquestion = () =>{
            setSelectedAnswer('');
            setuservalue('');
            if(uservalue === true){
                setscore(score+1);
                
            }
            if(activeindex < qlength){
                setactiveindex(
                   activeindex + 1
              )}
           if(activeindex === qlength){
              setactiveindex(0);
               
            setpercentage( score / (qlength +1) * 100) ;
              console.log('score ='+score);
              setquizend(true);
           }
           }
           const finishquiz = () =>{
            if(uservalue === true){
                setscore(score+1);
                setactiveindex(0);
                setTimeout(() => {
                    setpercentage( score / (qlength +1) * 100) ;
                }, 2000);
               
                console.log('score ='+score);
                
            }
            setquizend(true);
            
            
           }
           const handleclick = (value,index) =>{
            setSelectedAnswer(index);
             setuservalue(value);
           }
        
           
     if(!quizend)
      return <div className="quizContainer">
        <h2 className="quizTitle">Quiz Title Here</h2>
               <h4 className="quistionname">{activeindex + 1}.{question[activeindex].questionname}</h4> 
             <ul className="answerlist">   
                {question[activeindex].answer.map((data,index) => (
                   <li onClick={()=>handleclick(data.isoption,index)} className={selectedAnswer === index ? 'selected-answer' : null}>{data.option}</li>
                ))}
                </ul>
             <div className="btnGroup">
      
            <button onClick={ ()=>nextquestion()}  className="btnnext" disabled={selectedAnswer === '' ? true : false}>next</button>
            </div>
        </div>
        

     if(quizend) 
     return <div className="quizContainer">
       
        <table className="scoreTable">
            <tr>
                <td colSpan="2"><h2 className="quizTitle"> Good {localStorage.getItem('name')}</h2></td>
            </tr>
            <tr>
                <td>Total question</td>
                <td>{qlength+1}</td>
            </tr>
            {/* <tr>
                <td>Score Rating</td>
                <td>{getpercentage}%</td>
            </tr> */}
            <tr>
                <td>Your Score</td>
                <td>{score}</td>
            </tr>
        </table>
       
        <div className="text-center">
            <Link to='/'>
        <button className="btnHome">Go to Home</button></Link>
        </div>
       
           
     </div>
         
        
             

    }



export default Quiz1