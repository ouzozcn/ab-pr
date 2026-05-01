import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/iletisim')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/iletisim"!</div>
}
