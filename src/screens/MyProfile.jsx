import { Container } from "react-bootstrap";
import "../profilecomponents/MyProfile.css";
import { useState } from "react";
import MemberProfile from "../profilecomponents/MemberProfile";
import PersonalBilling from "../profilecomponents/PersonalBilling";

const MyProfile = () => {
  const [myProfileSection, setMyProfileSection] = useState("Member Profile");
  const isMemberProfile = myProfileSection === "Member Profile";
  const isPB = myProfileSection === "Personal Billing";
  const isMNP = myProfileSection === "Manage Notification Preferences";
  return (
    <>
      <Container fluid className="bg-light py-5">
        <div className="profile-sections-row">
          <span
            onClick={() => setMyProfileSection("Member Profile")}
            className={`${isMemberProfile ? "profile-active" : ""}`}
          >
            <b>Member Profile</b>
          </span>
          <span
            onClick={() => setMyProfileSection("Personal Billing")}
            className={`${isPB ? "profile-active" : ""}`}
          >
            <b>Personal Billing</b>
          </span>
          <span
            onClick={() =>
              setMyProfileSection("Manage Notification Preferences")
            }
            className={`${isMNP ? "profile-active" : ""}`}
          >
            <b>Manage Notification Preferences</b>
          </span>
        </div>
      </Container>
      {isMemberProfile && <MemberProfile />}
      {(isPB || isMNP) && <PersonalBilling />}
    </>
  );
};

export default MyProfile;
