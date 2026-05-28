import {
  BadgeCheck,
  BookOpen,
  Bot,
  Camera,
  FileText,
  FolderKanban,
  GraduationCap,
  HeartHandshake,
  Library,
  Palette,
  Presentation,
  Quote,
  SearchCheck,
  ShieldCheck,
  Sparkles,
  UsersRound,
  Video,
} from 'lucide-react';

const icons = {
  BadgeCheck,
  BookOpen,
  Bot,
  Camera,
  FileText,
  FolderKanban,
  GraduationCap,
  HeartHandshake,
  Library,
  Palette,
  Presentation,
  Quote,
  SearchCheck,
  ShieldCheck,
  Sparkles,
  UsersRound,
  Video,
};

export default function IconBadge({ icon = 'Sparkles', size = 'default', tone }) {
  const Icon = icons[icon] || Sparkles;

  return (
    <span className={`icon-badge icon-badge--${size}`} style={tone ? { '--badge-tone': tone } : undefined}>
      <Icon size={size === 'small' ? 15 : 20} strokeWidth={1.8} />
    </span>
  );
}


