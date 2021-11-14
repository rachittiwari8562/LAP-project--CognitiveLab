import React ,{useState,useEffect,useCallback} from 'react'
import DigitKeysTable from '../../../Components/DigitKeysTable'
import SubHeaderNback from '../../../Components/SubHeaderNback'
import { digit_symbols,practice_array} from "../../../constants"

const Demo = ({goToTask}) =>{

    const [answer, setanswer] = useState()
    const [position, setPosition] = useState(3)
    const [correct, setcorrect] = useState()

    var currentPositionRef = React.useRef(position);

    useEffect(() => {
        document.addEventListener("keydown", record_key);
        return () => {
            document.removeEventListener("keydown", record_key);
        }
    }, [])


    const record_key =  useCallback((event) => {
        var choice = String (event.key)
        if (currentPositionRef.current<9){
        if (!(isNaN(choice))){
            choice = parseInt(choice)
            if (choice!==0){
                if (choice===practice_array[currentPositionRef.current]){
                    console.log()
                    setcorrect(true)
                    currentPositionRef.current = currentPositionRef.current + 1
                    setPosition(currentPositionRef.current)
                    setanswer("")
                }
                else{
                    setcorrect(false)
                    setanswer(choice)
                }
            }
        }
    }
    })
    return (
        <div className="relative lg:w-3/4 h-3/4 mx-auto mb-5">
            <SubHeaderNback content=" Practice Start :"/>
            <div className="text-2xl font-bold mb-5">
                <h5 className="mt-10">Given below is the key-table .</h5>
            </div>
            <DigitKeysTable/>
            <div  className="text-xl font-bold mt-10">
                <h5 >Now below given the grid which you have fill according to keys table . First 3 are filled .</h5>
                <h5>Fill in the next 6 items .</h5>
                <h5>Use the keyboard buttons to enter number .</h5>
            </div>
            <div className="grid grid-cols-9 gap-0 text-center my-10">
            {
            practice_array.map((item)=>(
                <h5 className="border-2 border-t-4 p-2 border-black bg-gray-400 text-xl font-bold">{digit_symbols[item]}</h5>
            ))
            }
            {
            practice_array.map((item,index)=>{
                if (index<3){
                    return <h5 className="border-2 border-b-4 p-2 border-black text-xl font-bold">{item}</h5>
                }
                else{
                    if (index===position){
                        return <h5 className={"border-2 border-b-4 p-2 border-black text-xl font-bold" + (correct===false?" bg-red-600":" bg-gray-400")}>{answer}</h5>
                    }
                    else if(index<position){
                        return <h5 className="border-2 border-b-4 p-2 border-black text-xl font-bold ">{item}</h5>
                    }
                    else{
                        return <h5 className="border-2 border-b-4 p-2 border-black text-xl font-bold"></h5>
                    }
                }
            })
            }
            </div>
            <div>

            {(position===9 && correct===true) && 
                <button 
                    onClick={goToTask}
                    className="absolute bottom-0 right-0 px-4 py-2 my-10 rounded-md text-2xl font-bold border-4 border-green-700 text-green-900 hover:bg-green-700 hover:text-white">
                    Proceed To Task
                </button>
            }
            </div>
        </div>
    )
}

export default Demo
