import {Inter} from "@next/font/google";

const inter = Inter({subsets: ["latin"]});

export default function Home() {
    return (
        <main className="min-h-screen justify-center items-center w-screen flex">
            <h1 className="">Hello! :)</h1>
        </main>
    );
}
