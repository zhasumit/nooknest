import "./App.css";
import shorticon from "/shorticon1.png";

function App() {
    return (
        <div>
            <header className="p-3 px-10 flex justify-between items-center">
                <a href="/" className="flex items-center gap-1">
                    <img src={shorticon} className="h-6" />
                    <div className="text-xl font-semibold">
                        <span>nook</span>
                        <span className="font-semibold text-lg font-['Chokokutai']">
                            N
                        </span>
                        <span>est</span>
                    </div>
                </a>

                <div className="flex py-2 px-1 border-gray-300 border-solid border-2 rounded-full gap-2 items-center font-medium shadow-md shadow-gray-300">
                    <div className="px-3 border-r-2">Anywhere</div>
                    <div className="px-3 border-r-2">Any week</div>
                    <div className="pl-3 pr-1 font-light hover:font-medium text-gray-600">
                        Add guests
                    </div>
                    <button className="bg-primary rounded-full p-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="#fff"
                            className="size-4"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>
                </div>

                <div className="flex px-3 py-2 border-gray-300 border-solid border-2 rounded-full gap-1 items-center font-medium shadow-md shadow-gray-300">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.4}
                        stroke="currentColor"
                        className="size-5"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                        />
                    </svg>

                    <div className="bg-gray-500 text-white rounded-full border-gray-600 border-solid border-[1px] overflow-hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="size-6 relative top-1"
                        >
                            <path
                                fillRule="evenodd"
                                d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default App;
