import React from "react";
import { SEO } from "../../components/seo";
import Layout from "../../components/layout";
import PageTitle from "../../components/pageTitle";
import * as styles from "../../styles/learnByHeartChallenge.module.scss";

interface LearnContent {
  title: string;
  catechism?: JSX.Element;
  bible?: JSX.Element;
}

const learnContent = [
  {
    title: "By the end of Kindergarten students will learn by heart:",
    catechism: (
      <ul className={styles.list}>
        <li className={styles.listItem}>
          The Ten Commandments excluding the explanations from the catechism
        </li>
        <li className={styles.listItem}>
          All three article of the Apostle’s Creed excluding the explanations
          from the catechism
        </li>
        <li className={styles.listItem}>
          The Lord’s Prayer excluding the explanations from the catechism
        </li>
      </ul>
    ),
    bible: (
      <ul className={styles.list}>
        <li className={styles.listItem}>
          Proverbs 3:5 “Trust in the Lord with all your heart, and do not lean
          on your own understanding.”
        </li>
        <li className={styles.listItem}>
          1 John 1:8 “If we say we have no sin, we deceive ourselves, and the
          truth is not in us.”
        </li>
        <li className={styles.listItem}>
          1 John 1:9 “If we confess our sins, he is faithful and just to forgive
          us our sins and to cleanse us from all unrighteousness.”
        </li>
        <li className={styles.listItem}>
          Psalm 118:1 “Oh give thanks unto the Lord, for He is good; for His
          steadfast love endures forever.”
        </li>
        <li className={styles.listItem}>
          Psalm 34:13 “Keep your tongue from evil and your lips from speaking
          deceit.”
        </li>
        <li className={styles.listItem}>
          Psalm 119:105 “Your Word is a lamp to my feet, and a light to my
          path.”
        </li>
        <li className={styles.listItem}>
          Mathew 11: 28 “Come to me, all who labor and are heavy laden, and I
          will give you rest.”
        </li>
        <li className={styles.listItem}>
          Ephesians 6:1 “Children, obey your parents in the Lord, for this is
          right.”
        </li>
        <li className={styles.listItem}>
          John 3:16 “For God so loves the world, that He gave His only Son, that
          whoever believes in HIm will not perish, but have eternal life.”
        </li>
      </ul>
    ),
  },
  {
    title: "By the end of second grade students will learn by heart:",
    catechism: (
      <ul className={styles.list}>
        <li className={styles.listItem}>
          The Ten Commandments with explanations
        </li>
        <li className={styles.listItem}>
          The Apostle’s Creed with explanations
        </li>
        <li className={styles.listItem}>The Lord’s Prayer with explanations</li>
      </ul>
    ),
    bible: (
      <ul className={styles.list}>
        <li className={styles.listItem}>
          Psalm 50:15 “Call upon me in the day of trouble. I will deliver you,
          and you shall glorify me.”
        </li>
        <li className={styles.listItem}>
          1 John 1:7 “But if we walk in the light, as he is in the light, we
          have fellowship with one another, and the blood of Jesus his Son
          cleanses us from all sin.”
        </li>
        <li className={styles.listItem}>
          1 Corinthians 13:6 “Love does not rejoice at wrongdoing, but rejoices
          with the truth.”
        </li>
        <li className={styles.listItem}>
          Genesis 1:27 “So God created man in His own image, in the image of God
          He created him; male and female He created them.”
        </li>
        <li className={styles.listItem}>
          Hebrews 13:16 “Do Not neglect to do good and to share what you have,
          for such sacrifices are pleasing to God.”
        </li>
        <li className={styles.listItem}>
          1 Peter 4:8 “Above all, keep loving one another earnestly, since love
          covers a multitude of sins.”
        </li>
        <li className={styles.listItem}>
          John 3:16 “For God so loves the world, that He gave His only Son, that
          whoever believes in HIm will not perish, but have eternal life.”
        </li>
      </ul>
    ),
  },
  {
    title: "By the end of fourth grade students will learn by heart:",
    catechism: (
      <ul className={styles.list}>
        <li className={styles.listItem}>
          The Sacrament of Holy Baptism with explanation
        </li>
        <li className={styles.listItem}>
          Confession and the office of the keys
        </li>
        <li className={styles.listItem}>
          The Sacrament of the Altar with explanation
        </li>
      </ul>
    ),
    bible: (
      <ul className={styles.list}>
        <li className={styles.listItem}>The books of the Bible</li>
        <li className={styles.listItem}>
          Psalm 37:4 “Delight yourself in the Lord, and He will give you the
          desires of your heart.”
        </li>
        <li className={styles.listItem}>
          1 Peter 4:10 “As each has received a gift, use it to serve one
          another, as good stewards of God’s varied grace.”
        </li>
        <li className={styles.listItem}>
          1 John 1:8-9 “If we say we have no sin, we deceive ourselves, and the
          truth is not in us. “If we confess our sins, he is faithful and just
          to forgive us our sins and to cleanse us from all unrighteousness.”
        </li>
        <li className={styles.listItem}>
          Romans 5:19 “For as by one man’s disobedience the many were made
          singers, so by the one man’s obedience the many will be made
          righteous.”
        </li>
        <li className={styles.listItem}>
          Galatians 3:13 “Christ redeemed us from the curse of the law by
          becoming a curse for us, for it is written, “cursed is everyone who is
          hanged on a tree.”
        </li>
      </ul>
    ),
  },
  {
    title: "By the end of sixth students will learn by heart:",
    catechism: (
      <ul className={styles.list}>
        <li className={styles.listItem}>
          The Ten Commandments with explanations
        </li>
        <li className={styles.listItem}>
          The Apostle’s Creed with explanations
        </li>
        <li className={styles.listItem}>The Lord’s Prayer with explanations</li>
        <li className={styles.listItem}>
          The Sacrament of Holy Baptism with explanation
        </li>
        <li className={styles.listItem}>
          Confession and the office of the keys
        </li>
        <li className={styles.listItem}>
          The Sacrament of the Altar with explanation
        </li>
      </ul>
    ),
    bible: (
      <ul className={styles.list}>
        <li className={styles.listItem}>The books of the Bible</li>
        <li className={styles.listItem}>
          Psalm 19:1 “The heavens declare the glory of God, and the sky above
          His handiwork”
        </li>
        <li className={styles.listItem}>
          Psalm 139:13-14 “For you formed my inward parts; you knitted me
          together in my mother's womb. I praise you, for I am fearfully and
          wonderfully made. Wonderful are your works; my soul knows it very
          well.”
        </li>
        <li className={styles.listItem}>
          John 1:14 “And the Word became flesh and dwelt among us, and we have
          seen his glory, glory as of the only Son from the Father, full of
          grace and truth.”
        </li>
        <li className={styles.listItem}>
          2 Corinthians 5:21 “For our sake he made him to be sin who knew no
          sin, so that in him we might become the righteousness of God.”
        </li>
        <li className={styles.listItem}>
          James 1:2-3 “Count it all joy, my brothers, when you meet trials of
          various kinds, 3 for you know that the testing of your faith produces
          steadfastness.”
        </li>
      </ul>
    ),
  },
  {
    title:
      "Learn by heart for seventh and with grade will be incorporated into the systematic theology course taught by the pastor.",
  },
];

