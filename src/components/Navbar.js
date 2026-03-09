import { Link, useNavigate } from "react-router-dom";

export default function Navbar({ isLoggedIn, setIsLoggedIn }) {
    const navigate = useNavigate();

    const handleLogout = () => {
        setIsLoggedIn(false);
        navigate("/");
    };

    return (
        <nav className="fixed top-0 left-0 w-full z-50 glass">
            <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">
                <h1
                    onClick={() => navigate("/")}
                    className="text-3xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent cursor-pointer"
                >
                    TruthLens
                </h1>

                <div className="flex space-x-6 items-center">
                    <Link to="/" className="hover:text-blue-600 transition">Home</Link>
                    <Link to="/about" className="hover:text-blue-600 transition">About</Link>
                    {isLoggedIn ? (
                        <button onClick={handleLogout} className="btn-primary text-sm">Logout</button>
                    ) : (
                        <Link to="/login" className="btn-primary text-sm">Login</Link>
                    )}
                </div>
            </div>
        </nav>
    );
}
