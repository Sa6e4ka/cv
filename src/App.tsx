import { useState } from "react";
import {
  Box,
  Container,
  VStack,
  HStack,
  Text,
  Button,
  Icon,
  Heading,
  Circle,
  useColorModeValue,
  Flex,
  Card,
  CardBody,
  SimpleGrid,
  Tag,
  Link,
  Image,
} from "@chakra-ui/react";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  MessageCircle,
  Book,
  Briefcase,
  GraduationCap,
  ChevronRight,
  Code,
} from "lucide-react";

function App() {
  const [activeSection, setActiveSection] = useState("about");

  const skills = {
    languages: ["JavaScript", "Python", "Solidity", "SQL"],
    frontend: ["React", "Vite", "CSS3"],
    backend: ["Node.js", "FastAPI", "Flask"],
    tools: ["Git", "Docker", "AWS S3, EC2", "Thirdweb", "XMTP", "Pinata"],
  };

  return (
    <Container maxW="5xl" py={12}>
      {/* Header Section */}
      <VStack spacing={6} mb={16} as="header">
        <Image
          src="../photo of me.jpg" // укажите путь к фото
          alt="Your Name"
          boxSize="250px" // настройте размер изображения по желанию
          objectFit="cover"
          borderRadius="full"
          mb={10}
        />

        <Heading
          as="h1"
          size="xl"
          bgGradient="linear(to-r, cyan.600, teal.600)"
          bgClip="text"
          mb={4}
        >
          Aleksandr Ishutkin
        </Heading>

        <Text fontSize="xl" color="gray.600" mb={6}>
          Web Developer
        </Text>

        <HStack spacing={6} mb={8}>
          <ContactItem icon={Mail} text="alexikum@bk.ru" />
          <ContactItem icon={Phone} text="+972 55 773 33 57" />
          <ContactItem icon={MapPin} text="Beer Sheva, Israel" />
        </HStack>

        <HStack spacing={4}>
          <SocialLink icon={Github} link="https://github.com/Sa6e4ka" />
          <SocialLink icon={MessageCircle} link="https://t.me/shallweball" />
        </HStack>
      </VStack>

      {/* Navigation */}
      <HStack justify="center" spacing={8} mb={12}>
        <NavButton
          text="About"
          isActive={activeSection === "about"}
          onClick={() => setActiveSection("about")}
        />
        <NavButton
          text="Skills"
          isActive={activeSection === "skills"}
          onClick={() => setActiveSection("skills")}
        />
        <NavButton
          text="Experience"
          isActive={activeSection === "experience"}
          onClick={() => setActiveSection("experience")}
        />
        <NavButton
          text="Education"
          isActive={activeSection === "education"}
          onClick={() => setActiveSection("education")}
        />
      </HStack>

      {/* Main Content */}
      <Card
        bg="whiteAlpha.800"
        backdropFilter="blur(8px)"
        shadow="xl"
        rounded="2xl"
      >
        <CardBody>
          {activeSection === "about" && (
            <VStack align="stretch" spacing={6}>
              <Flex align="center">
                <Icon as={Book} mr={2} />
                <Heading size="lg">About Me</Heading>
              </Flex>

              {/* First Paragraph */}
              <Box>
                <Text color="gray.600" lineHeight="tall">
                  I am a student who began my studies in 2023 at the Russian
                  Chemical Technology University, majoring in Chemical
                  Engineering. During this time, I developed programming skills
                  and created a service to help new students adapt to university
                  life.
                </Text>
              </Box>

              {/* Second Paragraph */}
              <Box>
                <Text color="gray.600" lineHeight="tall">
                  In 2024, at 18 years old, I moved to Israel to continue my
                  education at Ben-Gurion University, where I am currently
                  studying engineering. My career aspirations are focused on
                  entrepreneurship and programming, with a strong interest in
                  teamwork and leadership. I aim to apply my analytical and
                  organizational skills while staying up-to-date with trends in
                  Web3, blockchain, and cryptography.
                </Text>
              </Box>

              {/* Third Paragraph */}
              <Box>
                <Text color="gray.600" lineHeight="tall">
                  In my free time, I invest, play sports, and enjoy playing
                  musical instruments. I also organize events, further honing my
                  planning and communication abilities. My goal is to continue
                  growing both personally and professionally.
                </Text>
              </Box>
            </VStack>
          )}
          {activeSection === "skills" && (
            <VStack align="stretch" spacing={8}>
              <Flex align="center">
                <Icon as={Code} mr={2} />
                <Heading size="lg">Technical Skills</Heading>
              </Flex>

              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                <SkillCategory
                  title="Programming Languages"
                  skills={skills.languages}
                  colorScheme="cyan"
                />
                <SkillCategory
                  title="Frontend Development"
                  skills={skills.frontend}
                  colorScheme="teal"
                />
                <SkillCategory
                  title="Backend Development"
                  skills={skills.backend}
                  colorScheme="blue"
                />
                <SkillCategory
                  title="Tools & Technologies"
                  skills={skills.tools}
                  colorScheme="green"
                />
              </SimpleGrid>
            </VStack>
          )}

          {activeSection === "experience" && (
            <VStack align="stretch" spacing={6}>
              <Flex align="center">
                <Icon as={Briefcase} mr={2} />
                <Heading size="lg">Work Experience</Heading>
              </Flex>
              <ExperienceItem
                title="Full Stack Developer"
                company="Self-Employed"
                period="2024-present"
                description="Developed a fully decentralized web application called 'Decade', focusing on scalability, security, and user experience."
              />
              <ExperienceItem
                title="Frontend Developer"
                company="Startup StarBox"
                period="2023-2024"
                description="Created employee services, including Telegram bots and interfaces for database interactions, improving internal workflows and communication."
              />
              <ExperienceItem
                title="Full Stack Developer"
                company="MicroWallet Pet Project"
                period="2023-2024"
                description="Collaborated with a partner to develop a custodial cryptocurrency wallet, integrating key features like wallet creation, transaction management, and live market data."
              />
              <ExperienceItem
                title="Backend Developer"
                company="University Telegram Bot"
                period="2023"
                description="Designed and developed a Telegram bot for university students, enabling them to access and manage their university application and services more efficiently."
              />
            </VStack>
          )}

          {activeSection === "education" && (
            <VStack align="stretch" spacing={6}>
              <Flex align="center">
                <Icon as={GraduationCap} mr={2} />
                <Heading size="lg">Education</Heading>
              </Flex>
              <EducationItem
                degree="Bachelor of Engineering scince"
                university="Ben Gurion university of the negev"
                period="2024 - present"
              />
              <EducationItem
                degree="Bachelor of chemichal engineering"
                university="University of Chemical Technology of Russia"
                period="2023 - 2024"
              />
            </VStack>
          )}
        </CardBody>
      </Card>
    </Container>
  );
}

