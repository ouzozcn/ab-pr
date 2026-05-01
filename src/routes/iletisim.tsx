import { createFileRoute } from '@tanstack/react-router'
import PageHeader from '../components/ui/PageHeader'
export const Route = createFileRoute('/iletisim')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <main className='flex flex-col'>
      <PageHeader title='Iletisim' description='Bize Projenizi Anlatın' />
    </main>
  )
}
