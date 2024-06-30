import React, { useState } from 'react';
// import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { RlDB, /* storage */ } from './FirebaseConfig';
import { ref, push } from 'firebase/database';

function UploadData({ user }) {
    const [caption, setCaption] = useState('');
    // const [attch, setAttch] = useState(null);

    /* const handleAttachmentControls = (e) => {
        setAttch(e.target.files[0]);
    } */

    const handleCaptionControls = async (e) => {
        e.preventDefault();
        if (caption) {
            try {
                /* const storageRef = ref(storage, `UserUploadsAttch/${attch.name}`);
                await uploadBytes(storageRef, attch);
                const attchURL = await getDownloadURL(storageRef); */

                const msgTime = formatDateTime(new Date()); // Get the current date and time in desired format

                await push(ref(RlDB, `/UsersContent(${user.displayName})`), {
                    caption: caption,
                    time: msgTime
                    /* attch: attchURL */
                }).then(() => {
                    setCaption('');
                });
                console.log("Data stored successfully");
            } catch (error) {
                console.log("Error adding Data", error);
            }
        } else {
            alert("Type something...");
        }
    }

    const formatDateTime = (date) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based, so add 1
        const day = String(date.getDate()).padStart(2, '0');
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        //const seconds = String(date.getSeconds()).padStart(2, '0');
        return `${year}-${month}-${day} | ${hours}:${minutes}`;
    }

    return (
        <div className="flex flex-col items-center">
            <h1 className="text-center font-serif font-semibold mb-4">{user.displayName}, start by typing something</h1>
            <form className="flex flex-col items-center" onSubmit={handleCaptionControls}>
                <input
                    className="border border-slate-500 focus:border-slate-300 p-2 w-64 font-extrabold rounded-md mb-4"
                    type="text"
                    placeholder="Type a caption"
                    value={caption}
                    onChange={(e) => setCaption(e.target.value)}
                />
                <button
                    className="bg-green-600 p-2 text-white font-extrabold rounded-md w-full opacity-75 hover:opacity-100"
                    type="submit"
                >
                    Send
                </button>
            </form>
        </div>
    );
}

export default UploadData;
