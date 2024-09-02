import HeroAnimation from "./ui/HeroAnimation";

export default function LandingPage() {
  return (
    <div className="h-[calc(100vh-64.8px)] grid grid-cols-2">
      <div className="col-span-1 h-full flex flex-col items-start justify-center p-4 gap-8">
        <h1 className="h1 font-bold">Shop Smart, Build Fast.</h1>
        <p className="h5 text-blue-50/75">
          Buy and sell top-quality digital assets, including templates,
          graphics, logos, and more.
        </p>
        <button className="btn-big brand-gradient">Browse Assets</button>
      </div>
      <div className="col-span-1 h-full flex items-center justify-end">
        <HeroAnimation />
      </div>
    </div>
  );
}
