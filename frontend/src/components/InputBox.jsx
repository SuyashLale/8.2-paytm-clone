export function InputBox({ label, placeholder, type }) {
    return <div>
        <div className="text-left font-medium py-2 text-sm">
            {label}
        </div>
        <input type={type} placeholder={placeholder} className="border rounded border-slate-200 w-full px-2 py-1" />
    </div>
}