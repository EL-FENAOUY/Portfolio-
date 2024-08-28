import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faEnvelope, faCode, faBriefcase, faGraduationCap, faChartLine, faLanguage } from '@fortawesome/free-solid-svg-icons';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
    background-color: #f0f3f5;
    color: #333;
    line-height: 1.6;
  }
`;

const AppContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Header = styled.header`
  background-color: #2c3e50;
  color: white;
  text-align: center;
  padding: 2rem 0;
  border-bottom: 5px solid #3498db;
`;

const Name = styled.h1`
  margin: 0;
  font-size: 2.5rem;
  font-weight: 700;
`;

const Title = styled.p`
  font-size: 1.2rem;
  margin: 0.5rem 0;
  color: #3498db;
`;

const Nav = styled.nav`
  background-color: #34495e;
  padding: 1rem 0;
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const NavList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
`;

const NavItem = styled.li`
  margin: 0 1rem;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s;

  &:hover {
    color: #3498db;
  }
`;

const Section = styled.section`
  padding: 2rem;
  margin: 2rem 0;
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
`;

const SectionTitle = styled.h2`
  color: #2c3e50;
  border-bottom: 2px solid #3498db;
  padding-bottom: 0.5rem;
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ListItem = styled.li`
  margin-bottom: 1.5rem;
`;

const SkillCategory = styled.div`
  margin-bottom: 1.5rem;
`;

const SkillTitle = styled.h3`
  color: #3498db;
  margin-bottom: 0.5rem;
`;

const SkillList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
`;

const Skill = styled.li`
  background-color: #ecf0f1;
  color: #2c3e50;
  padding: 0.5rem 1rem;
  margin: 0.5rem;
  border-radius: 20px;
  font-size: 0.9rem;
`;

const DownloadButton = styled.a`
  display: inline-block;
  background-color: #3498db;
  color: white;
  padding: 0.5rem 1rem;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s;
  margin-top: 1rem;

  &:hover {
    background-color: #2980b9;
  }
