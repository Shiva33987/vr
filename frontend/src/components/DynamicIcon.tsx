import React from 'react';
import {
  Tv,
  Train,
  Building2,
  Share2,
  Sparkles,
  HeartHandshake,
  Cake,
  Briefcase,
  PartyPopper,
  Megaphone,
  MapPin,
  ShieldCheck,
  BarChart3,
  Zap,
  Compass,
  Layers,
  Phone,
  Mail,
  Clock,
  CheckCircle2,
  ArrowRight,
  Star,
  ExternalLink,
  ChevronDown,
  ChevronRight,
  Menu,
  X,
  Award,
  ArrowUp,
  MessageCircle,
  Eye,
  ZoomIn,
  Calendar,
  LucideIcon,
} from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Tv,
  Train,
  Building2,
  Share2,
  Sparkles,
  HeartHandshake,
  Cake,
  Briefcase,
  PartyPopper,
  Megaphone,
  MapPin,
  ShieldCheck,
  BarChart3,
  Zap,
  Compass,
  Layers,
  Phone,
  Mail,
  Clock,
  CheckCircle2,
  ArrowRight,
  Star,
  ExternalLink,
  ChevronDown,
  ChevronRight,
  Menu,
  X,
  Award,
  ArrowUp,
  MessageCircle,
  Eye,
  ZoomIn,
  Calendar,
};

interface DynamicIconProps {
  name: string;
  className?: string;
  size?: number;
}

export const DynamicIcon: React.FC<DynamicIconProps> = ({
  name,
  className = 'w-6 h-6',
  size,
}) => {
  const IconComponent = iconMap[name] || Sparkles;
  return <IconComponent className={className} size={size} />;
};
