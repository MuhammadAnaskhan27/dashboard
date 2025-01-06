import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";


const Testimonial = () => {
  return (
    <>
      <div style={{ backgroundColor: "#F6FAFF" }} className="pt-16 pb-20">
        <h1
          className="text-center text-3xl font-bold "
          style={{ color: "#293763" }}
        >
          What other customers have to say{" "}
          <span style={{ color: "#5470CB" }}>about us</span>
        </h1>

        <div className="m-20">
          <Carousel className="w-full max-w-sm">
            <CarouselContent className="-ml-1">
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem
                  key={index}
                  className="pl-1 md:basis-1/2 lg:basis-1/3"
                >
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <span className="text-2xl font-semibold">
                          {index + 1}
                        </span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
