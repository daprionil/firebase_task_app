function Message({message, clases}) {
    return (
        <p className={`mx-auto text-xl shadow-md text-center px-4 py-2 bg-white rounded-md ${clases}`}>{message}</p>
    );
}

export default Message;