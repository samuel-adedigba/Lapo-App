import React from 'react'
import CardRequestHeader from '../card-request/CardRequestHeader'
import CreateCardForm from '../card-profile/CreateCardForm'
import Feesform from '../card-profile/Feesform'

const CreateProfile = () => {
  return (
    <div>
      <CardRequestHeader title='Create Profile'  subTitile='Fill in profile details and add card fee.' />
      <CreateCardForm />
      <Feesform />

      <div>
         <button
                className="flex items-center gap-2 bg-blue-600 text-white mb-40 text-base font-semibold px-14 py-3 rounded-md hover:bg-blue-700 transition"
              >
                Create Profile
              </button>
      </div>
    </div>
  )
}

export default CreateProfile;