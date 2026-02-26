import React from 'react';
import LightGallery from 'lightgallery/react';

// Import lightgallery styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// Import lightgallery plugins
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface Image {
  src: string;
  alt: string;
  thumb?: string;
}

interface GalleryProps {
  images: Image[];
  layout?: 'carousel' | 'grid';
}

const Gallery: React.FC<GalleryProps> = ({ images, layout = 'carousel' }) => {
  const renderItem = (image: Image, index: number) => (
    <div
      key={index}
      data-src={image.src}
      className="gallery-trigger block group relative overflow-hidden rounded-2xl cursor-zoom-in"
      title={image.alt}
    >
      <Card className="border-0 shadow-md overflow-hidden bg-muted aspect-video">
        <CardContent className="p-0 h-full w-full relative">
          <img
            src={image.thumb || image.src}
            alt={image.alt}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-4">
            <span className="text-white bg-black/40 px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm mb-2">View Photo</span>
            <p className="text-white text-[10px] text-center font-medium line-clamp-1">{image.alt}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  return (
    <div className="w-full relative py-4">
      <LightGallery
        speed={500}
        plugins={[lgThumbnail, lgZoom]}
        selector=".gallery-trigger"
        download={false}
        counter={false}
        backdropDuration={300}
        elementClassNames="w-full"
      >
        {layout === 'grid' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto px-4">
            {images.map((image, index) => renderItem(image, index))}
          </div>
        ) : (
          <Carousel
            opts={{
              align: "start",
              loop: false,
            }}
            className="w-full max-w-5xl mx-auto px-4 sm:px-12"
          >
            <CarouselContent className="-ml-4">
              {images.map((image, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4">
                  {renderItem(image, index)}
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:block">
              <CarouselPrevious className="-left-4 lg:-left-6" />
              <CarouselNext className="-right-4 lg:-right-6" />
            </div>
          </Carousel>
        )}
      </LightGallery>
    </div>
  );
};

export default Gallery;
