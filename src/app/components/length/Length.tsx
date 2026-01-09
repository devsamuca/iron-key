type LengthProps = {
    length: number;
    setLength: (value: number) => void;
}

const Length = ({ length, setLength }: LengthProps) => {
    return (
        <>
            <section className="flex flex-col">

                <div className="flex justify-between">
                    <label htmlFor="length" className="font-semibold text-gray-500">Length</label>
                    <span className="ml-2 text-blue-500 font-bold">{length}</span>
                </div>
                <input id="length" type="range"
                    min={1}
                    max={200}
                    step={1}
                    value={length}
                    onChange={(e) => setLength(Number(e.target.value))}
                    className="w-full appearance-none rounded-full h-1 mt-2" />

            </section>
        </>
    )
}

export default Length