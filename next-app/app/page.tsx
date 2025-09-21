import Image from "next/image";
import student from "@/public/images/student.jpg";

export default async function Home() {
  return (
    <main>
      <Image src={student} alt="student" />
    </main>
  );
}
