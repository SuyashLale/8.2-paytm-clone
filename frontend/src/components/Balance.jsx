/* eslint-disable react/prop-types */
export function Balance({ value }) {
  return (
    <div className="flex ml-4 mt-5">
      <div className="font-bold text-lg">{"Your balance is"}</div>
      <div className="font-semibold text-lg text-green-700 ml-2">
        &#8377;{value}
      </div>
    </div>
  );
}
