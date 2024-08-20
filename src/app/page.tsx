import Image from "next/image";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <Card className="w-[350px] space-y-6 rounded-[15px] border-none bg-fem-very-dark-blue-card-bg p-6 text-white">
        <CardHeader className="p-0">
          <Image
            alt="Equilibrium NFT image"
            src="/images/image-equilibrium.jpg"
            width={350}
            height={350}
            className="h-auto w-full rounded-[8px]"
          />
        </CardHeader>
        <CardContent className="space-y-6 p-0">
          <section className="space-y-4">
            <h2 className="text-[22px] font-semibold">Equilibrium #3429</h2>
            <p className="text-[18px] text-fem-soft-blue">
              Our Equilibrium collection promotes balance and calm.
            </p>
          </section>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Image
                alt="Ethereum icon"
                src="/images/icon-ethereum.svg"
                width={11}
                height={18}
              />
              <span className="text-base font-bold text-fem-cyan">
                0.041 ETH
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <Image
                alt="clock icon"
                src="/images/icon-clock.svg"
                width={16}
                height={16}
              />
              <span className="text-base text-fem-soft-blue">3 days left</span>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4 p-0">
          <hr className="w-full border-fem-very-dark-blue-line" />
          <div className="flex w-full items-center space-x-3">
            <Avatar className="border border-white">
              <AvatarImage
                src="/images/image-avatar.png"
                alt="Creator's avatar"
              />
              <AvatarFallback>JW</AvatarFallback>
            </Avatar>
            <div>
              <span className="text-fem-soft-blue">Creation of</span>{" "}
              <span className="text-white">Jules Wyvern</span>
            </div>
          </div>
        </CardFooter>
      </Card>
    </main>
  );
}
