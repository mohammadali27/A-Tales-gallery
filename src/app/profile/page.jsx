"use client";
import { UpdateUser } from "@/components/UpdateUsar";
import { authClient } from "@/lib/auth-client";
import { Avatar, Card } from "@heroui/react";

const ProfilePage = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;
  console.log(user);
  return (
    <div>
      <Card className="flex flex-col items-center justify-center p-10 mt-10 mb-10 mx-auto shadow-lg rounded-lg border hover:shadow-2xl transition-shadow duration-300 hover:scale-120 transform ">
        <Avatar className="h-30 w-30">
          <Avatar.Image 
            alt="John Doe "
            src={user?.image}
            referrerPolicy="no-referrer"
          />
          <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
        </Avatar>
        <h2 className="text-2xl font-bold mt-4">{user?.name}</h2>
        <p className="text-gray-600">{user?.email}</p>
        <UpdateUser/>
      </Card>
    </div>
  );
};

export default ProfilePage;
