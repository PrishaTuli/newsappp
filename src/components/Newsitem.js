
import React from "react";    
  const Newsitem=(props)=>{
    let { title, description, imageurl, newsurl, author, date ,source} = props;
    return (
      <div className="my-3">
        <div className="card">
          <div style={{
            display:'flex',
            justifyContent:'flex-end',
            position:'absolute',
            right:'0'
          }}>
          <span className=" badge rounded-pill bg-danger" >
                {source}
                <span className="visually-hidden">unread messages</span>
              </span>
          </div>
          <img
            src={
              !imageurl
                ? "https://static.tnn.in/thumb/msid-112078304,thumbsize-38238,width-1280,height-720,resizemode-75/112078304.jpg?quality=100"
                : imageurl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">
              {title}...
              
            </h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-body-secondary">
                By {!author ? "Unknown" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              href={newsurl}
              target="_blank"
              className="btn btn-sm btn-primary"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  // }
}

export default Newsitem;
