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
import { useNavigate } from "react-router-dom";

export default function () {
  const navigate = useNavigate();

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

  const handleRedirect = (e) => {
    e.preventDefault();
    navigate("/login");
  };
  return (
    <div id="landing">
      <nav>
        <div className="logo">
          <img src={Logo} alt="" />
          <p>HRMS</p>
        </div>
        <div className="links">
          <button className="login" onClick={handleRedirect}>
            Login
          </button>
          <button>
            <p>Try HRMS free</p>
            <svg
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              color="currentColor"
            >
              <path
                d="M3 12L21 12M21 12L12.5 3.5M21 12L12.5 20.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
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
          <p>
            Project management software that enables your teams to collaborate,
            plan, analyze and manage everyday tasks
          </p>
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
            Customise the app with plugins, custom themes and multiple text
            editors (Rich Text or Markdown). Or create your own scripts and
            plugins using the Extension API.
          </p>
          <Button title={"Lets Go"}></Button>
        </div>
        <img src={SettingImage} alt="setting" />
      </div>
      <div id="payment">
        <h1>Choose Your Plan</h1>
        <p>
          Whether you want to get organized, keep your personal life on track,
          or boost workplace productivity, Evernote has the <br /> right plan
          for you.
        </p>
        <div id="card-list">
          <Card
            amount={"$0"}
            list={pricingData.personal}
            description={"Capture ideas and find them quickly"}
            title={"Free"}
          ></Card>
          <Card
            amount={"$11.99"}
            active={true}
            list={pricingData.personal}
            description={"Keep home and family on track"}
            title={"Personal"}
          ></Card>
          <Card
            amount={"$49.99"}
            list={pricingData.personal}
            description={"Capture ideas and find them quickly"}
            title={"Organization"}
          ></Card>
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
      <footer>
        <main>
          <div className="description">
            <p>HRMS</p>
            <p>
              HRMS was created for the new ways we live and work. We make a
              better workspace around the world
            </p>
          </div>
          <div className="links">
            <p>Product</p>
            <a href="#">Overview</a>
            <a href="#">Pricing</a>
            <a href="#">Customer stories</a>
          </div>
          <div className="links">
            <p>Resources</p>
            <a href="#">Blog</a>
            <a href="#">Guides & Tutorials</a>
            <a href="#">Help centre</a>
          </div>
          <div className="links">
            <p>Company</p>
            <a href="#">About Us</a>
            <a href="#">Careers</a>
            <a href="#">Media Kit</a>
          </div>
          <div>
            <h2>Try It Today</h2>
            <p>Get started for free. Add your whole team as your needs grow.</p>
            <button>
              <p>Start today</p>
              <svg
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                color="currentColor"
              >
                <path
                  d="M3 12L21 12M21 12L12.5 3.5M21 12L12.5 20.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
          </div>
        </main>
        <div className="social-links">
          <div className="clause">
            <p>Terms & Conditions</p>
            <p>Security</p>
            <p>Status</p>
            <p>©2021 HRMS LLC.</p>
          </div>
          <div className="logo">
            <a href="#">
              <svg
                width="24px"
                height="24px"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                color="currentColor"
              >
                <path
                  d="M14 12L10.5 14V10L14 12Z"
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M2 12.7075V11.2924C2 8.39705 2 6.94939 2.90549 6.01792C3.81099 5.08645 5.23656 5.04613 8.08769 4.96549C9.43873 4.92728 10.8188 4.8999 12 4.8999C13.1812 4.8999 14.5613 4.92728 15.9123 4.96549C18.7634 5.04613 20.189 5.08645 21.0945 6.01792C22 6.94939 22 8.39705 22 11.2924V12.7075C22 15.6028 22 17.0505 21.0945 17.9819C20.189 18.9134 18.7635 18.9537 15.9124 19.0344C14.5613 19.0726 13.1812 19.1 12 19.1C10.8188 19.1 9.43867 19.0726 8.0876 19.0344C5.23651 18.9537 3.81097 18.9134 2.90548 17.9819C2 17.0505 2 15.6028 2 12.7075Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                ></path>
              </svg>
            </a>
            <a href="#">
              <svg
                width="24px"
                height="24px"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                color="currentColor"
              >
                <path
                  d="M21 8V16C21 18.7614 18.7614 21 16 21H8C5.23858 21 3 18.7614 3 16V8C3 5.23858 5.23858 3 8 3H16C18.7614 3 21 5.23858 21 8Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M11 21C11 18 11 15 11 12C11 9.8125 11.5 8 15 8"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M9 13H11H15"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </a>
            <a href="#">
              <svg
                width="24px"
                height="24px"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                color="currentColor"
              >
                <path
                  d="M21 8V16C21 18.7614 18.7614 21 16 21H8C5.23858 21 3 18.7614 3 16V8C3 5.23858 5.23858 3 8 3H16C18.7614 3 21 5.23858 21 8Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M7 17V13.5V10"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M11 17V13.75M11 10V13.75M11 13.75C11 10 17 10 17 13.75V17"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M7 7.01L7.01 6.99889"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
