import React from 'react'

const SocialMediaTags = ({title,desc,type,image,twitter_card,twitter_site,twitter_creator,text}) => {
  return (
    <div>
    <h1 className='Social'>Social Media Tags</h1>
    <div className='tables'>
        
        <div className='table-and-image'>
    <table className="table" style={{width: "50%"}}>
        
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
      <th scope="row">Types</th>
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
<img src={image} alt="alt" className='socialimage'/>

</div>
</div>
</div>
  )
}

export default SocialMediaTags
