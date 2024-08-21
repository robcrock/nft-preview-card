import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface NFTCardProps {
  imageUrl: string;
  title: string;
  description: string;
  price: string;
  timeLeft: string;
  creatorName: string;
  creatorAvatarUrl: string;
}

const NFTCard = ({
  imageUrl,
  title,
  description,
  price,
  timeLeft,
  creatorName,
  creatorAvatarUrl,
}: NFTCardProps) => (
  <Card className="w-[350px] space-y-6 rounded-[15px] border-none bg-fem-very-dark-blue-card-bg p-6 text-white">
    <CardHeader className="p-0">
      <div className="group relative cursor-pointer">
        <Image
          alt={`${title} NFT`}
          src={imageUrl}
          width={350}
          height={350}
          className="h-auto w-full rounded-[8px]"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center rounded-[8px] bg-fem-cyan bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <Image
            src="/images/icon-view.svg"
            alt="View NFT"
            width={48}
            height={48}
            aria-hidden="true"
          />
        </div>
      </div>
    </CardHeader>
    <CardContent className="space-y-6 p-0">
      <h2 className="cursor-pointer text-xl font-semibold hover:text-fem-cyan">
        {title}
      </h2>
      <p className="text-fem-soft-blue">{description}</p>
      <div className="flex justify-between">
        <span className="flex items-center font-semibold text-fem-cyan">
          <Image
            src="/images/icon-ethereum.svg"
            alt="Ethereum icon"
            width={11}
            height={18}
            className="mr-2"
          />
          {price}
        </span>
        <span className="flex items-center text-fem-soft-blue">
          <Image
            src="/images/icon-clock.svg"
            alt="Time left icon"
            width={16}
            height={16}
            className="mr-2"
          />
          {timeLeft}
        </span>
      </div>
    </CardContent>
    <CardFooter className="flex items-center space-x-4 p-0">
      <Avatar className="border border-white">
        <AvatarImage src={creatorAvatarUrl} alt={creatorName} />
        <AvatarFallback>{creatorName[0]}</AvatarFallback>
      </Avatar>
      <p className="text-fem-soft-blue">
        Creation of{" "}
        <span className="cursor-pointer text-white hover:text-fem-cyan">
          {creatorName}
        </span>
      </p>
    </CardFooter>
  </Card>
);

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center p-6">
      <NFTCard
        imageUrl="/images/image-equilibrium.jpg"
        title="Equilibrium #3429"
        description="Our Equilibrium collection promotes balance and calm."
        price="0.041 ETH"
        timeLeft="3 days left"
        creatorName="Jules Wyvern"
        creatorAvatarUrl="/images/image-avatar.png"
      />
    </main>
  );
}
