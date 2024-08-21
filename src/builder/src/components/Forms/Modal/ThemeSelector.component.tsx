import React, {useContext, Suspense, useState, useMemo, useCallback, useDeferredValue} from 'react'
import MainModal from "@/builder/src/components/Forms/Modal/MainModal";
import {Box, CircularProgress, Radio, Typography} from "@mui/material";
import BuilderContext from "@/builder/src/Contexts/Builder.context";
import styled from "styled-components";
import ImageWithLoader from "@/builder/src/components/Images/ImageWithLoader";
import saveModelTheme from "@/builder/src/services/apiCall/model/saveModelTheme";

interface ThemeSelectorComponentInterface {
}

const ThemeSelectorComponent:React.FC<ThemeSelectorComponentInterface> = () => {

    const builderContext = useContext(BuilderContext);
    const [themeChecked, setThemeChecked] = useState<string | null>(builderContext.themeNameUsed || null)
    const defaultThemeChecked = useMemo(() => themeChecked, [])
    const updateDOMTheme = (themeValue) => {
        const webSiteContainer = document.querySelector(`[class*="theme-color-"]`)
        if(webSiteContainer) {
           const classNamesArray = webSiteContainer.className.split(" ");
           const themeClass = classNamesArray.find(cls => cls.startsWith("theme-color-"));
           webSiteContainer.classList.add(`theme-color-${themeValue}`);
           webSiteContainer.classList.remove(themeClass);
        }
    }

    const handleSave = async (e) => {
        if(builderContext?.modelId && builderContext?.apiConfig) {
            await saveModelTheme(builderContext.modelId, builderContext.apiConfig, themeChecked)
        }
    }

    const handleCancel = (e, saveContent = false) => {
        if(!saveContent) {
            updateDOMTheme(defaultThemeChecked);
        }
    }

    const handleThemeChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const themeValue = (e.target as HTMLInputElement).value
        setThemeChecked(themeValue);
        updateDOMTheme(themeValue);
    }

    return <>
        <MainModal
            handleMainButtonClick={handleSave}
            handleCancel={handleCancel}
        >
            <StyledWrapper>
                <Typography variant={'h6'}>Available Themes</Typography>
                <Box className={'site-preview-container-flex'}>
                    {
                        builderContext.availableThemes?.themes.map((theme, key) => (
                            <div className={'site-preview-sub-container'} key={key}>
                                <ImageWithLoader
                                    imgClassName={'site-preview'}
                                    key={'image'+key}
                                    src={`/api/imageResolver?siteModelName=${builderContext.availableThemes?.siteModelName}&fileName=${theme.imagePreview}`}
                                    alt={`theme-${key}`}
                                />
                                <Radio
                                    key={'radio'+key}
                                    checked={theme.name === themeChecked}
                                    onClick={handleThemeChange}
                                    value={theme.name}
                                    name='theme'
                                    inputProps={{'aria-label': theme.name }}
                                    sx={{
                                        '& .MuiSvgIcon-root': {
                                            fontSize: 28,
                                        },
                                    }}
                                />
                                <Typography variant="subtitle2">{theme.name}</Typography>
                            </div>
                        ))
                    }
                </Box>
            </StyledWrapper>
        </MainModal>
    </>

}

const StyledWrapper = styled.div<{ className?: string }>`
  && {
    .site-preview-container-flex {
      margin-top: 40px;
      margin-bottom: 40px;
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      width: calc(4 * 300px + 3 * 10px);

      .site-preview-sub-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .site-preview,
        .image-loader-container {
          width: 300px;
          height: 200px;
          object-fit: contain;
          background: rgba(176, 175, 175, 0.83);
          border-radius: 10px;
        }
        .image-loader-container {
          display:flex;
          justify-content: center;
          align-items: center;
        }
      }
    }
  }
`;


export default ThemeSelectorComponent