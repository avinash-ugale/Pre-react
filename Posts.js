
import axios from "axios";
import React , {Component} from "react";


export default class Posts extends Component{
state ={
posts:[],
postObject:{
title:" ",
body:" ",
userId:1,
},

};

onDeleteClickHandler =(id) =>{
axios.delete("https://jsonplaceholder.typicode.com/posts/" + id)
.then((response)=>{
console.log("response");
this.fetchData();
alert("Deleted")
});
};

onChangeHandler =(event)=>{
const{name , value}= event.target;
const postObjectCopy =this.state.postObject;
postObjectCopy[name]=value;
this.setState({postObject: postObjectCopy});
};

onFormSubmitClick=(event)=>{
event.preventDefault();
console.log(this.state);

axios.post("https://jsonplaceholder.typicode.com/posts",this.state.postObject).then
((response)=>{
 console.log(response);
   this.fetchData();
   alert("Created");
this.setState({
postObject:{
title:" ",
body:" ",
userId:1,
},
})
})
}

render(){
return(
<>
<h1> Im in Posts</h1>
<form onSubmit={this.onFormSubmitClick} >
<label>Title</label>
<input
name="title"
value={this.state.postObject.title}
onChange={this.onChangeHandler}
/>

<label>Body</label>
<input
name="body"
value={this.state.postObject.body}
onChange={this.onChangeHandler}
/>
<button type="submit" >Submit</button>
</form>

{this.state.posts.map((post, index) =>(
<div key ={index}>
<div>
{index+1}.{post.title}
</div>
<button onClick={()=>{
this.onDeleteClickHandler(post.id);
} }
>Delete</button>
<br/>
</div>
))}
</>
);
}
componentDidMount(){
this.fetchData();
}

fetchData() {
axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
console.log(response.data);
this.setState({ posts: response.data });
});
}
}