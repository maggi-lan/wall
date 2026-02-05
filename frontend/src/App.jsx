import { useState } from "react";
import toast from "react-hot-toast";

import Header from "./components/Header.jsx";
import RateLimitedUI from "./components/RateLimitedUI.jsx";

function App() {
    const [adding, setAdding] = useState(true);
    const [isRateLimited, setIsRateLimited] = useState(false);

    const toggleAddBox = () => setAdding((val) => !val);

    return (
        <div data-theme="retro">
            <Header adding={adding} toggleAddBox={toggleAddBox} />
            { isRateLimited && <RateLimitedUI /> }
        </div>
    );
}

export default App;
