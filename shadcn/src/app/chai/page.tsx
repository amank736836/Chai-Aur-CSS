import { Button } from "@/components/ui/button";

function ChaiPage() {
  return (
    <main className="h-full flex justify-center items-center flex-col">
      <div>Chai Page 😃</div>
      <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
        Test Button
      </button>

      <Button
      variant="chai"
      >ShadCN Button</Button>


    </main>
  );
}

export default ChaiPage;
