import ClientAboutView from "@/components/client-view/about";
import Bottom from "@/components/client-view/bottom";
import ClientContactView from "@/components/client-view/contact";
import ClientExperienceAndEducationView from "@/components/client-view/experience";
import ClientHomeView from "@/components/client-view/home";
import ClientProjectView from "@/components/client-view/project";
import dotenv from "dotenv";
dotenv.config();

async function extractAllDatas(currentSection) {
  const res = await fetch(`${process.env.BASE_URL}/api/${currentSection}/get`, {
    method: "GET",
    cache: "no-store",
  });

  const data = await res.json();

  return data && data.data;
}

export default async function Home() {
  const homeSectionData = await extractAllDatas("home");
  const aboutSectionData = await extractAllDatas("about");
  const experienceSectionData = await extractAllDatas("experience");
  const educationSectionData = await extractAllDatas("education");
  const projectSectionData = await extractAllDatas("project");

  return (
    <>
      <div>
        <ClientHomeView data={homeSectionData} />
        <ClientAboutView
          data={
            aboutSectionData && aboutSectionData.length
              ? aboutSectionData[0]
              : []
          }
        />
        <ClientExperienceAndEducationView
          educationData={educationSectionData}
          experienceData={experienceSectionData}
        />
        <ClientProjectView data={projectSectionData} />
        <ClientContactView />
      </div>
      <Bottom />
    </>
  );
}
