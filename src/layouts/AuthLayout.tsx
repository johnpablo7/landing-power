import { Clients } from "../components/shared/Clients";
import { Header } from "../components/shared/Header";
import { Hero } from "../components/shared/Hero";
import { Works } from "../components/shared/Works";

export const AuthLayout = () => {
  return (
    <div className="font-poppins">
      <Header />
      <Hero />
      <Clients />
      <Works />
    </div>
  );
};
