import BlogList from './BlogList'
import useFecth from './useFetch'

const Home = () => {
  const { data: blogs, isPending, error } = useFecth(
    'http://localhost:8000/blogs',
  )
  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
    </div>
  )
}

export default Home
