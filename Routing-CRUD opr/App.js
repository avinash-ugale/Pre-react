import logo from './logo.svg';
import './App.css';
import Posts from './Posts';
import Navbar from './Navbar';
import Header from './Header';
import Body from './Body';
import { Route, Routes } from 'react-router-dom';
import ToDo from './ToDo';
import Footer from './Footer';
import Users from './Users';


function App() {
  return (
    <>

    <Header/>
    <Navbar/>
    <Routes>
    <Route path={"/posts"} element= { <Posts/> }/>
    <Route path={"/todos"} element= { <ToDo/> }/>
    <Route path={"/users"} element= { <Users/> }/>
    </Routes>

    {/* <Footer/> */}
                                                    
    </>
  );
}

export default App;



