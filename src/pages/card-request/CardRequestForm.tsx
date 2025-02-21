import React, { useState } from "react";
import { useForm } from "react-hook-form";
import FormInput from "../../components/re-useable/FormInput";
import StatusBadge from "../../components/re-useable/StatusBadge";
import Button from "../../components/re-useable/Button";
import SuccessPopUp from "../../components/re-useable/SuccessPopUp";
import type { Status } from "../../components/re-useable/StatusBadge";
type ResponseType = "success" | "error" | "warning"; 
const CardRequestForm: React.FC = () => {
  const { register, handleSubmit } = useForm();
  const [ isOpen, setIsOpen] = useState(false)
  const [successMessage, setSuccessMessage] = useState("")
  const [status, setStatus] = useState<Status>("Pending")

  const [response, setResponse] = useState<ResponseType>("success");


  const submitToDownload = () => {
    setStatus("Pending");
    setIsOpen(true);
    setResponse("success");
    setSuccessMessage("Production file has been downloaded.");
  };
  const submitToMark = () => {
    setStatus("In Progress")
  };
  const markAsReady = () => {
    setStatus("Ready")
  };
  const sendToDispatch = () => {
    setStatus("Ready")
    setIsOpen(true)
    setResponse('success')
    setSuccessMessage(" Card batch successfully sent to dispatch.")
  };
  const markAsAcknowledged = () => {
    setStatus("Acknowledged")
  };
  return (
    <div className="w-full bg-white p-6 shadow-md rounded-lg">
      <h2 className="text-2xl sm:text:xl font-semibold mb-4">Card Request Details</h2>
      <form
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <div>
          <FormInput
            label="Branch Name"
            name="branchName"
            register={register}
            disabled
            value="Corporate"
          />
          <FormInput
            label="Card Type"
            name="cardType"
            register={register}
            disabled
            value="Classic Debit"
          />
          <FormInput
            label="Quantity"
            name="quantity"
            type="number"
            register={register}
            disabled
            value="10"
          />
          <FormInput
            label="Date Requested"
            name="dateRequested"
            register={register}
            disabled
            value="11/14/2024 10:27:43"
          />
        </div>
        <div>
          <FormInput
            label="Initiator"
            name="initiator"
            register={register}
            disabled
            value="RootUser"
          />
          <FormInput
            label="Card Charges"
            name="cardCharges"
            register={register}
            disabled
            value="₦1,500"
          />
          <FormInput
            label="Batch"
            name="batch"
            register={register}
            disabled
            value="847264905"
          />
          <div className="mt-4">
            <label className="text-base font-medium text-gray-600">
              Status
            </label>
            <div className="mt-2">
              <StatusBadge status={status} />
            </div>
          </div>
        </div>

             <h1 className="text-lg font-semibold -mb-2" >  Actions </h1>
        <div className="col-span-1 md:col-span-2 flex flex-wrap gap-4 ">
          <Button label="Download for Production" icon="download"  onClick={handleSubmit(submitToDownload)} />
          <Button
            label="Mark as In Progress"
            variant="secondary"
            icon="loading"
            onClick={handleSubmit(submitToMark)} 
          />
          <Button label="Mark as Ready" variant="success" icon="mark"   onClick={handleSubmit(markAsReady)}  />
          <Button label="Send to Dispatch" variant="warning" icon="send"   onClick={handleSubmit(sendToDispatch)}  />
          <Button label="Mark as Acknowledged" variant="info" icon="mark"  onClick={handleSubmit(markAsAcknowledged)}   />
        </div>
      </form>
      {isOpen  && <SuccessPopUp  message={successMessage}  isOpen={isOpen} isClose={() => setIsOpen(false)} response={response}  /> }
    </div>
  );
};

export default CardRequestForm;
