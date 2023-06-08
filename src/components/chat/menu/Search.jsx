import SearchIcon from '@mui/icons-material/Search';
import ContactlessIcon from '@mui/icons-material/Contactless';
import { Box, InputBase,styled } from '@mui/material';

const Component =styled(Box)`
    height:45px;
    background:#fff;
    border-bottom:1px solid black;
    display:flex;
    align-items:center;
`
const Wrapper =styled(Box)`
background:#f0f2f5;
position:relative;
margin:0 13px;
width:100%;
border-radius:10px;

`
const Icon =styled(Box)`
 position:absolute;
 padding:6px 16px;
 height:100%;
 
`
const InputField=styled(InputBase)`
width:100%;
padding:16px 16px 16px 65px;
height:15px;
font-size:14px;
`
const StyledContactLess=styled(ContactlessIcon)`
    margin-right:6px;
`

function Search({setText}){
    return(
        <Component>
            <Wrapper>
                <Icon>
                    <SearchIcon
                        fontSize='small'
                    />
                </Icon>
                <InputField
                    placeholder='Search or Start a new Chat'
                    onChange={(e)=>{
                        setText(e.target.value);
                    }}
                />
            </Wrapper>
            <StyledContactLess/>
        </Component>
    );
}
export default Search;