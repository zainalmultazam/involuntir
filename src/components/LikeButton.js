import { useState } from "react";

const LikeButton = ({likeCount}) => {
    const [likes, setLikes] = useState(0);
    const [likeStatus, setLikeStatus] = useState(false);

    function clickLike (likeCount) {
        if(likeStatus === true) {
            setLikes(likes - 1);
            setLikeStatus(false);
        } else {
            setLikes(likeCount + 1);
            setLikeStatus(true);
        }  
    }

    return (
        <div>
            <button className="flex items-center" onClick={() => clickLike(likeCount)}>
            <svg
                width={20}
                height={20}
                viewBox="0 0 15 15"
                fill={likeStatus ? `#F91880` : `none`}
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                d="M7.8875 13.0062C7.675 13.0812 7.325 13.0812 7.1125 13.0062C5.3 12.3875 1.25 9.80621 1.25 5.43121C1.25 3.49996 2.80625 1.93746 4.725 1.93746C5.8625 1.93746 6.86875 2.48746 7.5 3.33746C8.13125 2.48746 9.14375 1.93746 10.275 1.93746C12.1938 1.93746 13.75 3.49996 13.75 5.43121C13.75 9.80621 9.7 12.3875 7.8875 13.0062Z"
                stroke={likeStatus ? `#F91880` : `#717171`}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                />
            </svg>
            <p className={`ml-[8px] text-basic ${likeStatus ? ` text-[#F91880]` : ``}`}>{likeStatus ? likes : likeCount} Suka</p>
            </button>
        </div>
    );
};

export default LikeButton;
