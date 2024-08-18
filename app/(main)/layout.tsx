//Import Needed Components
import BackBtn from "@/components/ui/Backbtn";
import DownBar from "@/components/ui/Downbar";

export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
      <section className="relative p-2 md:p-4 xl:p-6 bg-ash h-full w-full sm:w-[80%] md:w-[60%] lg:w-[50%] xl:w-[40%] 2xl:w-[30%] mx-auto">
        <BackBtn />
        {children}
        <DownBar />
      </section>
    )
  }