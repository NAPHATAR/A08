import CardPanel from "@/components/CardPanel";

export default function HospitalPage() {
  return (
    <div className="container mx-auto py-8 bg-gray-100 p-8 rounded-md">
      <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-10">
        Participating Hospitals
      </h1>
      <CardPanel />
    </div>
  )
}