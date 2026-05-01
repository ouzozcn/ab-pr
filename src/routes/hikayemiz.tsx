import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/hikayemiz')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/hikayemiz"!</div>
}
