import Anons from "@/app/components/Anons";
import Layout from "@/app/components/Layout";
import Image from "next/image";
import { notFound } from "next/navigation";

const charts = [
  {
    id: 1,
    title: "The Evolution of Artificial Intelligence",
    content: "Artificial Intelligence (AI) has transformed from a conceptual idea into a fundamental force driving modern technology. From early rule-based systems to today's deep learning models, AI has drastically changed various industries. In healthcare, AI-powered diagnostics are improving accuracy and efficiency. Self-driving cars utilize AI to interpret sensor data and navigate complex environments. Despite concerns about job displacement, AI is also creating new opportunities, such as AI-assisted programming and automation of repetitive tasks. The future of AI involves advancements in explainability, reducing bias, and integrating AI with human decision-making processes.",
    category: "Technology",
    author: "Tracey Wilson",
    date: "March 3, 2025",
    image: "/img1.png",
    avatar: "/user1.png",
  },
  {
    id: 2,
    title: "The Rise of Quantum Computing",
    content: "Quantum computing represents a significant leap forward in computational power. Unlike classical computers that use bits, quantum computers use qubits, allowing for parallel processing on an unprecedented scale. This advancement has major implications for cryptography, material science, and artificial intelligence. Researchers are exploring how quantum computing can solve complex problems that would take traditional computers centuries. While still in its early stages, companies like Google, IBM, and startups are racing to achieve quantum supremacy. However, challenges remain, including error rates, hardware stability, and scalability.",
    category: "Computing",
    author: "Jason Francisco",
    date: "March 3, 2025",
    image: "/img2.png",
    avatar: "/logo1.png",
  },
  {
    id: 3,
    title: "Blockchain Beyond Cryptocurrency",
    content: "Blockchain technology has long been associated with cryptocurrencies like Bitcoin, but its applications extend far beyond digital currency. Decentralized finance (DeFi), supply chain management, and secure voting systems are just a few areas benefiting from blockchain's transparency and security. Smart contracts automate processes, reducing reliance on intermediaries. Enterprises are integrating blockchain to enhance security and efficiency. As scalability improves, blockchain is poised to revolutionize industries beyond finance, including healthcare and real estate.",
    category: "Finance & Security",
    author: "Elizabeth Slavin",
    date: "March 3, 2025",
    image: "/img3.png",
    avatar: "/user3.png",
  },
  {
    id: 4,
    title: "The Future of Renewable Energy",
    content: "Renewable energy sources like solar and wind power are rapidly gaining traction as viable alternatives to fossil fuels. Governments and private enterprises are investing heavily in sustainable energy projects. Advances in battery technology and grid infrastructure are making renewable energy more efficient and accessible. The transition to a greener future requires policy changes, technological innovation, and public awareness. Countries leading in renewable energy adoption are seeing economic and environmental benefits, setting a blueprint for others to follow.",
    category: "Environment",
    author: "Maria Chen",
    date: "March 3, 2025",
    image: "/img4.png",
    avatar: "/user4.png",
  },
  {
    id: 5,
    title: "Cybersecurity in the Digital Age",
    content: "With increasing digitalization, cybersecurity threats have become more sophisticated. Businesses and governments are investing in advanced security measures to protect sensitive data. AI-driven security tools are being developed to detect and mitigate cyber threats in real-time. However, the rise of cybercrime highlights the need for better regulations and personal security awareness. Users must adopt stronger authentication methods and be cautious about online privacy. The future of cybersecurity will involve a combination of AI, blockchain, and proactive policy-making.",
    category: "Security",
    author: "David Patel",
    date: "March 3, 2025",
    image: "/img5.png",
    avatar: "/user5.png",
  },
  {
    id: 6,
    title: "Advancements in Space Exploration",
    content: "Space agencies and private companies are pushing the boundaries of space exploration. Missions to Mars, the Moon, and beyond are being planned with the goal of colonization and resource utilization. SpaceX, NASA, and Blue Origin are leading efforts to make space travel more cost-effective and sustainable. Advancements in propulsion technology and AI-driven navigation are making deep-space exploration more feasible. The dream of interplanetary travel is closer to reality than ever before.",
    category: "Space Science",
    author: "Nathan Brooks",
    date: "March 3, 2025",
    image: "/img6.png",
    avatar: "/user1.png",
  },
  {
    id: 7,
    title: "The Impact of 5G on Connectivity",
    content: "5G technology is revolutionizing the way we connect and communicate. With faster speeds and lower latency, 5G is enabling advancements in smart cities, autonomous vehicles, and remote work. Telemedicine and IoT devices are benefiting from the enhanced connectivity. However, concerns over infrastructure costs, security risks, and health impacts continue to be debated. The global rollout of 5G will define the next era of digital transformation, bridging the connectivity gap worldwide.",
    category: "Telecommunications",
    author: "Sophia Martinez",
    date: "March 3, 2025",
    image: "/img7.png",
    avatar: "/logo1.png",
  },
  {
    id: 8,
    title: "Biotechnology and Human Health",
    content: "Biotechnology is reshaping healthcare with gene editing, personalized medicine, and synthetic biology. CRISPR technology is revolutionizing genetic research, offering potential cures for genetic disorders. AI-driven drug discovery is accelerating the development of new treatments. Ethical concerns and regulatory challenges must be addressed as biotechnology advances. The integration of biology and technology promises to extend human lifespan and improve quality of life.",
    category: "Healthcare",
    author: "Emily Johnson",
    date: "March 3, 2025",
    image: "/img8.png",
    avatar: "/user3.png",
  },
  {
    id: 9,
    title: "The Role of Automation in Industry 4.0",
    content: "Automation and robotics are revolutionizing industries by increasing efficiency and reducing human error. The rise of Industry 4.0 is integrating IoT, AI, and automation for smart manufacturing. While automation improves productivity, it also raises concerns about job displacement and the need for workforce reskilling. Companies must balance technological advancement with human labor policies. The future of work will see greater collaboration between humans and intelligent machines.",
    category: "Manufacturing",
    author: "Alex Reynolds",
    date: "March 3, 2025",
    image: "/img9.png",
    avatar: "/user4.png",
  }
];

export default function InfoSection({ params }) {
  const chart = charts.find((c) => c.id.toString  () === params.id);
  if (!chart) return notFound();

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-12">
        <span className="text-xs bg-blue-500 text-white px-3 py-1 rounded">{chart.category}</span>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mt-3">{chart.title}</h1>

        <div className="flex items-center mt-3">
          <Image src={chart.avatar} alt={chart.author} width={40} height={40} className="rounded-full" />
          <div className="ml-3">
            <p className="text-sm text-gray-700 dark:text-gray-300">{chart.author}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">{chart.date}</p>
          </div>
   </div>

        <div className="relative w-full h-64 mt-6">
          <Image src={chart.image} alt={chart.title} layout="fill" objectFit="cover" className="rounded-lg" />
        </div>

        <article className="mt-6 text-gray-800 dark:text-gray-300 leading-7">
          {chart.content.split(". ").map((sentence, index) => (
            <p key={index} className="mt-2">{sentence.trim()}.</p>
          ))}
        </article>
      </div>
      <Anons/>
    </Layout>
  );
}
