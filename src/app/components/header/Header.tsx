const Header = () => {
    return (
        <header className="flex justify-around items-center pt-2 border-b pb-2 border-gray-300">
            <aside className="flex gap-6 items-center">
                <div className="flex gap-2 items-center bg-blue-50 py-1 px-2 rounded">
                    <img src="/iron-key/assets/logo/key-logo.png" alt="Iron Key Logo" className="h-6" />
                    <p className="text-gray-500 font-bold">Iron Key</p>
                </div>
                <a className="text-gray-500" href="/">Home</a>
            </aside>
            <a href="https://github.com/devsamuca/iron-key"><img src="/iron-key/assets/icons/github.png" alt="Iron Key Logo" className="h-9 hover:bg-gray-50 p-1 rounded" /></a>
        </header>
    )
}

export default Header