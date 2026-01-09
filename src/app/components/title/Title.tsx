import { motion } from "motion/react"

const Title = () => {
    return (
        <>
            <motion.article initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} 
                className="flex flex-col items-center mb-5">
                <img src="/iron-key/assets/logo/key-logo.png" alt="Iron Key Logo" className="mb-5 bg-blue-50 p-2 rounded h-12"/>
                <h1 className="text-4xl font-bold mb-4 text-center text-gray-500">Iron Key</h1>
                <p className="text-center text-gray-500">Welcome to Iron Key, your secure key generator.</p>
            </motion.article>
        </>
    )
}

export default Title