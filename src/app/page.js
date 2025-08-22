
import Hero from "./components/Hero";
import MainLayout from "./components/MainLayout";
import Products from "./components/Products";

export default function Home() {
  return (
    <MainLayout>
      <div>
        <Hero/>
      </div>
      <div>
        <Products/>
      </div>
    </MainLayout>
  );
}
