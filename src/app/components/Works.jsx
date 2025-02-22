import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    image: "/2Image.png", 
    title: "Luxury Hotel Renovation",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus fringilla dui amet faucibus nam.",
  },
  {
    image: "/3Image.png", 
    title: "Residence Swimming Pool",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus fringilla dui amet faucibus nam.",
  },
];

export default function RecentWorks() {
  return (
    <section className="w-full bg-white py-12 px-6 lg:px-20" id="Work">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-sm font-semibold text-gray-500 tracking-wide mb-2">RECENT WORKS</h3>
        <h1 className="text-4xl font-serif font-semibold">
          Some of <i>our crafts</i> <br /> made with love
        </h1>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <Image src="/interior1.png"  width={500} height={700} alt="Villa Furnishing & Interior" className="rounded-lg shadow-md" />
            <h3 className="text-lg font-semibold mt-4">Villa Furnishing & Interior</h3>
            <p className="text-gray-600 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus fringilla dui amet faucibus nam. Erat id
              laoreet posuere etiam morbi.
            </p>
            <Link href="/contact" className="mt-4 inline-flex items-center bg-[#9C7B5B] text-white px-5 py-2 rounded-lg shadow-md hover:bg-opacity-90 transition">
              CONTACT US ↗
            </Link>
          </div>

          <div className="space-y-8">
            {projects.map((project, index) => (
              <div key={index} className="flex gap-4 items-start">
                <Image src={project.image} alt={project.title}   width={500}height={700} className="w-1/2 rounded-lg shadow-md" />
                <div>
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                  <p className="text-gray-600 mt-2">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div> <br />
      </div> <hr />
    </section>
  );
}