`;

const PersonalizedPortfolio = () => (
  <Router>
    <GlobalStyle />
    <AppContainer>
      <Header>
        <Name>Rida EL-FENAOUY</Name>
        <Title>Data Scientist | Ingénieur en Intelligence Artificielle</Title>
      </Header>

      <Nav>
        <NavList>
          <NavItem><NavLink to="/">Accueil</NavLink></NavItem>
          <NavItem><NavLink to="/experience">Expérience</NavLink></NavItem>
          <NavItem><NavLink to="/competences">Compétences</NavLink></NavItem>
          <NavItem><NavLink to="/formation">Formation</NavLink></NavItem>
          <NavItem><NavLink to="/contact">Contact</NavLink></NavItem>
        </NavList>
      </Nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/competences" element={<Skills />} />
        <Route path="/formation" element={<Education />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AppContainer>
  </Router>
);

const Home = () => (
  <Section>
    <SectionTitle>Profil Professionnel</SectionTitle>
    <p>
      Je suis un Data Scientist passionné avec une expertise approfondie en NLP, Computer Vision et MLOps. 
      Mon parcours professionnel m'a permis de développer une solide expérience dans l'implémentation de 
      solutions IA innovantes, l'optimisation des performances et la direction d'équipes techniques.
    </p>
    <p>
      Ma mission est d'appliquer mes compétences avancées en Machine Learning et Deep Learning pour 
      relever des défis complexes en data science et créer un impact significatif dans le domaine de l'IA.
    </p>
    <DownloadButton href="cv.pdf" download>
      <FontAwesomeIcon icon={faDownload} /> Télécharger mon CV
    </DownloadButton>
  </Section>
);

const Experience = () => (
  <Section>
    <SectionTitle>Expérience Professionnelle</SectionTitle>
    <List>
      <ListItem>
        <h3><FontAwesomeIcon icon={faBriefcase} /> Data Scientist - Flechetech</h3>
        <p>Juin 2023 - Juillet 2024 | Biel, Suisse</p>
        <ul>
          <li>Implémentation de techniques de Retrieval-Augmented Generation (RAG), améliorant la pertinence des réponses de 45% et réduisant les hallucinations de 60%</li>
          <li>Développement d'un système de détection d'objets en temps réel utilisant YOLO, atteignant une précision de 95% pour l'inspection de PCB</li>
          <li>Direction d'une équipe de 3 data scientists junior, assurant le mentorat et la coordination des projets d'IA</li>
          <li>Mise en place d'un pipeline MLOps complet, réduisant le temps de déploiement des modèles de 75%</li>
        </ul>
      </ListItem>
      <ListItem>
        <h3><FontAwesomeIcon icon={faBriefcase} /> Consultant Data Science NLP & Encadrant de Stagiaires - 3D SMART FACTORY</h3>
        <p>Janvier 2023 - Juin 2023 | Mohammedia, Maroc</p>
        <ul>
          <li>Développement d'un système de Matching CV-poste avec NLP avancé</li>
          <li>Implémentation d'une solution d'extraction de données de documents techniques (OCR + NLP)</li>
          <li>Supervision de 5 stagiaires sur des projets innovants en data science</li>
        </ul>
      </ListItem>
    </List>
  </Section>
);

const Skills = () => (
  <Section>
    <SectionTitle>Compétences Techniques</SectionTitle>
    <SkillCategory>
      <SkillTitle><FontAwesomeIcon icon={faCode} /> Machine Learning & Deep Learning</SkillTitle>
      <SkillList>
        <Skill>Scikit-learn</Skill>
        <Skill>XGBoost</Skill>
        <Skill>LightGBM</Skill>
        <Skill>TensorFlow</Skill>
        <Skill>Keras</Skill>
        <Skill>PyTorch</Skill>
      </SkillList>
    </SkillCategory>
    <SkillCategory>
      <SkillTitle><FontAwesomeIcon icon={faCode} /> NLP</SkillTitle>
      <SkillList>
        <Skill>NLTK</Skill>
        <Skill>Spacy</Skill>
        <Skill>TextHero</Skill>
        <Skill>Word Embeddings</Skill>
        <Skill>Transformers</Skill>
      </SkillList>
    </SkillCategory>
    <SkillCategory>
      <SkillTitle><FontAwesomeIcon icon={faCode} /> Computer Vision</SkillTitle>
      <SkillList>
        <Skill>OpenCV</Skill>
        <Skill>SIFT</Skill>
        <Skill>ORB</Skill>
        <Skill>SURF</Skill>
        <Skill>VGG16</Skill>
        <Skill>VGG19</Skill>
      </SkillList>
    </SkillCategory>
    <SkillCategory>
      <SkillTitle><FontAwesomeIcon icon={faChartLine} /> Big Data</SkillTitle>
      <SkillList>
        <Skill>Hadoop</Skill>
        <Skill>Apache Spark</Skill>
        <Skill>Scala</Skill>
        <Skill>PySpark</Skill>
      </SkillList>
    </SkillCategory>
    <SkillCategory>
      <SkillTitle><FontAwesomeIcon icon={faCode} /> Cloud & DevOps</SkillTitle>
      <SkillList>
        <Skill>AWS</Skill>
        <Skill>Docker</Skill>
        <Skill>Kubernetes</Skill>
      </SkillList>
    </SkillCategory>
  </Section>
);

const Education = () => (
  <Section>
    <SectionTitle>Formation</SectionTitle>
    <List>
      <ListItem>
        <h3><FontAwesomeIcon icon={faGraduationCap} /> INGÉNIERIE DATA SCIENCES ET CLOUD COMPUTING</h3>
        <p>Septembre 2021 - Novembre 2022</p>
        <p>Openclassrooms en partenariat avec CentraleSupélec - Paris</p>
      </ListItem>
      <ListItem>
        <h3><FontAwesomeIcon icon={faGraduationCap} /> INGÉNIERIE DATA SCIENCES ET CLOUD COMPUTING</h3>
        <p>Septembre 2019 - Juillet 2021</p>
        <p>ÉCOLE NATIONALE DES SCIENCES APPLIQUÉES - Oujda</p>
      </ListItem>
      <ListItem>
        <h3><FontAwesomeIcon icon={faGraduationCap} /> CLASSES PRÉPARATOIRES</h3>
        <p>Septembre 2017 - Juillet 2019</p>
        <p>ÉCOLE NATIONALE DES SCIENCES APPLIQUÉES - Oujda</p>
      </ListItem>
    </List>
  </Section>
);

const Contact = () => (
  <Section>
    <SectionTitle>Contact</SectionTitle>
    <List>
      <ListItem><FontAwesomeIcon icon={faEnvelope} /> Email: elfenaouyreda@gmail.com</ListItem>
      <ListItem><FontAwesomeIcon icon={faLanguage} /> Langues: Arabe (Bilingue), Français (Bilingue), Anglais (Courant)</ListItem>
    </List>
  </Section>
);

export default PersonalizedPortfolio;