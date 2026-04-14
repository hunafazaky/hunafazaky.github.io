// interface NavbarMenuProps extends React.HTMLAttributes<HTMLDivElement> {
//   children: React.ReactNode;
// }

export default function NavbarMenu({children, ...props}:any) {
  return (
    <div {...props} itemID="params">{children}</div>
  )
}