import { ModeToggle } from "@/components/mode-toggle";
import Image from "next/image";

export default function Home() {
  return (
    <div className="text-3xl my-4">
      <ModeToggle />
      Hello world
    </div>
  );
}
