import React from "react";
import { useForm } from "react-hook-form";
import FormInput from "../../components/re-useable/FormInput";

const CreateCardForm: React.FC = () => {
  const { register } = useForm();

  return (
    <div className="w-full bg-white p-6 shadow-md rounded-lg ">
      <h2 className="text-2xl sm:text:xl font-semibold mb-4">
        Profile Details
      </h2>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <FormInput
            label="Card Name*"
            name="cardName"
            register={register}
            disabled
            placeholder="Enter card name"
            className="bg-transparent"
          />
          <FormInput
            label="Card Scheme*"
            name="cardScheme"
            type="select"
            register={register}
            disabled
            placeholder="Verve"
            className="bg-transparent "
            options={[
              { label: "Verve", value: "verve" },
              { label: "Visa", value: "visa" },
              { label: "Master card", value: "master card" },
            ]}
          />
          <FormInput
            label="Description"
            name="description"
            register={register}
            disabled
            placeholder=""
            className="bg-transparent"
          />
          <FormInput
            label="Branch Blackist"
            name="blacklist"
            register={register}
            disabled={false}
            placeholder="Head Office"
            className="bg-transparent"
            type="select"
            options={[{ label: "Head Office", value: "head office" }]}
          />
        </div>
        <div>
          <FormInput
            label="Bin Profile*"
            name="bin"
            register={register}
            disabled
            placeholder="0000000000"
            className="bg-transparent"
          />

          <FormInput
            label="Expiration*"
            name="expiration"
            register={register}
            type="number"
            disabled={false}
            placeholder="0"
            className="bg-transparent"
          />
          <FormInput
            label="Currency"
            name="currency"
            register={register}
            disabled={false}
            placeholder="NGN"
            className="bg-transparent"
            type="select"
            options={[{ label: "NGN", value: "NGN" }]}
          />
        </div>
      </form>
    </div>
  );
};

export default CreateCardForm;
