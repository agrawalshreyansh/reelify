import React, { useState } from 'react';
import axios from 'axios';
import { Loader } from '../components';
import { BASE_URL } from '../constants';

const UploadVideo = () => {
    const [video, setVideo] = useState(null);
    const [videoPreview, setVideoPreview] = useState(null);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [playlist, setPlaylist] = useState('');
    const [thumbnail, setThumbnail] = useState(null);
    const [thumbnailPreview, setThumbnailPreview] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleVideoChange = (e) => {
        const file = e.target.files[0];
        setVideo(file);
        if (file) {
            setVideoPreview(URL.createObjectURL(file));
        }
    };

    const handleThumbnailChange = (e) => {
        const file = e.target.files[0];
        setThumbnail(file);
        if (file) {
            setThumbnailPreview(URL.createObjectURL(file));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('videoFile', video);
        formData.append('title', title);
        formData.append('description', description);
        formData.append('category', category);
        formData.append('playlist', playlist);
        formData.append('thumbnailFile', thumbnail);
        setIsLoading(true);
        try {
            const response = await axios.post(`${BASE_URL}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data', // Set to 'multipart/form-data'
                },
                withCredentials: true, // Include credentials for CORS
            });

            console.log('Video uploaded successfully:', response.data);
            setIsLoading(false);
        } catch (error) {
            console.error('Error uploading video:', error.response || error.message);
            setIsLoading(false);
        }
    };

    return (
        <div className="container px-36 py-6 overflow-y-scroll h-full scrollbar-hidden">
            <h2 className="text-3xl font-bold mb-6">Upload Videos</h2>

            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                {/* Video Upload */}
                <div className="mb-6">
                    <p className="mb-4 text-lg">Drag and drop video files to upload</p>
                    <div className="border-3 border-dashed border-ternary rounded-lg w-full h-96 flex flex-col items-center justify-center relative overflow-hidden py-4">
                        {!videoPreview ? (
                            <>
                                <p className="mb-2 text-base font-semibold">Select files from your computer</p>
                                <label htmlFor="video" className="bg-[#267bcb] text-white px-6 py-3 rounded-lg cursor-pointer hover:bg-[#267bcb6b]">
                                    Browse Files
                                </label>
                                <input
                                    type="file"
                                    id="video"
                                    accept="video/*"
                                    onChange={handleVideoChange}
                                    className="hidden"
                                />
                            </>
                        ) : (
                            <div className="w-full h-full flex items-center justify-center">
                                <video className="h-full" controls>
                                    <source src={videoPreview} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        )}
                    </div>
                </div>

                {/* Title */}
                <div className="w-[60%]">
                    <div className="mb-6">
                        <label htmlFor="title" className="block text-lg font-semibold mb-2">Title</label>
                        <input
                            type="text"
                            id="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Enter video title"
                            className="border rounded-lg p-3 w-full bg-secondary border-ternary focus:border-highlight focus:outline-none"
                        />
                    </div>

                    {/* Description */}
                    <div className="mb-6">
                        <label htmlFor="description" className="block text-lg font-semibold mb-2">Description</label>
                        <textarea
                            id="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Enter video description"
                            className="border rounded-lg p-3 w-full bg-secondary border-ternary focus:border-highlight focus:outline-none h-36"
                        />
                    </div>

                    {/* Category */}
                    <div className="mb-6">
                        <label htmlFor="category" className="block text-lg font-semibold mb-2">Category</label>
                        <select
                            id="category"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="border rounded-lg p-3 w-full bg-secondary border-ternary focus:border-highlight focus:outline-none"
                        >
                            <option value="">Select Category</option>
                            <option value="music">Music</option>
                            <option value="podcast">Podcast</option>
                            <option value="sports">Sports</option>
                            <option value="cars">Cars</option>
                            <option value="unboxing">Unboxing</option>
                        </select>
                    </div>

                    {/* Playlist */}
                    <div className="mb-6">
                        <label htmlFor="playlist" className="block text-lg font-semibold mb-2">Playlist</label>
                        <select
                            id="playlist"
                            value={playlist}
                            onChange={(e) => setPlaylist(e.target.value)}
                            className="border rounded-lg p-3 w-full bg-secondary border-ternary focus:border-highlight focus:outline-none"
                        >
                            <option value="">Select Playlist</option>
                            <option value="1">Playlist 1</option>
                            <option value="2">Playlist 2</option>
                            <option value="3">Playlist 3</option>
                        </select>
                    </div>

                    {/* Thumbnail */}
                    <div className="mb-6">
                        <label htmlFor="thumbnail" className="block text-lg font-semibold mb-2">Thumbnail Image</label>
                        <input
                            type="file"
                            id="thumbnail"
                            accept="image/*"
                            onChange={handleThumbnailChange}
                            className="border rounded-lg p-3 w-full bg-secondary border-ternary focus:border-highlight focus:outline-none"
                        />
                        {thumbnailPreview && (
                            <div className="mt-4">
                                <h3 className="font-semibold">Thumbnail Preview:</h3>
                                <img src={thumbnailPreview} alt="Thumbnail Preview" className="w-32 h-32 object-cover rounded-lg" />
                            </div>
                        )}
                    </div>
                </div>

               
                {isLoading ?
                    <div className="flex justify-center mb-16">
                        <Loader />
                    </div>
                    :
                    <div className='flex justify-end mb-16'>
                        <button
                            type="submit"
                            className="bg-[#267bcb] text-white rounded-xl p-3 px-8 mt-4 hover:bg-green-600 cursor-pointer hover:font-bold w-32"
                        >
                            Upload
                        </button>
                    </div>
                }
            </form>
        </div>
    );
};

export default UploadVideo;
