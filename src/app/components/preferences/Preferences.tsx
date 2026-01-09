type Props = {
    upper: boolean;
    setUpper: (value: boolean) => void;
    lower: boolean;
    setLower: (value: boolean) => void;
    number: boolean;
    setNumber: (value: boolean) => void;
    symbol: boolean;
    setSymbol: (value: boolean) => void;
}

const Preferences = (props: Props) => {
    return (
        <>
            <section className="grid grid-cols-2 gap-4">

                <div className="mt-4 flex items-center justify-between checkbox-wrapper-2 checkbox-wrapper-2 gap-3 border border-gray-100 rounded p-2">
                    <label className="text-gray-500" htmlFor="capitalLetters">Uppercase:</label>
                    <input className="border sc-gJwTLC ikxBAC border-gray-400" id="capitalLetters"
                        type="checkbox"
                        checked={props.upper} onChange={(e) => props.setUpper(e.target.checked)} />
                </div>

                <div className="mt-4 flex items-center justify-between  checkbox-wrapper-2 gap-3 border border-gray-100 rounded p-2">
                    <label className="text-gray-500" htmlFor="lowercaseLetters">Lowercase:</label>
                    <input className="border sc-gJwTLC ikxBAC  border-gray-400" id="lowercaseLetters" type="checkbox"
                        checked={props.lower} onChange={(e) => props.setLower(e.target.checked)} />
                </div>

                <div className="mt-4 flex items-center justify-between checkbox-wrapper-2 gap-3 border border-gray-100 rounded p-2">
                    <label className="text-gray-500" htmlFor="numbers">Numbers:</label>
                    <input className="border sc-gJwTLC ikxBAC  border-gray-400" id="numbers" type="checkbox"
                        checked={props.number} onChange={(e) => props.setNumber(e.target.checked)} />
                </div>

                <div className="mt-4 flex items-center justify-between checkbox-wrapper-2 gap-3 border border-gray-100 rounded p-2">
                    <label className="text-gray-500" htmlFor="symbols">Symbols:</label>
                    <input className="border sc-gJwTLC ikxBAC  border-gray-400" id="symbols" type="checkbox"
                        checked={props.symbol} onChange={(e) => props.setSymbol(e.target.checked)} />
                </div>

            </section>
        </>
    )
}

export default Preferences