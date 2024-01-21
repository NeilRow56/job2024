import { Metadata } from 'next'
import NewJobForm from './_components/NewJobForm'

// We can only export metadata from a server component

export const metadata: Metadata = {
  title: 'Post a new job',
}

export default function newJobPage() {
  return <NewJobForm />
}
