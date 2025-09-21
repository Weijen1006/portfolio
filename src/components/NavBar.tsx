import { useLocation, useNavigate } from "react-router";
import { motion } from "framer-motion";

export default function Navbar() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/project", label: "Project" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 w-full flex items-center justify-between px-8 bg-black/50 backdrop-blur z-50 py-4">
      <div className="text-white font-bold"></div>

      <ul className="absolute left-1/2 -translate-x-1/2 flex gap-6 text-white">
        {navItems.map((item) => (
          <li key={item.path}>
            <button
              onClick={() => navigate(item.path, { replace: true })}
              className="relative"
            >
              {item.label}
              {pathname === item.path && (
                <motion.div
                  layoutId="underline"
                  className="absolute left-0 right-0 h-[2px] bg-white bottom-[-4px]"
                />
              )}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
