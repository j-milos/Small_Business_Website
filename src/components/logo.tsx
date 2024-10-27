import { Link } from "lucide-react";
import Image from "next/image";

export const Logo = () => {
  return (
    <Link href="/">
      <div className="hover:opacity-75 transtiton items-center gap-x-2 hidden md:flex">
        <Image src="../public/logo.svg" alt="Logo" height={30} width={30} />
      </div>
    </Link>
  );
};
