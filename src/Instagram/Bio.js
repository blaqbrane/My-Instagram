import getPhotoUrl from "get-photo-url";
import { useState, useEffect } from "react";
import logo from "../Static/profileIcon.svg";
import { db } from "../Dexie";
const Bio = () => {
  const [isopen, setIsopen] = useState(false);
  const [profilephoto, setProfilephoto] = useState(logo);
  const [biodetails, setBiodetails] = useState("");

  const OpenModal = () => {
    setIsopen((prevopen) => !prevopen);
  };
  const closeModal = () => {
    setIsopen(false);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const bioData = {
      sname: e.target.nameofuser.value,
      about: e.target.aboutofuser.value,
    };
    setBiodetails(bioData);
    await db.bio.put(bioData, "key");
  };
  const updateProfilePhoto = async () => {
    const newphoto = await getPhotoUrl("#profileId");
    setProfilephoto(newphoto);
    await db.bio.put(newphoto, "photokey");
  };
  useEffect(() => {
    const setdexiedata = async () => {
      const dexieDetails = await db.bio.get("key");
      const dexieprofilephoto = await db.bio.get("photokey");
      dexieDetails && setBiodetails(dexieDetails);
      dexieprofilephoto && setProfilephoto(dexieprofilephoto);
    };
    setdexiedata();
  });
  return (
    <section className="flex px-16 py-16 gap-4 border-b-2 border-stone-600 mt-10">
      <input
        type="file"
        accept="image/*"
        name="photo"
        id="profileId"
        className="hidden"
      />
      <label htmlFor="profileId" onClick={updateProfilePhoto}>
        <div title="edit image" role="button" className="bg-black rounded-full">
          <img
            src={profilephoto}
            alt=""
            className="rounded-full object-cover w-full h-full hover:opacity-50"
          />
        </div>
      </label>
      <div className="">
        <div>
          <p className="text-primary font-bold text-xl">{biodetails.sname}</p>
          <p className="text-primary">{biodetails.about}</p>
          {!isopen && (
            <button
              onClick={() => OpenModal()}
              className="bg-secondary-100 btn  hover:bg-secondary-200"
            >
              Edit
            </button>
          )}
        </div>
        <form
          className={isopen ? "bio--form" : "hidden"}
          onSubmit={handleSubmit}
        >
          <div>
            <input
              type="text"
              placeholder="Enter your name"
              name="nameofuser"
              defaultValue={biodetails?.sname}
              className="input"
            />
            <div>
              <input
                type="text"
                name="aboutofuser"
                placeholder="Tell us about you"
                defaultValue={biodetails?.about}
                className="input"
              />
            </div>
          </div>
          <button
            onClick={() => closeModal()}
            className="btn bg-red-400 hover:bg-red-700"
          >
            Save
          </button>
          <button
            onClick={() => closeModal()}
            className="btn bg-blue-600 ml-4 hover:bg-secondary-200"
          >
            Cancel
          </button>
        </form>
      </div>
    </section>
  );
};

export default Bio;
