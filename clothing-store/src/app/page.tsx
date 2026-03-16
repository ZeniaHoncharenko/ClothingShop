import Header from "./components/layout/header";
import Footer from "./components/layout/footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1" />
      <Footer />
    </div>
  );
}
