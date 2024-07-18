import Link from "next/link";
const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr4 text-[#ADB7BE] sm:textxl rounded md:p-0 hover:textwhite"
    >
      {title}
    </Link>
  );
};
export default NavLink;
