/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
module.exports = function getTimeForEducation(
    focus = 'family', 
    knowsProgramming = true,
    config = {family: 4}
    ) {
      const jsTime = 800;
      const basicsTime = 500;

      let baseTime = knowsProgramming ? jsTime : basicsTime + jsTime;
      let factor = config[focus];
      let weeksCount = Math.ceil(baseTime / factor);

      return weeksCount;
  };
  