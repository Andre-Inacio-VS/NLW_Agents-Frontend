import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';

type GetRoomsAPIResponse = {
  id: string;
  name: string;
}[];

export function CreateRoom() {
  const { data, isLoading } = useQuery({
    queryKey: ['get-rooms'],
    queryFn: async () => {
      const response = await fetch('http://localhost:3333/rooms');

      const res: GetRoomsAPIResponse = await response.json();

      return res;
    },
  });

  return (
    <div>
      <div>Create Room</div>

      {isLoading && <p>Loading...</p>}
      <div className="flex flex-col gap-2">
        {data?.map((room) => {
          return (
            <Link key={room.id} to={`/room/${room.id}`}>
              {room.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
