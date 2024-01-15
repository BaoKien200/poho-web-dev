import Image from 'next/image';

export default function Home() {
  return (
      <div className="text-black">
          <div className="flex flex-col items-center justify-center min-h-screen py-2">
              <Image src="/images/logo.png" alt="Logo" width="200" height="200" />
              <h1 className="text-6xl font-bold bg-[red]">Hello World</h1>
              <h1 className="text-6xl font-bold bg-[yellow]">123123413</h1>
              <h1 className="text-6xl font-bold">Hello World</h1>
              <h1 className="text-6xl font-bold">Hello World</h1>
              <h1 className="text-6xl font-bold">Hello World</h1>
          </div>
      </div>
  );
}
