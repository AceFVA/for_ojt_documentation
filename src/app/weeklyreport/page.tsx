import { Column, Heading, Meta, Schema } from "@once-ui-system/core";
import { Mailchimp } from "@/components";
import { Posts } from "@/components/weeklyreport/Posts";
import { baseURL, weeklyreport, person, newsletter } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: weeklyreport.title,
    description: weeklyreport.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(weeklyreport.title)}`,
    path: weeklyreport.path,
  });
}

export default function WeeklyReport() {
  return (
    <Column maxWidth="m" paddingTop="24">
      <Schema
        as="blogPosting"
        baseURL={baseURL}
        title={weeklyreport.title}
        description={weeklyreport.description}
        path={weeklyreport.path}
        image={`/api/og/generate?title=${encodeURIComponent(weeklyreport.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}/weeklyreport`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Heading marginBottom="l" variant="heading-strong-xl" marginLeft="24">
        {weeklyreport.title}
      </Heading>
      <Column fillWidth flex={1} gap="40">
        <Posts range={[1, 1]} thumbnail />
        <Posts range={[2, 3]} columns="2" thumbnail direction="column" />
        <Mailchimp marginBottom="l" />
        <Heading as="h2" variant="heading-strong-xl" marginLeft="l">
          Earlier posts
        </Heading>
        <Posts range={[4]} columns="2" />
      </Column>
    </Column>
  );
}
