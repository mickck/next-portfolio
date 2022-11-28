import Layout from "../components/layout";
import Head from "next/head";
import { TOKEN, DATABASE_ID } from "../config";
import ProjectItem from "../components/projects/project-items";

export default function Projects({ projects }) {
  // console.log(projects);

  return (
    <Layout>
      <div className='flex flex-col items-center justify-center min-h-screen px-3 mb-10'>
        <Head>
          <title>Mike Portfolio</title>
          <meta name='description' content='hard' />
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <h1 className='text-4xl font-bold sm:text-6xl pb-0'>
          Toal Projects :<span className='pl-4 text-blue-500'>{projects.results.length}</span>
        </h1>

        <div className='grid grid-cols-1 gap-10 m-20 mx-auto xs:p-1 xs:m-0 sm:grid-cols-1 sm:p-10 md:grid-cols-2 md:p-10 lg:grid-cols-3 lg:p-20 '>
          {projects.results.map((aProject) => (
            <ProjectItem key={aProject.id} data={aProject} />
          ))}
        </div>
      </div>
    </Layout>
  );
}

// when you build
// export async function getStaticProps() {

// every request
export async function getServerSideProps() {
  const options = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Notion-Version": "2022-02-22",
      "Content-Type": "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({
      sorts: [
        {
          property: "Name",
          direction: "ascending",
        },
      ],
      page_size: 100,
    }),
  };

  const res = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`, options);

  const projects = await res.json();

  // const projectNames = projects.results.map((aProject) => aProject.properties.Name.title[0].plain_text);

  // console.log(`projectNames : ${projectNames}`);

  return {
    props: { projects },
  };
}
