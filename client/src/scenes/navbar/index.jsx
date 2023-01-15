import { useState } from "react";
import {
  Box,
  IconButton,
  InputBase,
  Typography,
  Select,
  MenuItem,
  FormControl,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  Search,
  Message,
  DarkMode,
  LightMode,
  Notifications,
  Help,
  Menu,
  Close,
} from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { setMode, setLogout } from "state";
import { useNavigate } from "react-router-dom";
import FlexBetween from "components/FlexBetween";



const Navbar = () => {
  const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");

  const theme = useTheme();
  const neutralLight = theme.palette.neutral.light;
  const dark = theme.palette.neutral.dark;
  const background = theme.palette.background.default;
  const primaryLight = theme.palette.primary.light;
  const alt = theme.palette.background.alt;

  const fullName = `${user.firstName} ${user.lastName}`;

  const quotes = [
    "It's only we lost everything that we can be free",
"Bu maskenin altında bir fikir var bayım ve fikirler asla ölmez.",
"Ancak her şeyi kaybettikten sonra özgür oluruz.",
"Bu maskenin altında bir fikir var bayım ve fikirler asla ölmez.",
" Tüm umudunuzu kaybetmek özgürlüktür. Bırakın devrilelim. Her şey düşeceği yere düşsün.",
" Öldürme yetkisine sahip olup da öldürmüyorsan güçlüsündür.",
"Unutma Red, umut iyi bir şeydir, belki de en iyisi. Ve iyi şeyler asla ölmez.",
"Uzunca süre maske takarsan, altındaki kişiliği de unutursun.",
"Kendimize kim olduğumuzu hatırlatmak için hepimizin aynalara ihtiyacı var.",
"Bizim neslimiz Büyük Depresyon'u ya da Büyük Savaş'ı yaşamadı. Bizim savaşımız ruhsal bir savaş. Bizim depresyonumuz kendi hayatlarımız...",
"Kim ne derse desin, sözcükler ve düşünceler dünyayı değiştirebilir.",
"Aklını özgürleştirmek istiyorsan bildiklerini unutmalısın.",
"Karakterli olmak karakter olmak için yeterli değildir.",
"Umut tehlikelidir. Umut bi insanı deli edebilir. Bu iyi değildir.",
"Bir hiç olmak çok üzücüdür beyler. İnsanlar hep aranmak ister, dinlenmek ister, hayatta bir kez de olsa önemli olmak ister.",
"İnsan sevdiğini öldürür diye bir söz vardır ya. Aslında bakın, insanı öldüren hep sevdiğidir.",
"Şeytanın yapmış olduğu en büyük hile, tüm dünyaya yaşamadığına inandırmaktır. ",
"O mükemmel değil. Sen de mükemmel degilsin. Asıl soru birbiriniz için mükemmel olup olmadığınız... ",
"Hayatının amacının mutlu olduğu yerde ara",
"Hayatta en büyük mucize…Küçükken iyi bir öğretmene rastlamaktır.",
"Siz gerçeği bilmek değil, kandırılmak istiyorsunuz. ",
"Düşünün… Çünkü henüz yasaklanmadı.",
"Belki de mutluluk sadece kovalayabileceğimiz bir şeydir. Belki de onu asla yakalayamacağız.",
"Sanki çok ömrümüz varmış gibi beklemeyi öğretiyor hayat bize…",
"İyiymiş gibi davranıyorum ve herkes gerçekten iyi olduğumuz zannediyor. Ya insanlar çok aptal ya da ben iyi bir oyuncuyum.",
"Bazılarının tesadüf dediği şey bana göre sonuçtur. Başkalarının fırsat dediği şey bana göre maliyettir.",
"Kişi özünü asla değiştirmez, etrafındakileri başka birisi olmaya ikna edebilir ama kendini asla. ",
"Ağlayınca hiçbir şey geçmiyor anlıyor musun?",
"Umut. İnsanın vazgeçemediği illüzyon. Aynı anda en büyük güç ve en büyük zayıflık kaynağınız.",
"İstesem aşık olabilirim ama üşeniyorum.",
"Baba insan büyüyünce hayalleri küçülür mü?",
"Özel biriyle birlikte olduğunu, çenesini kapatıp karşılıklı susabildiği zaman anlıyor insan.",
"Ben diyorum ki, asla tam olma. Ben diyorum ki, mükemmel olmaktan vazgeç.",
"İnsan, zamanı durdurmak istediği yere aittir.",
"Belkide insanın yalnız ölmesi sonsuz azap içinde yaşamasından iyidir?",
"Eskiden gökyüzüne bakar, yıldızlar arasındaki yerimizi merak ederdik. Şimdi yere bakıp topraktaki yerimiz için endişeleniyoruz.",
"Bir yolunuz buluruz. Her zaman bulduk.",
"Anne baba olduktan sonra çocuklarımıza anı olmak için yaşarız.",
"Bizler dünyanın gerçeklerini, bize sunulduğu kadarıyla kabulleniriz. Olay aslında bundan ibaret.",
"Günaydın! Olur ya belki sizi göremem; iyi günler, iyi akşamlar ve iyi geceler!",
"Bir kelebeğin kanat çırptığında çıkardığı rüzgar, dünyanın öbür ucunda bir tayfuna sebep olabilir.",
"Öfke bir yüktür. Hayat sürekli kızgın yaşanmayacak kadar kısadır, buna kesinlikle değmez",
"Olayı nereye çekerseniz çekin, önyargı gerçeği hep saklar",
"Bir hiç olmak çok üzücüdür beyler. İnsanlar hep aranmak ister, dinlenmek ister, hayatta bir kez de olsa önemli olmak ister.",
"Suçlu olduğunu söyleyen 11 oy vardı. Elimi kaldırıp bir çocuğu ölüme göndermek benim için pek kolay değil",
"Yağmur, duşa çok benziyor, biraz ıslanıyorsun. Ne dersin Ray? Ne dersin?",
  ]

  return (
    <FlexBetween padding="1rem 6%" backgroundColor={alt}>
      <FlexBetween gap="1.75rem">
        <Typography
          fontWeight="bold"
          fontSize="clamp(1rem, 2rem, 2.25rem)"
          color="primary"
          onClick={() => navigate("/home")}
          sx={{
            "&:hover": {
              color: primaryLight,
              cursor: "pointer",
            },
          }}
        >
          1001FİLM
        </Typography>
        {isNonMobileScreens && (
          <FlexBetween
            backgroundColor={neutralLight}
            borderRadius="9px"
            gap="3rem"
            padding="0.1rem 1.5rem"
          >
            <InputBase placeholder="Arama..." />
            <IconButton>
              <Search />
            </IconButton>
          </FlexBetween>

        )}

    <style>
      @import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;500&display=swap');
    </style>
      <Box style={{"padding":"0px 15px 0px 15px", "display":"flex"}}>
      <Typography color={dark} m="0.5rem 0" variant="h5" fontWeight="500" fontFamily={"'Roboto Slab', serif"} gap="15px">
      "{quotes[Math.round(Math.random()*quotes.length)]}"
      </Typography>
      </Box>
      </FlexBetween>
      
      {/* DESKTOP NAV */}
      {isNonMobileScreens ? (
        <FlexBetween gap="2rem">
          <IconButton onClick={() => dispatch(setMode())}>
            {theme.palette.mode === "dark" ? (
              <DarkMode sx={{ fontSize: "25px" }} />
            ) : (
              <LightMode sx={{ color: dark, fontSize: "25px" }} />
            )}
          </IconButton>
          <Message sx={{ fontSize: "25px" }} />
          <Notifications sx={{ fontSize: "25px" }} />
          <Help sx={{ fontSize: "25px" }} />
          <FormControl variant="standard" value={fullName}>
            <Select
              value={fullName}
              sx={{
                backgroundColor: neutralLight,
                width: "150px",
                borderRadius: "0.25rem",
                p: "0.25rem 1rem",
                "& .MuiSvgIcon-root": {
                  pr: "0.25rem",
                  width: "3rem",
                },
                "& .MuiSelect-select:focus": {
                  backgroundColor: neutralLight,
                },
              }}
              input={<InputBase />}
            >
              <MenuItem value={fullName}>
                <Typography>{fullName}</Typography>
              </MenuItem>
              <MenuItem onClick={() => dispatch(setLogout())}>Çıkış Yap</MenuItem>
            </Select>
          </FormControl>
        </FlexBetween>
      ) : (
        <IconButton
          onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
        >
          <Menu />
        </IconButton>
      )}

      {/* MOBILE NAV */}
      {!isNonMobileScreens && isMobileMenuToggled && (
        <Box
          position="fixed"
          right="0"
          bottom="0"
          height="100%"
          zIndex="10"
          maxWidth="500px"
          minWidth="300px"
          backgroundColor={background}
        >
          {/* CLOSE ICON */}
          <Box display="flex" justifyContent="flex-end" p="1rem">
            <IconButton
              onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
            >
              <Close />
            </IconButton>
          </Box>

          {/* MENU ITEMS */}
          <FlexBetween
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap="3rem"
          >
            <IconButton
              onClick={() => dispatch(setMode())}
              sx={{ fontSize: "25px" }}
            >
              {theme.palette.mode === "dark" ? (
                <DarkMode sx={{ fontSize: "25px" }} />
              ) : (
                <LightMode sx={{ color: dark, fontSize: "25px" }} />
              )}
            </IconButton>
            <Message sx={{ fontSize: "25px" }} />
            <Notifications sx={{ fontSize: "25px" }} />
            <Help sx={{ fontSize: "25px" }} />
            <FormControl variant="standard" value={fullName}>
              <Select
                value={fullName}
                sx={{
                  backgroundColor: neutralLight,
                  width: "150px",
                  borderRadius: "0.25rem",
                  p: "0.25rem 1rem",
                  "& .MuiSvgIcon-root": {
                    pr: "0.25rem",
                    width: "3rem",
                  },
                  "& .MuiSelect-select:focus": {
                    backgroundColor: neutralLight,
                  },
                }}
                input={<InputBase />}
              >
                <MenuItem value={fullName}>
                  <Typography>{fullName}</Typography>
                </MenuItem>
                <MenuItem onClick={() => dispatch(setLogout())}>
                  Çıkış Yap
                </MenuItem>
              </Select>
            </FormControl>
          </FlexBetween>
        </Box>
      )}
    </FlexBetween>
  );
};

export default Navbar;
