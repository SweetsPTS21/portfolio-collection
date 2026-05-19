import { strengths } from '../../data/portfolioData';
import AnemoneCluster from './AnemoneCluster';
import AnemoneSkillBadge from './AnemoneSkillBadge';

export default function StrengthCluster() {
  return (
    <AnemoneCluster title={strengths.title}>
      {strengths.items.map((item, i) => (
        <AnemoneSkillBadge
          key={item.title}
          title={item.title}
          text={item.text}
          index={i}
        />
      ))}
    </AnemoneCluster>
  );
}
