import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/components/layout";
import Head from "next/head";
import Tweet from "@/components/tweet";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Home</title>
      </Head>
      {/* Top Bar */}
      <div
        className="
      flex items-center py-4"
      >
        <div
          className="w-6 h-6 rounded-full 
        bg-purple-500 fixed flex justify-center
        items-center left-4"
        >
          <p className="text-xs text-white">민규</p>
        </div>
        <div className="mx-auto">
          <svg viewBox="0 0 24 24" aria-hidden="true" className="w-6 h-6">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
          </svg>
        </div>
      </div>
      <div className="border-t border-gray-300"></div>
      <div>
        {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, i) => (
          <Tweet key={i} id={3} />
        ))}
      </div>
    </Layout>
  );
}
