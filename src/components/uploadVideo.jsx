import axios from "axios";
import { useState } from "react";

const UploadVideo = () => {
    const [formData, setFormData] = useState({});
    const [preview, setPreview] = useState({});
    const [uploading, setUploading] = useState(false);
    const [error,setError] = useState(null)

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const name = e.target.name;
        setFormData((prev) => ({ ...prev, [name]: file }));
        setPreview((prev) => ({ ...prev, [name]: URL.createObjectURL(file) }));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const uploadData = async (e) => {
        e.preventDefault();
        const formDataToSend = new FormData();
        formDataToSend.append("title", formData.title || "");
        formDataToSend.append("description", formData.description || "");
        formDataToSend.append("videoFile", formData.video || null);
        formDataToSend.append("thumbnailFile", formData.thumbnail || null);
        console.log(formDataToSend)
        setUploading(true);
        try {
            const response = await axios.post("https://reelify-backend.onrender.com/api/v1/videos/upload", formDataToSend, {
                headers: { "Content-Type": "multipart/form-data" },
                withCredentials: true
            });
            console.log(response.data);
        } catch (error) {setUploading(false);
            console.log(error.response.data.message);
            setError(error.response.data.message)
        } 
    };

    const username = localStorage.getItem('username')

    if (!username) {
        return (
            <>
            <div className="flex items-center justify-center h-40">
                <h1 className="text-white">Please Login First !</h1>
            </div>
            </>
        )
    }

    return (
        <div className="flex items-center justify-center flex-col w-[88vw] h-[100%]">
            <div className="flex flex-col w-[64vw] py-8 my-6 px-8 bg-white/10 shadow-lg backdrop-blur-[4.5px] rounded-[10px] border border-white/18">
                <div className="flex w-[100%]">
                    <div className="w-[60%] my-8 ml-6">
                        <div className="flex flex-col h-28">
                            <label className="text-white">Title</label>
                            <input type="text" name="title" className="border-2 border-primary text-white p-2 rounded-xl" onChange={handleChange} />
                        </div>
                        <div className="flex flex-col my-4">
                            <label className="text-white">Description</label>
                            <textarea name="description" className="border-2 border-primary text-white p-2 rounded-xl" onChange={handleChange} />
                        </div>
                    </div>
                    <div className="w-[40%] my-8 flex flex-col items-center justify-center">
                        <div className="flex flex-col h-20 items-center">
                            <label className="text-white">Upload Video</label>
                            <input 
                                type="file" 
                                name="video" 
                                className="border-2 border-primary text-white p-2 rounded-xl w-[50%] cursor-pointer"
                                accept=".mp4,.mov,.hevc" 
                                onChange={handleFileChange} />
                        </div>
                        {preview.video && <video src={preview.video} className="w-48 mt-2" muted playsInline />}
                        <div className="flex flex-col h-24 items-center">
                            <label className="text-white">Upload Thumbnail</label>
                            <input type="file" name="thumbnail" className="border-2 border-primary text-white p-2 rounded-xl w-[50%] cursor-pointer" onChange={handleFileChange} />
                        </div>
                        {preview.thumbnail && <img src={preview.thumbnail} className="w-48 mt-2" />}
                    </div>
                </div>
                    {uploading && <div className="text-white text-center">Video Uploading</div>}
                <div className="flex items-center justify-center">
                    <button className="cursor-pointer w-[40%] text-primary bg-highlight rounded-3xl h-10 mt-8" onClick={uploadData}
                    disabled={uploading}>
                        Upload
                    </button>
                </div>
                    <div className="text-center text-red-500">{error}</div>
            </div>
        </div>
    );
};



export default UploadVideo