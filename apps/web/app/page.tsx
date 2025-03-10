import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-6xl font-bold mb-6">Natively</h1>
      <p className="text-xl mb-12 text-center max-w-2xl">
        A beautiful, accessible React Native component library using NativeWind
      </p>
      <div className="flex gap-4">
        <Link
          href="/docs"
          className="px-6 py-3 bg-black text-white rounded-md text-lg font-medium"
        >
          Get Started
        </Link>
        <Link
          href="/docs/components"
          className="px-6 py-3 border border-gray-200 rounded-md text-lg font-medium"
        >
          Components
        </Link>
      </div>
    </main>
  );
}
