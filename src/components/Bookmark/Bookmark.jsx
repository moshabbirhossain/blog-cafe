import PropTypes from "prop-types";

const Bookmark = ({ bookmark }) => {
    const { title } = bookmark;
    return (
        <div className="border-solid border-2 bg-slate-300 rounded-lg mx-4 mt-3 p-2">
            <h1 className="text-lg font-semibold">{title}</h1>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.object.isRequired
};

export default Bookmark;
