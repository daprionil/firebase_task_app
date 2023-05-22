function Loading() {
    return (
        <div className="relative w-full h-20 p-3 animate-spin col-span-full ">
            <div className="absolute w-14 h-14 bg-white left-1/2 transform -translate-x-1/2 rounded-full shadow-[inset_6px_0_0_black]"></div>
        </div>
    );
}

export default Loading;