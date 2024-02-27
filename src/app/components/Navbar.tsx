import Link from "next/link";
interface NavbarProps {
  switchHref: string;
  switchName: string;
}
const Navbar = ({ switchHref, switchName }: NavbarProps) => {
  return (
    <nav className="flex h-16 items-center justify-between border-b-2 border-indigo-600 px-4 py-4">
      <div className="flex items-center">
        <div className="text-sm font-bold ">
          <Link href={switchHref}>😀</Link>
        </div>
        <div className="ml-2 flex items-center text-sm font-bold ">EzEmoji</div>
      </div>
      <ul className={`flex w-full md:flex md:w-auto md:items-center`}>
        <li className="text-white">
          <Link href={switchHref}>
            <div className="bg-indigo-600 py-1 w-24 rounded-2xl flex justify-center">
              <span>{switchName}</span>
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
