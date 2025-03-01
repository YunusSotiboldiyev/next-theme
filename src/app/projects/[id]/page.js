import Layout from "@/app/components/Layout";
import Image from "next/image";
import { notFound } from "next/navigation";

const posts = [
  {
    id: 1,
    title: "The Impact of Technology on the Workplace: How Technology is Changing",
    content: `
      Traveling is an enriching experience that opens up new horizons, exposes us to different cultures, and creates memories that last a lifetime.
      However, traveling can also be stressful and overwhelming, especially if you don’t plan and prepare adequately. 
      
      ### Research Your Destination
      Before embarking on your journey, take the time to research your destination. This includes understanding the local culture, customs, and laws.
      Doing so will help you navigate your destination with confidence and avoid any cultural faux pas.

      ### Plan Your Itinerary
      While it’s essential to leave room for spontaneity and unexpected adventures, having a rough itinerary can help you make the most of your time and budget.
    `,
    category: "Technology",
    author: "Tracey Wilson",
    date: "August 20, 2022",
    image: "/img1.png",
    avatar: "/user1.png",
  },
  {
    id: 2,
    title: "Advancements in AI and Machine Learning",
    content: `
      AI is making incredible progress in automation and decision-making. It is shaping industries from healthcare to finance.

      ### The Rise of AI in Business
      Companies are increasingly adopting AI to automate repetitive tasks and make data-driven decisions. 

      ### Future of AI
      AI will continue to evolve, bringing advancements in various fields such as self-driving cars and medical diagnosis.
    `,
    category: "AI & Machine Learning",
    author: "Jason Francisco",
    date: "August 25, 2022",
    image: "/img2.png",
    avatar: "/logo1.png",
  },
];

export default function PostPage({ params }) {
  const post = posts.find((p) => p.id.toString() === params.id);

  if (!post) return notFound(); 

  return (
    <Layout>
    <div className="max-w-4xl mx-auto px-4 py-12">
      <span className="text-xs bg-blue-500 text-white px-3 py-1 rounded">{post.category}</span>
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mt-3">{post.title}</h1>

      <div className="flex items-center mt-3">
        <Image src={post.avatar} alt={post.author} width={40} height={40} className="rounded-full" />
        <div className="ml-3">
          <p className="text-sm text-gray-700 dark:text-gray-300">{post.author}</p>
          <p className="text-xs text-gray-500 dark:text-gray-400">{post.date}</p>
        </div>
      </div>

      <div className="relative w-full h-64 mt-6">
        <Image src={post.image} alt={post.title} layout="fill" objectFit="cover" className="rounded-lg" />
      </div>

      <article className="mt-6 text-gray-800 dark:text-gray-300 leading-7">
        {post.content.split("\n").map((paragraph, index) => (
          paragraph.startsWith("###") ? (
              <h2 key={index} className="text-xl font-semibold mt-6">{paragraph.replace("###", "").trim()}</h2>
          ) : (
              <p key={index} className="mt-2">{paragraph.trim()}</p>
          )
        ))}
      </article>
    </div>
        </Layout>
  );
}
