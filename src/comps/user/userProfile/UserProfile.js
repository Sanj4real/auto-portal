import { useState, useEffect } from "react";
import { Button } from "antd";
import UserForm from "./UserForm";
import { useQuery, useQueryClient } from "react-query";
import { getUser } from "src/api/user/user";
import { isAuthenticated } from "src/helpers/token";
import { baseUrl } from "src/helpers/constants";

export default function UserProfile() {
  // useQuery Syntax
  const { data: userData, refetch } = useQuery("user", () => getUser(), {
    enabled: isAuthenticated(),
  });
  
  const [user, setUser] = useState();

  useEffect(() => {
    console.log('userdata>>',userData)
    setUser(userData?.data)
  }, [userData])
  
  useEffect(() => {
   console.log('user log is', user)
  }, [user])

  const [image, setImage] = useState({ preview: "", raw: "" });

  const handleChange = (e) => {
    if (e.target.files.length) {
      setImage({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0],
      });
    }
  };

  return (
    <>
      <div className="flex space-x-4 mt-6 lg:mt-[55px]">
        <div className="h-[120px] w-[120px] bg-[#F4F7FB] rounded-[100%] overflow-hidden">
          <label htmlFor="upload-button">
            {image.preview ? (
              <img
                src={`${baseUrl}/${user?.avatar}`}
                alt="dummy"
                className="h-[100%] w-[100%] object-cover m-auto"
              />
            ) : (
              <>
                <div className="h-full w-[70%] m-auto flex items-center justify-center">
                  <h5 className="text-center text-base font-medium text-slate-700">
                    Upload your photo
                  </h5>
                </div>
              </>
            )}
          </label>
          <input
            type="file"
            id="upload-button"
            style={{ display: "none" }}
            onChange={handleChange}
          />
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-1 capitalize text-gray-800">
            Profile Photo
          </h2>
          <p className="text-sm font-normal text-[#7B8698] mb-[14px]">
            size of the image upto 2MB <br /> File Formate: JPEG/JPG/PNG
          </p>
          <label htmlFor="upload-button">
            <Button className="bg-[#a0a0a3] text-slate-50 capitalize transition-all border border-transparent py-[7px] px-5 h-auto hover:bg-transparent hover:border-[#5065F6] hover:text-[#5065F6] ">
              Change Photo
            </Button>
          </label>
        </div>
      </div>

      <UserForm refetch={refetch} userData={user}/>
    </>
  );
}
