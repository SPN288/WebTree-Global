import React from 'react'

export default function ProfileCard(props) {
  return (
    <>

      <a href="#" className="h-50 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-sm hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img className="object-cover w-full rounded-t-lg  md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={props.img_uri} alt="" />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.first_name} {props.last_name}</h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{props.gender} <br />{props.phone_number}</p>
        </div>
      </a>

    </>
  )
}
