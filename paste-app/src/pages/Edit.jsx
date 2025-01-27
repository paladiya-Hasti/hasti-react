// src/pages/EditPage.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateToPaste } from '../assets/redux/PasteSlice';

const EditPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const allPastes = useSelector((state) => state.paste.pastes);
  const paste = allPastes.find((p) => p._id === id);

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (paste) {
      setTitle(paste.title);
      setContent(paste.content);
    }
  }, [paste]);

  const handleUpdate = () => {
    if (paste) {
      const updatedPaste = {
        ...paste,
        title,
        content,
      };
      dispatch(updateToPaste(updatedPaste));
    }
  };

  return (
    <div className="p-6">
      <div>
        <input
          type="text"
          className="p-2 rounded-2xl border w-full focus:ring-2 focus:ring-blue-500"
          placeholder="Edit the title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="mt-4">
        <textarea
          value={content}
          className="rounded-2xl p-4 border w-full focus:ring-2 focus:ring-blue-500"
          placeholder="Edit content here"
          onChange={(e) => setContent(e.target.value)}
          rows={20}
        />
      </div>
      <button
        onClick={handleUpdate}
        className="bg-blue-500 text-white px-4 py-2 rounded-2xl hover:bg-blue-600 mt-4"
      >
        Update Paste
      </button>
    </div>
  );
};

export default EditPage;
