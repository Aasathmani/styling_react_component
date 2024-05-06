export default function Input({ label, invalid, ...probs }) {
  let labelClassses = "block mb-2 text-xs font-bold tracking-wide uppercase";
  let inputClasses='w-full px-3  py-3 leading-tight border rounded shadow '

  if (invalid) {
    labelClassses += " text-red-400";
    inputClasses +=' text-red-500 bg-red-100 border-red-300'
  } else {
    labelClassses += " text-stone-400";
    inputClasses +=' text-grey-700 bg-stone-300'
  }

  return (
    <p>
      <label className={labelClassses}>{label} </label>
      <input className={inputClasses}{...probs} />
    </p>
  );
}
