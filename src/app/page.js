import Hero from "./components/Hero";
import MainLayout from "./components/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <div>
        <Hero/>
      </div>
    </MainLayout>
  );
}
