
import MaxWidthWrapper from "./components/MaxWidthWrapper";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <MaxWidthWrapper className="mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center">
        <div className="mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border boder-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50">
          <p className="text-sm font-semibold text-gray-700"> Saas is now public !</p>
        </div>
        <h1 className='max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl'>
          Chat with your <span className='text-blue-600'>documents</span> in seconds.
        </h1>

        <p className='mt-5 max-w-prose text-zinc-700 sm:text-lg'>
          Quill allows you to have conversations with any PDF document. Simply
          upload your file and start asking questions right away.
        </p>

        <Link href='/dashboard' target='_blank'>
          Get started
        </Link>

      </MaxWidthWrapper>
    </div>
  );
}
