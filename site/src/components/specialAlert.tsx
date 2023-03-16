import { PortableText } from '@portabletext/react';
import { graphql, useStaticQuery } from 'gatsby';
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
  // console.log(data.alert.nodes[0]._rawMessage);

  const components = {
    marks: {
      link: ({ markDefs, children }: SpecialAlertType) => {
        // console.log(mark);

        const { blank, href } = markDefs[0]
        // console.log(blank);

        // return blank ?
        //   <a href={href} target="_blank" rel="noopener">{children}</a>
        //   : <a href={href}>{children}</a>
      }
    }
  }

  if (data.alert.nodes.length >= 1) {
    return (
      <div className='bg-accent py-2'>
        <div className='max-w-screen-xl mx-auto'>
          <div className='text-center text-text'>
            <PortableText value={data.alert.nodes[0]._rawMessage} /*components={components}*/ />
          </div>
        </div>
      </div>
    );
  }
  return <></>
};

export default SpecialAlert;
