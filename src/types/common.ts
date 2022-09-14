import { IconProp } from "@fortawesome/fontawesome-svg-core";

export interface SubMenuItem {
  link: string;
  _key: string;
  label: string;
}

export interface NavItemType {
  link: string;
  id: string;
  label: string;
  subLinks: SubMenuItem[] | Array<any>;
}

export interface Button {
  classes?: string[];
  disabled?: boolean;
  download?: boolean;
  endIcon?: IconProp;
  href?: string;
  label: string;
  link?: string;
  onChange?: any;
  onClick?: any;
  size?: string;
  startIcon?: IconProp;
  theme?: string;
  disableTargetBlank?: boolean;
}

export type MetadataProps = {
  site: {
    siteMetadata: {
      title?: string,
      siteUrl?: string,
      address?: string,
      phone?: string,
      email?: string,
    };
  };
};

export interface ImageAsset {
  asset: {
    url: string;
  }
}

export interface EventSlug {
  current: string;
}

export interface EventType {
  endDate: Date;
  id: string;
  image: ImageAsset;
  name: string;
  slug: EventSlug;
  startDate: Date;
  summary: string;
}