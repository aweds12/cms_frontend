import LogoutButton from "@/components/logout";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad cupiditate
        velit possimus sequi repellendus eum quas voluptates repudiandae dolorem
        quos consequuntur in omnis natus, voluptatum dolores amet atque quam
        libero?
        <LogoutButton />
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        footer
      </footer>
    </div>
  );
}
