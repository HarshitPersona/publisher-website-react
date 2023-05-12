import { useEffect } from "react";
import "./App.css";

import axios from "axios";
import { PersonaSDK } from "ad-sdk-practice";

function App() {
  const config = {
    apiKey: "c2f376f0-4077-40e5-ad64-c26d80a879a9",
    appId: "645ce04c44984e299373da14",
  };

  const generateApiKeyButtonEl = document.getElementById(
    "generateApiKeyButton"
  );
  const createAssetButtonEl = document.getElementById("createAssetButton");

  const callTheApi = async () => {
    const adSdk = new PersonaSDK(config);
    await adSdk.initialize();
    adSdk.showAd(
      "dummyplacementid",
      "banner",
      { dimensions: { width: 600, height: 160 } },
      "banner-1"
    );
    adSdk.showAd(
      "dummyplacementid",
      "banner",
      { dimensions: { width: 300, height: 250 } },
      "banner-2"
    );
    adSdk.showAd(
      "dummyplacementid",
      "banner",
      { dimensions: { width: 600, height: 160 } },
      "banner-3"
    );
  };

  generateApiKeyButtonEl?.addEventListener("click", async () => {
    const res = await axios.patch(
      "http://localhost:3000/api/publishers/api-key",
      { email: "harshit1kumar@gmail.com" }
    );
    console.log(res);
  });

  createAssetButtonEl?.addEventListener("click", async () => {
    const res = await axios.post("http://localhost:3000/api/assets", {
      email: "harshit1kumar@gmail.com",
    });
    console.log(res);
  });

  useEffect(() => {
    callTheApi();
  });

  return (
    <>
      <header>
        <h1>Welcome to My Gaming Website</h1>
        <div id="banner-1"></div>
      </header>
      <nav>
        <ul>
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/games">Games</a>
          </li>
          <li>
            <a href="/reviews">Reviews</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
      <section>
        <h2>Featured Games</h2>
        <div id="banner-2"></div>
        <div className="game">
          <h3>Game 1</h3>
          <p>Description of Game 1.</p>
        </div>
        <div id="banner-3"></div>
        <div className="game">
          <h3>Game 2</h3>
          <p>Description of Game 2.</p>
        </div>
      </section>
      <footer>&copy; 2023 My Gaming Website. All rights reserved.</footer>
    </>
  );
}

export default App;
