import Hero from "../components/home/hero";
import Layout from "../components/layout";
import { TOKEN, DATABASE_ID } from "../config";
export default function Home({ projects }) {
  return (
    <Layout>
      <section className="flex min-h-screen flex-col items-center text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center justify-center">
          <Hero projects={projects} />
        </div>
      </section>
    </Layout>
  );
}

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

  const res = await fetch(
    `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
    options
  );

  const projects = await res.json();

  // const projectNames = projects.results.map((aProject) => aProject.properties.Name.title[0].plain_text);

  // console.log(`projectNames : ${projectNames}`);

  return {
    props: { projects },
  };
}
