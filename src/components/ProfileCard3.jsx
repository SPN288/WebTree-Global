import React from 'react'

export default function ProfileCard3(props) {
    return (
        <div className='h-50 p-2 border-1 relative w-full max-w-sm'>

            <div className=' h-full border-2 p-3 flex flex-col items-start space-y-4 sm:flex-row sm:space-y-0 sm:space-x-6'>
                <div className="place-items-center w-full h-full flex justify-center sm:justify-start sm:w-auto">
                    <img className="object-cover w-30 h-30 mr-3 border-2" src={props.img_uri} />
                </div>
                <div className="place-content-center h-full w-full sm:w-auto flex flex-col items-center sm:items-start">
                    <div>
                    <p className="font-display mb-2 text-2xl font-semibold " >
                        {props.first_name} {props.last_name}
                    </p>

                    <div className="place-items-center mb-4 md:text-lg ">
                        {props.gender} <br />{props.phone_number}
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
