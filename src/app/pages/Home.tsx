import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { motion } from "motion/react";
import '../styles/checkbox.css'
import '../styles/pages/home.css'
import StrengthBar from "../components/strength/StrengthBar";
import Generate from "../components/generate/Generate";
import Footer from "../components/footer/Footer";
import Preferences from "../components/preferences/Preferences";
import Length from "../components/length/Length";
import Title from "../components/title/Title";
import Generated from "../components/generated/Generated";
import Header from "../components/header/Header";

const Home = () => {
    const [upper, setUpper] = useState<boolean>(true);
    const [lower, setLower] = useState<boolean>(true);
    const [number, setNumber] = useState<boolean>(true);
    const [symbol, setSymbol] = useState<boolean>(true);
    const [length, setLength] = useState<number>(12);
    const [strength, setStrength] = useState<number>(0);
    const [keyGenerated, setKeyGenerated] = useState<string>('');

    useEffect(() => {
        handleGeneratePassword();
    }, [length, upper, lower, number, symbol]);

    const notify = (text: string) => toast.info(text, {
        autoClose: 2500,
        position: "bottom-right",
        pauseOnFocusLoss: false,
        pauseOnHover: false,
        theme: "light"
    });

    const copyToClipboard = () => {

        if (keyGenerated === '') {
            notify("Generate a password first!");
            return;
        }
        notify("Key copied to clipboard!");
        navigator.clipboard.writeText(keyGenerated);
    }

    const keyStrength = (key: string) => {
        let strength = 0;
        if (/[A-Z]/.test(key)) strength += 10;
        if (/[a-z]/.test(key)) strength += 10;
        if (/[0-9]/.test(key)) strength += 20;
        if (/[^A-Za-z0-9]/.test(key)) strength += 20;
        if (key.length >= 8) strength += 40;
        setStrength(strength);
    }

    const handleGeneratePassword = () => {

        if (!upper && !lower && !number && !symbol) { notify("Please select at least one option!"); return; }
        if (length <= 0) { notify("Length must be greater than 0!"); return; }

        var upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        var lowerChars = 'abcdefghijklmnopqrstuvwxyz';
        var numberChars = '0123456789';
        var symbolChars = '!@#$%^&*()_+~`|}{[]:;?><,./-=';

        var allChars = '';
        if (upper) allChars += upperChars;
        if (lower) allChars += lowerChars;
        if (number) allChars += numberChars;
        if (symbol) allChars += symbolChars;

        var key = '';

        for (var i = 0; i < length; i++) {
            var randomIndex = Math.floor(Math.random() * allChars.length);
            key += allChars[randomIndex];
        }
        setKeyGenerated(key);
        keyStrength(key);
    }

    return (
        <>
            <Header />
            <main className="flex min-h-90-screen justify-center items-center flex-col gap-10 bg-white mb-4">
                <Title />
                <motion.section className="flex flex-col gap-2 p-8 rounded-2xl box-shadow w-full max-w-md"
                    initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>

                    <Generated keyGenerated={keyGenerated} copyToClipboard={copyToClipboard} />
                    <StrengthBar strength={strength} />
                    <Length length={length} setLength={setLength} />
                    <Preferences
                        upper={upper}
                        setUpper={setUpper}
                        lower={lower}
                        setLower={setLower}
                        number={number}
                        setNumber={setNumber}
                        symbol={symbol}
                        setSymbol={setSymbol}
                    />
                    <Generate handleGeneratePassword={handleGeneratePassword} />
                    <Footer />
                </motion.section>

            </main >
            <ToastContainer />
        </>
    )
}

export default Home