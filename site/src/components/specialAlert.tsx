import { PortableText } from '@portabletext/react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';

interface MarkDef {
  blank: boolean;
  href: string;
  _key: string;
  _type: string;
}

interface Children {
  marks: string[];
  text: string;
  _key: string;
  _type: string;
}

interface SpecialAlertValue {
  children: string[];
  markKey: string;
  markType: string;
  text: string;
  value: MarkDef;
}

interface SpecialAlertType {
  children: Children[];
  markDefs: MarkDef[];
  style: string;
  _key: string;
  _type: string;
}

const SpecialAlert = (): JSX.Element => {
  const data = useStaticQuery(graphql`
  query SpecialAlertQuery {
    alert: allSanitySpecialAlert(filter: {active: {eq: true}}) {
      nodes {
        _rawMessage
      }
    }
  }
  `)

  const components = {
    marks: {
      link: (props: SpecialAlertValue) => {
        const { value, text } = props;
        if (value.blank) {
          return <a href={value.href} target="_blank" rel='noopener noreferrer' className='hover:underline'>{text}</a>
        }
        return <Link to={value.href} className='hover:underline'>{text}</Link>
      }
    },
  } as any;

  if (data.alert.nodes.length >= 1) {
    return (
      <div className='bg-accent py-2'>
        <div className='max-w-screen-xl mx-6 lg:mx-auto'>
          <div className='text-center text-text'>
            <PortableText value={data.alert.nodes[0]._rawMessage} components={components} />
          </div>
        </div>
      </div>
    );
  }
  return <></>
};

export default SpecialAlert;
