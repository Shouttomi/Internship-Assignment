import Article from "./Article"

const DataMapping = ({data,user}) => {

    console.log(user.length)

    const checker = data.filter((item)=>{
        return user === item.first_name
    })

    console.log(checker)

    if(checker.length > 0){
        const {first_name} = checker[0]
        console.log(first_name)

        return(
            data.map((item) =>{
                
                const {first_name,id,avatar} = item
                
                if(first_name === user){
                return (
                    <div className='center'>
        
                    <Article firstname={first_name} id={id} image={avatar}/>
                    </div>
                )
                }
                return null
                
            })
        )

        /* return (
            data.filter((item)=>{

                return item.first_name === user
            })
            ) */
    }
    else if(checker.length === 0 && user.length!==0){
        return(

            <div className="no-users">
            <h1>No user found...</h1>
            </div>
        )
    }
 else 
 {return (
    data.map((item) =>{
                
        const {first_name,id,avatar} = item
        
        return (
            <div className='center'>

            <Article firstname={first_name} id={id} image={avatar}/>
            </div>
        )
        
    })
  )
}
}
export default DataMapping