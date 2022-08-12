import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-zinc-700 flex justify-between px-20 py-4">
      <Link to="/" className="text-white font-bold">
        <h1>Task - React</h1>
      </Link>
      <ul className="flex gap-x-1">
        <li>
          <Link to="/" className="text-white px-2 py-1 hover:bg-violet-600">Home</Link>
        </li>
        <li>
          <Link to="/new" className="text-white px-2 py-1 hover:bg-violet-600">New Task</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
