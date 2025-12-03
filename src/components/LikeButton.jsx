import { useState,useEffect } from "react";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { FaDownload } from "react-icons/fa6";
import { FaShareFromSquare } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";
import usePatchData from "../hooks/usePatchData";
import { useParams } from "react-router-dom";

const LikeDislikeButton = ({ initialLikes, initialDislikes }) => {

    const [liked, setLiked] = useState(false);
    const [disliked, setDisliked] = useState(false);
    const [likes, setLikes] = useState(initialLikes);
    const [dislikes, setDislikes] = useState(initialDislikes);
    const { id } = useParams()

    const { statusCode: likeStatus, response: likeResponse, fetch: IncreaseLikes } = usePatchData(`videos/${id}/like`, true);
    const { statusCode: dislikeStatus, response: dislikeResponse, fetch: IncreaseDislikes } = usePatchData(`videos/${id}/dislike`, true);

const handleLike = async () => {
  try {
    await IncreaseLikes();
  } catch (error) {
    console.error("Error liking the video:", error);
  }
};

const handleDislike = async () => {
  try {
    await IncreaseDislikes();
  } catch (error) {
    console.error("Error disliking the video:", error);
  }
};

        useEffect(() => {
        if (likeStatus === 200) {
            setLiked(p => !p);
            setLikes(likeResponse.likeCount);
            if (disliked) {
            setDisliked(false);
            setDislikes(dislikes - 1);
            }
        }
        }, [likeStatus, likeResponse]);

        useEffect(() => {
        if (dislikeStatus === 200) {
            setDisliked(p => !p);
            setDislikes(dislikeResponse.dislikeCount);
            if (liked) {
            setLiked(false);
            setLikes(likes - 1);
            }
        }
        }, [dislikeStatus, dislikeResponse]);


    return (
        <div className="flex gap-6 text-3xl">
            {/* Like */}
            <div className="flex">
                <button onClick={handleLike} className="relative focus:outline-none">
                    <AnimatePresence mode="wait">
                        {liked ? (
                            <motion.div
                                key="liked"
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1.2, opacity: 1 }}
                                exit={{ scale: 0.8, opacity: 0 }}
                                transition={{ type: "spring", stiffness: 300, damping: 10 }}
                                className="text-blue-600 cursor-pointer"
                            >
                                <AiOutlineLike />
                            </motion.div>
                        ) : (
                            <div className="text-highlight hover:text-blue-500 cursor-pointer">
                                <AiOutlineLike />
                            </div>
                        )}
                    </AnimatePresence>
                </button>
                <p className="text-xl ml-2">{likes}</p>
            </div>

            {/* Dislike */}
            <div className="flex">
                <button onClick={handleDislike} className="relative focus:outline-none ml-4">
                    <AnimatePresence mode="wait">
                        {disliked ? (
                            <motion.div
                                key="disliked"
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1.2, opacity: 1 }}
                                exit={{ scale: 0.8, opacity: 0 }}
                                transition={{ type: "spring", stiffness: 300, damping: 10 }}
                                className="text-red-600 cursor-pointer"
                            >
                                <AiOutlineDislike />
                            </motion.div>
                        ) : (
                            <div className="text-highlight hover:text-red-500 cursor-pointer">
                                <AiOutlineDislike />
                            </div>
                        )}
                    </AnimatePresence>
                </button>
                <p className="text-xl ml-2">{dislikes}</p>
            </div>

            <motion.button
                whileHover={{ scale: 1.2, rotate: -10 }}
                whileTap={{ scale: 0.9, rotate: -20 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
                className="text-2xl text-highlight hover:text-blue-600 mx-6 cursor-pointer"
            >
                <FaShareFromSquare />
            </motion.button>
            <motion.button
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9, rotate: 20 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
                className="text-2xl text-highlight hover:text-green-600 cursor-pointer"
            >
                <FaDownload />
            </motion.button>
        </div>
    );
};

export default LikeDislikeButton;
