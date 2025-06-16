import Technologie from '../components/technologie'

export default function Tech_Diff({ items, children }) {
    return (
        <div className="mb-8 flex flex-col items-center justify-center">
            <h3 className="text-sky-400 font-Courier text-2xl mb-6 border-b-2 max-w-max items-end max-md:tracking-tight max-md:border-0 max-md:underline">
                {children}
            </h3>
            <div className="grid grid-cols-3 w-full gap-6">
                {items.map((tech, index) => (
                    index += 1,
                    <Technologie key={index} src={"/logo/" + tech + ".png"} delay={"delay-" +index}>{tech}</Technologie>
                ))}
            </div>
        </div>
    )
}