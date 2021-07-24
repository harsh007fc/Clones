import React,{useEffect} from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from './UserActions'
function UserContainer({userData,fetchUsers}) {
    useEffect(()=>{
        fetchUsers();
    },[])
    return (
       userData.loading == true ?  <h2>Loading...</h2> :userData.error ? <h2>{userData.error}</h2> : (
           <>
               {
                   userData && userData.users.map(user=>
                      (
                          <p key={user.id}>{user.name}</p>
                      ) 
                   )
               }
           </>
       )
        
    )
}

const mapStateToProps=(state)=>{
    return {
        userData:state.user,
    }
}

const  mapDispatchToProps = (dispatch) => {
    return{
        fetchUsers:()=>dispatch(fetchUsers())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(UserContainer);