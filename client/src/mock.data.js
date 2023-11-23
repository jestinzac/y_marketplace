const mockData = [
  {
    data: {
      businesses: [
        {
          id: 5,
          username: "mario.bros",
          classifications: [1],
          locations_served: [1],
          jobs: [
            {
              id: 2,
              tier: "Plumbers",
              headline: "Leaky tap needs fixing",
              description:
                "The tap in my kitchen is dripping all of the time, please fix it.",
              date_added: "2020-11-05T15:47:54Z",
              area: "Brooklyn, NYC",
            },
          ],
        },
      ],
    },
  },
  {
    data: {
      jobs: [
        {
          id: 1,
          classification: 1,
          location: 1,
          headline: "My toilet won't flush",
          description:
            "There is a problem with my toilet and I need someone to fix it.",
          date_added: "2023-11-03T12:58:13.984Z",
        },
      ],
    },
  },
  {
    data: {
      classifications: [
        {
          id: 1,
          name: "Plumbers",
        },
      ],
    },
  },
  {
    data: {
      locations: [
        {
          id: 1,
          name: "Brooklyn, NYC",
        },
      ],
    },
  },
];

export default mockData;