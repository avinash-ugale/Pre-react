import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

export default ()=>{
     
    const[usersList,setUsersList]=useState([]);
    const[name,setName]=useState("");
    const[username,setUserName]=useState("");
    const[email,setEmail]=useState("");

    useEffect(()=>{
       
        fetchData();
    },[]);

    const fetchData=()=>{
        axios.get("https://jsonplaceholder.typicode.com/users").then((response)=>{
            console.log(response.data);
            if(response && response.data){
                setUsersList(response.data);
            }

        });
    }
   const onChangeNameHandler =(event)=>{

    setName(event.target.value);

   }
   const onChangeUserNameHandler=(event)=>{
       setUserName(event.target.value);
   }
   const onChangeEmailHandler=(event)=>{
       setEmail(event.target.value)
   }
   const onSubmitFormHandler=(event)=>{
          event.preventDefault();
          console.log(name,username,email);

          axios.post("https://jsonplaceholder.typicode.com/users",{
          name,username,email,userId:1,}).then((response)=>{
              console.log(response);
              alert("added");
              fetchData();
              setName("");
              setUserName("");
              setEmail("");

          });
   };

    return(
        <>

        <h1>User Form</h1>
        <form onClick={onSubmitFormHandler} >
        <div class="mb-3">

        <label>Name:</label>
        <input  name={"name"}value={name} onChange={onChangeNameHandler}/>
        </div>
        <br/>
        <div class="mb-3">

        <label>UserName:</label>
        <input  name={"username"} value={username} onChange={onChangeUserNameHandler}/>
        </div><br/>

        <div class="mb-3">

        <label>Email:</label>
        <input  name={"email"}value={email} onChange={onChangeEmailHandler}/>
        <br/><br/></div>

        <button type="submit">Submit</button>
        </form>

        <h1> User List:</h1>
        
        <table className="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>USERNAME</th>
                    <th>EMAIL</th>
                </tr>
            </thead>
            <tbody>
                {usersList.map((user,index)=>{
                    return(
                        <tr>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                        </tr>

                    );
                })}
            </tbody>
        </table>



        </>
    )
}