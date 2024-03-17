import React, { useState } from 'react'

const UserInputs = ({fData}) => {
  return (
    <div className='flexcol bor'>
      <label className='fs16 mb6'>{fData.title}</label>
      <input 
        type='text' 
        className="fs16 w300px borx2 br3 p8 ptb4 mb12 bgw03" 
        placeholder={fData.placeholder} 
        value={fData.value} 
        onChange={fData.funs}
      />
    </div>
  )
}

const AddUser = ({addUser}) => {
  const [data, setData] = useState({
    id:0,
    username:"",
    email:"",
    age:"",
    city:""
  })
  const handelInputEmail = (e,value) => {
    const newData = {
      id:0,
      username:value=='username'?e.target.value:data.username,
      email:value=='email'?e.target.value:data.email,
      age:value=='age'?e.target.value:data.age,
      city:value=='city'?e.target.value:data.city,
    }
    setData(newData)
  }
  const handelAddUser = (data) => {
    addUser(data)
    setData({
      id:0,
      username:"",
      email:"",
      age:"",
      city:""
    })
  }
  const formData = [
    {
      title:'Username',
      placeholder:'your username...',
      value:data.username,
      funs:(e)=>{handelInputEmail(e,'username')},
    },
    {
      title:'Email',
      placeholder:'your email...',
      value:data.email,
      funs:(e)=>{handelInputEmail(e,'email')},
    },
    {
      title:'Age',
      placeholder:'your age...',
      value:data.age,
      funs:(e)=>{handelInputEmail(e,'age')},
    },
    {
      title:'City',
      placeholder:'your city...',
      value:data.city,
      funs:(e)=>{handelInputEmail(e,'city')},
    },
  ]
  return (
    <div className='flexcol'>
      <h2>Add User</h2>
      <div className='flex jcsb bor'>
        <div></div>
        <div className="p20 br5 borx">
          {
            formData.map(fData=>(
              <UserInputs fData={fData} />
            ))
          }
          <button 
            className="fs16 w300px borx2 br3 p8 ptb4 mb12 bgw01 cup" 
            onClick={()=>{handelAddUser(data)}}
          >
            Save
          </button>  
        </div>
        <div className='bor rel'>
          <span className='fs14 abs' style={{width:'100px',right:0}}>Data is added</span>
        </div>
      </div>
    </div>
  )
}

export default AddUser