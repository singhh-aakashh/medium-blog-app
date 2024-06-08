import {v2 as cloudinary} from 'cloudinary';
import fs from "fs"


    // Configuration
    cloudinary.config({ 
        cloud_name: "dh6f8ynnp", 
        api_key: "742189884557487", 
        api_secret: "e26xy-NxOu8Ko3IV28UeiKpHm6c" // Click 'View Credentials' below to copy your API secret
    });
    
    const uploadImage =async (localpath:string) =>{
try {
    if(!localpath) return null
    const uploadResult = await cloudinary.uploader.upload(localpath,{
        resource_type:"auto"
    })
    return uploadImage
} catch (error) {
    fs.unlinkSync(localpath)
    return null
}

    }
    // Upload an image
        
    export {uploadImage}
