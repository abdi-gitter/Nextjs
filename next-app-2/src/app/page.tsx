import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HomePage() {
  return (
    <section className="flex my-10 lg:mt-24 items-center gap-14 p-2">
      <div className="flex-1 h-full w-full space-y-8">
        <h1 className="text-4xl leading-snug font-semibold text-center lg:text-left">
          Get <span className="text-primary underline mx-2 font-extrabold italic">job ready</span> in 5 to 9 months! No IT background required</h1>
        <p className="leading-snug text-xl text-justify">
          Gain practical knowledge through project-based learning. Access
          comprehensive resources and support to accelerate your tech journey.
          Take advantage of Internships, Mentoring, Capstone Projects, and
          Career Management!
        </p>
        <div className="flex gap-5 w-full justify-center lg:justify-start">
          <Button variant="default" className="w-[120px]" size="lg"> Learn More</Button>
          <Button variant="secondary" className="w-[120px]" size="lg"> Contact</Button>
        </div>
      </div>
      <div className="hidden lg:flex relative flex-1 h-[55vh]">
        <Image fill src="/hero.gif" alt="" />
      </div>
    </section>
  );
}
