import { Button } from "@/components/Button";
import { TextInput } from "@/components/Input";

export default function Home() {
  return (
    <main className="mx-auto my-0 max-w-3xl text-center">
      <h1 className="p-8 text-4xl">A Basic Tailwind CSS Example</h1>
      <p className="px-16 pb-16 text-left">
        Tailwind CSS works by scanning all of your HTML files, JavaScript
        components, and any other templates for class names, generating the
        corresponding styles and then writing them to a static CSS file. It is
        fast, flexible, and reliable - with zero-runtime.
      </p>
      <div className="flex flex-col gap-8 p-32">
        <div>
          <Button size="s">Click</Button>
        </div>
        <div>
          <Button size="m" theme="accent">
            Click
          </Button>
        </div>
        <div>
          <Button size="l" theme="alert">
            Click
          </Button>
        </div>
        <TextInput />
        <TextInput required />
        <TextInput disabled />
      </div>
    </main>
  );
}
