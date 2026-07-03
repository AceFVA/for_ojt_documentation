import { Column, Heading, Meta, Schema } from "@once-ui-system/core";
import { baseURL, about, person, requirements } from "@/resources";
import { Projects } from "@/components/requirements/Projects";

export async function generateMetadata() {
  return Meta.generate({
    title: requirements.title,
    description: requirements.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(requirements.title)}`,
    path: requirements.path,
  });
}

export default function Requirements() {
  return (
    <Column maxWidth="m" paddingTop="24">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={requirements.path}
        title={requirements.title}
        description={requirements.description}
        image={`/api/og/generate?title=${encodeURIComponent(requirements.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Heading marginBottom="l" variant="heading-strong-xl" align="center">
        {requirements.title}
      </Heading>
      <Projects />
    </Column>
  );
}
