import Link from 'next/link';
import Image from 'next/image';

interface Item {
    id: number;
    name: string;
    url: string;
    linkToPhoto: string;
    description: string;
    continent: string;
    country: string;
    coordinates: string;
}

type Props = {
    monument: Item,
};

export default function MonumentItem({ monument }: Props) {
  return (
    <div>
       {monument.name}
       <Image src={monument.linkToPhoto} 
            alt={monument.name} 
            width={220} 
            height={120} />
    </div>
  )
}
