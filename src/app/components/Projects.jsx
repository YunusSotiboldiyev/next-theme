import Image from "next/image";
import Link from "next/link";
const posts = [
  {
    id: 1,
    title: "The Impact of Technology on the Workplace: How Technology is Changing",
    category: "Technology",
    author: "Tracey Wilson",
    date: "August 20, 2022",
    image: "/img1.png", 
    avatar: "/user1.png",
  },
  {
    id: 2,
    title: "The Impact of Technology on the Workplace: How Technology is Changing",
    category: "Technology",
    author: "Jason Francisco",
    date: "August 20, 2022",
    image: "/img2.png",
    avatar: "/logo1.png",
  },
  {
    id: 3,
    title: "The Impact of Technology on the Workplace: How Technology is Changing",
    category: "Technology",
    author: "Elizabeth Slavin",
    date: "August 20, 2022",
    image: "/img3.png",
    avatar: "/user3.png",
  },
  {
    id: 4,
    title: "The Impact of Technology on the Workplace: How Technology is Changing",
    category: "Technology",
    author: "Ernie Smith",
    date: "August 20, 2022",
    image: "/img4.png",
    avatar: "/user4.png",
  },
  {
    id: 5,
    title: "The Impact of Technology on the Workplace: How Technology is Changing",
    category: "Technology",
    author: "Eric Smith",
    date: "August 20, 2022",
    image: "/img5.png",
    avatar: "/user5.png",
  },
  {
    id: 6,
    title: "The Impact of Technology on the Workplace: How Technology is Changing",
    category: "Technology",
    author: "Tracey Wilson",
    date: "August 20, 2022",
    image: "/img6.png",
    avatar: "/user1.png",
  },
  {
    id: 7,
    title: "The Impact of Technology on the Workplace: How Technology is Changing",
    category: "Technology",
    author: "Jason Francisco",
    date: "August 20, 2022",
    image: "/img7.png",
    avatar: "/logo1.png",
  },
  {
    id: 8,
    title: "The Impact of Technology on the Workplace: How Technology is Changing",
    category: "Technology",
    author: "Elizabeth Slavin",
    date: "August 20, 2022",
    image: "/img8.png",
    avatar: "/user3.png",
  },
  {
    id: 9,
    title: "The Impact of Technology on the Workplace: How Technology is Changing",
    category: "Technology",
    author: "Ernie Smith",
    date: "August 20, 2022",
    image: "/img9.png",
    avatar: "/user4.png",
  },
];

const Projects = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Link key={post.id} href={`/projects/${post.id}`} passHref>
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden cursor-pointer">
              <div className="relative w-full h-48">
                <Image src={post.image} alt={post.title} layout="fill" objectFit="cover" />
              </div>
              <div className="p-4">
                <span className="text-xs bg-blue-500 text-white px-2 py-1 rounded">{post.category}</span>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-2">
                  {post.title}
                </h3>
                <div className="flex items-center mt-4">
                  <Image src={post.avatar} alt={post.author} width={30} height={30} className="rounded-full" />
                  <div className="ml-2">
                    <p className="text-sm text-gray-700 dark:text-gray-300">{post.author}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{post.date}</p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Projects;
