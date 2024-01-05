import { auth, clerkClient } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { SessionDetails, UserDetails } from "./dashboard/details";
import { postMessage } from "./helpers/apiService";
import dynamic from "next/dynamic";

const PostThoughtFormWithNoSSR = dynamic(
  () => import("../components/PostThoughtForm"),
  { ssr: false }
);

export default async function DashboardPage() {
  const { userId } = auth();

  if (!userId) {
    redirect("/");
  }

  const user = await clerkClient.users.getUser(userId);

  const handlePostMessage = (messageContent: string) => {
    const newMessage = { ThoughtContent: messageContent };
    postMessage(newMessage)
      .then((response) => {})
      .catch((error) => console.error("Error posting message", error));
  };

  return (
    <div className="px-8 py-12 sm:py-16 md:px-20">
      {user && (
        <>
          <h1 className="text-3xl font-semibold text-black">
            👋 Hi, {user.firstName || `Stranger`}
          </h1>
          <div className="grid gap-4 mt-8 lg:grid-cols-3">
            <UserDetails />
            <SessionDetails />
          </div>
          <div>
            <div className="flex p-4">
              <h3 className="text-xl leading-6 font-semibold text-gray-900 my-auto">
                New Thought
              </h3>
            </div>
            <PostThoughtFormWithNoSSR userId={user.firstName || " Developer"} />
            
          </div>
        </>
      )}
    </div>
  );
}
