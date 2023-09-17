import React from 'react'

const SpeedInsights = ({ttsc,wt,dt,tti,dc,lcp}) => {
  return (
    <div className='grid'>
          <h1>Speed Insights</h1>
    <div className="row">
  <div className="col-sm-4">
    <div className="card bg-dark text-white">
      <div className="card-body">
        <h5 className="card-title">{ttsc}ms</h5>
        <p className="card-text">Time to Secure Connection.</p>
        
      </div>
    </div>
  </div>
  <div className="col-sm-4">
    <div className="card bg-dark text-white">
      <div className="card-body">
        <h5 className="card-title">{wt}ms</h5>
        <p className="card-text">Waiting Time</p>

      </div>
    </div>
  </div>
  <div className="col-sm-4">
    <div className="card bg-dark text-white">
      <div className="card-body">
        <h5 className="card-title">{dt}ms</h5>
        <p className="card-text">Download Time</p>

      </div>
    </div>
  </div>
  <div className="col-sm-4">
    <div className="card bg-dark text-white">
      <div className="card-body">
        <h5 className="card-title">{tti}ms</h5>
        <p className="card-text">Time to Interactive.</p>

      </div>
    </div>
  </div>
  <div className="col-sm-4">
    <div className="card bg-dark text-white">
      <div className="card-body">
        <h5 className="card-title">{dc}ms</h5>
        <p className="card-text">DOM Complete.</p>
        
      </div>
    </div>
  </div>
  <div className="col-sm-4">
    <div className="card bg-dark text-white">
      <div className="card-body">
        <h5 className="card-title">{lcp}ms</h5>
        <p className="card-text">Largest Contentful Paint.</p>
        
    </div>
  </div>
</div>
</div>
</div>

  )
}

export default SpeedInsights
