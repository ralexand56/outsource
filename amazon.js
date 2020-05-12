function popularNFeatures(
  numFeatures = 6,
  topFeatures = 2,
  possibleFeatures = [
    "storage",
    "battery",
    "hover",
    "alexa",
    "waterproof",
    "solar",
  ],
  numFeatureRequests = 7,
  featureRequests = [
    "I wish my Kindle had even more storage",
    "I wish the battery life on my Kindle lasted two years",
    "I read in the bath and would enjoy a waterproof Kindle",
    "Waterproof and increased battery are my top two requests",
    "I want to take my Kindle into the shower. Waterproof please waterproof",
    "It would be neat if my Kindle charged in the sun via solar power",
    "How cool would it be if my Kindle charged in the sun via solar power",
  ]
) {
  let output = [];
  let outputHash = {};

  for (let i = 0; i < numFeatures; i++) {
    for (let j = 0; j < possibleFeatures.length; j++) {
      const currFeatureRequest = featureRequests[i];
      const currPossibleFeature = possibleFeatures[j];

      if (checkForFeature(currFeatureRequest, currPossibleFeature)) {
        if (!outputHash[currPossibleFeature]) {
          outputHash[currPossibleFeature] = 1;
        } else {
          outputHash[currPossibleFeature] += 1;
        }
      }
    }
  }

  for (item in outputHash) {
    console.log(item);
    output.push({ feature: item, count: outputHash[item] });
  }

  output = output.sort(
    (a, b) => b.count - a.count || a.feature.localeCompare(b.feature)
  );

  return output.splice(0, topFeatures).map((x) => x.feature);
}

const checkForFeature = (statement = "", feature = "") =>
  statement.toLowerCase().split(" ").indexOf(feature.toLowerCase()) > -1;

console.log(popularNFeatures());
console.log(checkForFeature("I wish my Kindle had even more storage", "kindl"));
