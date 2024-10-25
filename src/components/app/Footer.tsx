import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col items-center h-full justify-center">
        {/* Logo or Brand Text */}
        <p className="text-white font-bold tracking-wide">
          {" "}
          © {new Date().getFullYear()} MY GPT
        </p>

        {/* Social Icons */}
        <div className="flex gap-4">
          <a
            href="https://github.com/THEeLov"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://linkedin.com/in/your-linkedin-username"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
