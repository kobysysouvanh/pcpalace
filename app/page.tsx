import MainNav from "@/components/Store/MainNav";
import { Separator } from "@/components/ui/separator";
import { auth, currentUser } from "@clerk/nextjs";
import Image from "next/image";

const Home = async () => {
  const user = (await currentUser()) || undefined;
  let image, loggedIn;

  if (user) {
    image = user.imageUrl;
    loggedIn = true;
  }

  return (
    <div>
      <MainNav userImage={image} loggedIn={loggedIn} />
    </div>
  );
};

export default Home;
