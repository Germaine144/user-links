'use client';

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  company: {
    name: string;
  };
}

export default function UserProfile() {
  const params = useParams();
  const id = params.id as string;

  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) {
      console.warn("User ID not available yet.");
      return;
    }

    const fetchUser = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        if (!response.ok) throw new Error("User not found");
        const data = await response.json();
        setUser(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [id]);

  if (loading) return <p className="mt-10 text-center">Loading...</p>;
  if (error) return <p className="mt-10 text-center text-red-500">Error: {error}</p>;

  return (
    <div className="bg-white max-w-md mx-auto mt-10 p-6 rounded shadow text-black">
      <h2 className="text-2xl font-semibold mb-4">User Profile</h2>
      <p><strong>Name:</strong> {user?.name}</p>
      <p><strong>Username:</strong> {user?.username}</p>
      <p><strong>Email:</strong> {user?.email}</p>
      <p><strong>Company:</strong> {user?.company.name}</p>
    </div>
  );
}
