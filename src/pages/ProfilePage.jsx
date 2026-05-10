import React from "react";

const ProfilePage = () => {
  return (
    <div className="d-flex">
      <div className="custom-container mx-2" style={{ width: "80%" }}>
        <div className="d-flex align-items-center">
          <img
            width={192}
            className="rounded"
            src="https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-1024.png"
            alt="Person"
          />
          <div className="profile-top">
            <h2>Abdulrahman HASANATO</h2>
            <div className="d-flex">
              <p>
                <span className="primary-color">Status</span> Active
              </p>
              <span id="horizontal-spacer" style={{ width: "2rem" }} />
              <p>
                <span className="primary-color">Member since</span> 13-05-2025
              </p>
            </div>
            <div className="d-flex">
              <p>
                <span className="primary-color">Faculty</span> Information
                Technology
              </p>
              <span id="horizontal-spacer" style={{ width: "2rem" }} />
              <p>
                <span className="primary-color">Department</span> Computer
                Science
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="w-50 d-flex">
            <span>Name</span>
            <span id="horizontal-spacer" style={{ width: "5rem" }} />
            <span>Abdulrahman</span>
          </div>
          <div className="w-50 d-flex"></div>
        </div>
      </div>
      <div className="custom-container mx-2 p-2" style={{ width: "20%" }}>
        <h2>Activities</h2>
      </div>
    </div>
  );
};

export default ProfilePage;
