import { Button } from '@material-ui/core'
import React,{useState} from 'react'

function ImageUpload() {
    let [image,setImage] = useState(null);
    let [progress,setProgress] = useState(0);
    let [caption,setCaption] = useState('');


    let handleChange = (e) => {
        if(e.target.files[0]){
            setImage(e.target.files[0]);
        }
    }

    let handleUpload = (e) => {

    }
    return (
        <div>
            <h1>ABC</h1>
            <input type="text" onChange={e=>setCaption(e.target.value)} placeholder='Enter a Caption...' value={caption} />
            <input type="file" onChange={handleChange} />
            <Button onClick={handleUpload}>Uplaod</Button>
        </div>
    )
}

export default ImageUpload
