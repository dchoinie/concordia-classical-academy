import React from "react";
import Layout from "../../components/layout";
import PageTitle from "../../components/pageTitle";
import { SEO } from "../../components/seo";

interface ChristianEducationItem {
  text: string;
}

const bullets = [
  {
    text: "Report more frequent experiences with God in their personal lives.",
  },
  {
    text: "Exhibit a more consistent belief in the divinity of Jesus.",
  },
  {
    text: "Profess a greater clarity on the way of salvation by grace through faith in Jesus Christ alone (show more tendency to reject belief in salvation by works).",
  },
  {
    text: "Display more Biblical knowledge.",
  },
  {
    text: "Engage in a much fuller devotional life.",
  },
  {
    text: "Do more witnessing to others about Christ.",
  },
  {
    text: "Hold a more balanced theology (not liberal, not ultraconservative, but a balanced conservatism).",
  },
  {
    text: "Give a high value to relationships with God and other persons.",
  },
  {
    text: "Show a more reasonable respect for authority.",
  },
  {
    text: "Live out stronger tendencies to be forgiving and personally forthright with other people.",
  },
  {
    text: "Evidence greater avoidance of over-simplistic views. (i.e., views of social issues as mere power struggles.).",
  },
  {
    text: "Reveal less tendency to be anxious about their faith.",
  },
  {
    text: "Are less swayed by their peers.",
  },
];

const lutheranSchoolsParagraphs = [
  {
    text: "Lutheran Schools Tops in the Nation on 'the Nations Report Card.' Accountability! Results – what difference does it make? We are becoming a data-driven nation in regard to our schools. Whether you agree with that direction or not, it is where we are at this moment in our nation’s history. Parents want to know if their child is receiving a quality education.",
  },
  {
    text: "The National Assessment of Educational Progress (NAEP), also known as “The Nation’s Report Card,” is the only nationally representative and continuing assessment of what America’s students know and can do in various subject areas.",
  },
  {
    text: "The report is in and the news is GREAT for our Lutheran schools. In five of the eight categories we finished in first place among nine other categorizations. In the other three we finished second. The groups included the following: public, other religious, nonsectarian, Catholic, bureau of Indian Affairs, Department of Defense, State Department of Education, Lutheran, and Conservative Christian.",
  },
  {
    text: "Lutheran schools finished first in science in the 4th, 8th and 12th grades (grades where data was gathered). In reading we finished 1st in 4th and 8th grade (data was not gathered for the 12th grade). In math we finished 2nd in 4th, 8th and 12th grades.",
  },
  {
    text: "In 4th grade science the average Lutheran student score was 166; Catholic school students scored at 162 ; conservative Christian at 159; and public school students at 149. In 8th grade science: Lutheran – 170, Catholic – 166, conservative Christian – 162, and public – 149. In 4th grade reading (2002) Lutheran – 236, Catholic – 234, conservative Christian – 229, and public – 217. In 8th grade math other private students – 298, Lutheran – 296, Catholic – 289, Conservative Christian – 286, and public – 276.",
  },
  {
    text: "Some might argue that Lutheran schools have parents who are more involved. Some might say that attending a Lutheran school is a choice. Some would say that it is not fair to compare students from different types of schools because each school type is unique. To each of these statements there is truth. Students attending Lutheran schools are blessed to have parents who are very concerned about the education their children receive. Students attending a Lutheran school do so by choice. Those who do not want to take advantage of those blessings are excused from that choice. Each school and each school type is unique.",
  },
  {
    text: "In Lutheran schools, in addition to teaching math, reading, science and all the other subjects, we have the unique privilege of sharing with students and families the most important truth of all: God has won the victory over sin and death for eternity through the death and resurrection of His Son, Jesus Christ.",
  },
  {
    text: "Lutheran schools are great places to grow. We thank God for the students and families who have the privilege of attending Lutheran schools. Lutheran schools, like any schools, are not perfect. In Lutheran schools students learn that they are forgiven and that they also can forgive others because of Jesus Christ. And yes, we do thank God for great test scores. And we thank God for teachers, parents, administrators, boards and congregations who continue to strive for excellence to serve our God who gave us our gifts and talents and to serve our fellow man. Praise God for His blessings!",
  },
  {
    text: "(Author’s note: This article is in no way meant to belittle public schools or other private non-public schools. I thank God for the Christian teachers we do have in our public schools. There are many Christian students giving witness to their friends and teachers in public schools.)",
  },
];

const ChristianEducation = (): JSX.Element => {
  return (
    <>
      <SEO title="Christian Education" />
      <Layout>
        <div className="max-w-screen-xl mx-6 lg:mx-auto">
          <PageTitle title="Christian Education" />
          <div className="my-24">
            <div className="mb-12">
              <h4 className="text-3xl text-gray-700 text-center">
                Do Lutheran Schools Make A Difference?
              </h4>
              <h6 className="text-lg text-center text-accent max-w-screen-lg mx-auto">
                What Kind of Difference? Reliable statistical research indicates
                that a study of Lutherans reveals that those who attended
                Lutheran schools:
              </h6>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              {bullets.map((bullet: ChristianEducationItem) => (
                <div key={bullet.text} className="bg-gray-50 p-6 rounded shadow-lg">
                  <p>{bullet.text}</p>
                </div>
              ))}
            </div>
            <hr className="my-12 border border-gray-200 w-2/3 mx-auto" />
            <div>
              <p className="mb-6 text-gray-600">
                The research also proved that the more years a person attended a
                Lutheran school, the more significant the difference became. The
                research does not indicate that these same qualities cannot be
                present in individuals who have not attended a Lutheran
                elementary and /or secondary school, but it is less likely.
                Similarly, it is recognized that the power to lead a Christian
                life is a free gift of the Holy Spirit working through the Word.
              </p>
              <p className="text-gray-500 italic">
                Milo Brekke, How Different Are People Who Attended Lutheran
                Schools (St. Louis: Concordia Publishing House; based on data
                compiled by Youth Research Center for “A Study of Generations.”)
              </p>
            </div>
            <hr className="my-12 border border-gray-200 w-2/3 mx-auto" />
            <div className="mb-12">
              <h4 className="text-3xl text-gray-700 text-center">
                Lutheran Schools Tops in Nation
              </h4>
              <h6 className="text-lg text-center text-accent max-w-screen-lg mx-auto">
                Article from Dr. Bill Hinz, Director of School Ministry, Texas
                District. (The information is based on information gleaned from
                the Nation’s Report Card, NAEP)
              </h6>
            </div>
            <div className="flex flex-col lg:flex-row gap-12">
              <div className="flex flex-col w-full lg:w-1/2 gap-6">
                {lutheranSchoolsParagraphs
                  .filter((_, i) => i < 5)
                  .map((text: ChristianEducationItem) => (
                    <p key={text.text} className="text-gray-700">{text.text}</p>
                  ))}
              </div>
              <div className="flex flex-col w-full lg:w-1/2 gap-6">
                {lutheranSchoolsParagraphs
                  .filter((_, i) => i > 5)
                  .map((text: ChristianEducationItem) => (
                    <p key={text.text} className="text-gray-700">{text.text}</p>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default ChristianEducation;
