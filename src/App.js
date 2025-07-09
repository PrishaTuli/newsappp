import './App.css';
import React ,{useState} from 'react'
import Navbar from './components/Navbar';
import  News from './components/News';
 import {BrowserRouter,Routes,Route}from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';
const App=()=>{
  const pagesize=6;
  const apikey=process.env.REACT_APP_NEWS_API;
  const[progress,setprogress]=useState(0);
    return (
      <div>
        <BrowserRouter>
        <Navbar/>
        <LoadingBar
        height={3}
        color='#f11946'
        progress={progress} 
      />
        <Routes>
          <Route path="/" element={<News setprogress={setprogress}  apikey={apikey}  pagesize={pagesize} country="us" category="general"/>} ></Route>
          <Route path="/business" element={<News setprogress={setprogress}  apikey={apikey}  pagesize={pagesize} country="us" category="business"/>}></Route>
          <Route path="/entertainment" element={<News setprogress={setprogress}  apikey={apikey}  pagesize={pagesize} country="us" category="entertainment"/>}></Route>
          <Route path="/general" element={<News setprogress={setprogress}  apikey={apikey}  pagesize={pagesize} country="us" category="general"/>}></Route>
          <Route path="/health" element={<News setprogress={setprogress}  apikey={apikey}  pagesize={pagesize} country="us" category="health"/>}></Route>
          <Route path="/science" element={<News setprogress={setprogress}  apikey={apikey}  pagesize={pagesize} country="us" category="science"/>}></Route>
          <Route path="/sports" element={<News setprogress={setprogress}  apikey={apikey}  pagesize={pagesize} country="us" category="sports"/>}></Route>
          <Route path="/technology" element={<News setprogress={setprogress}  apikey={apikey}  pagesize={pagesize} country="us" category="technology"/>}></Route>
        </Routes> 
        </BrowserRouter>
      </div>
    )
}
export default App;
