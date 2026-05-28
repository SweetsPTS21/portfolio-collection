import { Mail, Send } from "lucide-react";
import { portfolioData } from "../data/portfolioData";
import { Page } from "../components/ui/Page";
import { IngredientBadge, ReflectionReceiptCard } from "../components/ui/Cards";

export function ConclusionPage() {
  const { conclusion } = portfolioData;

  return (
    <Page className="conclusionPage">
      <section className="pageIntro closingIntro">
        <IngredientBadge>Closing table</IngredientBadge>
        <h1>Closing Table Reflection</h1>
        <p>{conclusion.reflection}</p>
      </section>
      <section className="receiptGrid">
        <ReflectionReceiptCard title="Giá trị thu nhận" items={conclusion.values} />
        <ReflectionReceiptCard title="Điểm tâm đắc" items={conclusion.highlights} />
        <ReflectionReceiptCard title="Thách thức" items={conclusion.challenges} />
        <ReflectionReceiptCard title="Định hướng" items={[conclusion.future]} total="Total: tự do + ngăn nắp + sáng tạo cá nhân" />
      </section>
      <a className="finalCta" href="mailto:" aria-label="Send note">
        <Send size={18} />
        Send a warm note
        <Mail size={18} />
      </a>
    </Page>
  );
}
