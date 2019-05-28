// 1. get sorted times
// 2. create merged times array
// 3. compare a)merged time with b)current time
// 3a. if can merge (b.starTime <= a.endTime) - merge it (b.startTime, max(endTimes))
// 3b. else - push current time

const mergeMeetingTimes = meetingTimes => {
  const sortedTimes = meetingTimes.sort((a, b) => a.startTime - b.startTime);

  const mergedTimes = [sortedTimes[0]];

  for (let i = 1; i < sortedTimes.length; i++) {
    const latestMergedTime = mergedTimes[mergedTimes.length - 1];
    const currentTime = sortedTimes[i];

    if (currentTime.startTime <= latestMergedTime.endTime) {
      latestMergedTime.endTime = Math.max(
        latestMergedTime.endTime,
        currentTime.endTime
      );
    } else {
      mergedTimes.push(currentTime);
    }
  }

  return mergedTimes;
};

module.exports = {
  mergeMeetingTimes,
};
