let elizabethSanger = {

    // Congressional district
    congressionalDistrict: {
        rep: "Elizabeth Sanger",
        districtNu: "Representative for Tennessee's 5th congressional district Since Jan 7, 2003."
    },

    // Platform statement
    elizSangerStatement: {
      taxes: "Cutting taxes for the middle and lower classes and raising them for the upper class",
      jobs: "Expanding the job market, but in aiding those who are looking for work while they seek to improve their situation.",
      infrastructure: "",
      healthcare: "Health Care should be accessible and affordable and be high quality to all.",
      crimeandenforcement: "",
    }
}
    
    // Donations
    donations: {url: "https://www.paypal.com/us/home"}

    // Calendar 
    const calendarEvents = Object.create({}, {
        month: {
            enumerable: true,
            writable: false,
            value: "April" 
        },
        date: {
            enumerable: true,
            writable: false,
            value: "17th" 
        },
        location: {
            enumerable: true,
            writable: false,
            value: "Five Points Pizza" 
        },
        time: {
            enumerable: true,
            writable: false,
            value: "4:30pm" 
        },
    })

    // Volunteer Info
    const volunteer = Object.create({}, {
        name: {
            enumerable: true,
            value: "Jessica Swift",
        },
        address: {
            enumerable: true,
            value: "123 Five Points Dr.",
        },
        phonenumber: {
            enumerable: true,
            value: 123-456-7890,
        },
        availability: {
            enumerable: true,
            value: "M-S",
        },
        activies: {
            enumerable: true,
            value: "",
        }
    })

    // // Bio
    // bio: "",

     // Images
     const images = Object.create ({}, {
        headshot: {
            writable: true,
            value: "",
        },
        family: {
            writable: true,
            value: "",
        },
        constituents: {
            writable: true,
            value: "",
        }
    })

    // Mission statement
    // mission: "",

    // // Registering to vote 
    // vote: "",

console.log(elizabethSanger);