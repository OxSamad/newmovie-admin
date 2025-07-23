"use client";

import { useState } from "react";

export default function Dashboard() {
  const [title, setTitle] = useState("");
  const [poster, setPoster] = useState("");
  const [category, setCategory] = useState("Action");
  const [downloadLink, setDownloadLink] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    alert("Movie Uploaded!\n\n" + JSON.stringify({ title, poster, category, downloadLink }));
    // এখানে আপনি Firebase upload করতে পারবেন পরে
  };

  return (
    <div className="min-h-screen bg-black text-white flex justify-center p-4">
      <form onSubmit={handleSubmit} className="bg-gray-900 p-6 rounded-lg w-full max-w-md space-y-4">
        <h2 className="text-2xl font-bold">🎬 Upload New Movie</h2>

        <input
          type="text"
          placeholder="Movie Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 rounded bg-gray-800 border border-gray-600"
        />

        <input
          type="text"
          placeholder="Poster URL"
          value={poster}
          onChange={(e) => setPoster(e.target.value)}
          className="w-full p-2 rounded bg-gray-800 border border-gray-600"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full p-2 rounded bg-gray-800 border border-gray-600"
        >
          <option value="Action">Action</option>
          <option value="Drama">Drama</option>
          <option value="Web Series">Web Series</option>
        </select>

        <input
          type="text"
          placeholder="Download Link"
          value={downloadLink}
          onChange={(e) => setDownloadLink(e.target.value)}
          className="w-full p-2 rounded bg-gray-800 border border-gray-600"
        />

        <button type="submit" className="w-full p-2 bg-blue-600 rounded hover:bg-blue-700">
          Upload Movie
        </button>
      </form>
    </div>
  );
}
