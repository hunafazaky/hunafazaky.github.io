import NavbarMenu from "./NavbarMenu"

export default function Navbar() {
  return (
    <nav className="flex flex-row gap-4 bg-brand-dark text-brand-dawn p-4">
      <NavbarMenu onClick={() => alert('Halo!')} itemID="home">Home</NavbarMenu>
      <div itemID="summary">Summary</div>
      <div itemID="skills">SKills</div>
      <div itemID="experiences">Experiences</div>
      <div itemID="projects">Projects</div>
      <div itemID="contact">Contact</div>
    </nav>
  )
}