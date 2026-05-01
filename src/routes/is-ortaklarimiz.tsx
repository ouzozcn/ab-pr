import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/is-ortaklarimiz')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/is-ortaklarimiz"!</div>
}
