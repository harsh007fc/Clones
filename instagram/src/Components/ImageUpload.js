import { Button } from '@material-ui/core'
import React, { useState } from 'react'
import firebase from 'firebase';
import { storage, db } from '../Fireabase/Firebase'

function ImageUpload({ username }) {
    let [image, setImage] = useState(null);
    let [progress, setProgress] = useState(0);
    let [caption, setCaption] = useState('');


    let handleChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    }

    let handleUpload = (e) => {
        let uploadTask = storage.ref(`images/${image.name}`).put(image)

        uploadTask.on('state_changed', (snapshot) => {
            const progress = Math.round((snapshot.bytesTransferred) / (snapshot.totalBytes) * 100);
            setProgress(progress);
        }, (error) => {//error function
            console.log(error);
            alert(error.message);
        },
            () => {
                //complete function
                storage.ref('images').child(image.name).getDownloadURL()
                    .then(url => {
                        db.collection('posts').add({
                            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                            caption: caption,
                            imageUrl: url,
                            username: username
                        });
                        setProgress(0);
                        setImage(null);
                        setCaption('');

                    })

            })
    }
    return (
        <div>
            <progress value={progress} max='100'></progress>
            <input type="text" onChange={e => setCaption(e.target.value)} placeholder='Enter a Caption...' value={caption} />
            <input type="file" onChange={handleChange} />
            <Button onClick={handleUpload}>Uplaod</Button>
        </div>
    )
}

export default ImageUpload
