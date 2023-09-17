import React from 'react'
import { Checkmark } from 'react-checkmark'
const DetailCards = ({dt,dc,duc,size,cache,canonical,four,five,http,broke,content_rate,render_blocking,readability_rate,title,no_img_alt,favicon}) => {

    const cardStyle ={
        width:'22rem',
        // height:'22rem',
        marginLeft :'32px'
    }


  return (
    <div className='poi'>
        
    <div class="row">
  <div class="col-sm-4">
    <div class="card" style={cardStyle}>
      <div class="card-body">
      <h5 class="card-title">Duplicate Title</h5>
        {dt ?  <Checkmark size="medium" color="#223344" />: <Checkmark className="checkmark" size="medium"/>}
        {dt ? <p className="card-text">Duplicate title tags are bad for SEO. They confuse search engines and make it harder to rank for specific keywords.</p> 
        : 
        <p className='card-text'>Duplicate title tags are bad for SEO. They confuse search engines and make it harder to rank for specific keywords.</p> }
        
        
      </div>
    </div>
  </div>
  <div class="col-sm-4">
    <div class="card" style={cardStyle}>
      <div class="card-body">
      <h5 class="card-title">Duplicate Description</h5>
        {dc ?  <Checkmark size="medium" color="#223344" />: <Checkmark className="checkmark" size="medium"/>}
        {dc ? <p className="card-text">Duplicate meta descriptions are bad for SEO. They confuse search engines and make it harder to rank for specific keywords.</p> 
        : 
        <p className='card-text'>Duplicate meta descriptions are bad for SEO. They confuse search engines and make it harder to rank for specific keywords.</p> }
        
        
      </div>
    </div>
  </div>
  <div class="col-sm-4">
    <div class="card" style={cardStyle}>
      <div class="card-body">
      <h5 class="card-title">Duplicate Content</h5>
        {duc ? <Checkmark size="medium" color="#223344" /> : <Checkmark className="checkmark" size="medium"/>}
        {duc ? <p className="card-text">Duplicate content is bad for SEO. It confuses search engines and makes it harder to rank for specific keywords.</p> 
        : 
        <p className='card-text'>Duplicate content is bad for SEO. It confuses search engines and makes it harder to rank for specific keywords.</p> }
        
        
      </div>
    </div>
  </div>
  <div class="col-sm-4">
    <div class="card" style={cardStyle}>
      <div class="card-body">
       <h5 class="card-title">Size</h5>
        {size>1000 ?  <Checkmark size="medium" color="#223344" />:<Checkmark className="checkmark" size="medium"/> }
        {size>1000 ? <p className="card-text">The size of your page is too large. This can negatively impact your page load speed and user experience.</p> 
        : 
        <p className='card-text'>The size of your page is great!</p> }
        
        
      </div>
    </div>
  </div>
  <div class="col-sm-4">
    <div class="card" style={cardStyle}>
      <div class="card-body">
       <h5 class="card-title">Cache Control</h5>
        {cache ?  <Checkmark size="medium" color="#223344" />:<Checkmark className="checkmark" size="medium"/> }
        {cache? <p className="card-text">Your page does not have a cache control header. This can negatively impact your page load speed and user experience.</p> 
        : 
        <p className='card-text'>Your page has a cache control header.</p> }
        
        
      </div>
    </div>
  </div>
  <div class="col-sm-4">
    <div class="card" style={cardStyle}>
      <div class="card-body">
       <h5 class="card-title">Canonical </h5>
        {canonical ?  <Checkmark size="medium" color="#223344" />:<Checkmark className="checkmark" size="medium"/> }
        {canonical ? <p className="card-text">Your page does not have a canonical tag. This can negatively impact your page load speed and user experience.</p> 
        : 
        <p className='card-text'>Your page has a canonical tag.</p> }
        
        
      </div>
    </div>
  </div>
  <div class="col-sm-4">
    <div class="card" style={cardStyle}>
      <div class="card-body">
       <h5 class="card-title">4_xx Code</h5>
        {four ?  <Checkmark size="medium" color="#223344" />:<Checkmark className="checkmark" size="medium"/> }
        {four ? <p className="card-text">Your page does not have a 4_xx status code.</p> 
        : 
        <p className='card-text'>Your page has a 4_xx status code. This can negatively impact your page load speed and user experience.</p> }
        
        
      </div>
    </div>
  </div>
  <div class="col-sm-4">
    <div class="card" style={cardStyle}>
      <div class="card-body">
       <h5 class="card-title">5_xx Code</h5>
        {five ?  <Checkmark size="medium" color="#223344" />:<Checkmark className="checkmark" size="medium"/> }
        {five ? <p className="card-text">Your page does not have a 5_xx status code.</p> 
        : 
        <p className='card-text'>Your page has a 5_xx status code. This can negatively impact your page load speed and user experience.</p> }
        
        
      </div>
    </div>
  </div>
  <div class="col-sm-4">
    <div class="card" style={cardStyle}>
      <div class="card-body">
       <h5 class="card-title">Is Broken</h5>
        {broke ?  <Checkmark size="medium" color="#223344" />:<Checkmark className="checkmark" size="medium"/> }
        {broke ? <p className="card-text">Your page does not have any broken links.</p> 
        : 
        <p className='card-text'>Your page has broken links. This can negatively impact your page load speed and user experience.</p> }
        
        
      </div>
    </div>
  </div>
  <div class="col-sm-4">
    <div class="card" style={cardStyle}>
      <div class="card-body">
       <h5 class="card-title">Content Rate</h5>
        {content_rate?  <Checkmark className="checkmark" size="medium"/>:<Checkmark size="medium" color="#223344" /> }
        {content_rate ? <p className="card-text">Your page has a low content rate. This can negatively impact your page load speed and user experience.</p> 
        : 
        <p className='card-text'>Your page's content rate is fine.</p> }
        
        
      </div>
    </div>
  </div>
  <div class="col-sm-4">
    <div class="card" style={cardStyle}>
      <div class="card-body">
       <h5 class="card-title">Has Render Blocking Resources</h5>
        {render_blocking ?  <Checkmark size="medium" color="#223344" />:<Checkmark className="checkmark" size="medium"/> }
        {render_blocking ? <p className="card-text">Your page has render blocking resources. This can negatively impact your page load speed and user experience.</p> 
        : 
        <p className='card-text'>Your page does not have render blocking resources.</p> }
        
        
      </div>
    </div>
  </div>
  <div class="col-sm-4">
    <div class="card" style={cardStyle}>
      <div class="card-body">
       <h5 class="card-title">Readability Rate</h5>
        {readability_rate ?  <Checkmark size="medium" color="#223344" />:<Checkmark className="checkmark" size="medium"/> }
        {readability_rate? <p className="card-text">Your page's readability rate is fine.</p> 
        : 
        <p className='card-text'>Your page has a low readability rate. This can negatively impact your page load speed and user experience.</p> }
        
        
      </div>
    </div>
  </div>
  <div class="col-sm-4">
    <div class="card" style={cardStyle}>
      <div class="card-body">
       <h5 class="card-title">Title Too Long</h5>
        {title ?  <Checkmark size="medium" color="#223344" />:<Checkmark className="checkmark" size="medium"/> }
        {title? <p className="card-text">Your page has a title that is too long. This can negatively impact your page load speed and user experience</p> 
        : 
        <p className='card-text'>The title of your page is fine.</p> }
        
        
      </div>
    </div>
  </div>
  <div class="col-sm-4">
    <div class="card" style={cardStyle}>
      <div class="card-body">
       <h5 class="card-title">No Image Alt</h5>
        {no_img_alt ?  <Checkmark size="medium" color="#223344" />:<Checkmark className="checkmark" size="medium"/> }
        {no_img_alt? <p className="card-text">Your page has images without alt tags. This can negatively impact your page load speed and user experience.</p> 
        : 
        <p className='card-text'>The page has images with alt tags.</p> }
        
        
      </div>
    </div>
  </div>
  <div class="col-sm-4">
    <div class="card" style={cardStyle}>
      <div class="card-body">
       <h5 class="card-title">No Favicon</h5>
        {favicon?  <Checkmark size="medium" color="#223344" />:<Checkmark className="checkmark" size="medium"/> }
        {favicon? <p className="card-text">Your page has a favicon</p> 
        : 
        <p className='card-text'>Your page does not have a favicon. This can negatively impact your page load speed and user experience.</p> }
        
        
      </div>
    </div>
  </div>
  
</div>
</div>
  )
}

export default DetailCards
