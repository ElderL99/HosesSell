import { useEffect, useState } from "react";

export default function PropertyList() {
    const [properties, setProperties] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/api/hello")
            .then((res) => res.json())
            .then((data) => {
                setProperties(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error:", err);
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Loading...</p>;

    return (
        <div className="w-full grid p-2 grid-cols-1 md:grid-cols-2 md:p-10 lg:grid-cols-3 gap-4 lg:p-15">
    {properties.map((item) => (
        <div key={item.id} className="bg-white w-full h-full flex flex-col overflow-hidden shadow-md">
            <div className="w-full h-64 bg-[#121826]">
                <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full rounded-lg object-cover"
                />
            </div>
            <div className="p-5 bg-[#121826] flex flex-col justify-between flex-grow">
                <div>
                    <h2 className="text-lg font-bold text-white">{item.title}</h2>
                    <span className="text-gray-400">{item.description}</span>
                    <p className="text-sm text-white mt-1">{item.location}</p>

                    {item.superhost && (
                        <span className="inline-block mt-2 px-2 py-1 text-xs font-semibold text-white bg-indigo-500 rounded-full">
                            Superhost
                        </span>
                    )}
                </div>

                <div className="mt-4">
                    <p className="text-sm text-gray-400">
                        🛏 {item.capacity.bedroom} bedrooms ・ 👥 {item.capacity.people} people
                    </p>
                    <div className="flex items-center justify-between mt-2">
                        <p className="text-purple-400 font-semibold">${item.price}/month</p>
                        <span className="text-sm text-yellow-500">⭐ {item.rating}</span>
                    </div>
                </div>
            </div>
        </div>
    ))}
</div>

    );
}
