import {
  EditOutlined,
  DeleteOutlined,
  AttachFileOutlined,
  GifBoxOutlined,
  ImageOutlined,
  MicOutlined,
  MoreHorizOutlined,
  } from "@mui/icons-material";
  import TextField from '@mui/material/TextField';
  import Autocomplete from '@mui/material/Autocomplete';
  import {
  Box,
  Divider,
  Typography,
  InputBase,
  useTheme,
  Button,
  IconButton,
  useMediaQuery,
  } from "@mui/material";
  import FlexBetween from "components/FlexBetween";
  import Dropzone from "react-dropzone";
  import UserImage from "components/UserImage";
  import WidgetWrapper from "components/WidgetWrapper";
  import { useState } from "react";
  import { useDispatch, useSelector } from "react-redux";
  import { setPosts } from "state";
  import { style } from "@mui/system";
  
  const top100Films = [
  { label: 'Aşk'},
  { label: 'Hayat'},
  { label: 'Dram'},
  { label: 'Gerçek'},
  { label: 'Alıntı'},
  { label: "Bilgi"},
  { label: 'Kurtlar Vadisi'},
  ];
  
  const MyPostWidget = ({ picturePath }) => {
  const dispatch = useDispatch();
  const [isImage, setIsImage] = useState(false);
  const [image, setImage] = useState(null);
  const [post, setPost] = useState("");
  const [postt, setPostt] = useState("#");
  const [selectedFilm, setSelectedFilm] = useState(null);
  const [quote, setQuote] = useState("");
  const [review, setReview] = useState("");
  const [postType, setPostType] = useState("Normal Gönderi");
  const { palette } = useTheme();
  const { _id } = useSelector((state) => state.user);
  const token = useSelector((state) => state.token);
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  const mediumMain = palette.neutral.mediumMain;
  const medium = palette.neutral.medium;
  
  const handlePost = async () => {
  const formData = new FormData();
  formData.append("userId", _id);
  formData.append("description", post);
  formData.append("tag", postt);
  formData.append("film", selectedFilm);
  formData.append("postType", postType);

  if(postType === "Alıntı Gönderi") {
    formData.append("quote", quote);
} else if(postType === "İnceleme Gönderi") {
    formData.append("review", review);
}

if (image) {
  formData.append("picture", image);
  formData.append("picturePath", image.name);
}

const response = await fetch(`http://localhost:3001/posts`, 
{ method: "POST", 
headers: { Authorization: `Bearer ${token}` },
body: formData,
});
const posts = await response.json();
dispatch(setPosts({ posts }));
setImage(null);
setPost("");
setPostt("#");
setSelectedFilm(null);
setQuote("");
setReview("");
setPostType("Normal Gönderi");
};

return (
<WidgetWrapper>
<FlexBetween gap="1.5rem">
<UserImage image={picturePath} />
<InputBase
placeholder="Aklınızdan ne geçiyor..."
onChange={(e) => setPost(e.target.value)}
value={post}
/>
</FlexBetween>
<Box>
<Autocomplete
options={top100Films}
getOptionLabel={(option) => option.label}
renderInput={(params) => (
<TextField
{...params}
label="Film Seçiniz"
variant="outlined"
/>
)}
onChange={(e, value) => setSelectedFilm(value)}
/>
{postType === "Alıntı Gönderi" && (
<TextField
label="Alıntı"
variant="outlined"
value={quote}
onChange={(e) => setQuote(e.target.value)}
/>
)}
{postType === "İnceleme Gönderi" && (
<TextField
label="İnceleme"
variant="outlined"
value={review}
onChange={(e) => setReview(e.target.value)}
/>
)}
<Box>
<Button
variant="outlined"
color="primary"
onClick={() => setPostType("Normal Gönderi")}
>
Normal Gönderi
</Button>
<Button
variant="outlined"
color="primary"
onClick={() => setPostType("Alıntı Gönderi")}
>
Alıntı Gönderi
</Button>
<Button
variant="outlined"
color="primary"
onClick={() => setPostType("İnceleme Gönderi")}
>
İnceleme Gönderi
</Button>
</Box>
</Box>
<Box>
<Dropzone onDrop={(acceptedFiles) => setImage(acceptedFiles[0])}>
{({ getRootProps, getInputProps }) => (
<Box {...getRootProps()}>
<input {...getInputProps()} />
<IconButton>
<AttachFileOutlined />
</IconButton>
</Box>
)}
</Dropzone>
{image && (
<Box>
<img src={URL.createObjectURL(image)} width={150} height={150} />

<IconButton onClick={() => setImage(null)}>
<DeleteOutlined />
</IconButton>
</Box>
)}
</Box>
<Box>
<FlexBetween>
<Box>
<TextField
placeholder="#hashtag"
onChange={(e) => setPostt(e.target.value)}
value={postt}
/>
</Box>
<Box>
<Button
           variant="contained"
           color="primary"
           onClick={handlePost}
         >
Paylaş
</Button>
</Box>
</FlexBetween>
</Box>
</WidgetWrapper>
);
};

export default MyPostWidget;
