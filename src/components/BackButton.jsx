function BackButton({ onClick }) {
    return (
        <button
            onClick={onClick}
            className="absolute bottom-20 left-20 z-20 text-white text-xl font-['IBM_Plex_Mono',_monospace] border-2 border-white px-6 py-3 hover:bg-white hover:text-black transition-all duration-300"
        >
            ← Back to Menu
        </button>
    )
}

export default BackButton;