interface TaskButtonProps {
  type: "done" | "remove"; // Define possible types
  onClick: () => void; // onClick prop should be a function
}

export default function TaskButton({ type, onClick }: TaskButtonProps) {
  return (
    <button
      type="button"
      className="p-1 bg-sky-200 rounded-full flex justify-center items-center transition hover:text-white hover:bg-sky-500 hover:scale-125 text-blue-500"
      onClick={onClick} // Correct usage without quotes
    >
      {type === "done" ? (
        <span className="material-symbols-outlined font-bold">done</span>
      ) : (
        <span className="material-symbols-outlined font-bold">close</span>
      )}
    </button>
  );
}
