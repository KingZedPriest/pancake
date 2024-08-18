export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
      <section className="bg-white h-full w-full sm:w-[80%] md:w-[60%] lg:w-[50%] xl:w-[40%] mx-auto">
        {children}
      </section>
    )
  }