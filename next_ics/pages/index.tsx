import Image from "next/image";
import { Kanit } from "next/font/google";
import MainLayout from "@/components/mainlayout/MainLayout";

const inter = Kanit({ subsets: ["latin"], weight: '200' });

export default function Home() {
  return (
    <MainLayout />
  );
}