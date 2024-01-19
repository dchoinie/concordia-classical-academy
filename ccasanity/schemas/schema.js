// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    {
      title: "Staff Member",
      name: "staffMember",
      type: "document",
      fields: [
        {
          title: "Title",
          name: "title",
          type: "string",
          options: {
            list: [
              { title: "Pr", value: "Pr" },
              { title: "Mr", value: "Mr" },
              { title: "Mrs", value: "Mrs" },
              { title: "Ms", value: "Ms" },
            ],
            layout: "radio",
          },
        },
        {
          title: "Name",
          name: "name",
          type: "string",
        },
        {
          title: "Position",
          name: "position",
          type: "string",
        },
        {
          title: "Email",
          name: "email",
          type: "string",
        },
        {
          name: "phone",
          title: "Phone",
          type: "string",
        },
        {
          title: "Headshot",
          name: "headshot",
          type: "image",
        },
        {
          name: "order",
          title: "Order",
          type: "number",
        },
      ],
    },
    {
      title: "Event",
      name: "event",
      type: "document",
      fields: [
        {
          title: "Event Name",
          name: "name",
          type: "string",
        },
        {
          title: "Start Date & Time",
          name: "startDate",
          type: "datetime",
        },
        {
          title: "End Date & Time",
          name: "endDate",
          type: "datetime",
        },
        {
          name: "location",
          title: "Location",
          type: "string",
        },
        {
          title: "Event Details",
          name: "details",
          type: "array",
          of: [
            {
              type: "block",
              marks: {
                annotations: [
                  {
                    name: "link",
                    type: "object",
                    title: "Link",
                    fields: [
                      {
                        name: "href",
                        type: "url",
                        title: "URL",
                      },
                      {
                        title: "Open in new tab",
                        name: "blank",
                        type: "boolean",
                      },
                    ],
                  },
                ],
              },
            },
          ],
        },
        {
          title: "Event Image",
          name: "image",
          type: "image",
        },
        {
          title: "Slug",
          name: "slug",
          type: "slug",
          options: {
            source: "name",
            maxLength: 200,
            slugify: (input) =>
              input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
          },
        },
      ],
    },
    {
      title: "Sub Link",
      name: "subLink",
      type: "object",
      fields: [
        { name: "label", type: "string", title: "Label" },
        { name: "link", type: "string", title: "Link" },
        { name: "external", type: "boolean", title: "External" },
      ],
    },
    {
      title: "Navigation Item",
      name: "navItem",
      type: "document",
      fields: [
        {
          title: "Label",
          name: "label",
          type: "string",
        },
        {
          title: "Link",
          name: "link",
          type: "string",
        },
        {
          title: "Order",
          name: "order",
          type: "number",
        },
        {
          title: "External",
          name: "external",
          type: "boolean",
        },
        {
          title: "Sub Links",
          name: "subLinks",
          type: "array",
          of: [{ type: "subLink" }],
        },
      ],
    },
    {
      name: "tuitionFees",
      title: "Tuition Fees",
      type: "document",
      fields: [
        {
          name: "title",
          title: "Title",
          type: "string",
        },
        {
          name: "fee",
          title: "Fee",
          type: "number",
        },
        {
          name: "discount",
          title: "Discount",
          type: "number",
        },
        {
          name: "order",
          title: "Order",
          type: "number",
        },
      ],
    },
    {
      name: "adminFees",
      title: "Admin Fees",
      type: "document",
      fields: [
        {
          name: "title",
          title: "Title",
          type: "string",
        },
        {
          name: "fee",
          title: "Fee",
          type: "string",
        },
      ],
    },
    {
      name: "supplyList",
      title: "Supply List",
      type: "document",
      fields: [
        {
          name: "grade",
          title: "Grade",
          type: "string",
        },
        {
          name: "order",
          title: "Order",
          type: "number",
        },
        {
          title: "Content",
          name: "content",
          type: "array",
          of: [{ type: "block" }],
        },
      ],
    },
    {
      name: "resources",
      title: "Resources",
      type: "document",
      fields: [
        {
          name: "title",
          title: "Title",
          type: "string",
        },
        {
          name: "link",
          title: "Link",
          type: "string",
        },
        {
          name: "category",
          title: "Category",
          type: "string",
          options: {
            list: [
              {
                title: "Lutheran",
                value: "lutheran",
              },
              {
                title: "Educational",
                value: "educational",
              },
            ],
          },
        },
        {
          name: "image",
          title: "Image",
          type: "image",
        },
      ],
    },
    {
      name: "handbook",
      title: "Handbook",
      type: "document",
      fields: [
        {
          name: "section",
          title: "Section",
          type: "string",
        },
        {
          name: "description",
          title: "Description",
          type: "text",
        },
        {
          name: "extraContent",
          title: "Extra Content",
          type: "array",
          of: [{ type: "block" }],
        },
      ],
    },
    {
      name: "mission",
      title: "Mission",
      type: "document",
      fields: [
        {
          name: "missionStatement",
          title: "Mission Statement",
          type: "text",
        },
      ],
    },
    {
      name: "jobListing",
      title: "Job Listing",
      type: "document",
      fields: [
        {
          name: "position",
          title: "Position",
          type: "string",
        },
        {
          name: "postedDate",
          title: "Posted Date",
          type: "date",
        },
      ],
    },
    {
      name: "specialAlert",
      title: "Special Alert",
      type: "document",
      fields: [
        {
          name: "message",
          title: "Message",
          type: "array",
          of: [
            {
              type: "block",
              marks: {
                annotations: [
                  {
                    name: "link",
                    type: "object",
                    title: "Link",
                    fields: [
                      {
                        name: "href",
                        type: "url",
                        title: "URL",
                      },
                      {
                        title: "Open in new tab",
                        name: "blank",
                        type: "boolean",
                      },
                    ],
                  },
                ],
              },
            },
          ],
        },
        {
          name: "active",
          title: "Active",
          type: "boolean",
        },
      ],
    },
    {
      name: "clubs",
      title: "Clubs",
      type: "document",
      fields: [
        {
          name: "clubName",
          title: "Club Name",
          type: "string",
        },
        {
          name: "ages",
          title: "Ages",
          type: "string",
        },
        {
          name: "meetingDays",
          title: "Meeting Days",
          type: "string",
        },
        {
          name: "startTime",
          title: "Start Time",
          type: "string",
        },
        {
          name: "endTime",
          title: "End Time",
          type: "string",
        },
        {
          name: "details",
          title: "Details",
          type: "text",
        },
        {
          name: "image",
          title: "Image",
          type: "image",
        },
      ],
    },
    {
      name: "lunch",
      title: "Lunch",
      type: "document",
      fields: [
        {
          name: "title",
          title: "Title",
          type: "string",
        },
        {
          name: "date",
          title: "Date",
          type: "date",
          options: {
            dateFormat: "MMM-YYYY",
          },
        },
        {
          name: "menuImage",
          title: "Menu Image",
          type: "file",
        },
      ],
    },
  ]),
});