interface SocialLinkProps {
  icon: React.ElementType;
  link: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ icon, link }) => (
  <Link href={link} isExternal>
    <Circle
      as="button"
      size="10"
      bg="whiteAlpha.800"
      color="gray.600"
      _hover={{
        color: "gray.800",
        bg: "white",
        shadow: "lg",
      }}
      transition="all 0.2s"
      shadow="md"
    >
      <Icon as={icon} />
    </Circle>
  </Link>
);

const ContactItem = ({ icon, text }) => (
  <HStack
    color="gray.600"
    _hover={{ color: "gray.800" }}
    transition="colors 0.2s"
  >
    <Icon as={icon} />
    <Text>{text}</Text>
  </HStack>
);

const NavButton = ({ text, isActive, onClick }) => (
  <Button
    onClick={onClick}
    px={6}
    rounded="full"
    variant={isActive ? "solid" : "ghost"}
    bgGradient={isActive ? "linear(to-r, cyan.500, teal.500)" : undefined}
    color={isActive ? "white" : "gray.600"}
    _hover={{
      bg: isActive ? undefined : "whiteAlpha.200",
    }}
    shadow={isActive ? "lg" : undefined}
  >
    {text}
  </Button>
);

const ExperienceItem = ({ title, company, period, description }) => (
  <Box _hover={{ transform: "translateX(8px)" }} transition="transform 0.2s">
    <Flex align="center" mb={2}>
      <Icon as={ChevronRight} color="cyan.500" mr={2} />
      <Heading size="md">{title}</Heading>
    </Flex>
    <VStack align="start" pl={8} spacing={1}>
      <Text color="gray.600">{company}</Text>
      <Text fontSize="sm" color="gray.500">
        {period}
      </Text>
      <Text color="gray.600" mt={2}>
        {description}
      </Text>
    </VStack>
  </Box>
);

const EducationItem = ({ degree, university, period }) => (
  <Box _hover={{ transform: "translateX(8px)" }} transition="transform 0.2s">
    <Flex align="center" mb={2}>
      <Icon as={ChevronRight} color="cyan.500" mr={2} />
      <Heading size="md">{degree}</Heading>
    </Flex>
    <VStack align="start" pl={8} spacing={1}>
      <Text color="gray.600">{university}</Text>
      <Text fontSize="sm" color="gray.500">
        {period}
      </Text>
    </VStack>
  </Box>
);

const SkillCategory = ({ title, skills, colorScheme }) => (
  <Box
    p={6}
    bg="white"
    rounded="xl"
    shadow="md"
    _hover={{ transform: "translateY(-4px)" }}
    transition="transform 0.2s"
  >
    <Heading size="md" mb={4} color={`${colorScheme}.600`}>
      {title}
    </Heading>
    <Flex gap={2} flexWrap="wrap">
      {skills.map((skill) => (
        <Tag
          key={skill}
          size="lg"
          colorScheme={colorScheme}
          variant="subtle"
          mb={2}
        >
          {skill}
        </Tag>
      ))}
    </Flex>
  </Box>
);

export default App;
