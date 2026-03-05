import { Button } from "@/components/ui/button";
import Link from "next/link";


const Hero = () => {
    return (
        <>  
        <section className="py-20 px-6 text-center bg-slate-50">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
            Hire the best. <br /><span className="text-primary">Work with the best.</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            One platform where buyers design, specify, negotiate, order, and track garments while
            factories execute with complete clarity and confidence.
            </p>
            <div className="flex gap-4 justify-center">
            <Link href="/signup"><Button size="lg" className="px-8">Get Started</Button></Link>
            </div>
        </section>
        </>
    )
}

export default Hero