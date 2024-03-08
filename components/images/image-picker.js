'use client';

import { useState } from 'react';
import Image from "next/image";
import classes from "./image-picker.module.css"
export default function ImagePicker({label, name}) {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setSelectedImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
        else {
            setSelectedImage(null);
        }
    };

    return (
        // <div>
        <>
            <input type="file" onChange={handleImageChange} id={name} name={name} accept="image/png, image/jpeg" />
            {selectedImage && (
                <>
                    <p>Selected Image Preview:</p>
                    <div className={classes.image}>
                        <Image src={selectedImage} alt="Selected" fill />
                    </div>
                </>
            )}
        </>
    );
}
