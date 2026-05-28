import { BookOpen, Coffee, Palette, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { Page } from '../components/ui/Page';
import { IngredientBadge, RecipeCard } from '../components/ui/Cards';

export function AboutPage() {
  const { person, about } = portfolioData;

  return (
    <Page className="aboutPage">
      <section className="heroGrid">
        <div className="heroCopy">
          <IngredientBadge>Blue Cafe Counter</IngredientBadge>
          <h1>Blue Cafe Counter</h1>
          <p className="heroLead">{about.headline}</p>
          <p>{about.intro}</p>
          <div className="heroBadges">
            <IngredientBadge tone="vanilla">
              <BookOpen size={15} /> Đọc sách
            </IngredientBadge>
            <IngredientBadge tone="mocha">
              <Palette size={15} /> Vẽ tranh
            </IngredientBadge>
            <IngredientBadge tone="matcha">
              <Sparkles size={15} /> Sáng tạo
            </IngredientBadge>
          </div>
        </div>
        <motion.div
          className="atelierStoryCard"
          initial={{ opacity: 0, rotate: 2, y: 18 }}
          animate={{ opacity: 1, rotate: 0, y: 0 }}
        >
          <div className="avatarFrame">
            <img src="/docs/avatar.jpg" alt="Nguyễn Thị Thu Ngân" />
          </div>
          <div>
            <span className="handNote">today's special</span>
            <h2>{person.fullName}</h2>
            <p>Mã sinh viên: {person.studentId}</p>
            <p>{person.style}</p>
          </div>
        </motion.div>
      </section>

      <section className="splitSection">
        <RecipeCard
          title="Recipe for this portfolio"
          icon={Coffee}
          items={[about.portfolioGoal, about.principle]}
        />
        <RecipeCard
          title="Ingredient tools"
          icon={Sparkles}
          items={about.tools}
        />
      </section>
    </Page>
  );
}
