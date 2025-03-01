import Anons from "./Anons";
import Projects from "./Projects";



const LatestPosts = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
<Anons/>
<h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Latest Post</h2>
<Projects/>
<Anons/>
    </section>
  );
};

export default LatestPosts;
