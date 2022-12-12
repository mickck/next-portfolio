import Image from "next/image";
import Link from "next/link";

export default function ProjectItem({ data }) {
  const title = data.properties.Name.title[0].plain_text;
  const github = data.properties.Github.url;
  //   const youtube = data.properties.Youtube.url;
  const description = data.properties.Description?.rich_text[0].plain_text;
  const imgSrc = data.cover.file?.url || "";
  //   console.log("imgSrc", imgSrc);
  const tags = data.properties.Tags.multi_select;
  //   const start = data.properties.WorkPeriod.date.start;
  //   const end = data.properties.WorkPeriod.date.end;
  const site = data.properties.Site.url;
  const calculatedPeriod = (start, end) => {
    const startDateStringArray = start.split("-");
    const endDateStringArray = end.split("-");

    var startDate = new Date(startDateStringArray[0], startDateStringArray[1], startDateStringArray[2]);
    var endDate = new Date(endDateStringArray[0], endDateStringArray[1], endDateStringArray[2]);

    console.log(`startDate: ${startDate}`);
    // console.log(`endDate: ${endDate}`);

    const diffInMs = Math.abs(endDate - startDate);
    const result = diffInMs / (1000 * 60 * 60 * 24);

    return result;
  };

  return (
    <div className='project-card '>
      {/* <div className='rounded-t-xl bg-slate-800	w-auto h-full flex justify-center items-center'> */}
      <Image src={`${imgSrc}`} className='rounded-t-xl' alt='cover image' width='350' height='250' layout='responsive' objectfit='cover' quality={100} onClick={(e) => console.log(e.currentTarget)} />
      {/* </div> */}
      <div className='p-4 flex flex-col'>
        <h1 className='text-2xl font-bold'>{title}</h1>
        <h3 className='mt-4 text-xl'>{description}</h3>
        {site ? (
          <Link href={`${site}`} className='mt-0 text-xl' target='_blank'>
            Go to a homepage
          </Link>
        ) : null}
        <Link href={`${github}`}>github</Link>

        {/* <p className='my-1 '>
          period : {start} ~ {end} ({calculatedPeriod(start, end)}days)
        </p> */}
        <div className='flex flex-wrap items-start mt-2 h-fit'>
          {tags.map((aTag) => (
            <h1 className='px-2 py-1 mr-2 mb-2 rounded-md bg-sky-200 dark:bg-sky-700 w-30 text-xs' key={aTag.id}>
              {aTag.name}
            </h1>
          ))}
        </div>
      </div>
    </div>
  );
}
