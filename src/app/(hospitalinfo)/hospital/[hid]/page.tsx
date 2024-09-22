"use client"

import { useParams } from 'next/navigation';
import Image from 'next/image';

interface HospitalDetails {
  name: string;
  imageSrc: string;
}

const mockHospitalDetails: Map<string, HospitalDetails> = new Map([
  ['001', { name: 'Chulalongkorn Hospital', imageSrc: '/img/chulalongkorn.jpg' }],
  ['002', { name: 'Rajavithi Hospital', imageSrc: '/img/rajavithi.jpg' }],
  ['003', { name: 'Thammasat University Hospital', imageSrc: '/img/thammasat.jpg' }],
]);

export default function HospitalDetails({ params }: { params?: { hid: string } }) {
  const routeParams = useParams();
  const hid = params?.hid || routeParams?.hid as string;

  if (!hid) {
    return <div>Invalid hospital ID</div>;
  }

  const hospital = mockHospitalDetails.get(hid);

  if (!hospital) {
    return <div>Hospital not found</div>;
  }

  return (
    <div className="container mx-auto py-8 bg-gray-100 rounded-md">
      <div className="flex items-center space-x-8">
        <div className="relative overflow-hidden px-8">
          <Image 
            src={hospital.imageSrc} 
            alt={hospital.name} 
            width={400}
            height={320}
            objectFit="cover"
            className='rounded-md'
          />
        </div>
        <h1 className="text-2xl font-bold text-gray-900">
          {hospital.name}
        </h1>
      </div>
    </div>
  );
}