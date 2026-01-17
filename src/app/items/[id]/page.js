export default function ItemDetailPage({ params }) {
  const { id } = params;
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Item Detail: {id}</h1>
    </div>
  );
}
