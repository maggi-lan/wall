import { PlusIcon, MinusIcon } from "lucide-react";

function Header({ isFormDisplayed, toggleAddBox }) {
    return (
        <header className="bg-neutral border-b border-neutral-content/10">
            <div className="mx-auto max-w-6xl p-4">
                <div className="flex items-center justify-between">
                    <h1 className="text-3xl font-bold text-primary font-mono tracking-tight">
                        WALL
                    </h1>
                    <div className="flex items-center gap-4">
                        <button onClick={toggleAddBox} className="btn btn-accent">
                            {!isFormDisplayed ? (
                                <>
                                    <PlusIcon className="size-5" />
                                    <span>Add New Message</span>
                                </>
                            ) : (
                                <>
                                    <MinusIcon className="size-5" />
                                    <span>Hide Message Form</span>
                                </>
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
