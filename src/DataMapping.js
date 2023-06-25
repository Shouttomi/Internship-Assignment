import Article from "./Article"

const DataMapping = ({data,user}) => {


    const checker = data.filter((item)=>{
        return user === item.first_name
    })

    if(checker.length > 0){

        return(
            data.map((item) =>{
                
                const {first_name,id,avatar} = item
                
                if(first_name === user){
                return (
                    <div className='center' key={id}>
        
                    <Article firstname={first_name} id={id} image={avatar}/>
                    </div>
                )
                }
                return null
                
            })
        )

      
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
            <div className='center' key={id}>

            <Article firstname={first_name} id={id} image={avatar}/>
            </div>
        )
        
    })
  )
}
}
export default DataMapping
