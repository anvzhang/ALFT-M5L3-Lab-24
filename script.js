// Initial Lineup
console.log("Initial Lineup");

let musicFestivalLineup = [];

musicFestivalLineup.push('Performer 1', 'Performer 2', 'Performer 3', 'Performer 4', 'Performer 5', 'Performer 6', 'Performer 7', 'Performer 8', 'Performer 9', 'Performer 10');

console.log([...musicFestivalLineup]);

// Modifiying the Lineup
console.log("Modifiying the Lineup");

console.log(musicFestivalLineup.length);

musicFestivalLineup.pop();
console.log([...musicFestivalLineup]);

musicFestivalLineup.unshift("Surpise Performer");
console.log([...musicFestivalLineup]);

musicFestivalLineup.shift();
console.log([...musicFestivalLineup]);

// Headliner Announcement
console.log("Headliner Annoucement");

let headliners = [];
headliners.push(musicFestivalLineup[4], musicFestivalLineup[8], musicFestivalLineup[7]);

console.log([...headliners]);

console.log(headliners[2] + " at index " + musicFestivalLineup.indexOf(headliners[2]));

console.log(musicFestivalLineup.includes("Performer 37"));

let firstSetList = musicFestivalLineup.slice(0, 4);
console.log([...firstSetList]);

// Final Touches
console.log("Final Touches");

let festivalSchedule = headliners.concat(firstSetList);
console.log([...festivalSchedule]);

let scheduleString = festivalSchedule.join(", ");
console.log(scheduleString)