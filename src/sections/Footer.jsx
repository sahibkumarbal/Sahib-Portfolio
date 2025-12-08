import { mySocials } from "../constants";
const Footer = () => {
  return (
    <section className="flex flex-wrap items-center justify-between gap-5 pb-3 text-sm text-neutral-400 c-space">
      <div className="mb-4 bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
      <div className="flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>
      <div className="flex gap-3 justify">
  {mySocials.map((social, index) => (
    <a
  key={index}
  href={social.href}
  target="_blank"
  rel="noreferrer"
  className="
    group flex h-9 w-9 items-center justify-center
    rounded-md bg-white/10 border border-white/20
    transition-all duration-200
    hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(255,255,255,0.6)]
  "
>
    <img
      src={social.icon}
      alt={social.name}
      className="w-5 h-5 object-contain transition-transform duration-200 group-hover:scale-110"
    />
</a>

  ))}
</div>

      <p>© 2025 {new Date().getFullYear()} Sahib Kumar Bal. All rights reserved.</p>
    </section>
  );
};

export default Footer;
