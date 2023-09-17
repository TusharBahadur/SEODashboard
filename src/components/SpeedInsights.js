import React from 'react'

const SpeedInsights = ({ttsc,wt,dt,tti,dc,lcp}) => {
  return (
    <div className='grid'>
          <h1>Speed Insights</h1>
    <div class="row">
  <div class="col-sm-4">
    <div class="card bg-dark text-white">
      <div class="card-body">
        <h5 class="card-title">{ttsc}ms</h5>
        <p class="card-text">Time to Secure Connection.</p>
        
      </div>
    </div>
  </div>
  <div class="col-sm-4">
    <div class="card bg-dark text-white">
      <div class="card-body">
        <h5 class="card-title">{wt}ms</h5>
        <p class="card-text">Waiting Time</p>

      </div>
    </div>
  </div>
  <div class="col-sm-4">
    <div class="card bg-dark text-white">
      <div class="card-body">
        <h5 class="card-title">{dt}ms</h5>
        <p class="card-text">Download Time</p>

      </div>
    </div>
  </div>
  <div class="col-sm-4">
    <div class="card bg-dark text-white">
      <div class="card-body">
        <h5 class="card-title">{tti}ms</h5>
        <p class="card-text">Time to Interactive.</p>

      </div>
    </div>
  </div>
  <div class="col-sm-4">
    <div class="card bg-dark text-white">
      <div class="card-body">
        <h5 class="card-title">{dc}ms</h5>
        <p class="card-text">DOM Complete.</p>
        
      </div>
    </div>
  </div>
  <div class="col-sm-4">
    <div class="card bg-dark text-white">
      <div class="card-body">
        <h5 class="card-title">{lcp}ms</h5>
        <p class="card-text">Largest Contentful Paint.</p>
        
    </div>
  </div>
</div>
</div>
</div>

  )
}

export default SpeedInsights
