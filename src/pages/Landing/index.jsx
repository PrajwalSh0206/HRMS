import React from "react";
import "./index.scss";
import Image from "../../assets/images/team-presentation-7-89.svg";
import BrainStormImage from "../../assets/images/brainstorming-83.svg";
import Button from "./components/Button/Button";
import WorkTogetherImage from "../../assets/images/work-together-image.svg";
// import SettingImage from "../../assets/images/settings-90.svg";
import SettingImage from "../../assets/images/undraw_dashboard_re_3b76.svg";
import Logo from "../../assets/images/hrm.png";
import Card from "./components/Card/Card";
import ClientCard from "./components/ClientCard/ClientCard";
import AvatarImg from "../../assets/images/man-avatar-icon-free-vector.jpg";
export default function () {
  const pricingData = {
    personal: [
      "Sync unlimited devices",
      "10 GB monthly uploads",
      "200 MB max. note size",
      "Customize Home dashboard and access extra widgets",
      "Connect primary Google Calendar account",
      "Add due dates, reminders, and notifications to your tasks",
    ],
  };

  return (
    <div id="landing">
      <nav>
        <div className="logo">
          <img src={Logo} alt="" />
          <p>HRMS</p>
        </div>
        <div className="links">
          <button className="login">Login</button>
          <button>
            <p>Try HRMS free</p>
            <svg width="24px" height="24px" viewBox="0 0 24 24" strokeWidth="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor">
              <path d="M3 12L21 12M21 12L12.5 3.5M21 12L12.5 20.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
          </button>
        </div>
      </nav>
      <main>
        <div>
          <h1>
            Get More Done with
            <br /> HRMS
          </h1>
          <p>Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks</p>
          <Button title={"Try HRMS free"}></Button>
        </div>
        <img src={Image} alt="team" />
      </main>

      <section>
        <div id="info-section">
          <div>
            <div>
              <h1>
                Project
                <br /> Management
              </h1>
              <p>
                {
                  "Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note."
                }
              </p>
              <Button title={"Get Started"}></Button>
            </div>
            <img src={BrainStormImage} alt="brainstorm" />
          </div>
        </div>
        <div id="work-together">
          <img src={WorkTogetherImage} alt="brainstorm" />
          <div>
            <h1>Work Together</h1>
            <p>
              {
                "With whitepace, share your notes with your colleagues and collaborate on them. You can also publish a note to the internet and share the URL with others."
              }
            </p>
            <Button title={"Try it now"}></Button>
          </div>
        </div>
      </section>
      <div id="customize">
        <div>
          <h1>
            Customise it <br />
            to your needs
          </h1>
          <p>
            Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the
            Extension API.
          </p>
          <Button title={"Lets Go"}></Button>
        </div>
        <img src={SettingImage} alt="setting" />
      </div>
      <div id="payment">
        <h1>Choose Your Plan</h1>
        <p>
          Whether you want to get organized, keep your personal life on track, or boost workplace productivity, Evernote has the <br /> right plan for you.
        </p>
        <div id="card-list">
          <Card amount={"$0"} list={pricingData.personal} description={"Capture ideas and find them quickly"} title={"Free"}></Card>
          <Card amount={"$11.99"} active={true} list={pricingData.personal} description={"Keep home and family on track"} title={"Personal"}></Card>
          <Card amount={"$49.99"} list={pricingData.personal} description={"Capture ideas and find them quickly"} title={"Organization"}></Card>
        </div>
      </div>
      <div id="client">
        <h1>What Our Clients Says</h1>
        <div className="client-list">
          <ClientCard img={AvatarImg}></ClientCard>
          <ClientCard img={AvatarImg}></ClientCard>
          <ClientCard img={AvatarImg}></ClientCard>
        </div>
      </div>
    </div>
  );
}
