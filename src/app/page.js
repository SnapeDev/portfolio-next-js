import Nav from "./components/Nav";
import About from "./components/About";

export default function Home() {
  return (
    <div className="bg-white text-black">
      <Nav />
      <About />
    </div>
  );
}
