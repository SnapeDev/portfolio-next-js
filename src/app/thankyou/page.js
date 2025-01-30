import Nav from "../components/Nav";
import Link from "next/link";

const ThankYou = () => {
  return (
    <div className="bg-white text-black min-h-screen flex flex-col">
      {/* Nav Component */}
      <Nav />

      {/* Main Section */}
      <main className="flex-grow flex flex-col items-center justify-center text-center mb-20">
        {/* Centered Content */}
        <h1 className="text-2xl font-bold text-gray-800 mb-5">
          Submission received.
        </h1>
        <p className="text-md text-gray-700 mb-8">
          Someone will be in touch with you shortly.
        </p>
        <Link
          href="/"
          className="px-5 py-2 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition-all"
        >
          Return to Home
        </Link>
      </main>
    </div>
  );
};

export default ThankYou;
