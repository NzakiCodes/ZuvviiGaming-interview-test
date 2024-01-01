import ErrorMessage from "./Error"
import Post from "./Post"
import Loader from "./loading"

const Posts = ({ data, loading, error }) => {
    return (
        <div className='my-3'>
            {
                loading ? <Loader number={6} /> : error !== null ? <ErrorMessage message={error} /> : <ul>
                    {
                        data.map(({ id, title, body }) => <Post key={id} title={title} body={body} />)
                    }
                </ul>
            }
        </div>
    )
}

export default Posts