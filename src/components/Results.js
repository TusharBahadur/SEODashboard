// eslint-disable-next-line
import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
import { useLocation } from "react-router-dom";
import Image from './Image';

import OnpageResults from './OnpageResults';
import DetailCards from './DetailCards';
import Spinner from './Spinner';
import SpeedInsights from './SpeedInsights';
import SocialMediaTags from './SocialMediaTags';



const Results = () => {
    const location = useLocation();
    const text = location.state;
    const [apiResponse, setApiResponse] = useState(null);
    const [loading, setLoading] = useState(true);
    const [apiResponse2, setApiResponse2] = useState(null);
  
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
       
        const fetchPageScreenshot = () => {
          axios({
            method: 'post',
            url: 'https://api.dataforseo.com/v3/on_page/page_screenshot',
            auth: {
              username: process.env.REACT_APP_API_USERNAME, 
              password: process.env.REACT_APP_API_PASSWORD 
            },
            data: post_array,
            headers: {
              'content-type': 'application/json',
            },
          })
            .then(function (response) {
              const result = response.data.tasks;
           
              setApiResponse(result);
            
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
              username: process.env.REACT_APP_API_USERNAME, 
              password: process.env.REACT_APP_API_PASSWORD, 
            },
            data: post_array,
            headers: {
              'content-type': 'application/json',
            },
          })
            .then(function (response) {
              const result = response.data.tasks;
        
              setApiResponse2(result);
            
            })
            .catch(function (error) {
              console.error(error);
            });
        };
        if (text) {
            fetchPageScreenshot();
            fetchInstantPages();
          }
        }, [text]); 
    
        useEffect(() => {
          if (apiResponse && apiResponse2) {
            setLoading(false);
          }
        }, [apiResponse, apiResponse2]);
       



  return (
    <div>
      
      {loading ? (
        <div className='Spinner'>
        <Spinner message="Analyzing the Web-Page"/>
        </div>

      ): (


        <div className='api-response'>
        <p className='heading'>EVERYTHING YOU NEED TO KNOW....</p>
          <h2 className='heading'>Response for: {text}</h2>

      
       <Image imageUrl={apiResponse[0].result[0].items[0].image} percentage={apiResponse2[0].result[0].items[0].onpage_score} />
      
      <OnpageResults 
      ilc={apiResponse2[0].result[0].items[0].meta["internal_links_count"] || 0} 
      elc={apiResponse2[0].result[0].items[0].meta["internal_links_count"] || 0} 
      noi={apiResponse2[0].result[0].items[0].meta["images_count"] || 0} 
      soi={apiResponse2[0].result[0].items[0].meta["images_size"] || 0} 
      sc={apiResponse2[0].result[0].items[0].meta["scripts_count"] || 0} 
      pts={apiResponse2[0].result[0].items[0].meta['content']['plain_text_size'] || 0}
      ptr={apiResponse2[0].result[0].items[0].meta['content']['automated_readability_index'] ? apiResponse2[0].result[0].items[0].meta['content']['automated_readability_index'].toFixed(2) : 0}
      ptw={apiResponse2[0].result[0].items[0].meta['content']['plain_text_word_count'] || 0}
      ss={apiResponse2[0].result[0].items[0].meta["scripts_size"] || 0}
      ari={apiResponse2[0].result[0].items[0].meta['content']['automated_readability_index'] ? apiResponse2[0].result[0].items[0].meta['content']['automated_readability_index'].toFixed(2) : 0}
      cri={apiResponse2[0].result[0].items[0].meta['content']["coleman_liau_readability_index"] ? apiResponse2[0].result[0].items[0].meta['content']["coleman_liau_readability_index"].toFixed(2) : 0}
      dlr={apiResponse2[0].result[0].items[0].meta['content']["dale_chall_readability_index"] ? apiResponse2[0].result[0].items[0].meta['content']["dale_chall_readability_index"].toFixed(2) : 0}
      fkri={apiResponse2[0].result[0].items[0].meta['content']["flesch_kincaid_readability_index"] ? apiResponse2[0].result[0].items[0].meta['content']["flesch_kincaid_readability_index"].toFixed(2) : 0}
      sri={apiResponse2[0].result[0].items[0].meta['content']["smog_readability_index"] ? apiResponse2[0].result[0].items[0].meta['content']["smog_readability_index"].toFixed(2) : 0}
      dcc={apiResponse2[0].result[0].items[0].meta['content']["description_to_content_consistency"] ? apiResponse2[0].result[0].items[0].meta['content']["description_to_content_consistency"].toFixed(2) : 0}
      tcc={apiResponse2[0].result[0].items[0].meta['content'][ "title_to_content_consistency"] ? apiResponse2[0].result[0].items[0].meta['content'][ "title_to_content_consistency"].toFixed(2) : 0}
      time={apiResponse2[0].result[0].items[0].fetch_time || 0} 
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
        title={apiResponse2?.[0]?.result?.[0]?.items?.[0]?.meta?.['social_media_tags']?.["og:title"] || "Default Title"} 
        desc={apiResponse2?.[0]?.result?.[0]?.items?.[0]?.meta?.['social_media_tags']?.["og:description"] || "Default Description"} 
        type={apiResponse2?.[0]?.result?.[0]?.items?.[0]?.meta?.['social_media_tags']?.["og:type"] || "Default Type"}
        image={apiResponse2?.[0]?.result?.[0]?.items?.[0]?.meta?.['social_media_tags']?.["og:image"] || "Default Image URL"}
        text={text}
        twitter_card={apiResponse2?.[0]?.result?.[0]?.items?.[0]?.meta?.['social_media_tags']?.["twitter:card"] || "Default Twitter Card"}
        twitter_site={apiResponse2?.[0]?.result?.[0]?.items?.[0]?.meta?.['social_media_tags']?.["twitter:site"] || "Default Twitter Site"}
        twitter_creator={apiResponse2?.[0]?.result?.[0]?.items?.[0]?.meta?.['social_media_tags']?.["twitter:creator"] || "Default Twitter Creator"}
        />


     
        </div>

      )}




  
        


       
          </div>
          
         
      )}
  
  

export default Results
