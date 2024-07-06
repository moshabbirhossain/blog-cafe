import { useEffect, useState } from 'react';
import Blog from '../../Blog/Blog';

const Blogs = ({handleAddToBookmarks, handleMarkAsRead }) => {
    const [blogs, setBlogs] = useState([]);
    useEffect(()=>{
        fetch('blog.json')
        .then(res=>res.json())
        .then(data=> setBlogs(data))
    },[]);
    return (
        <div className='md:w-2/3'>
            <h1 className='text-4xl'>Blogs</h1>
            {
                blogs.map((blog, idx) => <Blog key={idx} blog={blog} handleAddToBookmarks={handleAddToBookmarks} handleMarkAsRead={handleMarkAsRead}/>)
            }
        </div>
    );
};

export default Blogs;