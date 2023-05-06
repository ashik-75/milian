import Products from "@/components/Products";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["100", "200", "600", "700"],
  subsets: ["latin"],
});

function page() {
  return (
    <div className="max-w-7xl mx-auto">
      <h1 className={`font-bold text-3xl mb-3 ${poppins.className}`}>
        You Can See those changes
      </h1>
      <Products />
    </div>
  );
}

export default page;
