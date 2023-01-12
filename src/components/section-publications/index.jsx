import React from 'react';

import Section from '../section';
import SummaryItem from '../summary-item';

const SectionPublications = ({ experience }) => {
  if (!experience.length) return null;

  return (
    <Section title="Publications">
      {experience.map((item) => (
        <SummaryItem
          key={item.name}
          name={item.name}
          description={item.description}
          link={item.link}
        />
      ))}
    </Section>
  );
};

export default SectionPublications;
