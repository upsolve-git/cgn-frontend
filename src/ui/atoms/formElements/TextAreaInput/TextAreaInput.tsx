import React from 'react';

interface TextAreaInputProps {}

const TextAreaInput: React.FC<TextAreaInputProps> = () => {
  return (
    <div>
        <label className="whitespace-nowrap font-medium text-xs tablet:text-sm desktop:text-md">
            Description
        </label>
        <textarea
            className="w-full border rounded-md px-3 py-2 text-xs tablet:text-sm desktop:text-md"
            rows={4}
            placeholder="Enter description here..."
        ></textarea>
    </div>
  );
};

export default TextAreaInput;
