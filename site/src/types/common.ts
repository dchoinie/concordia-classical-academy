import { IconProp } from "@fortawesome/fontawesome-svg-core";

export interface SubMenuItem {
  link: string;
  _key: string;
  label: string;
  external?: boolean;
}

export interface NavItemType {
  link: string;
  id: string;
  label: string;
  external?: boolean;
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
  submissionInProgress?: boolean;
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
    gatsbyImageData: any;
  }
}

export interface EventSlug {
  current: string;
}

export interface EventType {
  endDate: Date;
  id: string;
  image: ImageAsset;
  location?: string;
  name: string;
  slug: EventSlug;
  startDate: Date;
  details?: any;
}