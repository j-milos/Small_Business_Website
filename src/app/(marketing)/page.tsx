import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Poppins } from "next/font/google";
import { Medal } from "lucide-react";
import { cn } from "@/lib/utils";

const textFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const MarketingPage = () => {
  return (
    <div className="flex items-center flex-col">
      <div className="flex items-center flex-col">
        <div className="mb-4 flex items-center border shadow-sm p-4 bg-amber-100 text-amber-700 rounder-full uppercase">
          <Medal className="h-6 w-6 mr-2" />
          No 1 task managment
        </div>
        <h1
          className={cn(
            "text-3xl md:text-6xl text-center text-neautral-800 mb-6",
            textFont.className
          )}
        >
          Odaberi svoje mesto gde vežbaš
        </h1>
        <div
          className={cn(
            "text-3xl md:text-6xl bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white px-4 p-2 rounded-md pb-4",
            textFont.className
          )}
        >
          Izvuci svoj maksimum.
        </div>
      </div>
      <div
        className={cn(
          "text-sm md:text-xl text-neutral-400 mt-4 max-w-xs md:max-w-2xl text-center mx-auto",
          textFont.className
        )}
      >
        Učlani se već danas, i počni da vežbaš. Veliki broj mašina i trenera
        posvećenih tvom napretku.
      </div>
      <Button className="mt-6" size={"lg"} asChild>
        <Link href="/sign-up">Napravi svoj nalog</Link>
      </Button>
    </div>
  );
};

export default MarketingPage;
