import { Box, styled } from "@mui/material";
import { useEffect, useRef } from "react";
import { getMessage } from "../../../service/api";
import Messages from "./Messages";

const Wrapper = styled(Box)`
  background-size: 40%;
  background-image: url("https://i.pinimg.com/736x/8c/98/99/8c98994518b575bfd8c949e91d20548b.jpg");
  height: 80%;
  width: 100%;
`;

const Component = styled(Box)`
  height: 80vh;
  overflow-y: scroll;
`;

const Container = styled(Box)`
  padding: 2px 40px;
`;

export default function ChatContent({ conversation, person, newMessageFlag, messages,setMessages }) {
 
  const scrollRef = useRef();

  useEffect(() => {
    const getMessageDetails = async () => {
      const result = await getMessage(conversation._id);
      setMessages(result);
    };
    conversation._id && getMessageDetails();
  }, [person._id, conversation._id, newMessageFlag, setMessages]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  }, [scrollRef, messages]);

  return (
    <Wrapper>
      <Component ref={scrollRef}>
        {messages &&
          messages.map((message, index) => (
            <Container key={index}>
              <Messages messages={message} />
            </Container>
          ))}
        <div ref={scrollRef} />
      </Component>
    </Wrapper>
  );
}
