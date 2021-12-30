import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import {
  ChevronLeft as Icon,
  ChevronRight as ChevronRightIcon,
  ChevronDown as ChevronDownIcon,
  ChevronUp as ChevronUpIcon,
  Cloud as CloudIcon,
  Close as CloseIcon,
  Plus as PlusIcon,
  Link as LinkIcon,
  Search as SearchIcon,
  Bin as BinIcon,
  Pencil as PencilIcon,
  External as ExternalIcon,
  Export as ExportIcon,
  Circle as CircleIcon,
  Download as DownloadIcon,
  Bullet as BulletIcon,
} from "./Icons";

export default {
  title: "Atoms/Icons",
  component: Icon,
} as ComponentMeta<typeof Icon>;

const AllIconsTemplate: ComponentStory<typeof Icon> = (args) => (
  <>
    <Icon style={{ color: args.color }} />
    <ChevronRightIcon style={{ color: args.color }} />
    <ChevronDownIcon style={{ color: args.color }} />
    <ChevronUpIcon style={{ color: args.color }} />
    <CloudIcon style={{ color: args.color }} />
    <CloseIcon style={{ color: args.color }} />
    <PlusIcon style={{ color: args.color }} />
    <LinkIcon style={{ color: args.color }} />
    <SearchIcon style={{ color: args.color }} />
    <BinIcon style={{ color: args.color }} />
    <PencilIcon style={{ color: args.color }} />
    <ExternalIcon style={{ color: args.color }} />
    <ExportIcon style={{ color: args.color }} />
    <CircleIcon style={{ color: args.color }} />
    <DownloadIcon style={{ color: args.color }} />
    <BulletIcon style={{ color: args.color }} />
  </>
);

export const AllIcons = AllIconsTemplate.bind({});
AllIcons.args = { color: "black" };
AllIcons.parameters = {
  docs: {
    source: {
      code: `
<div>
  <ChevronLeft />
  <ChevronRight />
  <ChevronDown />
  <ChevronUp />
  <Cloud />
  <Close />
  <Plus />
  <Link />
  <Search />
  <Bin />
  <Pencil />
  <External />
  <Export />
  <Circle />
  <Download />
  <Bullet />
</div>
`,
    },
  },
};

const Template: ComponentStory<typeof Icon> = (args) => (
  <Icon style={{ color: args.color }} />
);

export const ChevronLeft = Template.bind({});
ChevronLeft.args = { color: "black" };
ChevronLeft.parameters = {
  docs: {
    source: {
      code: "<ChevronLeft />",
    },
  },
};

const ChevronRightTemplate: ComponentStory<typeof ChevronRightIcon> = (
  args
) => <ChevronRightIcon style={{ color: args.color }} />;

export const ChevronRight = ChevronRightTemplate.bind({});
ChevronRight.args = { color: "black" };
ChevronRight.parameters = {
  docs: {
    source: {
      code: "<ChevronRight />",
    },
  },
};

const ChevronUpTemplate: ComponentStory<typeof ChevronUpIcon> = (args) => (
  <ChevronUpIcon style={{ color: args.color }} />
);

export const ChevronUp = ChevronUpTemplate.bind({});
ChevronUp.args = {
  color: "blue",
};
ChevronUp.parameters = {
  docs: {
    source: {
      code: "<ChevronUp />",
    },
  },
};

const ChevronDownTemplate: ComponentStory<typeof ChevronDownIcon> = (args) => (
  <ChevronDownIcon style={{ color: args.color }} />
);

export const ChevronDown = ChevronDownTemplate.bind({});
ChevronDown.args = {
  color: "red",
};
ChevronDown.parameters = {
  docs: {
    source: {
      code: "<ChevronDown />",
    },
  },
};

const CloudTemplate: ComponentStory<typeof CloudIcon> = (args) => (
  <CloudIcon style={{ color: args.color }} />
);

export const Cloud = CloudTemplate.bind({});
Cloud.args = {
  color: "grey",
};
Cloud.parameters = {
  docs: {
    source: {
      code: "<Cloud />",
    },
  },
};
