import multer from "multer";

const storage = multer.diskStorage({
    destination:(req, file, cb)=>{
        cb(null,"uploads/images")
    },
    filename:(req, file, cb)=>{
        cb(null, Date.now()+"_"+file.originalname)
    }
})

export const upload = multer({storage:storage})