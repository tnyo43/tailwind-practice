import { Button } from "@/components/Button";

export default function Home() {
  return (
    <main className="mx-auto my-0 max-w-3xl text-center">
      <h1 className="p-6 text-4xl">A Basic Tailwind CSS Example</h1>
      <p className="px-10 pb-10 text-left">
        Tailwind CSS works by scanning all of your HTML files, JavaScript
        components, and any other templates for class names, generating the
        corresponding styles and then writing them to a static CSS file. It is
        fast, flexible, and reliable - with zero-runtime.
      </p>
      <div className="flex flex-col gap-8 p-4">
        <Button>Click</Button>
        <Button theme="accent">Click</Button>
        <Button theme="alert">Click</Button>
      </div>
    </main>
  );
}
