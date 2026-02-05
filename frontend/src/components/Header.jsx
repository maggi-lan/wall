import { PlusIcon, MinusIcon } from "lucide-react";

function Header({ adding, toggleAddBox }) {
    return (
        <header className="bg-neutral border-b border-neutral-content/10">
            <div className="mx-auto max-w-6xl p-4">
                <div className="flex items-center justify-between">
                    <h1 className="text-3xl font-bold text-secondary font-mono tracking-tight">
                        WALL
                    </h1>
                    <div className="flex items-center gap-4">
                        <button onClick={toggleAddBox} className="btn btn-accent">
                            {adding ? (
                                <>
                                    <PlusIcon className="size-5" />
                                    <span>Add New Message</span>
                                </>
                            ) : (
                                <>
                                    <MinusIcon className="size-5" />
                                    <span>Hide Message Box</span>
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
