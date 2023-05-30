//

export default function Upload(props) {
   // הגדרת המשתנים

   const [show, setShow] = useState(false);
   const [files, setFiles] = useState([]);
   const [uploading, setUploading] = useState(false);
   const [uploadProgress, setUploadProgress] = useState({});
   const [successfullUploaded, setSuccessfullUploaded] = useState(false);
   const [result, setResult] = useState([]);

   const onFilesAdded = (newFiles) => {
    setFiles(files.concat(newFiles))
   //הצגת הוידאו
    setShow(true)
    }
}
    