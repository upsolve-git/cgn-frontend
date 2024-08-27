import React from "react";

interface FileInputProps{
    label: string
}

const FileInput: React.FC<FileInputProps> = ({
    label
})=>{
    return(
        <tr>
            <td>
                <label
                className="whitespace-nowrap font-medium">
                    {label}
                </label>
            </td>
            <td>
                <input type="file" />
            </td>
        </tr>
    )
}

export default FileInput