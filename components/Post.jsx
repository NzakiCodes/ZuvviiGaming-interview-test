const Post = ({ title, body }) => {
    return (
        <div className='my-6 '>
            <h3 className='text-lg font-bold capitalize'>{title}</h3>
            <p>{body}</p>
        </div>
    )
}

export default Post