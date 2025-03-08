import "./ImageInput.css"
import {CiImageOn} from "react-icons/ci";
import {createRef, useRef, useState} from "react";

function ImageInput() {
    const [files, setFiles] = useState([null]);
    const inputRefs = useRef([createRef()]); // Use useRef para armazenar refs

    const handleImagesChange = (file, index) => {
        const newFiles = [...files];
        newFiles[index] = file;
        newFiles.push(null);

        // Adiciona um novo ref para o novo input
        inputRefs.current.push(createRef());

        setFiles(newFiles);
    };

    const handleDeleteImg = (index) => {
        if (files.length > 1) {
            setFiles((prevFiles) => {
                return prevFiles.filter((_, i) => i !== index);
            });
            // Remove o ref correspondente
            inputRefs.current.splice(index, 1);
        } else {
            inputRefs.current[index].current.value = null;
        }
    }

    return (
        <div>
            {files.map( (file, i) => (
                    <div key={i}>
                        <span onClick={() => handleDeleteImg(i)}>X</span>
                        <label htmlFor={`img${i}`}>
                            {file ? <img src={URL.createObjectURL(file)} alt={`Imagem ${i}`} style={{"aspect-ratio": "1", "width":"200px"}}/> : <CiImageOn/>}
                        </label>
                        <input
                            id={`img${i}`}
                            type='file'
                            name={`attachment${i+1}`}
                            accept="image/png, image/jpeg"
                            onChange={(e) => handleImagesChange(e.target.files[0], i)}
                            ref={inputRefs.current[i]}
                            style={{"display": "none"}}
                        />
                    </div>
                ))}
        </div>
    )
}

export default ImageInput