const LearnByHeartChallenge = (): JSX.Element => {
  return (
    <>
      <SEO title="Learn By Heart Challenge" />
      <Layout>
        <div className="max-w-screen-xl mx-6 lg:mx-auto">
          <PageTitle title="Learn By Heart Challenge" />
          <div className="my-24">
            <h3>
              A hallmark of Lutheran catechesis is memory work. This is an
              important piece in our goal to teach our students here what is
              true, what is good, and what is beautiful.
            </h3>
            <hr className="my-6 border border-accent w-1/3" />
            <h6 className="mb-6">
              As we joyfully take up the task our God has given us to do, to
              pass on this saving faith in Jesus, once delivered to the saint
              (Jude 1:3) I propose the following framework for Learn by Heart.
              Note that this framework is specifically designed to allow
              teachers to execute the plan in the best way according to age and
              abilities in the classroom. The ultimate goal is for our students
              to have tucked away in their hearts the very promises of Christ,
              so that, when the storms of life hit them, they will find that the
              Word of God dwells richly with them. (Philippians 4:7)
            </h6>
            <h6>
              To ensure continuity through all years of education, each
              classroom will use the 1986 version of Luther’s Small Catechism,
              and the ESV translation of the Bible.
            </h6>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 my-12">
              {learnContent.map((content: LearnContent) => (
                <div className="flex flex-col bg-gray-50 border border-gray-100 rounded shadow-lg p-6">
                  <h4>{content.title}</h4>
                  <hr className="my-3 border border-accent w-1/3" />
                  {content.catechism && (
                    <div className="flex flex-col mb-4">
                      <h6>From the catechism:</h6>
                      {content.catechism}
                    </div>
                  )}
                  {content.bible && (
                    <div className="flex flex-col mb-4">
                      <h6>From the Bible:</h6>
                      {content.bible}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default LearnByHeartChallenge;
