import toast from "react-hot-toast";

function App() {
    return (
        <div data-theme="retro">
            <button
                onClick={() => toast.success("This was a success")}
                className="btn btn-outline m-4"
            >
                Click Me
            </button>
        </div>
    );
}

export default App;
