import React from 'react'

const SocialMediaTags = ({title,desc,type,image,twitter_card,twitter_site,twitter_creator,text}) => {
  return (
   
    <div className='tables'>
        <h1>Social Media Tags</h1>
        <div className='table-and-image'>
    <table class="table" style={{width: "50%"}}>
        
  <thead>
    <tr>
      <th scope="col">Title</th>
      <th scope="col">{title}</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Description</th>
      <td>{desc}</td>
     
    </tr>
    <tr>
      <th scope="row">Type</th>
      <td>{type}</td>
     
    </tr>
    <tr>
      <th scope="row">Image</th>
      <td>{image}</td>
     
    </tr>
    <tr>
      <th scope="row">Twitter Card</th>
      <td>{twitter_card}</td>
     
    </tr>
    <tr>
      <th scope="row">Twitter Site</th>
      <td>{twitter_site}</td>
     
    </tr>
    <tr>
      <th scope="row">Twitter Creator</th>
      <td>{twitter_creator}</td>
     
    </tr>
    <tr>
      <th scope="row">Url</th>
      <td>{text}</td>
    </tr>
    
    
  </tbody>
</table>
<img src={image} className='kopo'/>

</div>
</div>
  )
}

export default SocialMediaTags
