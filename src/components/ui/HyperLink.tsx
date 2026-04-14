export default function HyperLink({children, ...props}: React.ComponentPropsWithoutRef<'a'>) {
  return (
    <a {...props}>{children}</a>
  )
}