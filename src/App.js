import React from "react";
import "./App.css";
import ProfileCard from "./components/ProfileCard";
import SkillCard from "./components/SkillCard";
import TechCard from "./components/TechCard";
import EducationCard from "./components/EducationCard";
import Button from "./components/Button";

function App() {
  const skills = [
    "Владение ЯП",
    "Работа с БД",
    "Работа в комманде",
    "Разработка и тестирование ПО",
  ];
  const technologies = [
    "Kubernetes",
    "TensorFlow",
    "Docker",
    "Java",
    "Rust",
    "Python",
    "Golang",
    "CSS",
    "React",
    "Node.js",
  ];

  const handleButtonClick = () => {
    console.log("Кнопка нажата!");
  };

  return (
    <div className="App">
      <ProfileCard name="Халиков Эдуард Русланович" photo="/img.webp" />
      <section className="skills-section">
        <h2>Мои компетенции</h2>
        <div className="skills-container">
          {skills.map(skill => <SkillCard key={skill} skill={skill} />)}
        </div>
      </section>
      <section className="technologies-section">
        <h2>Технологии, которые я хочу изучить</h2>
        <div className="technologies-container">
          {technologies.map(tech => <TechCard key={tech} technology={tech} />)}
        </div>
      </section>
      <EducationCard institution="ТИУ" degree="Бакалавриат" year="2024" />
      <Button label="Какая то кнопка" onClick={handleButtonClick} />
    </div>
  );
}

export default App;
