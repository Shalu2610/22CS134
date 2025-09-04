import React, { useState } from "react";
import { Log } from './utils/logger';

function App() {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  const handleShorten = async () => {
    await Log("frontend", "info", "App", "User clicked shorten button");

    if (!url) {
      await Log("frontend", "error", "App", "No URL entered");
      return;
    }

    const fakeShortUrl = "https://short.ly/" + Math.random().toString(36).substring(7);
    setShortUrl(fakeShortUrl);

    await Log("frontend", "info", "App", `Short URL created: ${fakeShortUrl}`);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>URL Shortener</h1>
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Enter long URL"
        style={{ width: "300px", marginRight: "10px" }}
      />
      <button onClick={handleShorten}>Shorten</button>

      {shortUrl && (
        <p>
          Short URL: <a href={shortUrl}>{shortUrl}</a>
        </p>
      )}
    </div>
  );
}

export default App;