import { Button, FileInput, Select, TextInput } from "flowbite-react";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const CreatePost = () => {
  const [value, setValue] = useState("");
  return (
    <div className="p-3 max-w-3xl mx-auto min-h-screen">
      <h1 className="text-center text-3xl my-7 font-semibold">CreatePost</h1>

      <form className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 sm:flex-row justify-between">
          <TextInput type="text" required id="title" className="flex-1" />
          <Select>
            <option value="uncategorized">Select a category</option>
            <option value="javascript">JavaScript</option>
            <option value="reactjs">React.js</option>
            <option value="nextjs">Next.js</option>
          </Select>
        </div>

        <div className="flex gap-4 items-center justify-between border-4 border-teal-500 border-dotted p-3">
          <FileInput type="file" accept="image/*" />
          <Button type="button" size="sm" gradientDuoTone="purpleToBlue">
            Upload image
          </Button>
        </div>

        <ReactQuill
          placeholder="Write something...."
          className="h-72 mb-12"
          theme="snow"
          value={value}
          onChange={setValue}
          required
        />

        <Button type="submit" gradientDuoTone="purpleToPink">
          Publish
        </Button>
      </form>
    </div>
  );
};

export default CreatePost;
