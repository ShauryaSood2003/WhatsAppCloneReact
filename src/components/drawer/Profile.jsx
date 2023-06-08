import { Box ,Typography,styled} from "@mui/material";

const ImageContainer=styled(Box)`
    display:flex;
    justify-content:center;
`
const StyledImg=styled('img')({
    borderRadius:"50%",
    height:200,
    width:200,
    padding:"25px 0"
});

const BoxWrapper=styled(Box)`
    background:#FFFFFF;
    padding:12px 30px 2px;

    & : first-child{
        font-weight:200;
        color:#009688;
        font-size:13px;
    };
    & : last-child{
        margin:14px 0;
        color:#4A4A4A;
    };
`
const DescriptionBox=styled(Box)`
    padding:15px 30px 20px;
    color:#8696a0;
    font-size:13px;
`

export default function Profile(props){
    return(
        <>
            <ImageContainer>
                <StyledImg src={props.accountInfo.picture} alt="DP"/>
            </ImageContainer>
            <BoxWrapper>
                <Typography>Your Name</Typography>
                <Typography>{props.accountInfo.name}</Typography>

            </BoxWrapper>
            <DescriptionBox>
                <Typography>This is not your username or pin.This name will be visible to your WhatsApp Contacts.</Typography>
            </DescriptionBox>
            <BoxWrapper>
                <Typography>About</Typography>
                <Typography>Sleeping!</Typography>

            </BoxWrapper>
        </>
    );
}