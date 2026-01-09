type Props = {
    keyGenerated: string;
    copyToClipboard: () => void;
}

const Generated = ({ keyGenerated, copyToClipboard }: Props) => {
    return (
        <>
            <section className="flex flex-col gap-2 mb-3 relative">
                <p className="text-gray-500">Key generated</p>
                <input type="text"
                    value={keyGenerated}
                    readOnly
                    placeholder="Click on 'Generate' to create a key."
                    className="w-full border border-gray-300 bg-gray-50 pl-2 py-1 rounded text-gray-400 outline-none pr-7" />
                <img src="/iron-key/assets/icons/copy-from.png" alt="Copy from"
                    className="h-8 absolute right-07px rounded bottom-1px py-1 hover:bg-gray-200 cursor-pointer"
                    onClick={copyToClipboard} />
            </section>
        </>
    )
}

export default Generated