import img6 from "../Static/avatar4.jpg";
// import Datas from "./Data";
import getPhotoUrl from "get-photo-url";
import { useState } from "react";
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "../Dexie";
const Gallery =()=>{
    const images = useLiveQuery(() => db.gallery.toArray(),[ ])
    const handleDelete=(id)=>{
        db.gallery.delete(id)
    }
    const updateGallery=async() => {
       db.gallery.add({
        url:await getPhotoUrl('#pix')
       })
    }
    return(
        <>
            <input type="file" name="photo" id="pix" className="hidden"/>
            <label htmlFor="pix" onClick={updateGallery}><i className=" fas fa-plus-square fixed bottom-20 right-1 scale-150 cursor-pointer"/></label>
            <section className="grid grid-cols-3 p-4 gap-x-2 border-b-2 border-slate-500">
                {images?.map((data) => {
                    return(
                        <div key={data.id} className=" group bg-black cursor-pointer mt-10 h-40 lg:h-80">
                             <img src={data.url} alt="" className="w-full h-full  object-cover cursor-pointer hover:opacity-50"/>
                             <button className=" absolute -mt-40 ml-44 p-1 opacity-0 rounded text-sm bg-bground text-white border-0 group-hover:opacity-100 lg:ml-64" onClick={()=>handleDelete(data.id)}>Delete</button>
                        </div>
                    )
                })}
            </section>
        </>
    )
}
export default Gallery;