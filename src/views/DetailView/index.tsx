"use client"

import { notFound } from "next/navigation"
import useFetchItem from "@/hooks/useFetchItem"
import BackgroundImageSection from "@/sections/BackgroundImageSection"
import Section from "@/components/Sections"
import DetailAndMoreLikeSection from "@/sections/DetailAndMoreLikeSection"

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

  if (loading) {
    // TODO: Crear un loader
    return <Section>Cargando ...</Section>
  }

  return (
    <>
      <BackgroundImageSection data={data} />
      <DetailAndMoreLikeSection data={data} />
    </>
  )
}

export default DetailView
