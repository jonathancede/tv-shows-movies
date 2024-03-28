interface DetailPageProps {
  params: {
    id: string
  }
}

const DetailPage: React.FC<DetailPageProps> = ({ params }) => {
  const { id } = params
  return <div>Página de detalle del item {id}</div>
}

export default DetailPage
