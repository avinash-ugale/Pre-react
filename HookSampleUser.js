
import axios from "axios";
import { useEffect, useState } from "react";

export default ()=>{

   const[userList,setUserList]=useState([]);   //setuserList
   const[editUserObject,setEditUserObject] =useState({   
        name:"",
        username:"",
        email:"",
    });

    const[userId,setUserId]=useState(0);

    const[isEditMode,setIsEditMode]=useState(false);
    const[selectUserId,setSelectUserId]=useState(-1);

    const[editObject,setEditObject]=useState({});




    useEffect(()=>{
       
        fetchData();
    },[]);

    const fetchData=()=>{

    axios.get("https://jsonplaceholder.typicode.com/users").then((response)=>{
        console.log(response.data);
        if(response && response.data){
            setUserList(response.data);
        }
    });
};

     //delete
    const onDeleteClickHandler = (id)=>{
        axios.delete("https://jsonplaceholder.typicode.com/users/" +id).then((response)=>{
            console.log(response);
            if(response){
           fetchData();
           alert("Deleted");
                
        }});

    };

    //onedit handler

    const onEditObjectChangeHandler = (event)=>{
           
            if(event){
                const{name,value}=event.target;
                setEditObject({
                 ...editObject,
                 [name]:value,
                });
            }};

       const onResetEditRow=()=>{
           setSelectUserId(-1);
           setEditUserObject({
            name:"",
            username:"",
            email:"",
           })
       }

    const onEditUserObjectChangeHandler = (event)=>{
       
        if(event){
            const{name,value}=event.target;
            setEditObject({
             ...editUserObject,
             [name]:value,
            });
        }};

    

    //edit
    const onEditHandler =(userObject)=>{
        console.log(userObject);
        setIsEditMode(true);
      
        setUserId(userObject.id);
        setSelectUserId(userObject.id);

        setEditObject({

            ...userObject,
        });
        setEditUserObject({

        
            ...userObject,
        });

    };

    const onUpdateReset=()=>{
        if(userId>0){
            axios.put("https://jsonplaceholder.typicode.com/users/"+userId,{
                id:userId,
                
                ...editUserObject,
                userId:1,
            }).then((response)=>{
                    fetchData();
                  
                alert("updated");
                onResetEditRow();
    
                
                
            });
        }
    }
    

    
    const onReset =(event)=>{
        if(event){
        event.preventDefault();
        }
        setIsEditMode(false);
       
    };

     
    const onFormSubmit=(event)=>{
        event.preventDefault();
      
      

        //put
        if(!isEditMode){

            axios.post("https://jsonplaceholder.typicode.com/users",{
                
                ...editUserObject,
                userId:1,
            }).then((response)=>{
                console.log(response);
                alert("Added");

                setEditUserObject({
                    name:"",
                   username:"",
                   email:"",
                });
    
                fetchData();
               
                setEditUserObject("");
            });
        }
        else{
            if(userId>0){
            axios.put("https://jsonplaceholder.typicode.com/users/"+userId,{
                id:userId,
              
                ...editUserObject,
                userId:1,
            }).then((response)=>{
                if(response){
                    fetchData();
                alert("updated");
                onReset();
                }
    
                
                
            });
        }
    };


        axios.post("https://jsonplaceholder.typicode.com/users",{
           
            ...editUserObject,
            userId:1,
        }).then((response)=>{
            console.log(response);
            alert("Added");

            fetchData();
           
            setEditUserObject("");
        });
    };

    return(
        <>

        <h1>User Form</h1>
        <form onSubmit={onFormSubmit}>
        <label>Name</label>
        <input name={"name"} value={editUserObject.name} onChange={onEditUserObjectChangeHandler}/>
        <label>UserName</label>
        <input name={"username"} value={editUserObject.username} onChange={onEditUserObjectChangeHandler}/>

        <label>Email</label>
        <input name={"email"} value={editUserObject.email} onChange={onEditUserObjectChangeHandler}/>

        <button type="submit">{isEditMode ? "Update" :"Submit"}</button>
        {isEditMode && <button onClick={onReset}>Reset</button>}
     
        </form>

        <h1> User List:</h1>
        
        <table className="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>USERNAME</th>
                    <th>EMAIL</th>
                    <th>Option</th>
                </tr>
            </thead>
            <tbody>
               {userList.map((user,index)=>{
                  
                   return(
                <tr key={user.id}>
                     <td>{user.id}</td>
                    <td>{selectUserId === user.id ? (<input name="name"value={editObject.name} 
                    onChange={onEditObjectChangeHandler}/>):(user.name)} </td>
                  
                    <td>{selectUserId === user.id ? (<input name="username"value={editObject.username} 
                    onChange={onEditObjectChangeHandler}/>):(user.username)} </td>

                    <td>{selectUserId === user.id ? (<input name="email"value={editObject.email} 
                    onChange={onEditObjectChangeHandler}/>):(user.email)} </td>
                   
                 <td>
                    {selectUserId === user.id ?(
                    
                    <>
                    <button onClick={onUpdateReset}>Update</button>
                    <button onClick={onResetEditRow}>Reset</button>
                    </>
                    ):
                    (
                    <>
                    <button onClick={()=>{onDeleteClickHandler(user.id)}}>Delete</button>
                    <button onClick={()=>{onEditHandler(user)}}>Edit</button>
                    </>
                    )}
                    </td>
                    
                </tr>
              );
               })}
            </tbody>
        </table>



        </>
    )
}