import Link from "next/link";

export default function Home() {
  return (
    <div className="size-full flex items-center justify-center">
      <button className="px-4 py-2 bg-blue-500 rounded-lg">
        <Link href={"/dashboard"}>Go to dashboard</Link>
      </button>
    </div>
  );
}
