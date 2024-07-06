import PropTypes from "prop-types";
import { IoBookmarksOutline } from "react-icons/io5";
const Blog = ({ blog, handleAddToBookmarks, handleMarkAsRead }) => {
    const {
        id,
        title,
        cover,
        author,
        author_img,
        posted_date,
        reading_time,
        hashtags
    } = blog;
    return (
        <div>
            <img src={cover} alt={`This is the cover of: ${title}`} className="w-full h-96 my-4" />
            <div className="flex justify-between">
                <div className="flex gap-6">
                    <img
                        src={author_img}
                        alt=""
                        className="w-14 h-14 rounded-full"
                    />
                    <div>
                        <h1>{author}</h1>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <p>{reading_time} min read</p>
                    <button onClick={()=>handleAddToBookmarks(blog)} className="text-red-500"><IoBookmarksOutline /></button>
                </div>
            </div>
            <h1 className="text-4xl">{title}</h1>
            <div className="mt-2">
                {hashtags.map((hashtags, idx) => (
                    <span key={idx}>
                        <a href="">{hashtags}</a>
                    </span>
                ))}
                <br />
                <button onClick={()=>handleMarkAsRead(id, reading_time)} className="btn my-2">Mark as read</button>
            </div>
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmarks: PropTypes.func,
    handleMarkAsRead: PropTypes.number
}
export default Blog;
