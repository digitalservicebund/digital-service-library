import React, { HtmlHTMLAttributes } from "react";
import "../../index.css";
import ChevronLeftIcon from "./svg/chevron-left.svg";
import ChevronRightIcon from "./svg/chevron-right.svg";
import ChevronUpIcon from "./svg/chevron-up.svg";
import ChevronDownIcon from "./svg/chevron-down.svg";
import CloudIcon from "./svg/cloud.svg";
import CloseIcon from "./svg/close.svg";
import PlusIcon from "./svg/plus.svg";
import LinkIcon from "./svg/link.svg";
import SearchIcon from "./svg/search.svg";
import BinIcon from "./svg/bin.svg";
import PencilIcon from "./svg/pencil.svg";
import ExternalIcon from "./svg/external.svg";
import ExportIcon from "./svg/export.svg";
import CircleIcon from "./svg/circle.svg";
import DownloadIcon from "./svg/download.svg";
import BulletIcon from "./svg/bullet.svg";

export const ChevronLeft = (props: HtmlHTMLAttributes<Element>) => {
  return (
    <div>
      <ChevronLeftIcon {...props} />
    </div>
  );
};

export const ChevronRight = (props: HtmlHTMLAttributes<Element>) => {
  return (
    <div>
      <ChevronRightIcon {...props} />
    </div>
  );
};

export const ChevronUp = (props: HtmlHTMLAttributes<Element>) => {
  return (
    <div>
      <ChevronUpIcon {...props} />
    </div>
  );
};

export const ChevronDown = (props: HtmlHTMLAttributes<Element>) => {
  return (
    <div>
      <ChevronDownIcon {...props} />
    </div>
  );
};

export const Cloud = (props: HtmlHTMLAttributes<Element>) => {
  return (
    <div>
      <CloudIcon {...props} />
    </div>
  );
};

export const Close = (props: HtmlHTMLAttributes<Element>) => {
  return (
    <div>
      <CloseIcon {...props} />
    </div>
  );
};

export const Plus = (props: HtmlHTMLAttributes<Element>) => {
  return (
    <div>
      <PlusIcon {...props} />
    </div>
  );
};

export const Link = (props: HtmlHTMLAttributes<Element>) => {
  return (
    <div>
      <LinkIcon {...props} />
    </div>
  );
};

export const Search = (props: HtmlHTMLAttributes<Element>) => {
  return (
    <div>
      <SearchIcon {...props} />
    </div>
  );
};

export const Bin = (props: HtmlHTMLAttributes<Element>) => {
  return (
    <div>
      <BinIcon {...props} />
    </div>
  );
};

export const Pencil = (props: HtmlHTMLAttributes<Element>) => {
  return (
    <div>
      <PencilIcon {...props} />
    </div>
  );
};

export const External = (props: HtmlHTMLAttributes<Element>) => {
  return (
    <div>
      <ExternalIcon {...props} />
    </div>
  );
};

export const Export = (props: HtmlHTMLAttributes<Element>) => {
  return (
    <div>
      <ExportIcon {...props} />
    </div>
  );
};

export const Circle = (props: HtmlHTMLAttributes<Element>) => {
  return (
    <div>
      <CircleIcon {...props} />
    </div>
  );
};

export const Download = (props: HtmlHTMLAttributes<Element>) => {
  return (
    <div>
      <DownloadIcon {...props} />
    </div>
  );
};

export const Bullet = (props: HtmlHTMLAttributes<Element>) => {
  return (
    <div>
      <BulletIcon {...props} />
    </div>
  );
};
