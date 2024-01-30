import { Link } from 'react-router-dom';
export function BottomWarning({ label, buttonText, to }) {
    return <div className='flex justify-center items-center text-sm py-2'>
        <div>
            {label}
        </div>
        <Link to={to} className='pointer underline pl-1'>{buttonText}</Link>
    </div>
}