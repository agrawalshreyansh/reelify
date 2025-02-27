import axios from "axios";
import { useState } from "react";

const UploadVideo = () => {
    const [file, setFiles] = useState({});

        
        const [formData, setFormData] = useState({})

        const handleFileChange = (e) => {
            const file = e.target.files[0];
            if (!file) return;
        
            setFormData((prev) => ({
                ...prev,
                [e.target.name]: file, 
            }));
        
            setFiles((prev) => ({
                ...prev,
                [e.target.name]: URL.createObjectURL(file), 
            }));
        };
        

        const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData({ ...formData, [name]: value });
        };

        const [uploading,setUploading] = useState(false)



        const uploadData = async(e) => {
            e.preventDefault()
            
        
            const formDataToSend = new FormData();
            formDataToSend.append("title", formData.title);
            formDataToSend.append("description", formData.description);
            formDataToSend.append("videoFile", formData.videoFile);
            formDataToSend.append("thumbnailFile", formData.thumbnailFile);



            setUploading(true)
            
            axios.post("http://localhost:3000/api/v1/videos/upload",formDataToSend, {
                headers: { "Content-Type": "multipart/form-data" },
                withCredentials :true
            })
            .then((data) => {
                console.log(data)
                setUploading(false)
            })
            .catch((err) => console.log(err))
        }
        

    return (
        <>
            <div>
                <div className="flex items-center justify-center flex-col w-[88vw] h-[100%]">
                    <div className="flex flex-col w-[64vw] py-8 my-6 px-8 bg-white/10 shadow-lg shadow-[rgba(31,38,135,0.37)] backdrop-blur-[4.5px] rounded-[10px]  border border-white/18">
                        <div className="flex w-[100%]">
                            <div className="w-[60%] my-8 ml-6">
                                <div className="flex flex-col h-28 justify-center">
                                    <label htmlFor="fullname" className="text-white">Title</label>
                                    <input
                                        placeholder="Title"
                                        type="text"
                                        name="title"
                                        className="border-2 border-primary text-white p-2 rounded-xl"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="flex flex-col h-82 justify-center items my-4">
                                    <label htmlFor="fullname" className="text-white">Description</label>
                                    <textarea 
                                    className="border-2 border-primary text-white p-2 h-[100%]  rounded-xl "
                                    name="description"
                                    onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className="w-[40%] my-8 flex flex-col items-center justify-center">
                                <div className="flex flex-col h-20 justify-center items-center">
                                    <label htmlFor="fullname" className="text-white">Upload Video</label>
                                    <input
                                        placeholder="Upload"
                                        type="file"
                                        name="video"
                                        className="border-2 border-primary text-white p-2 rounded-xl w-[50%] cursor-pointer"
                                        onChange={handleFileChange}
                                    />
                                </div>
                                {file.file1 && (
                                        <video src={file.file1} className="w-48 mt-2" muted playsInline />
                                )}

                                <div className="flex flex-col h-24 justify-center items-center">
                                    <label htmlFor="fullname" className="text-white">Upload Thumbnail</label>
                                    <input
                                        placeholder="Upload"
                                        type="file"
                                        name="thumbnail"
                                        className="border-2 border-primary text-white p-2 rounded-xl w-[50%] cursor-pointer"
                                        onChange={handleFileChange}
                                    />
                                </div>
                                {file.file2 && <img src={file.file2} className="w-48 mt-2"/>}
                            </div>
                        </div>

                        <div className="flex items-center justify-center">
                            <button className="cursor-pointer w-[40%] text-primary bg-highlight rounded-3xl h-10 mt-8 "
                            onClick={uploadData}
                            
                            >Upload</button>
                            {(uploading) && (<div className="text-white">Video Uploading</div>)}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UploadVideo