const dummyRosters = [
    {
        gender: "boys",
        team: "varsity",
        year: 2022,
        players: [
            {
                name: "Jake Meyers",
                number: "23",
                position: "forward",
                grade: "junior",
            },
            {
                name: "Jake Meyers",
                number: "23",
                position: "forward",
                grade: "junior",
            },
            {
                name: "Jake Meyers",
                number: "23",
                position: "forward",
                grade: "junior",
            },
            {
                name: "Jake Meyers",
                number: "23",
                position: "forward",
                grade: "junior",
            }
        ],
    },
    {
        gender: "girls",
        team: "jv",
        year: 2021,
        players: [
            {
                name: "Ashley Snow",
                number: "2",
                position: "midfield",
                grade: "freshman",
            },
            {
                name: "Ashley Snow",
                number: "2",
                position: "forward",
                grade: "freshman",
            },
            {
                name: "Ashley Snow",
                number: "2",
                position: "forward",
                grade: "freshman",
            },
            {
                name: "Ashley Snow",
                number: "2",
                position: "forward",
                grade: "freshman",
            }
        ],
    }
]

// export function getFeaturedEvents() {
//     return DUMMY_EVENTS.filter((event) => event.isFeatured);
//   }
  
  export function getAllRosters() {
    return dummyRosters;
  }
  
//   export function getFilteredEvents(dateFilter) {
//     const { year, month } = dateFilter;
  
//     let filteredEvents = DUMMY_EVENTS.filter((event) => {
//       const eventDate = new Date(event.date);
//       return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
//     });
  
//     return filteredEvents;
//   }
  
//   export function getEventById(id) {
//     return DUMMY_EVENTS.find((event) => event.id === id);
//   }