import Image from "next/image"
import images from "../images"

export default function PhotoPage({params: {id}}) {
  //  const { id } = params;
    console.log(typeof id)
    const photo = images.find(photo => photo.id == id);
    console.log(photo);
  return (
    <div className="container mx-auto my-10">
        <div className="w-1/2 mx-auto">
            <h1 className="text-center text-3xl font-bold my-4">
                {photo.name}
            </h1>
            <Image 
             alt={photo.name}
             src={photo.src}
             className="w-full object-cover aspect-square"
            
            />
        </div>

    </div>
  )
}
