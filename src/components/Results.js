import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
import { useLocation } from "react-router-dom";
import Image from './Image';

import OnpageResults from './OnpageResults';
import DetailCards from './DetailCards';

import SpeedInsights from './SpeedInsights';
import SocialMediaTags from './SocialMediaTags';



const Results = () => {
    const location = useLocation();
    const text = location.state;
    const [apiResponse, setApiResponse] = useState(null);
    const [apiResponseString, setApiResponseString] = useState(null);
    const [apiResponse2, setApiResponse2] = useState(null);
    const [apiResponseString2, setApiResponseString2] = useState(null);
    console.log(text)
 

    useEffect(() => {
        const post_array = [
            {
              url: text,
              enable_javascript: true,
              custom_js: "meta = {}; meta.url = document.URL; meta;",
              load_resources: true,
              load_javascript: true,
              enable_browser_rendering: true,
            },
          ];
        // Define your API request functions here
        const fetchPageScreenshot = () => {
          axios({
            method: 'post',
            url: 'https://api.dataforseo.com/v3/on_page/page_screenshot',
            auth: {
              username: 'muskaanv0905@gmail.com', // Replace with your DataForSEO API username
              password: 'c0382ba1d0cbb871', // Replace with your DataForSEO API password
            },
            data: post_array,
            headers: {
              'content-type': 'application/json',
            },
          })
            .then(function (response) {
              const result = response.data.tasks;
              // Set the API response in state
              setApiResponse(result);
              setApiResponseString(JSON.stringify(result, null, 2));
            })
            .catch(function (error) {
              console.error(error);
            });
        };
    
        const fetchInstantPages = () => {
          axios({
            method: 'post',
            url: 'https://api.dataforseo.com/v3/on_page/instant_pages',
            auth: {
              username: 'muskaanv0905@gmail.com', // Replace with your DataForSEO API username
              password: 'c0382ba1d0cbb871', // Replace with your DataForSEO API password
            },
            data: post_array,
            headers: {
              'content-type': 'application/json',
            },
          })
            .then(function (response) {
              const result = response.data.tasks;
              // Set the API response in state
              setApiResponse2(result);
              setApiResponseString2(JSON.stringify(result, null, 2));
            })
            .catch(function (error) {
              console.error(error);
            });
        };
        if (text) {
            fetchPageScreenshot();
            fetchInstantPages();
          }
        }, [text]); // Add text as a dependency
    
        // Call the API request functions when the component mounts
       



  return (
    <div>
      {apiResponse && (
        <div className='api-response'>
          <p className='heading'>EVERYTHING YOU NEED TO KNOW....</p>
            <h2 className='heading'>Response for: {text}</h2>

             {/* <p>{apiResponseString}</p> */}

            {/* <p>{apiResponseString2}</p> */}
        
         <Image imageUrl={apiResponse[0].result[0].items[0].image} percentage={apiResponse2[0].result[0].items[0].onpage_score} />
        
          <OnpageResults 
          ilc={apiResponse2[0].result[0].items[0].meta["internal_links_count"]} 
          elc={apiResponse2[0].result[0].items[0].meta["internal_links_count"]} 
          noi={apiResponse2[0].result[0].items[0].meta["images_count"]} 
          soi={apiResponse2[0].result[0].items[0].meta["images_size"]} 
          sc={apiResponse2[0].result[0].items[0].meta[ "scripts_count"]} 
          pts={apiResponse2[0].result[0].items[0].meta['content']['plain_text_size']}
          ptr={apiResponse2[0].result[0].items[0].meta['content']['automated_readability_index'].toFixed(2)}
          ptw={apiResponse2[0].result[0].items[0].meta['content']['plain_text_word_count']}
          ss={apiResponse2[0].result[0].items[0].meta["scripts_size"]}
          ari={apiResponse2[0].result[0].items[0].meta['content']['automated_readability_index'].toFixed(2)}
          cri={apiResponse2[0].result[0].items[0].meta['content']["coleman_liau_readability_index"].toFixed(2)}
          dlr={apiResponse2[0].result[0].items[0].meta['content']["dale_chall_readability_index"].toFixed(2)}
          fkri={apiResponse2[0].result[0].items[0].meta['content']["flesch_kincaid_readability_index"].toFixed(2)}
          sri={apiResponse2[0].result[0].items[0].meta['content']["smog_readability_index"].toFixed(2)}
          dcc={apiResponse2[0].result[0].items[0].meta['content']["description_to_content_consistency"]}
          tcc={apiResponse2[0].result[0].items[0].meta['content'][ "title_to_content_consistency"].toFixed(2)}
          time={apiResponse2[0].result[0].items[0].fetch_time} 

          
          
           /> 
          <DetailCards 
          dt={apiResponse2[0].result[0].items[0].duplicate_title}
          dc={apiResponse2[0].result[0].items[0].duplicate_description}
          duc={apiResponse2[0].result[0].items[0].duplicate_content}
          size={apiResponse2[0].result[0].items[0].size}
          cache={apiResponse2[0].result[0].items[0].cache_control["cachable"]}
          canonical={apiResponse2[0].result[0].items[0].checks["canonical"]}
          four={apiResponse2[0].result[0].items[0].checks["is_4xx_code"]}
          five={apiResponse2[0].result[0].items[0].checks["is_5xx_code"]}
          http={apiResponse2[0].result[0].items[0].checks[ "https_to_http_links"]}
          broke={apiResponse2[0].result[0].items[0].checks[ "is_broken"]}
          content_rate={apiResponse2[0].result[0].items[0].checks[ "low_content_rate"]}
          render_blocking={apiResponse2[0].result[0].items[0].checks[ "has_render_blocking_resources"]}
          readability_rate= {apiResponse2[0].result[0].items[0].checks[ "low_readability_rate"]}
          title={apiResponse2[0].result[0].items[0].checks[ "title_too_long"]}
          no_img_alt={apiResponse2[0].result[0].items[0].checks["no_image_alt"] }
          favicon={apiResponse2[0].result[0].items[0].checks["no_favicon"]}
          /> 
          <SpeedInsights 
          ttsc={apiResponse2[0].result[0].items[0].page_timing["time_to_secure_connection"]} 
          wt={apiResponse2[0].result[0].items[0].page_timing["waiting_time"]} 
          dt={apiResponse2[0].result[0].items[0].page_timing["download_time"]}
          tti={apiResponse2[0].result[0].items[0].page_timing["time_to_interactive"]}
          dc={apiResponse2[0].result[0].items[0].page_timing["dom_complete"]}
          lcp={apiResponse2[0].result[0].items[0].page_timing["largest_contentful_paint"]}

          
          
          />
          
           <SocialMediaTags 
           title={apiResponse2[0].result[0].items[0].meta['social_media_tags']["og:title"]} 
           desc={apiResponse2[0].result[0].items[0].meta['social_media_tags']["og:description"]} 
           type={apiResponse2[0].result[0].items[0].meta['social_media_tags']["og:type"]}
           image={apiResponse2[0].result[0].items[0].meta['social_media_tags']["og:image"]}
           text={text}
           twitter_card={apiResponse2[0].result[0].items[0].meta['social_media_tags']["twitter:card"]}
           twitter_site={apiResponse2[0].result[0].items[0].meta['social_media_tags']["twitter:site"]}
           twitter_creator={apiResponse2[0].result[0].items[0].meta['social_media_tags']["twitter:creator"]}
           
           />
          {/* 
          
          <p>H Tags</p>
          <p>Speed Insights</p>
          
          <p>Social Media Tags Test</p>
          <p>{apiResponse2[0].result[0].items[0].meta['social_media_tags']["og:title"]}</p>
          <p>{apiResponse2[0].result[0].items[0].meta['social_media_tags']["og:description"]}</p>
          <p>{apiResponse2[0].result[0].items[0].meta['social_media_tags']["og:type"]}</p>
          <p>{apiResponse2[0].result[0].items[0].meta['social_media_tags']["og:image"]}</p>
          <p>{apiResponse2[0].result[0].items[0].meta['social_media_tags]["og:url"]}
          <img src = {apiResponse2[0].result[0].items[0].meta['social_media_tags']["og:image"]} />
          <p>{apiResponse2[0].result[0].items[0].meta['social_media_tags']["twitter:card"]}</p>
          <p>{apiResponse2[0].result[0].items[0].meta['social_media_tags']["twitter:site"]}</p>
          <p>{apiResponse2[0].result[0].items[0].meta['social_media_tags']["twitter:creator"]}</p> 
          </div> */}
          </div>
          
         
      )}
    </div>
  )
}

export default Results
