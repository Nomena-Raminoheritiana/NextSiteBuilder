import "./ui/page.scss"
import Builder from "@/builder";
import apiConfig from './config/apiConfig/api.config.json'
import fetchPageProps, {ModelDataInterface} from "@/app/siteOne/lib/fetchData/fetchPageProps";
import SiteModelOne from "@/components/Layout/SiteModelOne/src/SiteModelOne.component";
import modelDefaultProps from "@/components/Layout/SiteModelOne/src/defaultProps/page.main.props";


export default async function Page() {
   const modelId: number = 1;
   let data = null;
   try {
        const dataFromApi  = (await fetchPageProps(modelId)) as ModelDataInterface;
        data = dataFromApi?.props  || modelDefaultProps;
   } catch (e) {
        console.error('Error fetching page props:', e);
   }

  return (
      <Builder
          data={data}
          apiConfig={apiConfig}
          modelId={modelId}
      >
        <SiteModelOne {...data} />
      </Builder>
  );
}
