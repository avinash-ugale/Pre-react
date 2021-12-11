
import axios from "axios";
import { useEffect, useState } from "react";

export default ()=>{

    const[postsList,setPostsList]=useState([]);

    // const[title,setTitle]=useState("");

    // const[body,setBody]=useState("");
    const[editPostObject,setEditPostObject] =useState({
        title:"",
        body:"",
    });

    const[postId,setPostId]=useState(0);

    const[isEditMode,setIsEditMode]=useState(false);

    const[titleEditMode,setTitleEditMode]=useState("");

    const[bodyEditMode,setBodyEditMode]=useState("");

    const[selectPostId,setSelectPostId]=useState(-1);

    const[editObject,setEditObject]=useState({});

    useEffect(()=>{
       
        fetchData();
    },[]);

    const fetchData=()=>{

    axios.get("https://jsonplaceholder.typicode.com/posts").then((response)=>{
        console.log(response.data);
        if(response && response.data){
            setPostsList(response.data);
        }
    });
};

     //delete
    const onDeleteClickHandler = (id)=>{
        axios.delete("https://jsonplaceholder.typicode.com/posts/" +id).then((response)=>{
            console.log(response);
            if(response){
           fetchData();
           alert("Deleted");
                
        }});

    };

    //onedit handler

    const onEditObjectChangeHandler = (event)=>{
            //  const titleOld ={
            //      title:"a",
            //      body:"b",
            //  };
           
            //  const titleNew={
            //      title:titleOld.title,
            //      body:titleOld.body,
            //      ...titleOld,
            //      title:"c",
            //  }
            if(event){
                const{name,value}=event.target;
                setEditObject({
                 ...editObject,
                 [name]:value,
                });
            }};

       const onResetEditRow=()=>{
           setSelectPostId(-1);
           setEditPostObject({
               title:"",
               body:"",
           })
       }

    const onEditPostObjectChangeHandler = (event)=>{
        //  const titleOld ={
        //      title:"a",
        //      body:"b",
        //  };
       
        //  const titleNew={
        //      title:titleOld.title,
        //      body:titleOld.body,
        //      ...titleOld,
        //      title:"c",
        //  }
        if(event){
            const{name,value}=event.target;
            setEditObject({
             ...editPostObject,
             [name]:value,
            });
        }};

    

    //edit
    const onEditHandler =(postObject)=>{
        console.log(postObject);
        setIsEditMode(true);
        // setTitle(postObject.title);
        // setBody(postObject.body);
        // setTitleEditMode(postObject.title);
        // setBodyEditMode(postObject.body);
        setPostId(postObject.id);
        setSelectPostId(postObject.id);

        setEditObject({

            //title:postObject.title,
            //body:postObject.body,
            ...postObject,
        });
        setEditPostObject({

            //title:postObject.title,
            //body:postObject.body,
            ...postObject,
        });

    };

    const onUpdateReset=()=>{
        if(postId>0){
            axios.put("https://jsonplaceholder.typicode.com/posts/"+postId,{
                id:postId,
                // title,
                // body,
                ...editPostObject,
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
        // setTitle("");
        // setBody("");
    };

    //  const onTitleChange=(event)=>{
    //      setTitle(event.target.value);
    //  };  
    //  const onBodyChange=(event)=>{
    //     setBody(event.target.value);
    // };   
    const onTitleEditChange=(event)=>{
        setTitleEditMode(event.target.value);
    };  
    const onBodyEditChange=(event)=>{
       setBodyEditMode(event.target.value);
   }; 
    const onFormSubmit=(event)=>{
        event.preventDefault();
       // console.log(title,body);
      

        //put
        if(!isEditMode){

            axios.post("https://jsonplaceholder.typicode.com/posts",{
                // title,
                // body,
                ...editPostObject,
                userId:1,
            }).then((response)=>{
                console.log(response);
                alert("Added");

                setEditPostObject({
                    title:"",
                    body:"",
                });
    
                fetchData();
                // setTitle("");
                // setBody("");
                setEditPostObject("");
            });
        }
        else{
            if(postId>0){
            axios.put("https://jsonplaceholder.typicode.com/posts/"+postId,{
                id:postId,
                // title,
                // body,
                ...editPostObject,
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


        axios.post("https://jsonplaceholder.typicode.com/posts",{
            // title,
            // body,
            ...editPostObject,
            userId:1,
        }).then((response)=>{
            console.log(response);
            alert("Added");

            fetchData();
            // setTitle("");
            // setBody("");
            setEditPostObject("");
        });
    };

    return(
        <>
        <h1>From HooksSample</h1>
        <h1>Post Form:</h1>

        <form onSubmit={onFormSubmit}>
        <label>Title</label>
        <input name={"title"} value={editPostObject.title} onChange={onEditPostObjectChangeHandler}/>
        <label>Body</label>
        <input name={"body"} value={editPostObject.body} onChange={onEditPostObjectChangeHandler}/>

        <button type="submit">{isEditMode ? "Update" :"Submit"}</button>
        {isEditMode && <button onClick={onReset}>Reset</button>}
     
        </form>

        <h1>Posts List:</h1>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Body</th>
                    <th>Options</th>
                </tr>
            </thead>
            <tbody>
               {postsList.map((post,index)=>{
                  
                   return(
                <tr key={post.id}>
                     <td>{post.id}</td>
                    <td>{selectPostId === post.id ? (<input name="title"value={editObject.title} 
                    onChange={onEditObjectChangeHandler}/>):(post.title)} </td>
                  
                    <td>{selectPostId === post.id ? (<input name="body"value={editObject.body} 
                    onChange={onEditObjectChangeHandler}/>):(post.body)} </td>
                 <td>
                    {selectPostId === post.id ?(
                    
                    <>
                    <button onClick={onUpdateReset}>Update</button>
                    <button onClick={onResetEditRow}>Reset</button>
                    </>
                    ):
                    (
                    <>
                    <button onClick={()=>{onDeleteClickHandler(post.id)}}>Delete</button>
                    <button onClick={()=>{onEditHandler(post)}}>Edit</button>
                    </>
                    )}
                    </td>
                    
                </tr>
              );
               })}
            </tbody>
        </table>
        </>
    );
            }