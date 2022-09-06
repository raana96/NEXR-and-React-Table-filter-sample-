import React from "react"
import {useRouter} from "next/router"
import { connect } from 'react-redux'
import {getUsers} from "../includes/actions"
import Table from "../_components/Table"

const columns = [
  { id: 1,field: "id", headerName: "id" },
  { 
    id: 2,
    field: "name", 
    headerName: "name" ,
    width:150
  },
  { id: 3,field: "email", headerName: "email"},
  { id: 4,field: "username", headerName: "username"},
  { id: 5,field: 'address', headerName: 'address',width:300},
  { id: 6,field: 'zipcode', headerName: 'zipcode'},




];

function Home(props){
  React.useEffect(async()=>{
    await props.getUsers(); 
    console.log(props)
  },[])
  return(
    <React.Fragment>
      <h4>Wlecome</h4>
      {props.user.users.length > 0?
        <Table columns={columns} data={props.user.users}/>
      :
      ""}
    </React.Fragment>
  )
}

const mapStateToProps = state => {
  return state

};

const mapDispatchToProps = {
  getUsers:getUsers
}



export default connect(mapStateToProps, mapDispatchToProps)(Home);