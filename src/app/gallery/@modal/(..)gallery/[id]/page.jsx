import Image from "next/image"
import images from "@/app/gallery/images";
import Modal from "@/app/components/Modal";

export default function PhotoPage({params: {id}}) {
  //  const { id } = params;
    console.log(typeof id)
    const photo = images.find(photo => photo.id == id);
   console.log(photo);
  return (
        <Modal>
        <div className="w-1/2 mx-auto">
            <div>
            <h1 className="text-center text-3xl font-bold my-4 text-white">
                {photo.name}
            </h1>

            </div>
            <Image 
             alt={photo.name}
             src={photo.src}
             className="w-full object-cover aspect-square"
            
            />
        </div>

        </Modal>
  )
}
