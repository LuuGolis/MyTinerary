import React from 'react'
import { useState, useEffect } from 'react'


const cityImg = [
  {
    "url": 'https://images.unsplash.com/photo-1561488111-5d800fd56b8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80',
    "caption": 'Sidney, Australia'
  },
  {
    "url": 'https://images.unsplash.com/photo-1589999904249-152205243238?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    "caption": 'Buenos Aires, Argentina'
  },
  {
    'url': 'https://images.unsplash.com/photo-1619090125361-879aba634f8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    'caption': 'Venecia, Italy'
  }]
  const cityImg1 = [
  {
    'url': 'https://images.unsplash.com/photo-1437934474317-887ccf040d8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=876&q=80',
    'caption': 'Istanbul, Turkey'
  },
  {
    'url': 'https://images.unsplash.com/photo-1598797246294-7620e33a632f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    'caption': 'Kuala Lumpur, Malaysia'
  },
  {
    'url': 'https://images.unsplash.com/photo-1517570123306-d58896657b2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
    'caption': 'Gardens by the Bay, Singapore'
  }]
  const cityImg2 = [
  {
    'url': 'https://images.unsplash.com/photo-1578172545513-6eeb2e414f17?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
    'caption': 'Copenhagen, Denmark'
  },
  {
    'url': 'https://images.unsplash.com/photo-1614967886214-edf31f16adb9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    'caption': 'San Francisco Bay, California, USA'
  },
  {
    'url': 'https://images.unsplash.com/photo-1557927852-0a71924e72c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    'caption': 'Garden of the Blue Lagoon, Portugal'
  }]
  const cityImg3 = [
  {
    'url': 'https://images.unsplash.com/photo-1621164344001-a7763b5f491a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
    'caption': 'Dubai - United Arab Emirates'
  },
  {
    'url': 'https://images.unsplash.com/photo-1463678363432-c083f3640760?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
    'caption': ' Vancouver, Canada'
  },
  {
    'url': 'https://images.unsplash.com/photo-1613499094469-d481efd630a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    'caption': 'Rio de Janeiro, Brasil'
  },

];


const Carousel = () => {

  const [count, setCount] = useState(0);


  const setBullet = (indice) => {
    setcount(indice)
  }

  useEffect(() => {
    let intervalID = setInterval(() => {
      next()
    }, 1000)

    return () => {
      clearInterval(intervalID)
    }

  }, [count])

  const prev = () => {
    if (count > 0) {
      setCount(count - 1)
    } else {
      setCount(cityImg.length - 1);
    }
  }

  const next = () => {
    if (count < cityImg.length - 1) {
      setCount(count + 1)
    } else {
      setCount(0);
    }

  }
 const SplitArrays = () =>{
  const chunkSize =4;
  const chunkedArrays =[];
  for(let i = 0; i<cityImg.length;i +=chunkSize){
    chunkedArrays.push(cityImg.slice(i,i + chunkSize));
  }
 }
  return (
    <div className='carousel container d-flex inline-block col-6'>
      <button onClick={prev}>{'<'}</button>

      <div className='img-container d-inline-block'>

        <div>
          <img className="col-6 carouselImg" src={cityImg[count].url} alt="" />{cityImg[count].caption}
          <img className="col-6 carouselImg" src={cityImg1[count].url} alt="" />{cityImg[count].caption}
          <img className="col-6 carouselImg" src={cityImg2[count].url} alt="" />{cityImg[count].caption}
          <img className="col-6 carouselImg" src={cityImg3[count].url} alt="" />{cityImg[count].caption}
        </div>


      </div>
      {
        cityImg.map((item, countMap) => {
          if (countMap === count) return <span key={countMap} className='cursor-pointer'>⚫</span>
          else return <span key={countMap} className='cursor-pointer' onClick={() => setBullet(countMap)}>⚪</span>
        })
      }

      <button onClick={next}>{'>'}</button>

    </div>
  )
}

export default Carousel