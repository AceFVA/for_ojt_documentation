"use client";

import {
  Carousel,
  Flex,
  Heading,
  Text,
} from "@once-ui-system/core";

interface ProjectCardProps {
  href: string;
  priority?: boolean;
  images: string[];
  title: string;
  content: string;
  description: string;
  link: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  href,
  images = [],
  title,
  content,
  description,
  link,
}) => {
  return (
    <Flex 
      fillWidth 
      gap="32" 
      align="center" 
      s={{ direction: "column", gap: "24" }} // Automatically stacks vertically on mobile phones
    >
      {/* LEFT SIDE: The Document Image */}
      <Flex flex={1} fillWidth horizontal="center">
        <div style={{ maxWidth: "450px", width: "100%" }}>
          <Carousel
            sizes="(max-width: 960px) 100vw, 450px"
            items={images.map((image) => ({
              slide: image,
              alt: title,
            }))}
          />
        </div>
      </Flex>
      
      {/* RIGHT SIDE: The Text Details */}
      <Flex
        flex={1}
        direction="column"
        gap="12"
        paddingX="s"
      >
        {title && (
          <Heading as="h2" wrap="balance" variant="heading-strong-xl">
            {title}
          </Heading>
        )}
        
        {/* This will pull the "summary" from your .mdx file */}
        {description && (
          <Text onBackground="neutral-weak" variant="body-default-m" wrap="balance">
            {description}
          </Text>
        )}
      </Flex>
    </Flex>
  );
};