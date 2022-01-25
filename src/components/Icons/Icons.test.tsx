import React from "react";
import { render } from "@testing-library/react";

import {
  BulletIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronUpIcon,
  CircleIcon,
  CloudIcon,
  DownloadIcon,
  ExternalIcon,
  LinkIcon,
  PencilIcon,
  PlusIcon,
  SearchIcon,
} from "./index";

describe("Icons", () => {
  [
    BulletIcon,
    ChevronRightIcon,
    ChevronLeftIcon,
    ChevronDownIcon,
    ChevronUpIcon,
    CircleIcon,
    CloudIcon,
    DownloadIcon,
    ExternalIcon,
    LinkIcon,
    PencilIcon,
    PlusIcon,
    SearchIcon,
  ].forEach((Icon) => {
    test(`renders the ${Icon.name} Icon`, () => {
      render(<Icon />);
    });
  });
});
