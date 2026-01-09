type Props = {
    strength: number;
}

const StrengthBar = ({ strength }: Props) => {
    return (
        <>
            <div className="flex flex-col gap-1">
                <label className="flex justify-between text-gray-500"><p>Password Strength</p> <p className="font-bold text-blue-500">{ }</p></label>
                <progress className="w-full h-1 rounded-full overflow-hidden" value={strength} max={100}></progress>
            </div>
            <p className="h-1-px bg-gray-300 mt-5 mb-2 "></p>
        </>
    )
}

export default StrengthBar