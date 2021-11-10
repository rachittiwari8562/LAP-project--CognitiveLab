import React ,{ useState }from 'react'
import NbackTestSet from '../../../Components/NbackTestSet'
import SubHeaderNback from '../../../Components/SubHeaderNback'

const Demo = (props) => {

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
                    <SubHeaderNback content="N-back Memory Task: Practice Start"/>
                    <div className="text-2xl font-bold">
                        <h5 className="mt-10">This test gets harder with increase in the number n(N-Back Level) of the test .</h5>
                        <h5>The easiest level being 0 for most of the people.</h5>
                        <br/>
                        <h5 >In order to gain familiarity with the task , you can now practice it by doing a 0-back test ,</h5>
                        <h5>  a 1-back, a 2-back and a 3-back in that order .</h5>
                        <br/>
                        <h5>In order to assist you in practice there will a "GOOD" sound when your response is correct ,</h5>
                        <h5>and "BAD" sound when your response is wrong.</h5>
                        <h5 className="text-red-700">*Note this aid will not be provided in real task .</h5>
                    </div>

                </div>
            }
            {pageNo==2 &&
                <div>
                    <SubHeaderNback content="Do a 0-Back Task"/>
                    <h5 className="text-2xl font-bold mt-4">Press "A" when letter is "M" , Otherwise press "D" .</h5>
                    <NbackTestSet nback={0} n={10} max_right={3} min_right={2} nextPage={()=>nextPage(pageNo)}/>
                </div>
            }
            {pageNo==3 &&
                <div>
                    <SubHeaderNback content="Do a 1-Back Task"/>
                    <h5 className="text-2xl font-bold mt-4">Press "A" when letter is "M" , Otherwise press "D" .</h5>
                    <NbackTestSet nback={1} n={10} max_right={3} min_right={2} nextPage={()=>nextPage(pageNo)}/>
                </div>
            }
            {pageNo==4 &&
                <div>
                    <SubHeaderNback content="Do a 2-Back Task"/>
                    <h5 className="text-2xl font-bold mt-4">Press "A" when letter is "M" , Otherwise press "D" .</h5>
                    <NbackTestSet nback={2} n={10} max_right={3} min_right={2} nextPage={()=>nextPage(pageNo)}/>
                </div>
            }
            {pageNo==5 &&
                <div>
                    <SubHeaderNback content="Do a 3-Back Task"/>
                    <h5 className="text-2xl font-bold mt-4">Press "A" when letter is "M" , Otherwise press "D" .</h5>
                    <NbackTestSet nback={3} n={10} max_right={3} min_right={2} nextPage={()=>nextPage(pageNo)}/>
                </div>
            }
            {pageNo==6 &&
                <div>
                    <SubHeaderNback content="Results"/>
                    <h5 className="text-2xl font-bold mt-4">Following are the Results of the Demo Tasks. Now Proceed to Real Task</h5>
                    <button className="" onClick={props.goToTask}>Go to Real Test</button>
                </div>
            }

            <div className="flex flex-row justify-self-end  mt-32">
                <div className="flex-grow"></div>
                
                {pageNo==1 &&
                    <button 
                        onClick={()=>nextPage(pageNo)}
                        className="px-4 py-2 mx-10 rounded-md text-2xl font-bold border-4 border-green-700 text-green-900 hover:bg-green-700 hover:text-white">
                        Start Practice
                    </button>
                }
                <div className="flex-grow"></div>
            </div>
        </div>
    )
}

export default Demo
