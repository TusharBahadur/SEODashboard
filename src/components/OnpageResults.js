// eslint-disable-next-line
import React from 'react'

const OnpageResults = ({ilc,elc,noi,soi,sc,pts,ptr,ptw,ss,ari,cri,dlr,fkri,sri,dcc,tcc,time}) => {
const cardStyle ={
    width:'18rem'
}


  return (
    
    <div className='grid'>
    {/* <p classNameName='ital'>Report Generated On: {time}</p> */}
    <h1>On Page Results</h1>
    <div className="row">
    <div className="col-sm-3">
      <div className="card" style={cardStyle}>
        <div className="card-body">
          <h5 className="card-title">{ilc}</h5>
          <p className="card-text">Internal Links</p>
          
        </div>
      </div>
    </div>
    <div className="col-sm-3">
      <div className="card" style={cardStyle}>
        <div className="card-body">
          <h5 className="card-title">{elc}</h5>
          <p className="card-text">External Links</p>
          
        </div>
      </div>
    </div>
    <div className="col-sm-3">
      <div className="card" style={cardStyle}>
        <div className="card-body">
          <h5 className="card-title">{noi}</h5>
          <p className="card-text">Number of Images</p>
          
        </div>
      </div>
    </div>
    <div className="col-sm-3">
      <div className="card" style={cardStyle}>
        <div className="card-body">
          <h5 className="card-title">{soi}</h5>
          <p className="card-text">Image Size</p>
          
        </div>
      </div>
    </div>
  </div>
  <div className="row">
    <div className="col-sm-3">
      <div className="card" style={cardStyle}>
        <div className="card-body">
          <h5 className="card-title">{sc}</h5>
          <p className="card-text">Scripts</p>
          
        </div>
      </div>
    </div>
    <div className="col-sm-3">
      <div className="card" style={cardStyle}>
        <div className="card-body">
          <h5 className="card-title">{pts}</h5>
          <p className="card-text">Plain Text Size</p>
          
        </div>
      </div>
    </div>
    <div className="col-sm-3">
      <div className="card" style={cardStyle}>
        <div className="card-body">
          <h5 className="card-title">{ptr}</h5>
          <p className="card-text">Plain Text Rate</p>
          
        </div>
      </div>
    </div>
    <div className="col-sm-3">
      <div className="card" style={cardStyle}>
        <div className="card-body">
          <h5 className="card-title">{ptw}</h5>
          <p className="card-text">Plain Text Word Count</p>
          
        </div>
      </div>
    </div>
  </div>
  <div className="row">
    <div className="col-sm-3">
      <div className="card" style={cardStyle}>
        <div className="card-body">
          <h5 className="card-title">{ss}</h5>
          <p className="card-text">Scripts Size</p>
          
        </div>
      </div>
    </div>
    <div className="col-sm-3">
      <div className="card" style={cardStyle}>
        <div className="card-body">
          <h5 className="card-title">{ari}</h5>
          <p className="card-text">Automated Readability Index</p>
          
        </div>
      </div>
    </div>
    <div className="col-sm-3">
      <div className="card" style={cardStyle}>
        <div className="card-body">
          <h5 className="card-title">{cri}</h5>
          <p className="card-text">Coleman Liau Readability Index</p>
          
        </div>
      </div>
    </div>
    <div className="col-sm-3">
      <div className="card" style={cardStyle}>
        <div className="card-body">
          <h5 className="card-title">{dlr}</h5>
          <p className="card-text">Dale Chall Readability Index</p>
          
        </div>
      </div>
    </div>
  </div>
  <div className="row">
    <div className="col-sm-3">
      <div className="card" style={cardStyle}>
        <div className="card-body">
          <h5 className="card-title">{fkri}</h5>
          <p className="card-text">Flesch Kincaid Readability Index</p>
          
        </div>
      </div>
    </div>
    <div className="col-sm-3">
      <div className="card" style={cardStyle}>
        <div className="card-body">
          <h5 className="card-title">{sri}</h5>
          <p className="card-text">Smog Readability Index</p>
          
        </div>
      </div>
    </div>
    <div className="col-sm-3">
      <div className="card" style={cardStyle}>
        <div className="card-body">
          <h5 className="card-title">{dcc}</h5>
          <p className="card-text">Description to Content Consistency</p>
          
        </div>
      </div>
    </div>
    <div className="col-sm-3">
      <div className="card" style={cardStyle}>
        <div className="card-body">
          <h5 className="card-title">{tcc}</h5>
          <p className="card-text">Time to Content Consistency</p>
          
        </div>
      </div>
    </div>
  </div>
  </div>

  
  
  )
}

export default OnpageResults
