import "./Input.scss";

type InputType = {
   val: number | string;
   changeVal: (e: React.ChangeEvent<HTMLInputElement>) => void;
   type: string;
   placeholder: string;
};

function Input({ placeholder, type, val, changeVal }: InputType) {
   return (
      <label className="Input bg-slate relative w-full sm:w-3/4 text-white text-lg">
         <span className="transition-all p-1">
            {placeholder}
         </span>
         <input
            value={val}
            type={type}
            className="w-full p-2 rounded-lg bg-slate-700 border border-white focus:outline focus:outline-white"
            placeholder=" "
            onChange={changeVal}
         />
      </label>
   );
}

export default Input;
