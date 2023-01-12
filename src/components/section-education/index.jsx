import React from 'react';

import Section from '../section';
import SummaryItem from '../summary-item';

const SectionEducation = ({ experience }) => {
  if (!experience.length) return null;

  return (
    <Section title="Education">
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

export default SectionEducation;
