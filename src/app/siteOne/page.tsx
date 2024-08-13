import "./ui/page.scss"
import Builder from "@/builder";
import apiConfig from './config/apiConfig/api.config.json'
import fetchPageProps from "@/app/siteOne/lib/fetchData/fetchPageProps";
import SiteModelOne from "@/components/Layout/SiteModelOne/src/SiteModelOne.component";


export default async function Page() {
   const pageId = 1;
   let data = null;
   try {
        const dataFromApi = await fetchPageProps(pageId);
        data = dataFromApi?.props ?? null;
   } catch (e) {
        console.error('Error fetching page props:', e);
   }

  return (
      <Builder
          data={data}
          apiConfig={apiConfig}
          pageId={pageId}
      >
        <SiteModelOne {...data} />
      </Builder>
  );
}
