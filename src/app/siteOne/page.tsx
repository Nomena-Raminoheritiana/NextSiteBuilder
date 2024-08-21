import "./ui/page.scss"
import "./ui/Themes/default.scss"
import "./ui/Themes/violet.scss"
import Builder from "@/builder";
import apiConfig from './config/apiConfig/api.config.json'
import fetchPageProps, {ModelDataInterface} from "@/app/siteOne/lib/fetchData/fetchPageProps";
import SiteModelOne from "@/components/Layout/SiteModelOne/src/SiteModelOne.component";
import modelDefaultProps from "@/components/Layout/SiteModelOne/src/defaultProps/page.main.props";
import availableTheme from "./config/availableTheme.json"


export default async function Page() {
   const modelId: number = 1;
   let themeName: string = 'default';
   let data = null;
   try {
        const dataFromApi  = (await fetchPageProps(modelId)) as ModelDataInterface;
        data = dataFromApi?.props  || modelDefaultProps;
       themeName = dataFromApi?.themeColor || 'default';
   } catch (e) {
        console.error('Error fetching page props:', e);
   }

  return (
      <div className={`theme-color-${themeName}`}>
          <Builder
              data={data}
              apiConfig={apiConfig}
              modelId={modelId}
              availableThemes={availableTheme}
              themeNameUsed={themeName}
          >
              <SiteModelOne {...data} />
          </Builder>
      </div>
  );
}
