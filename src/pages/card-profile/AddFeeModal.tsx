import React, { useState } from "react";
import Modal from "../../components/re-useable/Modal";
import FormInput from "../../components/re-useable/FormInput";
import { Icon } from "../../assets/Icon";


interface AddFeeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (values: Record<string, any>) => void;
  className?: string;
}

const AddFeeModal: React.FC<AddFeeModalProps> = ({ isOpen, onClose, onSubmit, className }) => {
  const [formData, setFormData] = useState({
    feeName: "",
    value: "",
    currency: "",
    frequency: "",
    feeImpact: "",
    accountPad: "",
    account: "",
  });

  const handleChange = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    onSubmit(formData);
    onClose();
  };

  return (
    <>
     <div className={`space-y-4 p-4 sm:p-6 ${className}`}>
    <Modal isOpen={isOpen} onClose={onClose} >
     <div className="-mt-8" >
        <div className="flex gap-4 mb-4" >
          <Icon name="box-plus" size={5} className="bg-white shadow-sm rounded-md p-3 border"  />
          <span >
             <h1 className="text-lg font-semibold" > Add Fee </h1>
         <p className="" >  Fill in fee details.</p>
          </span>
       
       </div>
      
     </div>
       
       
      <div className="space-y-4">
        <FormInput
        name="Fee Name"
          label="Fee Name*"
          value={formData.feeName}
          onChange={(value) => handleChange("feeName", value)}
          placeholder="Maintenance"
          required
          className="w-full"
        />
        <FormInput
        name="Value"
          label="Value"
          value={formData.value}
          onChange={(value) => handleChange("value", value)}
          type="number"
          placeholder="0"
          required
          className="w-full"
        />

        <div>
          <label className="block text-sm font-medium">Currency</label>
          <div className="flex gap-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="currency"
                value="NGN"
                checked={formData.currency === "NGN"}
                onChange={() => handleChange("currency", "NGN")}
                className="w-6 h-6 text-white bg-blue-600 rounded focus:text-white mr-2" 
              />
              NGN
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="currency"
                value="USD"
                checked={formData.currency === "USD"}
                onChange={() => handleChange("currency", "USD")}
                className="w-6 h-6 text-white bg-blue-600 rounded focus:text-white mr-2 flex flex-wrap gap-4" 
              />
              USD
            </label>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium">Fee Frequency</label>
          <div className="flex gap-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="frequency"
                value="One Off"
                checked={formData.frequency === "One Off"}
                onChange={() => handleChange("frequency", "One Off")}
                className="w-6 h-6 text-white bg-blue-600 rounded focus:text-white mr-2 flex flex-wrap gap-4" 
              />
            One Off
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                 name="frequency"
                value="Monhtly"
                checked={formData.frequency === "Monhtly"}
                onChange={() => handleChange("frequency", "Monhtly")}
                className="w-6 h-6 text-white bg-blue-600 rounded focus:text-white mr-2 flex flex-wrap gap-4" 
              />
              Monhtly
            </label>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium">Fee Impact</label>
          <div className="flex gap-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="feeImpact"
                value="Issuance"
                checked={formData.feeImpact === "Issuance"}
                onChange={() => handleChange("feeImpact", "Issuance")}
                className="w-6 h-6 text-white bg-blue-600 rounded focus:text-white mr-2 flex flex-wrap gap-4" 
              />
           Issuance
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                 name="feeImpact"
                value="Pin Reissue"
                checked={formData.feeImpact === "Pin Reissue"}
                onChange={() => handleChange("feeImpact", "Pin Reissue")}
                className="w-6 h-6 text-white bg-blue-600 rounded focus:text-white mr-2 flex flex-wrap gap-4" 
              />
             Pin Reissue
            </label>
          </div>
        </div>
        <div>
  <label className="block text-sm font-medium">Account Paid</label>
  <div className="flex flex-wrap gap-4">
    <label className="flex items-center">
      <input
        type="radio"
        name="accountPad"
        value="None"
        checked={formData.accountPad === "None"}
        onChange={() => handleChange("accountPad", "None")}
        className="w-6 h-6 text-white bg-blue-600 rounded focus:text-white mr-2 flex flex-wrap gap-4"  
      />
      None
    </label>
    <label className="flex items-center">
      <input
        type="radio"
        name="accountPad"
        value="Branch Code Prefix"
        checked={formData.accountPad === "Branch Code Prefix"}
        onChange={() => handleChange("accountPad", "Branch Code Prefix")}
        className="w-6 h-6 text-white bg-blue-600 rounded focus:text-white mr-2 flex flex-wrap gap-4" 
      />
      Branch Code Prefix
    </label>
    <label className="flex items-center">
      <input
        type="radio"
        name="accountPad"
        value="Branch Code Suffix"
        checked={formData.accountPad === "Branch Code Suffix"}
        onChange={() => handleChange("accountPad", "Branch Code Suffix")}
        className="w-6 h-6 text-white bg-blue-600 rounded focus:text-white mr-2 flex flex-wrap gap-4" 
      />
      Branch Code Suffix
    </label>
  </div>
</div>
        <FormInput
        name="Account"
          label="Account"
          value={formData.account}
          onChange={(value) => handleChange("account", value)}
          placeholder=""
          required
          className="bg-transparent focus:ring-0 w-full"
        />

        <button
          className="w-full bg-[#014DAF] text-white font-semibold py-2 rounded-md hover:bg-blue-700"
          onClick={handleSubmit}
        >
          Add Fee
        </button>
      </div>
    </Modal>
    </div>
    </>
  );
};

export default AddFeeModal;
