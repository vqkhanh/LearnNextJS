import Image from "next/image";
import student from "@/public/images/student.jpg";

export default async function Home() {
  return (
    <main className="relative h-screen">
      <h1 className="font-poppins">hello</h1>
      {/* <Image
        src="https://camo.githubusercontent.com/220922c58a5dc816ea4b4684f19236eb15b86c75f5bc7806a14c85eacd8db4b3/68747470733a2f2f692e706f7374696d672e63632f3051343833394b4e2f4865616c74682d506c75732d496d616765312e706e67"
        alt="student"
        fill
        className="object-cover"
        sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
        quality={100}
        priority
      /> */}
    </main>
  );
}
