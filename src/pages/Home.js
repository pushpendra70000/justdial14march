import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import URL from '../helper/url';
import '../style.css'

export default function Home() {

  //2.1hooks area 
  const [BusinessCategory, setBusinessCategory] = useState([])
    useEffect(()=>{
      fetch(`${URL}/api/business-categories?populate=*`)
      .then((res)=>{
        return res.json()
      })
      .then((data)=>{
        console.log(data)
        setBusinessCategory(data.data);
      })
      .catch(()=>{

      });
    },[]);

  //2.2


  //2.3
  return (
    < >
        <h1>home</h1>
        <ul className='nav'>
          {
            BusinessCategory.map((cv,idx,arr)=>{
              return <li key={idx} className='me-3'>
                        <Link to='#'>
                        <img src={`${URL}`+cv.attributes.image.data.attributes.url}></img><br></br>
                        {cv.attributes.name}
                        </Link>
                    </li>
                    })
           }        
        </ul>
    </ >
    )
}
