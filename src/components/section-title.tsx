export function SectionTitle({ title }: { title: string }) {
  return (
    <h2 className="my-2 border-b-2 border-amber-500 py-2 text-2xl font-bold uppercase dark:border-amber-400">
      {title}
    </h2>
  )
}
