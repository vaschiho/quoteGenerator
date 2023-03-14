import React from 'react'

const Quote = ({ quote,fetchData }) => {
  return (
    <div className="flex items-center h-screen bg-[#1f2632]">
      <div className="w-full text-[#cee3e9]  max-w-sm mx-auto text-center bg-[#323a49] shadow-xl h-full max-h-52 rounded-lg relative  z-10">
       {quote ? <div className="flex flex-col justify-center items-center px-5">
          <span className="text-[#52ffa8] text-xs font-sans capitalize py-4 ">Advice #{quote.id}</span>
          <h1 className="font-extrabold text-lg font-sans text-center">"{quote.advice}"</h1>
        </div> : <div className="flex flex-col justify-center items-center py-10 text-lg px-3"> something went wrong while generating the quote </div>}
        <div class="flex justify-center my-4 absolute inset-x-5 bottom-2">
          <svg class="w-444 h-16" viewBox="0 0 444 16" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fill-rule="evenodd">
              <path fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z" />
              <g transform="translate(212)" fill="#CEE3E9">
                <rect width="6" height="16" rx="3" />
                <rect x="14" width="6" height="16" rx="3" />
              </g>
            </g>
          </svg>
        </div>
        <button className='rounded-full' style={{ position: "absolute", bottom: "-20px", left: "50%", transform: "translateX(-50%)", padding: "8px", backgroundColor: "#52ffa8"   }} onClick={fetchData}>
          <svg className='bg-[#52ffa8] ' width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" fill="#202733" /></svg>

        </button>
      </div>
    </div>
  )
}

export default Quote