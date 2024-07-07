import PropTypes from "prop-types";
import Bookmark from "../../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks, readingTime }) => {
    return (
        <div className="bg-gray-300 md:w-1/3 rounded-lg pt-4 pb-6 mt-2 mb-4">
            <p className="text-xl text-center my-2">Total Reading Time: {readingTime}</p>
            <h1 className="text-xl text-center my-2">Bookmarks: {bookmarks.length}</h1>
            {bookmarks.map((bookmark) => (
                <Bookmark key={bookmark.id} bookmark={bookmark} />
            ))}
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
};

export default Bookmarks;
