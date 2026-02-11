"use client";
import React, { useEffect, useState } from "react";
import Topic from "./_components/topic";

function CreateNewVideo() {
    const [formData, setFormData] = useState({});
    const onHandeInputChange = (fieldName: string, fieldValue: string) => {
        setFormData(prev => ({
            ...prev,
            [fieldName]: fieldValue,
        }));
    };

    useEffect(() => {
        console.log(formData);
    }, [formData]);
    
  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">Create New Video</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 mt-8">
        <div className="col-span-2 p-7 border rounded-xl">
          {/* Topic */}

          <Topic onHandeInputChange={onHandeInputChange} />
          {/* Video Image Style */}

          {/* Voice */}

          {/* Captions */}
        </div>
        <div className=""></div>
      </div>
    </div>
  );
}

export default CreateNewVideo;
