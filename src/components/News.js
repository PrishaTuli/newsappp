// import React, { Component } from "react";
import React,{useEffect,useState} from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

// export class News extends Component {
  const News=(props)=>{
  // static defaultProps={
  //   country:'in',
  //   pagesize:8,
  //   category:"general"
  // }
  // static propTypes={
  //   country:PropTypes.string,
  //   pagesize:PropTypes.number,
  //   category:PropTypes.string,
  // }
  let[articles,setArticles]=useState([])
  let[loading,setLoading]=useState(true)
  let[page,setPage]=useState(1)
  let[totalResults,setTotal]=useState(0)
  // capital=(string)=>{
   const capital=(string)=>{
    return string.charAt(0).toUpperCase()+string.slice(1);
  }
  // articles = [
  //   {
  //     source: {
  //       id: "espn-cric-info",
  //       name: "ESPN Cric Info",
  //     },
  //     author: null,
  //     title:
  //       "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
  //     description:
  //       "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
  //     url: "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
  //     urlToImage:
  //       "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
  //     publishedAt: "2020-04-27T11:41:47Z",
  //     content:
  //       "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]",
  //   },
  //   {
  //     source: {
  //       id: "espn-cric-info",
  //       name: "ESPN Cric Info",
  //     },
  //     author: null,
  //     title:
  //       "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
  //     description:
  //       "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
  //     url: "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
  //     urlToImage:
  //       "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
  //     publishedAt: "2020-03-30T15:26:05Z",
  //     content:
  //       "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]",
  //   },
  // ];
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     articles: this.articles,
  //     loading:false,
  //     page:1,
  //     totalResults:0
  //   };
  //   document.title=`${this.capital(props.category)} -News Monkey`
  // }
  // async updateNews(pageno){
  const updateNews=async(pageno)=>{
    //replacing this.props to props
    props.setprogress(0);
    let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pagesize}`;
    // {this.setState({loading:true})}
    setLoading(true)
    let data= await fetch(url);
    props.setprogress(30);
    let parsedata=await data.json()
    props.setprogress(70);
    setArticles(parsedata.articles)
    setTotal(parsedata.totalResults)
    setLoading(false)
    //  this.setState({
    //   articles:parsedata.articles,
    //   loading:false,
    //   totalResults:parsedata.totalResults
    //  })
     props.setprogress(100);
  }
  useEffect(()=>{
   document.title=`${capital(props.category)} -News Monkey`
   updateNews();
  },[])

  // async componentDidMount(){
  //   // let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=a4a9966d0b09455ea11efb10cc0077b4&page=1&pageSize=${props.pagesize}`;
  //   // {this.setState({loading:true})};
  //   // let data= await fetch(url);
  //   // let parsedata=await data.json()
  //   // this.setState({articles:parsedata.articles,totalResults:parsedata.totalResults,loading:false})
  //   this.updateNews();
  // }
//  
// handleprevclick= async ()=>{
  const handleprevclick= async ()=>{
  // let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=a4a9966d0b09455ea11efb10cc0077b4&page=${this.state.page -1}&pageSize=${props.pagesize}`;
  // {this.setState({loading:true})}
  // let data= await fetch(url);
  // let parsedata=await data.json()
  //  this.setState({
  //   page:this.state.page -1,
  //   articles:parsedata.articles,
  //   loading:false
  //  })

// this.setState({
//     page:this.state.page -1});
    // this.updateNews();
    setPage(page-1);
    updateNews();
  }
  // handlenextclick= async ()=>{
   const handlenextclick= async ()=>{
    // if(!(this.state.page+1>Math.ceil(this.state.totalResults/props.pagesize))){
    // let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=a4a9966d0b09455ea11efb10cc0077b4&page=${this.state.page +1}&pageSize=${props.pagesize}`;
    // {this.setState({loading:true})}
    // let data= await fetch(url);
    // let parsedata=await data.json()
    //  this.setState({
    //   page:this.state.page +1,
    //   articles:parsedata.articles,
    //   loading:false
    //  })}
    // this.setState({
    //     page:this.state.page +1});
    //     this.updateNews();
    setPage(page+1);
    updateNews();
  }
 const fetchMoreData = async () => {
    // this.setState({page:this.state.page+1})
    let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=a4a9966d0b09455ea11efb10cc0077b4&page=${page +1}&pageSize=${props.pagesize}`;
    setPage(page+1);
    // {this.setState({loading:true})}
    setLoading(true)
    let data=await fetch(url);
    let parsedata=await data.json()
    setArticles(articles.concat(parsedata.articles))
    setTotal(parsedata.totalResults)
    setLoading(false)
    //  this.setState({
    //   articles:this.state.articles.concat(parsedata.articles),
    //   loading:false,
    //   totalResults:parsedata.totalResults
    //  })
  }
  // render() {
    return (
      //this. to normal
      <div className="container my-3">
        <h2 className="text-center" style={{marginTop:'90px'}}>Top-Headlines on {capital(props.category)} category</h2>
        {/* {this.state.loading && <Spinner/>} */}
        {loading && <Spinner/>}
        <InfiniteScroll
          // dataLength={this.state.articles.length}
          // next={this.fetchMoreData}
          // hasMore={this.state.articles.length!=this.state.totalResults}
          // loader={this.state.loading && <Spinner/>}
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length!=totalResults}
          loader={loading && <Spinner/>}
        >
          <div className="container">
        <div className="row">
      {/* {!this.state.loading &&} */}
      {/* { this.state.articles.map((element)=>{ */}
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
          {/* <div className="col-md-4">
            <Newsitem
              title="my"
              description="des"
              imageurl="https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg"
            />
          </div> */}
          {/* <div className="d-flex justify-content-between">
          <button disabled={this.state.page<=1} type="button" className="btn btn-primary" onClick={this.handleprevclick}>&larr; Previous</button>
          <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/props.pagesize)} type="button" className="btn btn-primary" onClick={this.handlenextclick}>Next &rarr;</button>
          </div> */}
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
