import './App.css';
// import React, { Component } from 'react'
import React ,{useState} from 'react'
import Navbar from './components/Navbar';
import  News from './components/News';
 import {BrowserRouter,Routes,Route}from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';
// export default class App extends Component {
const App=()=>{
  // c='prisha'
  // pagesize=6;
  // apikey=process.env.REACT_APP_NEWS_API
  const pagesize=6;
  const apikey=process.env.REACT_APP_NEWS_API;
  // state={
  //   progress:0
  // }
  const[progress,setprogress]=useState(0);
  // setprogress=(progress)=>{
  //   this.setState({progress:progress})
  // }
  // render() {
    return (
      <div>
        {/* Hello {this.c} */}
       
        <BrowserRouter>
        <Navbar/>
        <LoadingBar
        height={3}
        color='#f11946'
        // progress={this.state.progress}
        progress={progress} 
      />
        {/* <News setprogress={this.setprogress}  apikey={this.apikey}  pagesize={this.pagesize} country="us" category="sports"/> */}
        {/* //change this. to normal */}
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
  // }
}
export default App;