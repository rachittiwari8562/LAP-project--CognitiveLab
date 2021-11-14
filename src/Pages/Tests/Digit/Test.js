import React,{useState,useEffect,useCallback} from 'react'
import { Link } from 'react-router-dom'
import DigitKeysTable from '../../../Components/DigitKeysTable'
import SubHeaderNback from '../../../Components/SubHeaderNback'
import { digit_symbols } from '../../../constants'
var set1 = []
const digits = [1,2,3,4,5,6,7,8,9]
var correct = 0
var answer_set = []
var total_attempted = 0

const Test = (props) => {

    const [position, setPosition] = useState(0)
    const [setNo,changeSet] = useState(1)
    const [stage,setStage] = useState("not")

    var currentSetRef = React.useRef(setNo);
    var currentPositionRef = React.useRef(position);

    useEffect(() => {
        if (stage==="ready"){
            document.addEventListener("keydown", record_key);
            setTimeout(()=>{
                setStage("end")
            },10000)
        }
        return () =>{
            document.removeEventListener("keydown",record_key);
        }
    }, [stage])

    useEffect(() => {
        correct = 0
        total_attempted=0
    },[])

    useEffect(() => {
        set1 = []
        answer_set=[]
        setPosition(0)
        currentPositionRef.current = 0

        var i =0
        for (i=0;i<288;i++){
            set1.push( digits[ Math.floor( Math.random()* 9)])
        }
        console.log(set1)
    }, [setNo])


    const record_key =  useCallback((event) => {

        var choice = String (event.key)
        if (!(isNaN(choice))){
            choice = parseInt(choice)
            if (choice!==0){
                total_attempted += 1
                answer_set[currentPositionRef.current] = choice

                var ind = Math.floor(currentPositionRef.current/16)*2*16 + currentPositionRef.current%16
                console.log(ind)
                if (choice===set1[ind]){
                    correct +=1
                }

                currentPositionRef.current = currentPositionRef.current + 1
                setPosition(currentPositionRef.current)

                if (currentPositionRef.current === 144){
                    currentSetRef.current = currentSetRef.current+1
                    changeSet(currentSetRef.current)
                }
            }
        }
        console.log(answer_set)
        console.log(correct)
    })


    return (
        <div  className="relative lg:w-3/4 h-3/4 mx-auto mb-5" >
            {stage==="not" &&
                <div>
                    <SubHeaderNback content="Digit Substitution Task: Test Start"/>
                    <div className="text-2xl font-bold">
                        <h5 className="mt-10">Hope you are ready . Now we will proceed to real test !!!</h5>
                        <br/>
                        <h5>You will now see the Key-Table and a large Blank grid .</h5>
                        <br/>
                        <h5 >You will have 2 minutes to fill-in-a many as you can .</h5>
                        <br/>
                        <h5 className="text-red-600">Note : You will not be able to change your response or go back once you hit a number .</h5>
                    </div>
                    <button 
                        onClick={()=>setStage("ready")}
                        className="absolute bottom-0 right-0 px-4 py-2 my-10 rounded-md text-2xl font-bold border-4 border-green-700 text-green-900 hover:bg-green-700 hover:text-white">
                        Start Task
                    </button>
                </div>
            }

            {stage==="ready" &&
                <div>
                    <DigitKeysTable/>
                    <div className ="grid grid-cols-16 gap-0 text-center mt-8 border-t-2 border-r-2 border-gray-600" >
                        {
                            set1.map((item,index) => {
                                if ( (Math.floor(index/16))%2==0 ){
                                    return <h5 className="border-l-2 border-b-2 p-1 border-gray-600 text-xl bg-gray-300">{digit_symbols[item]}</h5>
                                }
                                else{
                                    if (position>0 && position > (16*(Math.floor(Math.floor(index/16)/2)) + index%16) ){
                                    return <h5 className="border-l-2 border-b-2 p-1 border-gray-600 text-xl font-bold">{answer_set[16*(Math.floor(Math.floor(index/16)/2)) + index%16]}</h5>
                                }
                                    else if (position=== (16*(Math.floor(Math.floor(index/16)/2)) + index%16)){
                                        return <h5 className="border-l-2 border-b-2 p-1 border-gray-600 bg-gray-300 text-xl font-bold"></h5>
                                    }
                                    else{
                                        return <h5 className="border-l-2 border-b-2 p-4 border-gray-600"></h5>
                                    }
                                }
                            })
                        }
                    </div>
                </div>
            }

            {stage==="end" && 
            <div>
            <SubHeaderNback content="Results:"/>
                <div className="text-2xl font-bold">
                    <h5 className="mt-10">Hope you are like the test . Here is how you performed !!!</h5>
                    <br/>
                    <h5>Total attempted : {total_attempted}</h5>
                    <h5>Correct : {correct}</h5>
                    <br/>
                    <h5 className="text-green-600">You have achieved a accuracy of {parseFloat((correct/total_attempted) *100).toFixed(2)} %</h5>
                </div>
                <Link to={"/dashboard"}>
                <button
                    className="block mx-auto px-4 py-2 mt-20 rounded-md text-2xl font-bold border-4 border-green-700 text-green-900 hover:bg-green-700 hover:text-white">
                    Return to Dasboard
                </button>
                </Link>
            </div>
            }
        </div>
        
    )
}

export default Test
