import React from "react";
import Layout from "../../components/layout";
import PageTitle from "../../components/pageTitle";
import { SEO } from "../../components/seo";

const smallCatechism = [
  {
    text: "The Ten Commandments",
  },
  {
    text: "The Apostles' Creed",
  },
  {
    text: "The Lord's Prayer",
  },
  {
    text: "The Sacrament of Holy Baptism",
  },
  {
    text: "Confession",
  },
  {
    text: "The Sacrament of the Altar",
  },
];

const WhatIsClassicalEducation = () => {
  return (
    <>
      <SEO title="What Is Classical Education?" />
      <Layout>
        <div className="max-w-screen-xl mx-6 lg:mx-auto">
          <PageTitle title="What Is Classical Education?" />
          <div className="my-24 flex flex-col lg:flex-row gap-24">
            <div className="flex w-full lg:w-1/2">
              <h2 className="text-3xl self-center text-gray-800">
                What Are the Seven Liberal Arts?
              </h2>
            </div>
            <div className="flex w-full lg:w-1/2">
              <p className="text-gray-600">
                The Seven Liberal Arts include the three arts of language
                (trivium) and the four arts of mathematics (quadrivium).
                “Liberal” derives from the Latin word for “free,” as these “arts
                of freedom” were designed so free people could think about great
                ideas for the noble service of others. In contrast, the
                “servile” arts, an education for slaves, prepare for menial
                labor. The liberal arts enable an individual to live, to study,
                to think, and to serve others in any vocation.
              </p>
            </div>
          </div>
          <hr className="my-6 border border-gray-200 w-2/3 mx-auto" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 my-24">
            <div className="flex flex-col">
              <h3 className="text-2xl text-gray-800 mb-6">
                The Arts of Language: The Trivium (3)
              </h3>
              <div className="mb-12">
                <h4 className="text-lg text-accent">
                  Grammar &mdash; all that is foundational in language
                </h4>
                <hr className="my-3 border-border-gray-200 w-2/3" />
                <p className="mb-2 text-gray-600">
                  Grammar includes learning letters, reading, and spelling;
                  beautiful penmanship, crafting sentences and paragraphs;
                  developing a rich vocabulary. Grammar is taught by imitation
                  &mdash; copying excellent writing of others, reading and
                  hearing good literature, and especially through the study of
                  Latin.
                </p>
                <p className="text-gray-600">
                  The disciplined study of the ordered Latin grammar strengthens
                  the student&apos;s mind, offers an appreciation of a great
                  literary heritage, and enhances the knowledge of the
                  student&apos;s own native grammar and vocabulary. For
                  thousands of years, Greek has also assisted in teaching the
                  arts of language and providing the foundation for reading
                  classic literary works.
                </p>
              </div>
              <div className="mb-12">
                <h4 className="text-lg text-accent">
                  Logic &mdash; analysis of language
                </h4>
                <hr className="my-3 border-border-gray-200 w-2/3" />
                <p className="mb-2 text-gray-600">
                  Analytical thinking, discernment, and argumentation comprise
                  Logic. The student of Logic learns to identify false
                  statements and illogical premises, whether in his own thinking
                  or in the assertions of others. Logic helps to organize a
                  student&apos;s mind and prepare a student for public
                  discourse. Taught in the early years with simple cause and
                  effect of consequences such as those found in Aesop&apos;s
                  fables and in family life, formal Logic is taught as the
                  student&apos;s mind matures.
                </p>
              </div>
              <div className="mb-12">
                <h4 className="text-lg text-accent">
                  Rhetoric &mdash; eloquence, beauty, and persuasion with
                  language
                </h4>
                <hr className="my-3 border-border-gray-200 w-2/3" />
                <p className="mb-2 text-gray-600">
                  Rhetoric enables the student to write and speak with
                  eloquence. Ancient Roman orator Quintilian urged the modeling
                  of excellent speech even with very young children (Institutio
                  Oratoria, Book One). When parents and teachers read poetry
                  aloud, they bring beautiful examples of language to their
                  children. As the student masters foundational and analytical
                  elements of language, lessons in formal Rhetoric become part
                  of his classical education.
                </p>
              </div>
            </div>
            <div className="flex flex-col">
              <h3 className="text-2xl text-gray-800 mb-6">
                The Arts of Mathematics &mdash; The Quadrivium (4))
              </h3>
              <p className="text-gray-600 mb-2">
                Sometimes neglected in today&apos;s applications of classical
                education, the Quadrivium is designed to strengthen the
                child&apos;s mind while cultivating in him an appreciation for
                the patterns and order of the world in which he lives. Through
                the Quadrivium, as with the Trivium, the teacher&apos;s purpose
                is to incline the child toward that which is signiﬁcantly true,
                good, and beautiful.
              </p>
              <p className="text-gray-600 mb-12">
                This approach to the Mathematical Arts contrasts with the
                starkly utilitarian questions, If I will never use this in my
                daily life, why learn it? If I will not need this to &apos;get a
                job,&apos; why study this at all? The Quadrivium teaches
                foundational content with a formative impact on the student
                himself. The Mathematical Arts &mdash; far more than isolated
                bits of knowledge &mdash; command a strong presence in the
                classical curriculum as follows:
              </p>
              <div className="mb-12">
                <h4 className="text-lg font-bold">
                  Discrete quantity or number
                </h4>
                <hr className="my-3 border-border-gray-200 w-2/3" />
                <p className="mb-2 text-accent">
                  Arithmetic &mdash; theory of number
                </p>
                <p className="mb-2 text-accent">
                  Music Theory &mdash; application of the theory of number
                </p>
              </div>
              <div className="mb-12">
                <h4 className="text-lg font-bold">Continuous quantity</h4>
                <hr className="my-3 border-border-gray-200 w-2/3" />
                <p className="mb-2 text-accent">
                  Geometry &mdash; theory of space
                </p>
                <p className="mb-2 text-accent">
                  Astronomy &mdash; application of the theory of space
                </p>
              </div>
            </div>
          </div>
          <hr className="my-6 border border-gray-200 w-2/3 mx-auto" />
          <div className="my-24 flex flex-col lg:flex-row gap-24">
            <div className="flex w-full lg:w-1/2">
              <h2 className="text-3xl self-center text-gray-800">
                What Is Catechesis?
              </h2>
            </div>
            <div className="flex flex-col w-full lg:w-1/2">
              <p className="text-gray-600 mb-2">
                ...instruction for children and the simple folk. Therefore, in
                ancient times it was called in Greek catechism (i.e.,
                instruction for children). It teaches what every Christian must
                know.
              </p>
              <p className="text-gray-600 mb-2">
                Therefore, we must have the young learn well and ﬂuently the
                parts of the catechism or instruction for children, diligently
                exercising themselves in them, and keep them busy with these
                parts. (Luther, 1988, Preface)
              </p>
              <p className="text-gray-600">
                Martin Luther&apos;s Small Catechism divides the teaching of the
                historic Christian faith into Six Chief Parts:
              </p>
            </div>
          </div>
          <div className="my-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {smallCatechism.map((text) => (
              <div className="bg-primary p-6 rounded shadow-lg border border-gray-200">
                <p className="text-white text-center">{text.text}</p>
              </div>
            ))}
          </div>
          <hr className="my-6 border border-gray-200 w-2/3 mx-auto" />
          <div className="my-24 flex flex-col lg:flex-row gap-24">
            <div className="flex flex-col w-full lg:w-1/2">
              <h2 className="text-3xl text-gray-800">
                The Lutheran Doctrine of Vocation
              </h2>
              <hr className="my-6 border border-gray-200 w-2/3" />
              <p className="text-gray-600 mb-2">
                Parents and teachers can ﬁnd the task of teaching overwhelming.
                How can I do all of this? With classical education&apos;s emphasis on
                academic rigor and high levels of structure, teachers may grow
                weary; however, when we remember the important “why” of
                classical Lutheran education, the daily “how” can become less
                burdensome, and we ﬁnd a growing number of excellent resources
                to support us in our task.
              </p>
            </div>
            <div className="flex flex-col w-full lg:w-1/2">
              <p className="text-gray-600 mb-2">
                Parents and teachers can take heart. Remember that God Himself
                works through us, in spite of our weaknesses, to accomplish His
                good purposes in our children. Again, Dr. Veith:
              </p>
              <p className="italic text-gray-500 mb-2">
                God has chosen to work through human beings, who, in their
                different capacities and according to their different talents,
                serve each other. . . .The ability to read God&apos;s Word is an
                inexpressibly precious blessing, but reading is an ability that
                did not spring fully formed in our young minds. It required the
                vocation of teachers. . . .By virtue of our creation, our
                purpose in life is to do good works, which God Himself
                &apos;prepared&apos; for us to do. We are &apos;God&apos;s workmanship,&apos; which means
                that God is at work in us to do the works He intends.
              </p>
              <p className="ml-4 text-gray-600 italic">
                - (Veith, 2002, pp.14, 38)
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default WhatIsClassicalEducation;
