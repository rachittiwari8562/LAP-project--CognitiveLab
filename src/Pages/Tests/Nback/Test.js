import React ,{ useState }from 'react'
import NbackTestSet from '../../../Components/NbackTestSet'
import SubHeaderNback from '../../../Components/SubHeaderNback'

const Test = (props) => {

    const [pageNo,changePage] = useState(1)

    const nextPage = (page) =>{
        if (page<5){
            changePage(page+1)
        }
    }

    const previousPage = (page) =>{
        if (page>1){
            changePage(page-1)
        }
    }


    return (
        <div  className="relative lg:w-3/4 h-3/4 mx-auto mb-5" >
            {pageNo==1 &&
                <div>
                    <SubHeaderNback content="N-back Memory Task: Test Start"/>
                    <div className="text-2xl font-bold">
                        <h5 className="mt-10">Hope you are done with practice . Now we will proceed to real test .</h5>
                        <br/>
                        <h5>The whole test will last approximately for 10 minutes . You will have to do the same task as done in the practice . You will work on 0-,1-,2- and 3- back tasks . The order of the task will be linear .</h5>
                        <br/>
                        <h5 >After each block you can take a short break before you proceed for next task .</h5>
                        <br/>
                        <h5>Try to respond to every letter and be as accurate as possible .</h5>
                    </div>

                </div>
            }
            {pageNo==2 &&
                <div>
                    <SubHeaderNback content="Do a 0-Back Task"/>
                    <h5 className="text-2xl font-bold mt-4">Press "A" when letter is "M" , Otherwise press "D" .</h5>
                    <NbackTestSet nback={0} n={25} max_right={7} min_right={5} nextPage={()=>nextPage(pageNo)}/>
                </div>
            }
            {pageNo==3 &&
                <div>
                    <SubHeaderNback content="Do a 1-Back Task"/>
                    <h5 className="text-2xl font-bold mt-4">Press "A" when letter is "M" , Otherwise press "D" .</h5>
                    <NbackTestSet nback={1} n={25} max_right={7} min_right={5} nextPage={()=>nextPage(pageNo)}/>
                </div>
            }
            {pageNo==4 &&
                <div>
                    <SubHeaderNback content="Do a 2-Back Task"/>
                    <h5 className="text-2xl font-bold mt-4">Press "A" when letter is "M" , Otherwise press "D" .</h5>
                    <NbackTestSet nback={2} n={25} max_right={7} min_right={5} nextPage={()=>nextPage(pageNo)}/>
                </div>
            }
            {pageNo==5 &&
                <div>
                    <SubHeaderNback content="Do a 3-Back Task"/>
                    <h5 className="text-2xl font-bold mt-4">Press "A" when letter is "M" , Otherwise press "D" .</h5>
                    <NbackTestSet nback={3} n={25} max_right={7} min_right={5} nextPage={()=>nextPage(pageNo)}/>
                </div>
            }
            {pageNo==6 &&
                <div>
                    <SubHeaderNback content="Results"/>
                    <h5 className="text-2xl font-bold mt-4">Following are the Results of the Tasks. Now Proceed to exit</h5>
                    <button className="" onClick={props.exit}>Exit</button>
                </div>
            }

            <div className="flex flex-row justify-self-end  mt-32">
                <div className="flex-grow"></div>
                
                {pageNo==1 &&
                    <button 
                        onClick={()=>nextPage(pageNo)}
                        className="px-4 py-2 mx-10 rounded-md text-2xl font-bold border-4 border-green-700 text-green-900 hover:bg-green-700 hover:text-white">
                        Start Test
                    </button>
                }
                <div className="flex-grow"></div>
            </div>
        </div>
    )
}

export default Test
