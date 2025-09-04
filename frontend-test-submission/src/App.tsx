import React, { useState } from "react";
import { Log } from "./utils/logger";
import "./App.css";

function App() {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  const handleShorten = async () => {
    await Log("frontend", "info", "App", "User clicked shorten button");

    if (!url) {
      await Log("frontend", "error", "App", "No URL entered");
      return;
    }

    const fakeShortUrl =
      "https://short.ly/" + Math.random().toString(36).substring(7);
    setShortUrl(fakeShortUrl);

    await Log("frontend", "info", "App", `Short URL created: ${fakeShortUrl}`);
  };

  return (
    <div className="app-card">
      <h1>🔗 URL Shortener</h1>
      <div className="input-group">
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter long URL"
        />
        <button onClick={handleShorten}>Shorten</button>
      </div>

      {shortUrl && (
        <div className="short-url">
          Short URL: <a href={shortUrl}>{shortUrl}</a>
        </div>
      )}
    </div>
  );
}

export default App;