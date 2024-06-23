import { BrowserRouter } from "react-router-dom";
import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";
import Illustration from "../../assets/illustration.svg";
import linkedin from "../../assets/linkedin.svg";
import githubIcon from "../../assets/github.svg";
import whatsapp from "../../assets/whatsapp.svg";
import Hello from "../../assets/Hello.gif";
import Marquee from "react-fast-marquee";
import { skillsData } from "../../utils/data/skills";
import { skillsImage } from "../../utils/data/skill-image";

export function Hero() {
  return (
    <div>
      <Container id="home">
        <div className="hero-text">
          <ScrollAnimation animateIn="fadeInUp">
            <p>
              Hello <img src={Hello} alt="Hello" width="20px" />, I'm
            </p>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
            <h1>Ahmad Raza</h1>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}>
            <h3>5+ Years of Experience in development,</h3>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}>
            <p className="small-resume">
              A passionate FullStack developer from Pakistan, I am proficient in
              all aspects of software, MVP, Web & Mobile App Development.
            </p>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInUp" delay={0.8 * 1000}>
            <BrowserRouter>
              <a
                href="https://www.upwork.com/freelancers/~01d2d130c67cf34c53"
                target="_blank"
                rel="noreferrer"
                className="button"
              >
                Hire me
              </a>
            </BrowserRouter>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInUp" delay={1 * 1000}>
            <div className="social-media">
              <a
                href="https://www.linkedin.com/in/itsmahmadraza"
                target="_blank"
                rel="noreferrer"
              >
                <img src={linkedin} alt="Linkedin" />
              </a>
              <a
                href="https://github.com/theahmadraza/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={githubIcon} alt="GitHub" />
              </a>
              <a
                href="https://api.whatsapp.com/send/?phone=%2B923130004271&text=Hello+Ahmad"
                target="_blank"
                rel="noreferrer"
              >
                <img src={whatsapp} alt="Whatsapp" />
              </a>
            </div>
          </ScrollAnimation>
        </div>
        <div className="hero-image">
          <ScrollAnimation animateIn="fadeInRight" delay={1 * 1000}>
            <img src={Illustration} alt="Ilustração" />
          </ScrollAnimation>
        </div>
      </Container>
      <div className="w-full">
        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
          <h3>I've worked with these technologies:</h3>
        </ScrollAnimation>
        <Marquee
          gradient={false}
          speed={80}
          pauseOnHover={true}
          pauseOnClick={true}
          delay={0}
          play={true}
          direction="left"
        >
          {skillsData.map((skill: any, id: any) => (
            <div className="element" key={id}>
              <div className="element-child">
                <div
                  style={{
                    display: "flex",
                    transform: "translateY(-1px)",
                    justifyContent: "center",
                  }}
                >
                  <div className="w-3/4">
                    <div
                      style={{
                        height: "1px",
                        width: "100%",
                        background:
                          "linear-gradient(to right, transparent, #8b5cf6, transparent)",
                      }}
                    />
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.75rem", // 3 * 0.25rem = 0.75rem, as gap-3 is equivalent to 0.75rem
                    padding: "1.5rem", // 6 * 0.25rem = 1.5rem, as p-6 is equivalent to 1.5rem
                  }}
                >
                  <div>
                    <img
                      src={skillsImage(skill)}
                      alt={skill}
                      className="rounded-lg"
                      style={{ height: "40px", width: "40px" }}
                    />
                  </div>
                  <p className="text-white text-sm sm:text-lg">{skill}</p>
                </div>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}
