import Child from "./Child"


const Parent = () =>{
    return (
        <div>
            <Child name="hari"
            age={19}
            isActive={true}
            mark={[99,98,97,96,95]}
            address={{
                pincode:658745,
                email:"hari@gmail.com",
                mobile:894567854
            }} />

            <Child name="bren"
            age={19}
            isActive={true}
            mark={[99,98,97,96,95]}
            address={{
                pincode:658652,
                email:"bren@gmail.com",
                mobile:8949518544
            }} />
        </div>
    )
}
export default Parent
    
