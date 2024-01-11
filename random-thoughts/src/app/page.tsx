import { UserDetails } from "./dashboard/details";
import ThoughtList from "@/components/ThoughtList";
import { mockUser } from "./helpers/mockData";
import PostThoughtForm from "../components/PostThoughtForm";


export default async function DashboardPage() {
  const user = mockUser;
  const isUserLoggedIn = user != null;

  if (!isUserLoggedIn) {
    console.log("Redirecting to home page");
    return null;
  }
  
  return (
    <div className="px-8 py-12 sm:py-16 md:px-20">
      {user && (
        <>
          <h1 className="text-3xl font-semibold text-black">
            👋 Hi, {user.firstName || `Stranger`}
          </h1>
          <div className="grid gap-4 mt-8 lg:grid-cols-3">
            <UserDetails />
          </div>
          <div>
            <div className="flex p-4">
              <h3 className="text-xl leading-6 font-semibold text-gray-900 my-auto">
                New Thought
              </h3>
            </div>
            <PostThoughtForm userId={user.firstName || "Developer"} />
            <ThoughtList />
          </div>
        </>
      )}
    </div>
  );
}
