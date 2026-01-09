type Props = {
    handleGeneratePassword: () => void;
}

const Generate = ({ handleGeneratePassword }: Props) => {
    return (
        <>
            <button type="button"
                className={`mt-4 w-full bg-blue-600 text-white py-2 rounded hover:scale-105 transition-transform duration-200 cursor-pointer flex justify-center items-center gap-2 group`}
                onClick={handleGeneratePassword}> <img src="/devsamuca/iron-key/assets/icons/update.png" alt="Generate Icon" className="h-4 group-hover:animate-spin" /> Generate
            </button>
        </>
    )
}

export default Generate