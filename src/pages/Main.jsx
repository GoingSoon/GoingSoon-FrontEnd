import React from "react";
import { styled } from "styled-components";
import logo from "../assets/going-soon-logo.png";
import EventContainer from "../components/main/EventContainer";

const eventData = [
  {
    title: "9기 회식",
    members: 6,
    soon: true,
  },
  {
    title: "알고리즘 스터디",
    members: 4,
    soon: false,
  },
  {
    title: "birthday party",
    members: 7,
    soon: false,
  },
];

const StyledHeader = styled.header`
  display: flex;
  text-align: center;
  font-size: 24px;
  align-items: center;
  justify-content: center;
  margin: 16px 0 16px 0;
`;

const EventList = styled.div`
  padding: 16px 0 16px 0;
`;

const Main = () => {
  return (
    <div style={{ padding: "10px 30px 10px 30px" }}>
      <StyledHeader>
        <img
          src={logo}
          alt="going-soon-logo.png"
          style={{ width: "50px", height: "50px", marginRight: "10px" }}
        />
        upcoming events
      </StyledHeader>
      <EventList>
        {eventData.map((eventItem, index) => (
          <EventContainer
            key={index}
            title={eventItem.title}
            members={eventItem.members}
            soon={eventItem.soon}
            index={index}
          />
        ))}
      </EventList>
    </div>
  );
};

export default Main;
