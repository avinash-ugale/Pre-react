import React , {Component} from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component{
render(){
return(
<>


<div>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
<div class="container-fluid">
<a class="navbar-brand" href="#">Navbar</a>
<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
<span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarNav">
<ul class="navbar-nav">
<li class="nav-item">
<Link class="nav-link active" aria-current="page" to={"/posts"}>Posts</Link> 
{/* pass link and to={posts} */}
</li>
<li class="nav-item">
<Link class="nav-link" to={"/todo"}>ToDo</Link>
{/* pass link and to do */}
</li>
</ul>
</div>
</div>
</nav>
</div>


</>
);
}
}