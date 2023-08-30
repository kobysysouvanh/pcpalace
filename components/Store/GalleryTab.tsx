
import { Tab } from "@headlessui/react"
import Image from "next/image"
import { Image as ImageType } from "@/lib/types"
import { cn } from "@/lib/utils"

interface GalleryTabProps {
    image: ImageType
}

const GalleryTab: React.FC<GalleryTabProps> = ({
    image
}) => {
  return (
    <Tab className="relative flex aspect-square cursor-pointer items-center justify-center rounded-xl">
        {({ selected }) => (
            <div>
                <span className="absolute h-full w-full aspect-square inset-0 overflow-hidden rounded-xl">
                    <Image
                    src={image.url}
                    fill
                    alt=""
                    className="object-cover object-center"
                    />
                </span>
                <span className={cn("absolute inset-0 rounded-xl ring-2 ring-offset-2",
                selected? "ring-black" : "ring-transparent")}>

                </span>
            </div>
        )}
    </Tab>
  )
}

export default GalleryTab