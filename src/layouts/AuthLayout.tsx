import { Header } from "../components/shared/Header";
import { Hero } from "../components/shared/Hero";
import { Clients } from "../components/shared/Clients";
import { Works } from "../components/shared/Works";
import { Review } from "../components/shared/Review";
import { Service } from "../components/shared/Service";

export const AuthLayout = () => {
  return (
    <div className="font-poppins">
      <Header />
      <Hero />
      <Clients />
      <Works />
      <Review />
      <Service />
    </div>
  );
};
