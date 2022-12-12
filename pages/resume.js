import Image from "next/image";
import Layout from "../components/layout";
// import resume from "../public/re.png";
export default function Resume() {
  return (
    <Layout>
      <div className='flex justify-center p-3'>
        <Image src={resume} alt='resume' className='flex rounded-t-xl justify-center items-center' />
      </div>
    </Layout>
  );
}
