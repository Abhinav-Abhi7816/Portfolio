import React, { useEffect, useState } from 'react'
import useUserContext from './Contexts/UserContext'
import { ReactProjectsArr, JSProjectsArr,MernProjectsArr } from './ProjArr'
import { MdOpenInNew } from "react-icons/md";
import { IoLogoGithub } from "react-icons/io";

function ProjDetails() {
  const { ind, usedArr } = useUserContext()
  const [localArr, setLocalArr] = useState([]);
  const [localDescArr, setLocalDescArr] = useState('');

  const scrollToTop=()=>{
    window.scrollTo({
      top:0,
      behavior:"instant" 
    });
  }

  useEffect(()=>{
    scrollToTop();
  },[]);

  useEffect(() => {
    if (usedArr === 'react') {
      setLocalArr(ReactProjectsArr);
      return;
    }
    else if (usedArr === 'js') {
      setLocalArr(JSProjectsArr);
      return;
    }
    else if(usedArr === 'mern')
    {
      setLocalArr(MernProjectsArr)
    }
  }, [usedArr])
  
  useEffect(() => {
    if (localArr.length !== 0) {
      // console.log(localArr[ind].desc[ind])
      // console.log(typeof(localArr[ind]))
      let temp = localArr[ind].desc[ind].desc.split('\n');
      console.log(temp)
      setLocalDescArr(temp);
    }
  }, [localArr, ind])
  return (
    <div className='md:pt-28 pt-40 min-h-[600px] md:px-16 px-5 mb-10 '>
      {
        (!localArr || localArr.length === 0) ? null :
          <div className='md:py-20 py-10 rounded-xl bg-[rgb(299,299,299,0.2)] px-4'>
            <div className='flex md:flex-row flex-col gap-10 md:gap-0'>
              <div className='md:min-w-[50%] min-w-[100%] self-center bg-slate-200 mx-5 p-5 rounded-xl' style={{ boxShadow: '0px 0px 20px rgb(0,0,0,0.3)' }}>
                <div className='flex flex-col place-items-center gap-10'>
                  <h1 className='md:text-4xl text-3xl text-[#003d62] font-semibold text-center md:py-4 py-2 border-b-4 border-black w-[82%]'>{localArr[ind].name}</h1>
                  <img src={localArr[ind].imageLink} alt={localArr.name} className='md:w-[600px] md:h-[400px] rounded-xl shadow-2xl' />
                  <div className='flex flex-col gap-4'>
                    <a href={localArr[ind].gitLink} target='_blank' rel='noreferrer noopener'><button className='text-white flex place-items-center gap-4 text-2xl bg-green-500 px-24 py-2 rounded-lg hover:bg-green-600'><p>Open Project Live</p><MdOpenInNew></MdOpenInNew></button></a>
                  <a href={localArr[ind].frontendLink} target='_blank' rel='noreferrer noopener'><button className='text-white flex place-items-center gap-2 text-2xl bg-black px-28 py-2 rounded-lg hover:bg-gray-700'><p>Frontend Code</p><IoLogoGithub className='size-8'></IoLogoGithub></button></a>
                  {(localArr[ind].backendlink===null || localArr[ind].backendlink.trim()==='')?null:<div>
                    <a href={localArr[ind].backendlink} target='_blank' rel='noreferrer noopener'><button className='text-white flex place-items-center gap-2 text-2xl bg-black px-32 py-2 rounded-lg hover:bg-gray-700'><p>Server Code</p><IoLogoGithub className='size-8'></IoLogoGithub></button></a>
                  </div>}
                  </div>
                </div>
              </div>
              <div className='text-white text-xl'>
                <p className='text-2xl underline underline-offset-8 py-2 font-semibold'>Description</p>
                <div>
                  {
                    (localDescArr && localDescArr.length !== 0) ?
                      localDescArr.map((el, i) => <p key={i}>{el}</p>)
                      : null
                  }
                  <p className='text-2xl underline underline-offset-8 py-2 font-semibold'>Tools and Technologies Used:</p>
                  <p>{localArr[ind].desc[ind].tools}</p>
                  {
                    (localArr[ind].desc[ind].note !== '') ? <p className='text-red-500 text-2xl'>
                      <span className='font-semibold underline underline-offset-4'>Note: </span>
                      {localArr[ind].desc[ind].note}
                    </p> : null
                  }
                </div>
              </div>
            </div>

          </div>
      }
    </div>
  )
}

export default ProjDetails
