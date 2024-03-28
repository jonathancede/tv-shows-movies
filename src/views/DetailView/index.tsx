"use client"

import { notFound } from "next/navigation"
import useFetchItem from "@/hooks/useFetchItem"
import BackgroundImageSection from "@/sections/BackgroundImageSection"

interface DetailPageProps {
  params: {
    identificator: string
  }
}

const DetailView: React.FC<DetailPageProps> = ({ params }) => {
  const { identificator = "" } = params
  const [type, id] = identificator.split("-")
  const { loading, data, failed } = useFetchItem(type, id)

  if (failed) {
    return notFound()
  }

  console.log(loading, data, failed)

  if (loading) {
    // TODO: Crear un loader
    return <div>Cargando...</div>
  }

  return (
    <>
      <BackgroundImageSection />
    </>
  )
}

export default DetailView
