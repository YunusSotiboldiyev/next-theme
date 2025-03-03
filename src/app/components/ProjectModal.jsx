import Image from "next/image";

const PostModal = ({ post, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white dark:bg-gray-900 max-w-lg w-full p-6 rounded-lg shadow-lg relative">
        {/* Close Button */}
        <button
          className="absolute top-3 right-3 text-gray-700 dark:text-gray-300 hover:text-red-500"
          onClick={onClose}
        >
          ✕
        </button>

        {/* Post Image */}
        <div className="relative w-full h-56">
          <Image src={post.image} alt={post.title} layout="fill" objectFit="cover" className="rounded-lg" />
        </div>

        {/* Post Content */}
        <div className="mt-4">
          <span className="text-xs bg-blue-500 text-white px-2 py-1 rounded">{post.category}</span>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-2">{post.title}</h2>
          <p className="text-gray-700 dark:text-gray-300 mt-3">{post.content}</p>
        </div>

        {/* Author Details */}
        <div className="flex items-center mt-4">
          <Image src={post.avatar} alt={post.author} width={40} height={40} className="rounded-full" />
          <div className="ml-3">
            <p className="text-sm font-semibold text-gray-900 dark:text-white">{post.author}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">{post.date}</p>
          </div>
        </div>

        {/* Close Button */}
        <div className="flex justify-end mt-4">
          <button className="px-4 py-2 bg-red-500 text-white rounded-lg" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostModal;
