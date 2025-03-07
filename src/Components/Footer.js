import React from 'react'

function Footer() {
  return (
    <>
      <section className='bg-[#003251] md:text-5xl text-3xl text-white flex flex-col place-items-center gap-10 md:py-16 py-10 font-semi-bold' id="footer">
        <h1>Let's Work Together</h1>
        <div className="social">
            <a href="https://www.linkedin.com/in/abhinav-thonti-697125289"><h3>Linkedin</h3></a>
            <a href="https://twitter.com/Abhinow_abhi?s=20" target="_blank" rel="noopener noreferrer" ><h3>Twitter</h3></a>
            <h3>@Send Mail</h3>
        </div>
        <div className="github">
            <a href="https://instagram.com/abhinow_abhi_7816?igshid=ZDdkNTZiNTM=" target="_blank" rel="noopener noreferrer"><h3>Instagram</h3></a>
        </div>
    </section>
    </>
  )
}

export default Footer
