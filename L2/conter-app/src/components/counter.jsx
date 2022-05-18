import React from "react";

const Counter = () => { 

    //hooks use for dom manupation it means show the value in browser
    //useState
    const [count, setCount]  = React.useState(0);
    // const increamentCount=()=>{
    //     console.log("pre",count)
    //    setCount(count +1);
    //     console.log("post",count)
    // };

    // const decreamentCount=()=>{
    //     setCount(count-1)
    // }
    return (
        <div>
            <h1>Counter App: {count}</h1>
            {/* <button onClick={increamentCount}>Increament</button>
            <button onClick={decreamentCount}>Decreament</button> */}

             <button onClick={()=>setCount(count+1)}>Increament</button>
            <button  onClick={()=>{
                if(count>0){
                    setCount(count-1)
                }
            }}>Decreament</button>
        </div>

    );
};

export default Counter;