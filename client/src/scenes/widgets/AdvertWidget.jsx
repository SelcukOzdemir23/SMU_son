import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";


const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;
  const gifs = ["https://64.media.tumblr.com/68bd674e9f4a2cd0f24f85540fd729f3/29f008c37e133aa5-50/s540x810/9faa37f56662fc6a40fd4ace300e005c32930fd3.gif", 
  "https://cdn.vox-cdn.com/uploads/chorus_asset/file/4185857/giphy__4_.0.gif", 
  "https://media.tenor.com/zDs5Vi1gL_YAAAAC/the-truman-show-jim-carrey.gif",
"https://media.tenor.com/JJ9gLUTMRZsAAAAC/12angry-men-black-and-white.gif"];
 
  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Sponsorluk
        </Typography>
        <Typography color={medium}>Reklam oluştur</Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        
        src={gifs[Math.floor(Math.random() * 4)]}
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>Netflix</Typography>
        <Typography color={medium}>www.netflix.com</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
      Televizyonunuzda izleyebilirsiniz.
       Akıllı TV, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray oynatıcılar ve daha fazlasında seyredin.
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;
