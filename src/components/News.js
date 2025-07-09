// import React, { Component } from "react";
import React,{useEffect,useState} from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

  const News=(props)=>{
  let[articles,setArticles]=useState([])
  let[loading,setLoading]=useState(true)
  let[page,setPage]=useState(1)
  let[totalResults,setTotal]=useState(0)
   const capital=(string)=>{
    return string.charAt(0).toUpperCase()+string.slice(1);
  }
  const updateNews=async(pageno)=>{
    //replacing this.props to props
    props.setprogress(0);
    let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pagesize}`;
    setLoading(true)
    let data= await fetch(url);
    props.setprogress(30);
    let parsedata=await data.json()
    props.setprogress(70);
    setArticles(parsedata.articles)
    setTotal(parsedata.totalResults)
    setLoading(false)
     props.setprogress(100);
  }
  useEffect(()=>{
   document.title=`${capital(props.category)} -News Monkey`
   updateNews();
  },[])
  const handleprevclick= async ()=>{
    setPage(page-1);
    updateNews();
  }
   const handlenextclick= async ()=>{
    setPage(page+1);
    updateNews();
  }
 const fetchMoreData = async () => {
    let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=a4a9966d0b09455ea11efb10cc0077b4&page=${page +1}&pageSize=${props.pagesize}`;
    setPage(page+1);
    setLoading(true)
    let data=await fetch(url);
    let parsedata=await data.json()
    setArticles(articles.concat(parsedata.articles))
    setTotal(parsedata.totalResults)
    setLoading(false)
  }
    return (
      <div className="container my-3">
        <h2 className="text-center" style={{marginTop:'90px'}}>Top-Headlines on {capital(props.category)} category</h2>
        {/* {this.state.loading && <Spinner/>} */}
        {loading && <Spinner/>}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length!=totalResults}
          loader={loading && <Spinner/>}
        >
          <div className="container">
        <div className="row">
      {articles.map((element)=>{
         return <div className="col-md-4" key={element.url}>
            <Newsitem 
              title={element.title?element.title.slice(0,40):""}
              description={element.description?element.description.slice(0,88):""}
              imageurl={element.urlToImage}
              newsurl={element.url}
              author={element.author}
              date={element.publishedAt}
              source={element.source.name}
            />
          </div>
          })}
        </div>
        </div>
        </InfiniteScroll>
      </div>
    
    );
  // }
}
News.defaultProps={
  country:'in',
  pagesize:8,
  category:"general"
}
News.propTypes={
  country:PropTypes.string,
  pagesize:PropTypes.number,
  category:PropTypes.string,
}
export default News;
