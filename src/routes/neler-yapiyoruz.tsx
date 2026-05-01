import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/neler-yapiyoruz')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/neler-yapiyoruz"!</div>
}
