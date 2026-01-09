import { motion } from "motion/react"
import GoHome from "../components/gohome/GoHome"

const NotFound = () => {
    return (
        <motion.main className="min-h-screen flex flex-col items-center justify-center text-center gap-4 p-4">
            <section className="flex flex-col items-center box-shadow p-10 rounded-lg gap-3 max-w-100 bg-FDFEFE">
                <img src="/iron-key/assets/icons/warning.png" className="h-13" alt="" />
                <h1 className="text-5xl font-bold">404</h1>
                <h2 className="font-bold text-gray-600">Page not found.</h2>
                <p className="text-gray-500">Sorry, the page you are looking for doesn't exist.
                    It may have been moved or deleted.</p>

                <GoHome />
            </section>
        </motion.main>
    )
}

export default NotFound