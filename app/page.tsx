import Image from "next/image";

export default function Home(): React.JSX.Element{
  return (
    <div className="flex w-full h-screen">
      <div className="w-5/6 bg-orange-400 me-2 p-2 rounded">
        <h1>Simple homepage</h1>
      </div>

      <div className="w-1/6 bg-orange-300 ms-2 p-2 rounded">
        <h2>Simple Sidebar</h2>
      </div>
    </div>
  );
}
