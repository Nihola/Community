// components/FeatureSection.js
import Image from "next/image";
// data.js
export const features = [
    {
        title: "Business strategy",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam leo odio, sagittis quis ornare quis.",
        points: [
            "Cost strategy",
            "Differentiated product or service strategy",
            "Focus on a niche strategy",
        ],
        image: "/images/business.jpg", // store locally in public/images/
    },
    {
        title: "Digitalization",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam leo odio, sagittis quis ornare quis.",
        points: [],
        image: "/images/digital.jpg",
    },
  ];
export default function FeatureSection({ data }) {
    return (
        <div className="space-y-16">
            {data.map((item, index) => {
                const isEven = index % 2 === 0;
                return (
                    <div
                        key={index}
                        className="flex flex-col md:flex-row items-center gap-6 md:gap-12"
                    >
                        {/* Orange badge */}
                        <div
                            className={`hidden md:block w-4 h-10 rounded-md bg-orange-500 ${isEven ? "order-1" : "order-3"
                                }`}
                        ></div>

                        {/* Image */}
                        <div
                            className={`rounded-xl overflow-hidden flex-1 max-w-md ${isEven ? "order-2" : "order-1"
                                }`}
                        >
                            <Image
                                src={item.image}
                                alt={item.title}
                                width={600}
                                height={400}
                                className="rounded-xl w-full object-cover"
                            />
                        </div>

                        {/* Text Content */}
                        <div
                            className={`flex-1 space-y-3 text-center md:text-left ${isEven ? "order-3" : "order-2"
                                }`}
                        >
                            <h2 className="text-2xl font-bold">{item.title}</h2>
                            <p className="text-gray-600">{item.description}</p>
                            {item.points.length > 0 && (
                                <ul className="list-disc list-inside text-gray-700 mt-2">
                                    {item.points.map((point, idx) => (
                                        <li key={idx}>{point}</li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
