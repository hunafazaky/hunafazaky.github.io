import HyperLink from "../ui/HyperLink"

export default function Navbar() {
  return (
    <nav className="flex flex-row sticky top-0 gap-4 bg-brand-dark text-brand-dawn p-4">
      <HyperLink href="#">Home</HyperLink>
      <HyperLink href="#summary">Summary</HyperLink>
      <HyperLink href="#skills">Skills</HyperLink>
      <HyperLink href="#experiences">Experiences</HyperLink>
      <HyperLink href="#projects">Projects</HyperLink>
      <HyperLink href="#contacts">Contacts</HyperLink>
    </nav>
  )
}