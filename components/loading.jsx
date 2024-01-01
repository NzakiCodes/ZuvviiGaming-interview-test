const Loader = ({ number }) => {
    return (
        <div className=" flex flex-col space-y-3 gap-2"> {Array.from({ length: number ? number : 3 }).map((i, idx) => (
            <div key={idx} className=" animate-pulse space-y-2">
                <div className="p-2 w-full h-2 bg-gray-400 "></div>
                <div className="p-6 w-full h-10 bg-gray-400"></div>
            </div>
        )
        )}
        </div>)
}
export default Loader