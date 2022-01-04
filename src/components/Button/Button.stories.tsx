import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "./Button";

export default {
  title: "Atoms/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>{args.children || "Registrieren"}</Button>
);

export const Primary = Template.bind({});

export const Small = Template.bind({});
Small.args = {
  small: true,
};

export const Tiny = Template.bind({});
Tiny.args = {
  tiny: true,
};

export const PrimaryDisabled = Template.bind({});
PrimaryDisabled.args = {
  disabled: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
  secondary: true,
};

export const SecondaryDisabled = Template.bind({});
SecondaryDisabled.args = {
  ...Secondary.args,
  disabled: true,
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  tertiary: true,
};

export const TertiaryDisabled = Template.bind({});
TertiaryDisabled.args = {
  ...Tertiary.args,
  disabled: true,
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  className: "w-full",
};

export const Link = Template.bind({});
Link.args = {
  href: "https://digitalservice.bund.de",
};

export const LongText = Template.bind({});
LongText.storyName = "[Edge Case] Long Text";
LongText.args = {
  children:
    "Der DigitalService4Germany entwickelt digitale Lösungen für und mit der Bundesverwaltung. Im Zentrum stehen die Bedürfnisse der Nutzerinnen und Nutzer. Unser Ziel: Dienstleistungen, die besser für alle funktionieren.",
};

export const LongWord = Template.bind({});
LongWord.storyName = "[Edge Case] Long Word";
LongWord.args = {
  children:
    "DerDigitalService4GermanyentwickeltdigitaleLösungenfürundmitderBundesverwaltung.ImZentrumstehendieBedürfnissederNutzerinnenundNutzer.UnserZiel:Dienstleistungen,diebesserfürallefunktionieren.",
};
