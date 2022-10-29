import { AiFillQuestionCircle } from "react-icons/ai";

const PhoneInput = ({ label, value, onChange, type = "text", placeholder }) => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center">
        <span className="text-base py-2">{label}</span>
        <AiFillQuestionCircle color="#aaaaaa" />
      </div>
      <div className="flex">
        <select className="border-x border-y border-solid border-[#d1d1d1] bg-transparent rounded-none p-3 flex-grow">
          <option>+254</option>
          <option>+255</option>
        </select>
        <input
          className="border-x border-y border-solid border-[#d1d1d1] rounded-none p-3 w-full flex-grow-[4]"
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};
export default PhoneInput;
