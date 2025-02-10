import React from 'react'

export default function ProfileCard2(props) {
  return (
    <>
    <div className="relative w-full max-w-sm  flex flex-col items-start space-y-4 sm:flex-row sm:space-y-0 sm:space-x-6 px-4 py-8 border-2 border-dashed border-gray-400 dark:border-gray-600 shadow-lg rounded-lg">
          <div className="w-full flex justify-center sm:justify-start sm:w-auto">
            <img className="object-cover w-30 h-30  mr-3 rounded-full" src={props.img_uri} />
          </div>

          <div className="w-full sm:w-auto flex flex-col items-center sm:items-start">
            <p className="font-display mb-2 text-2xl font-semibold " >
            {props.first_name} {props.last_name}
            </p>

            <div className="mb-4 md:text-lg text-gray-400">
            {props.gender} <br />{props.phone_number}
            </div>
          </div>
        </div>
    </>
  )
}
