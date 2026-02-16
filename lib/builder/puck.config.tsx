/**
 * Puck Editor Configuration
 *
 * Based on: puckeditor/puck → recipes/next/puck.config.tsx
 * Adapted for: Tailwind CSS 4 + shadcn/ui + cn() utility
 *
 * All components use DropZone for nested layouts where applicable.
 */

import type { Config } from "@puckeditor/core";
import {
  // Layout
  Container,
  Columns,
  FlexLayout,
  Spacer,
  Divider,
  // Content
  Heading,
  Paragraph,
  RichText,
  ImageBlock,
  ButtonBlock,
  Embed,
  // Section
  Hero,
  CardBlock,
  FeatureGrid,
  CTASection,
  Testimonial,
  StatsRow,
  // Interactive
  Accordion,
  TabsBlock,
} from "./components";

import type { ContainerProps } from "./components/container";
import type { ColumnsProps } from "./components/columns";
import type { FlexLayoutProps } from "./components/flex-layout";
import type { SpacerProps } from "./components/spacer";
import type { DividerProps } from "./components/divider";
import type { HeadingProps } from "./components/heading";
import type { ParagraphProps } from "./components/paragraph";
import type { RichTextProps } from "./components/rich-text";
import type { ImageBlockProps } from "./components/image-block";
import type { ButtonBlockProps } from "./components/button-block";
import type { EmbedProps } from "./components/embed";
import type { HeroProps } from "./components/hero";
import type { CardBlockProps } from "./components/card-block";
import type { FeatureGridProps } from "./components/feature-grid";
import type { CTASectionProps } from "./components/cta-section";
import type { TestimonialProps } from "./components/testimonial";
import type { StatsRowProps } from "./components/stats-row";
import type { AccordionProps } from "./components/accordion";
import type { TabsBlockProps } from "./components/tabs-block";

type AllProps = {
  // Layout
  Container: ContainerProps;
  Columns: ColumnsProps;
  FlexLayout: FlexLayoutProps;
  Spacer: SpacerProps;
  Divider: DividerProps;
  // Content
  Heading: HeadingProps;
  Paragraph: ParagraphProps;
  RichText: RichTextProps;
  ImageBlock: ImageBlockProps;
  ButtonBlock: ButtonBlockProps;
  Embed: EmbedProps;
  // Section
  Hero: HeroProps;
  CardBlock: CardBlockProps;
  FeatureGrid: FeatureGridProps;
  CTASection: CTASectionProps;
  Testimonial: TestimonialProps;
  StatsRow: StatsRowProps;
  // Interactive
  Accordion: AccordionProps;
  TabsBlock: TabsBlockProps;
};

export const config: Config<AllProps> = {
  categories: {
    layout: {
      title: "تخطيط",
      components: ["Container", "Columns", "FlexLayout", "Spacer", "Divider"],
    },
    content: {
      title: "محتوى",
      components: [
        "Heading",
        "Paragraph",
        "RichText",
        "ImageBlock",
        "ButtonBlock",
        "Embed",
      ],
    },
    sections: {
      title: "أقسام",
      components: [
        "Hero",
        "CardBlock",
        "FeatureGrid",
        "CTASection",
        "Testimonial",
        "StatsRow",
      ],
    },
    interactive: {
      title: "تفاعلي",
      components: ["Accordion", "TabsBlock"],
    },
  },
  components: {
    // ─── Layout ────────────────────────────
    Container,
    Columns,
    FlexLayout,
    Spacer,
    Divider,
    // ─── Content ───────────────────────────
    Heading,
    Paragraph,
    RichText,
    ImageBlock,
    ButtonBlock,
    Embed,
    // ─── Section ───────────────────────────
    Hero,
    CardBlock,
    FeatureGrid,
    CTASection,
    Testimonial,
    StatsRow,
    // ─── Interactive ───────────────────────
    Accordion,
    TabsBlock,
  },
  root: {
    fields: {
      title: { type: "text" },
    },
    defaultProps: {
      title: "صفحة جديدة",
    },
    render: ({ children }) => {
      return (
        <div className="min-h-screen bg-background text-foreground">
          {children}
        </div>
      );
    },
  },
};

export default config;
