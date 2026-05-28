import { motion } from 'framer-motion';
import {
  BookOpen,
  CakeSlice,
  Check,
  Coffee,
  FolderOpen,
  Link,
  Link2,
  Palette,
  Search,
  ShieldCheck,
  Sparkles,
  Users,
} from 'lucide-react';
import { menuCardVariants } from '../../app/motionConfig';

const iconMap = {
  FolderOpen,
  Search,
  Sparkles,
  Users,
  Palette,
  ShieldCheck,
  BookOpen,
  Coffee,
  CakeSlice,
};

export function IngredientBadge({ children, tone = 'blue' }) {
  return <span className={`ingredientBadge ${tone}`}>{children}</span>;
}

export function RecipeCard({ title, items, icon: Icon = Check }) {
  return (
    <article className="recipeCard">
      <div className="recipeHeader">
        <Icon size={20} />
        <h3>{title}</h3>
      </div>
      <ul>
        {items.map((item) => (
          <li key={item}>
            <Check size={16} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

export function BlueMenuCard({ project }) {
  const Icon = iconMap[project.icon] || CakeSlice;

  return (
    <motion.article
      className="blueMenuCard"
      data-testid="project-card"
      variants={menuCardVariants}
      initial="initial"
      whileInView="animate"
      whileHover="hover"
      viewport={{ once: true, margin: '-80px' }}
    >
      <div className="cardNotch" />
      <div className="menuCardTopline">
        <span>No. {String(project.chapter).padStart(2, '0')}</span>
        <IngredientBadge tone="caramel">{project.bakeryLabel}</IngredientBadge>
      </div>
      <div className="menuCardTitleRow">
        <span className="pastryIcon">
          <Icon size={23} />
        </span>
        <h3>{project.title}</h3>
      </div>
      <p className="goalText">{project.goal}</p>
      <p>{project.process}</p>
      <a
        className="receiptLink"
        href={project.evidence}
        target="_blank"
        rel="noreferrer"
      >
        View pdf <Link size={14} />
      </a>
    </motion.article>
  );
}

export function ReflectionReceiptCard({ title, items, total }) {
  return (
    <article className="receiptCard">
      <h3>{title}</h3>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      {total ? <strong>{total}</strong> : null}
    </article>
  );
}
