export function Balance({ value }) {
    return <div className="flex">
        <div className="font-bold text-lg">
            {"Your balance is"}
        </div>
        <div className="font-semibold text-lg text-green-500 ml-2">
            &#8377;{value}
        </div>
    </div>
}