import React from 'react'
import CardRequestHeader from '../card-request/CardRequestHeader'
import CardRequestForm from '../card-request/CardRequestForm'

const CardRequestDetails = () => {
  return (
    <>
      <CardRequestHeader title=' Request Details' subTitile=' Perform predetermined actions on card requests here.'/>
      <div className="">
      <CardRequestForm />
    </div>
    </>
  )
}

export default CardRequestDetails
