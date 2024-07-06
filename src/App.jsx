import { useState } from "react";
import Blogs from "./components/header/blogs/Blogs";
import Bookmarks from "./components/header/Bookmarks/Bookmarks";
import Header from "./components/header/Header";
import { toast } from 'react-toastify'
function App() {
    const [bookmarks, setBookmarks] = useState([]);
    const [readingTime, setReadingTime] = useState(0);
    const handleAddToBookmarks = (blog) => {
      const isExist = bookmarks.find(item => item.id == blog.id);
        if(!isExist){
          const newBookmark = [...bookmarks, blog];
          setBookmarks(newBookmark);
        }
        else{
          toast.error('Already exist');
        }
    };
    const handleMarkAsRead = (id, time) =>{
      setReadingTime(readingTime + time);
      //removeItem from bookmarks
      const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !==id);
      setBookmarks(remainingBookmarks);
    }
    return (
        <>
            <Header />
            <div className="md:flex space-x-16 my-4 mx-4 md:gap-6">
                <Blogs handleAddToBookmarks={handleAddToBookmarks} handleMarkAsRead={handleMarkAsRead}/>
                <Bookmarks bookmarks={bookmarks} readingTime={readingTime}/>
            </div>
        </>
    );
}

export default App;
