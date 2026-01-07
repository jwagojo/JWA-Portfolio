function BackButton({ onClick }) {
    return (
        <button
            onClick={onClick}
            className="absolute top-6 md:top-20 left-6 md:left-20 z-20 text-white text-sm md:text-xl font-['IBM_Plex_Mono',_monospace] border-2 border-white px-4 md:px-6 py-2 md:py-3 hover:bg-white hover:text-black transition-all duration-300"
        >
            ← Back
        </button>
    );
}

export default BackButton;