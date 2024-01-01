const ErrorMessage = ({ message }) => {
    return <span className='text-red-500 text-2xl'>An Error Occured: <span className="font-bold">{message}</span></span>
}

export default ErrorMessage