import HyperLink from "../ui/HyperLink";

export default function Navbar() {
  return (
    <nav className="font-pixel flex flex-row sticky top-0 gap-4 bg-brand-dark text-brand-dawn p-4">
      <HyperLink href="#">HOME</HyperLink>
      <HyperLink href="#summary">SUMMARY</HyperLink>
      <HyperLink href="#skills">SKILLS</HyperLink>
      <HyperLink href="#quest-log">QUEST LOG</HyperLink>
      <HyperLink href="#projects">ACHIEVEMENTS</HyperLink>
      <HyperLink href="#contacts">CONTACTS</HyperLink>
    </nav>
  );
}
