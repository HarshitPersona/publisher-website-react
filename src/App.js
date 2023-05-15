import { useEffect } from "react";
import "./App.css";

import { PersonaAdSDK } from "persona-ad-sdk";

function App() {
  const config = {
    apiKey: "c2f376f0-4077-40e5-ad64-c26d80a879a9",
  };

  // const generateApiKeyButtonEl = document.getElementById(
  //   "generateApiKeyButton"
  // );
  // const createAssetButtonEl = document.getElementById("createAssetButton");

  const callTheApi = async () => {
    const personaAdSdk = new PersonaAdSDK(config);
    const adSdk = await personaAdSdk.getClient();

    adSdk.showAd({
      placementId: "645e2e853fd522ba86c915ed",
      adFormat: "Banner",
      containerId: "banner-1",
      adConfig: { dimensions: "600x160" },
    });

    adSdk.showAd({
      placementId: "645e2e853fd522ba86c915ed",
      adFormat: "Banner",
      containerId: "banner-2",
      adConfig: { dimensions: "300x250" },
    });

    adSdk.showAd({
      placementId: "645e2e853fd522ba86c915ed",
      adFormat: "Banner",
      containerId: "banner-3",
      adConfig: { dimensions: "600x160" },
    });
  };

  // generateApiKeyButtonEl?.addEventListener("click", async () => {
  //   const res = await axios.patch(
  //     "http://localhost:3000/api/publishers/api-key",
  //     { email: "harshit1kumar@gmail.com" }
  //   );
  //   console.log(res);
  // });

  // createAssetButtonEl?.addEventListener("click", async () => {
  //   const res = await axios.post("http://localhost:3000/api/assets", {
  //     email: "harshit1kumar@gmail.com",
  //   });
  //   console.log(res);
  // });

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
